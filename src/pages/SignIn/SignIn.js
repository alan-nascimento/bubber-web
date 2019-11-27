import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '~/components';

export default function SignIn() {
  return (
    <>
      <form>
        <h1>Acesse sua conta</h1>
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <Button type="submit">Entrar</Button>
        <div>
          Ainda não possui uma conta? <Link to="/register">Cadastre-se</Link>
        </div>
      </form>
    </>
  );
}
