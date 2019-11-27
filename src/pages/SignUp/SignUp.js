import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '~/components';

export default function SignUp() {
  const handleSubmit = e => e.preventDefault();

  return (
    <>
      <form>
        <h1>Crie uma conta</h1>
        <input type="text" placeholder="Nome completo" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <input type="password" placeholder="Confirme sua senha" />
        <input type="date" placeholder="Data de nascimento" />
        <input type="text" placeholder="Endereço" />
        <input type="text" placeholder="Número" />
        <input type="text" placeholder="Complemento" />
        <input type="text" placeholder="CEP" />
        <input type="text" placeholder="Cidade" />
        <input type="text" placeholder="Estado" />
        <Button type="submit" onClick={e => handleSubmit(e)}>
          Criar conta
        </Button>
        <div>
          Já possui uma conta? <Link to="/">Acesse sua conta</Link>
        </div>
      </form>
    </>
  );
}
