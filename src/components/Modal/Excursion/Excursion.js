import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Formik, Field } from 'formik';
import InputMask from 'react-input-mask';

import { Button } from '~/components';
import api from '~/services/api';

import { Modal, Content } from './Excursion.styles';

export default function Excursion() {
  const [visible, setVisible] = useState(false);

  const profile = useSelector(state => state.user.profile);

  const createExcursion = async (
    title,
    departure_address,
    destiny_address,
    departure_date,
    return_date,
    vacancy_amount,
    transport_company,
    payment_types
  ) => {
    const { data } = await api.post('excursions', {
      owner_id: profile.id,
      title,
      departure_address,
      destiny_address,
      departure_date,
      return_date,
      vacancy_amount,
      transport_company,
      payment_types,
    });

    console.log(data);
    return data;
  };

  const showModal = () => setVisible(true);

  const handleOk = () => setVisible(false);

  const handleCancel = () => setVisible(false);

  return (
    <div>
      <Button onClick={showModal}>Adicionar excursão</Button>
      <Modal
        title="Criar uma excursão"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Content>
          <Formik
            initialValues={{
              owner_id: '123456',
              title: '',
              departure_address: '',
              destiny_address: '',
              vacancy_amount: '',
              transport_company: '',
              payment_types: '',
            }}
            onSubmit={(values, { setSubmitting }) => {
              const {
                title,
                departure_address,
                destiny_address,
                departure_date,
                return_date,
                vacancy_amount,
                transport_company,
                payment_types,
              } = values;

              setTimeout(() => {
                createExcursion(
                  title,
                  departure_address,
                  destiny_address,
                  new Date(departure_date),
                  new Date(return_date),
                  vacancy_amount,
                  transport_company,
                  payment_types
                );
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ handleSubmit, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <span>
                  <Field
                    type="text"
                    name="title"
                    placeholder="Nome da excursão"
                  />
                  <Field
                    name="departure_address"
                    placeholder="Endereço de partida"
                  />
                  <Field
                    name="destiny_address"
                    placeholder="Endereço de destino"
                  />
                  <InputMask
                    mask="99/99/9999"
                    maskChar={null}
                    placeholder="Data de partida"
                  >
                    {inputChildren => (
                      <Field
                        {...inputChildren}
                        name="departure_date"
                        type="text"
                      />
                    )}
                  </InputMask>
                  <InputMask
                    mask="99/99/9999"
                    maskChar={null}
                    placeholder="Data de retorno"
                  >
                    {inputChildren => (
                      <Field
                        {...inputChildren}
                        name="return_date"
                        type="text"
                      />
                    )}
                  </InputMask>
                  <Field
                    type="text"
                    name="vacancy_amount"
                    placeholder="Quantidade de vagas"
                  />
                  <Field
                    type="text"
                    name="transport_company"
                    placeholder="Empresa de transporte"
                  />
                  <Field
                    type="text"
                    name="payment_types"
                    placeholder="Formas de pagamento"
                  />
                </span>
                <Button loading="false" disabled={isSubmitting}>
                  Criar excursão
                </Button>
              </form>
            )}
          </Formik>
        </Content>
      </Modal>
    </div>
  );
}
