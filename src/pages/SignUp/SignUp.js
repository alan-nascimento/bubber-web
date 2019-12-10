import React from 'react';
import { useDispatch } from 'react-redux';
import InputMask from 'react-input-mask';
import { Link } from 'react-router-dom';
import { Formik, Field, ErrorMessage } from 'formik';

import { Button } from '~/components';

import { signUpRequest } from '~/store/modules/auth/actions';

export default function SignUp() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{}}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = '*campo obrigatório';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'E-mail inválido';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        const {
          name,
          email,
          password,
          birthday,
          phone,
          address,
          number,
          complement,
          cep,
          city,
          state,
        } = values;

        setTimeout(() => {
          dispatch(
            signUpRequest(
              name,
              email,
              password,
              birthday,
              phone,
              address,
              number,
              complement,
              cep,
              city,
              state
            )
          );
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <h1>Crie uma conta</h1>
          <span>
            <ErrorMessage name="name" component="div" />
            <Field type="text" name="name" placeholder="Nome completo" />
            <ErrorMessage name="email" component="div" />
            <Field name="email" placeholder="E-mail" />
            <ErrorMessage name="password" component="div" />
            <Field type="password" name="password" placeholder="Senha" />
            <ErrorMessage name="birthday" component="div" />
            <InputMask
              mask="99/99/9999"
              maskChar={null}
              name="birthday"
              placeholder="Data de nascimento"
            >
              {inputChildren => <Field {...inputChildren} type="text" />}
            </InputMask>
            <ErrorMessage name="phone" component="div" />
            <InputMask
              mask="(99) 99999-9999"
              maskChar={null}
              name="phone"
              placeholder="Telefone"
            >
              {inputChildren => <Field {...inputChildren} type="text" />}
            </InputMask>
            <ErrorMessage name="address" component="div" />
            <Field type="text" name="address" placeholder="Endereço" />
            <ErrorMessage name="number" component="div" />
            <Field type="text" name="number" placeholder="Número" />
            <Field type="text" name="complement" placeholder="Complemento" />
            <ErrorMessage name="cep" component="div" />
            <InputMask mask="99999-999" name="cep" placeholder="CEP">
              {inputChildren => <input {...inputChildren} type="text" />}
            </InputMask>
            <Field type="text" name="city" placeholder="Cidade" />
            <Field type="text" name="state" placeholder="Estado" />
          </span>
          <Button background="primary" type="submit" disabled={isSubmitting}>
            Criar conta
          </Button>
          <div>
            Já possui uma conta? <Link to="/">Acesse sua conta</Link>
          </div>
        </form>
      )}
    </Formik>
  );
}
