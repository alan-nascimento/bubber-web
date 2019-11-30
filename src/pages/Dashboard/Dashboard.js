import React from 'react';

import { Menu, Excursion } from '~/components';

import { Container, Content } from './Dashboard.styles';

import api from '~/services/api';

export default function Dashboard() {
  api.get('');

  return (
    <Container>
      <section>
        <h1>Dashboard</h1>
        <Excursion />
      </section>
      <Content>
        <Menu />
      </Content>
    </Container>
  );
}
