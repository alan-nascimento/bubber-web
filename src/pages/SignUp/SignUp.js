import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMail, TiKeyOutline } from 'react-icons/all';

import { Button } from '~/components';

export default function SignUp() {
  return (
    <>
      <form action="">
        <input type="text" placeholder="Nome completo" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />

        <Button type="submit">Criar conta</Button>
        <Link to="/">Já tenho uma conta</Link>
      </form>
    </>
  );
}
