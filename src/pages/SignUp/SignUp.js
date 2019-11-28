import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { Link } from 'react-router-dom';

import { Button } from '~/components';

export default function SignUp() {
  const handleSubmit = e => e.preventDefault();
  const [value, setValue] = useState('');

  return (
    <>
      <form>
        <h1>Crie uma conta</h1>

        <input type="text" placeholder="Nome completo" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <input type="password" placeholder="Confirme sua senha" />
        <InputMask
          mask="99/99/9999"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="Data de nascimento"
        >
          {inputChildren => <input {...inputChildren} type="tel" />}
        </InputMask>

        <InputMask mask="(99) 99999-9999" placeholder="Telefone">
          {inputChildren => <input {...inputChildren} type="text" />}
        </InputMask>

        <input type="text" placeholder="Endereço" />

        <InputMask mask="99999" placeholder="Número">
          {inputChildren => <input {...inputChildren} type="text" />}
        </InputMask>

        <input type="text" placeholder="Complemento" />

        <InputMask mask="99999-999" placeholder="CEP">
          {inputChildren => <input {...inputChildren} type="text" />}
        </InputMask>
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
