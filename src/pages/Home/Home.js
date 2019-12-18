import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  FaBus,
  FaRegCreditCard,
  FiUsers,
  FaArrowCircleUp,
  FaArrowCircleDown,
  FaRegCalendarCheck,
  MdAttachMoney,
} from 'react-icons/all';
import { formatToBRL } from 'brazilian-values';
import { Bus } from '~/assets';

import { Menu, Excursion, ExcursionDetail, Maps, Button } from '~/components';
import Travel from '../../components/Travel/Travel';

import { formatDate } from '~/utils/date';

import { Container, Content, List } from './Home.styles';

import api from '~/services/api';

export default function Home() {
  const [excursionDetail, setExcursionDetail] = useState(false);
  const [travels, setTravels] = useState([]);
  const [excursions, setExcursions] = useState([]);
  const [excursion, setExcursion] = useState([]);
  const [showTravel, setShowTravel] = useState(false);
  const [showExcursions, setShowExcursions] = useState(true);
  const [showNext, setShowNext] = useState(false);

  const profile = useSelector(state => state.user.profile);

  useEffect(() => {
    getExcursions();
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
          setShowNext={setShowNext}
        />
        {showExcursions && (
          <List>
            {excursions.map(excursion => (
              <li key={excursion._id}>
                <div>
                  <img src={Bus} alt="Bus" stlye={{ minWidth: '200px' }} />
                </div>
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <h2 style={{ color: '#EA1D2C', fontWeight: 'bold' }}>
                    {excursion.title}
                  </h2>
                  <h3>Partida</h3>
                  <div>
                    <FaArrowCircleDown
                      color="#777"
                      size={12}
                      style={{ marginRight: '5px' }}
                    />
                    {excursion.departure.address}, {excursion.departure.number},{' '}
                    {excursion.departure.city} - {excursion.departure.state}
                  </div>
                  <div>
                    <FaRegCalendarCheck
                      color="#777"
                      size={12}
                      style={{ marginRight: '5px' }}
                    />
                    {formatDate(excursion.departure_date)}
                  </div>
                  <h3 style={{ marginTop: '10px' }}>Retorno</h3>
                  <div>
                    <FaArrowCircleUp
                      color="#777"
                      size={12}
                      style={{ marginRight: '5px' }}
                    />
                    {excursion.destination.address},{' '}
                    {excursion.destination.number}, {excursion.destination.city}{' '}
                    - {excursion.destination.state}
                  </div>
                  <div>
                    <FaRegCalendarCheck
                      color="#777"
                      size={12}
                      style={{ marginRight: '5px' }}
                    />
                    {formatDate(excursion.destination_date)}
                  </div>
                  <h3 style={{ marginTop: '10px' }}>Sobre a viagem</h3>
                  <div>
                    <FiUsers
                      color="#777"
                      size={14}
                      style={{ marginRight: '5px' }}
                    />
                    {excursion.vacancies - excursion.pending_passengers.length}{' '}
                    vagas disponíveis
                  </div>

                  <div>
                    <MdAttachMoney
                      color="#777"
                      size={14}
                      style={{ marginRight: '5px' }}
                    />
                    {formatToBRL(excursion.unitary_value)} por pessoa
                  </div>
                  <div>
                    <FaRegCreditCard
                      color="#777"
                      size={14}
                      style={{ marginRight: '5px' }}
                    />
                    {excursion.payment_types[0] === 'credit_card' &&
                      'Cartão de Crédito'}
                  </div>
                  <div>
                    <FaBus
                      color="#777"
                      size={14}
                      style={{ marginRight: '5px' }}
                    />
                    {excursion.transport_company}
                  </div>
                  <Link
                    key={excursion._id}
                    style={{ alignSelf: 'flex-end' }}
                    to={`/travelDetail/${excursion._id}`}
                  >
                    <Button background="primary">
                      Ver detalhes da excursão
                    </Button>
                  </Link>
                </div>
              </li>
            ))}
          </List>
        )}
        {showTravel && (
          <List>
            {travels.map(excursion => (
              <li key={excursion._id}>
                <div>
                  <img src={Bus} alt="Bus" stlye={{ minWidth: '200px' }} />
                </div>
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <h2 style={{ color: '#EA1D2C', fontWeight: 'bold' }}>
                    {excursion.title}
                  </h2>
                  <h3>Partida</h3>
                  <div>
                    <FaArrowCircleDown
                      color="#777"
                      size={12}
                      style={{ marginRight: '5px' }}
                    />
                    {excursion.departure.address}, {excursion.departure.number},{' '}
                    {excursion.departure.city} - {excursion.departure.state}
                  </div>
                  <div>
                    <FaRegCalendarCheck
                      color="#777"
                      size={12}
                      style={{ marginRight: '5px' }}
                    />
                    {formatDate(excursion.departure_date)}
                  </div>
                  <h3 style={{ marginTop: '10px' }}>Retorno</h3>
                  <div>
                    <FaArrowCircleUp
                      color="#777"
                      size={12}
                      style={{ marginRight: '5px' }}
                    />
                    {excursion.destination.address},{' '}
                    {excursion.destination.number}, {excursion.destination.city}{' '}
                    - {excursion.destination.state}
                  </div>
                  <div>
                    <FaRegCalendarCheck
                      color="#777"
                      size={12}
                      style={{ marginRight: '5px' }}
                    />
                    {formatDate(excursion.destination_date)}
                  </div>
                  <h3 style={{ marginTop: '10px' }}>Sobre a viagem</h3>
                  <div>
                    <FiUsers
                      color="#777"
                      size={14}
                      style={{ marginRight: '5px' }}
                    />
                    {excursion.vacancies - excursion.pending_passengers.length}{' '}
                    vagas disponíveis
                  </div>

                  <div>
                    <MdAttachMoney
                      color="#777"
                      size={14}
                      style={{ marginRight: '5px' }}
                    />
                    {formatToBRL(excursion.unitary_value)} por pessoa
                  </div>
                  <div>
                    <FaRegCreditCard
                      color="#777"
                      size={14}
                      style={{ marginRight: '5px' }}
                    />
                    {excursion.payment_types[0] === 'credit_card' &&
                      'Cartão de Crédito'}
                  </div>
                  <div>
                    <FaBus
                      color="#777"
                      size={14}
                      style={{ marginRight: '5px' }}
                    />
                    {excursion.transport_company}
                  </div>
                  <Link
                    key={excursion._id}
                    to={`/travelDetail/${excursion._id}`}
                    style={{ alignSelf: 'flex-end' }}
                  >
                    <Button background="primary">Ingressar nesta viagem</Button>
                  </Link>
                </div>
              </li>
            ))}
          </List>
        )}
      </Content>
    </Container>
  );
}
