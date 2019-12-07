import React, { useState } from 'react';
import { Icon, Button } from 'antd';

import { Menu } from './Menu.styles';

export default function SideMenu({ setShowExcursions, setShowTravel }) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => setCollapsed(!collapsed);

  const toggleMenu = () => ({ key }) => {
    if (key === '1') {
      setShowExcursions(true);
      setShowTravel(false);
      return;
    }

    setShowExcursions(false);
    setShowTravel(true);
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
          <span>Minhas viagens</span>
        </Menu.Item>
      </Menu>
    </>
  );
}
