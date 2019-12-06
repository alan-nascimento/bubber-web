import { takeLatest, call, put, all } from 'redux-saga/effects';
import { notification } from 'antd';

import api from '~/services/api';

import { createExcursionRequest, createExcursionFailure } from './actions';

const openNotification = message => {
  notification.info({
    message: 'Falha ao tentar criar excursão!',
    description: `${message}`,
    placement: 'topRight',
  });
};

export function* create({ payload }) {
  try {
    const {
      owner_id,
      title,
      departure_address,
      destiny_address,
      departure_date,
      return_date,
      vacancy_amount,
      transport_company,
      payment_types,
    } = payload;

    yield call(api.post, 'excursions', {
      owner_id,
      title,
      departure_address,
      destiny_address,
      departure_date,
      return_date,
      vacancy_amount,
      transport_company,
      payment_types,
    });
  } catch (err) {
    openNotification('Não foi possível criar a excursão.');
    yield put(createExcursionFailure());
  }
}

export default all([
  takeLatest('@excursion/CREATE_EXCURSION_REQUEST', createExcursionRequest),
]);
