import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signInRequest } from '~/store/modules/auth/actions';

import { Button } from '~/components';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleEmailChange = e => setEmail(e.target.value);
  const handlePasswordChange = e => setPassword(e.target.value);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <h1>Acesse sua conta</h1>
        <input
          type="email"
          placeholder="E-mail"
          onChange={e => handleEmailChange(e)}
          value={email}
        />
        <input
          type="password"
          onChange={e => handlePasswordChange(e)}
          value={password}
          placeholder="Senha"
        />
        <Button type="submit">Entrar</Button>
        <div>
          Ainda não possui uma conta? <Link to="/register">Cadastre-se</Link>
        </div>
      </form>
    </>
  );
}
