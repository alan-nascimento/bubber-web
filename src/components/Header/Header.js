import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Logo } from '~/assets';

import { Container, Content, Profile } from './Header.styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={Logo} alt="Bubber" />
          <Link to="/home">Bubber</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt={profile.name}
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
