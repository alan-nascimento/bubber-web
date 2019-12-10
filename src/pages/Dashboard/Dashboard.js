import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Menu, Excursion, Button, Maps } from '~/components';

import { Container, Content, List } from './Dashboard.styles';

import api from '~/services/api';

export default function Dashboard() {
  const [travels, setTravels] = useState([]);
  const [excursions, setExcursions] = useState([]);
  const [showTravel, setShowTravel] = useState(false);
  const [showExcursions, setShowExcursions] = useState(true);

  const profile = useSelector(state => state.user.profile);

  const getExcursions = async () => {
    const { data } = await api.get('excursions');

    setTravels(data.filter(excursion => excursion.owner_id !== profile.id));
    setExcursions(data.filter(excursion => excursion.owner_id === profile.id));
  };

  useEffect(() => {
    getExcursions();
  });

  return (
    <Container>
      <section>
        <h1>{showExcursions ? 'Minhas excursões' : 'Minhas viagens'}</h1>
        <Excursion />
      </section>
      <Content>
        <Menu
          setShowExcursions={setShowExcursions}
          setShowTravel={setShowTravel}
        />
        {showExcursions && (
          <List>
            {excursions.map(excursion => (
              <li key={excursion._id}>
                <h2>{excursion.title}</h2>
                <div>
                  <strong>Endereço de partida</strong>
                  {excursion.departure_address}
                </div>
                <div>
                  <strong>Endereço de destino</strong>
                  {excursion.destiny_address}
                </div>
                {/* {/* <div>{excursion.return_date || new Date()}</div> */}
                {/* <div>{excursion.departure_date || new Date()}</div> */}
                <div>
                  <strong>Quantidade de vagas</strong>
                  {excursion.vacancy_amount}
                </div>
                <div>
                  <strong>Formas de pagamento</strong>
                  {excursion.payment_types}
                </div>
                <div>
                  <strong>Companhia de transporte</strong>
                  {excursion.transport_company}
                </div>
              </li>
            ))}
          </List>
        )}
        {showTravel && (
          <List>
            {travels.map(excursion => (
              <li key={excursion._id}>
                <h2>{excursion.title}</h2>
                <div>
                  <strong>Endereço de partida</strong>
                  {excursion.departure_address}
                </div>
                <div>
                  <strong>Endereço de destino</strong>
                  {excursion.destiny_address}
                </div>
                {/* {/* <div>{excursion.return_date || new Date()}</div> */}
                {/* <div>{excursion.departure_date || new Date()}</div> */}
                <div>
                  <strong>Quantidade de vagas</strong>
                  {excursion.vacancy_amount}
                </div>
                <div>
                  <strong>Formas de pagamento</strong>
                  {excursion.payment_types}
                </div>
                <div>
                  <strong>Companhia de transporte</strong>
                  {excursion.transport_company}
                </div>
                <Button>Ingressar</Button>
              </li>
            ))}
          </List>
        )}
      </Content>
      <Maps
        googleMapURL={
          'https://maps.googleapis.com/maps/api/js?key=AIzaSyCmJhJzAtPxAmtbTUeIexNWrC0Q1d8V_bo&v=3.exp&libraries=geometry,drawing,places'
        }
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
