import React, { useEffect, useState } from 'react';

import { Menu, Excursion } from '~/components';

import { Container, Content } from './Dashboard.styles';

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
        <ul>
          {excursions.map(excursion => (
            <li key={excursion._id}>
              <h2>{excursion.title}</h2>
              <div>{excursion.address_start}</div>
            </li>
          ))}
        </ul>
      </Content>
    </Container>
  );
}
