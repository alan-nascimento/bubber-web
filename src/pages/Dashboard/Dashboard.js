import React, { useEffect, useState } from 'react';

import { Menu, Excursion } from '~/components';

import { Container, Content, List } from './Dashboard.styles';

import api from '~/services/api';

export default function Dashboard() {
  const [excursions, setExcursions] = useState([]);

  const getExcursions = async () => {
    const { data } = await api.get('excursions');
    setExcursions(data);
  };

  useEffect(() => {
    getExcursions();
  }, []);

  return (
    <Container>
      <section>
        <h1>Dashboard</h1>
        <Excursion />
      </section>
      <Content>
        <Menu />
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
      </Content>
    </Container>
  );
}
