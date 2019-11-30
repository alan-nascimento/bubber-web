import React from 'react';
import { Link } from 'react-router-dom';

import { Logo } from '~/assets';

import { Container, Content, Profile } from './Header.styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={Logo} alt="Bubber" />
          <Link to="/dashboard">Bubber</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Alan Nascimento</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Alan"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
