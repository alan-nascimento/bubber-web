import React from 'react';

import { Menu } from '~/components';

import api from '~/services/api';

export default function Dashboard() {
  api.get('');

  return (
    <>
      <h1>Dashboard</h1>
      <Menu />
    </>
  );
}
