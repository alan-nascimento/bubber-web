import React, { useState } from 'react';
import { Icon, Button } from 'antd';

import { Menu } from './Menu.styles';

export default function SideMenu() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => setCollapsed(!collapsed);

  return (
    <>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
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
