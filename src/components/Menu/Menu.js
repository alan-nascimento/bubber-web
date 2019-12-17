import React, { useState } from 'react';
import { Icon, Button } from 'antd';

import { Menu } from './Menu.styles';

export default function SideMenu({
  setShowExcursions,
  setShowTravel,
  setShowNext,
}) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => setCollapsed(!collapsed);

  const toggleMenu = () => ({ key }) => {
    if (key === '1') {
      setShowExcursions(true);
      setShowTravel(false);
      setShowNext(false);
      return;
    }

    if (key === '2') {
      setShowExcursions(false);
      setShowTravel(true);
      setShowNext(false);
    }

    if (key === '3') {
      setShowExcursions(false);
      setShowTravel(false);
      setShowNext(true);
    }

    if (key === '4') {
      setShowExcursions(false);
      setShowTravel(false);
      setShowNext(false);
    }
  };

  return (
    <>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        onSelect={toggleMenu()}
      >
        <Button
          type="primary"
          onClick={() => toggleCollapsed()}
          style={{ marginBottom: 16 }}
        >
          <Icon type={collapsed ? 'right' : 'left'} />
        </Button>
        <Menu.Item key="1">
          <Icon type="schedule" />
          <span>Minhas excursões</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="car" />
          <span>Novas viagens</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="car" />
          <span>Proximas viagens</span>
        </Menu.Item>
        <Menu.Item key="4">
          <Icon type="car" />
          <span>Viagens realizadas</span>
        </Menu.Item>
      </Menu>
    </>
  );
}
