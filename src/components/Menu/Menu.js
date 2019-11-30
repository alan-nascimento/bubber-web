import React, { useState } from 'react';
import { Icon, Button } from 'antd';

import { Menu } from './Menu.styles';

export default function SideMenu() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => setCollapsed(!collapsed);

  return (
    <div style={{ width: 256 }}>
      <Button
        type="primary"
        onClick={() => toggleCollapsed()}
        style={{ marginBottom: 16 }}
      >
        <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
      >
        <Menu.Item key="1">
          <Icon type="pie-chart" />
          <span>Minhas excursões</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="desktop" />
          <span>Minhas viagens</span>
        </Menu.Item>
      </Menu>
    </div>
  );
}
