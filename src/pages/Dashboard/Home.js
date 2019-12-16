import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Menu, Excursion, ExcursionDetail, Button, Maps } from '~/components';
import { Bus } from '~/assets';
import Travel from '../../components/Travel/Travel';

import { Container, Content, List } from './Home.styles';

import api from '~/services/api';

export default function Home() {
  const [excursionDetail, setExcursionDetail] = useState(false);
  const [travels, setTravels] = useState([]);
  const [excursions, setExcursions] = useState([]);
  const [excursion, setExcursion] = useState([]);
  const [showTravel, setShowTravel] = useState(false);
  const [showExcursions, setShowExcursions] = useState(true);

  const profile = useSelector(state => state.user.profile);

  useEffect(() => {
    getExcursions();
    console.warn('props', excursions);
  }, []);

  const getExcursions = async () => {
    const { data } = await api.get('excursions');

    setTravels(
      data.filter(excursion => excursion.owner_id[0] !== profile.id).reverse()
    );
    setExcursions(
      data.filter(excursion => excursion.owner_id[0] === profile.id).reverse()
    );
  };

  const handleVisible = bool => setExcursionDetail(bool);

  return (
    <Container>
      <section>
        <h1>{showExcursions ? 'Minhas excursões' : 'Minhas viagens'}</h1>
        <Excursion getExcursions={getExcursions} />
      </section>
      <Content>
        <ExcursionDetail
          visible={excursionDetail}
          handleVisible={handleVisible}
          data={excursion}
        />
        <Menu
          setShowExcursions={setShowExcursions}
          setShowTravel={setShowTravel}
        />
        {showExcursions && (
          <List>
            {excursions.map(excursion => (
              <Link key={excursion._id} to={`/travelDetail/${excursion._id}`}>
                <Travel
                  title={excursion.title}
                  destiny={excursion.destiny}
                  image_bg={excursion.image_bg}
                  date_start={excursion.departure_date}
                  place_start={excursion.departure_address}
                  date_end={excursion.return_date}
                  place_end={excursion.departure_name}
                  togo={excursion.togo}
                />
                <Button
                  background="primary-outline"
                  onClick={() => {
                    setExcursion(excursion);
                    setExcursionDetail(true);
                  }}
                >
                  Ver detalhes da excursão
                </Button>
              </Link>
            ))}
          </List>
        )}
        {showTravel && (
          <List>
            {travels.map(excursion => (
              <Link key={excursion._id} to={`/travelDetail/${excursion._id}`}>
                <Travel
                  title={excursion.title}
                  destiny={excursion.destiny}
                  image_bg={excursion.image_bg}
                  date_start={excursion.departure_date}
                  place_start={excursion.departure_address}
                  date_end={excursion.return_date}
                  place_end={excursion.departure_name}
                  togo={excursion.togo}
                />
                <Button background="primary">Ingressar</Button>
              </Link>
            ))}
            ))}
          </List>
        )}
      </Content>
      <Maps
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCmJhJzAtPxAmtbTUeIexNWrC0Q1d8V_bo&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `350px`, width: '100%' }} />}
        mapElement={<div style={{ height: `100%`, width: '100%' }} />}
        dfLatC={-23.561417}
        dfLngC={-46.660234}
        mpLatC={-23.5617714}
        mpLngC={-46.6601914}
      />
    </Container>
  );
}