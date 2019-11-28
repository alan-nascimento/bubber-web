import { takeLatest, call, put, all } from 'redux-saga/effects';
import { notification } from 'antd';

import api from '~/services/api';
import history from '~/routes/history';

import { signInSuccess, signFailure } from './actions';

const openNotification = message => {
  notification.info({
    message: 'Falha ao tentar logar!',
    description: `${message}`,
    placement: 'topRight',
  });
};

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (err) {
    openNotification('Usuário ou senha inválidos.');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
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
    } = payload;

    yield call(api.post, 'users', {
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
    });

    history.push('/');
  } catch (err) {
    openNotification('Não foi possível realizar o cadastro do usuário.');
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
