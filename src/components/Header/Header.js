import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Logo } from '~/assets';
import { signOut } from '~/store/modules/auth/actions';

import { Container, Content, Profile } from './Header.styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={Logo} alt="excurse" />
          <Link to="/home">Excurse</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <a href onClick={handleSignOut}>
                Sair
              </a>
            </div>
            <img
              src="https://api.adorable.io/avatars/40/abott@adorable.png"
              alt={profile.name}
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
