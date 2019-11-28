import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik, ErrorMessage, Field } from 'formik';

import { signInRequest } from '~/store/modules/auth/actions';

import { Button, Error } from '~/components';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
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
        setTimeout(() => {
          dispatch(signInRequest(values.email, values.password));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <h1>Acesse sua conta</h1>
          <span>
            <ErrorMessage name="email" component="div" />
            <Field name="email" placeholder="E-mail" />
          </span>
          <span>
            <ErrorMessage name="password" component="div" />
            <Field type="password" name="password" placeholder="Senha" />
          </span>
          <Button type="submit" disabled={isSubmitting}>
            {loading ? 'Carregando...' : 'Entrar'}
          </Button>
          <div>
            Ainda não possui uma conta? <Link to="/register">Cadastre-se</Link>
          </div>
        </form>
      )}
    </Formik>
  );
}
