import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import {
  Form,
  Input,
  DatePicker,
  Select,
  InputNumber,
  Switch,
  Icon,
} from 'antd';

import api from '~/services/api';
import states from '~/utils/enums/states';
import { Button } from '~/components';
import { Modal } from './Excursion.styles';

const { Option } = Select;

export function Excursion({ form }) {
  const [visible, setVisible] = useState(false);
  const { profile } = useSelector(state => state.user);

  const [inputValues, setInputValues] = useState({
    departure: {
      address: '',
      city: '',
      state: '',
      number: '',
    },
    destination: {
      address: '',
      city: '',
      state: '',
      number: '',
    },
    owner_id: '',
    title: '',
    departure_date: new Date(),
    return_date: '',
    private: false,
    travel_type: '',
    vacancies: '',
    unitary_value: '',
    transport_company: '',
    waiting_list: false,
    payment_types: [],
  });

  const formItemLayout = {
    labelCol: {
      sm: { span: 5 },
    },
    wrapperCol: {
      xs: { span: 24 },
    },
  };

  const showModal = () => setVisible(true);
  const handleOk = () => setVisible(false);
  const handleCancel = () => setVisible(false);

  const { getFieldDecorator, validateFields } = form;

  const handleSubmit = e => {
    e.preventDefault();
    validateFields(async (err, values) => {
      await api.post('excursions', {
        ...values,
        owner_id: profile.id,
      });
      validateFields();
    });
  };

  function range(start, end) {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }

  function disabledDate(current) {
    return current && current < moment().endOf('day');
  }

  function disabledDateTime() {
    return {
      disabledHours: () => range(0, 24).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }

  return (
    <div>
      <Button background="primary" onClick={showModal}>
        Adicionar excursão
      </Button>
      <Modal
        title="Criar uma excursão"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form {...formItemLayout} onSubmit={e => handleSubmit(e)}>
          <Form.Item>
            {getFieldDecorator('title', {
              rules: [
                {
                  required: true,
                  message: 'Por favor digite o nome da excursão',
                  min: 3,
                },
              ],
              initialValue: inputValues.title,
            })(
              <Input
                placeholder="Nome da excursão"
                prefix={
                  <Icon type="car" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
              />
            )}
          </Form.Item>

          <h4>Sobre o local de partida:</h4>

          <Form.Item>
            {getFieldDecorator('departure.address', {
              rules: [
                {
                  required: true,
                  message: 'Por favor digite o endereço da excursão',
                  min: 3,
                },
              ],
              initialValue: inputValues.departure.address,
            })(
              <Input
                placeholder="Endereço"
                prefix={
                  <Icon
                    type="check-square"
                    style={{ color: 'rgba(0,0,0,.25)' }}
                  />
                }
              />
            )}
          </Form.Item>

          <section style={{ display: 'flex' }}>
            <Form.Item style={{ width: '32%' }}>
              {getFieldDecorator('departure.number', {
                rules: [
                  {
                    required: true,
                    message: 'Por favor digite o número',
                    min: 3,
                  },
                ],
                initialValue: inputValues.departure.address,
              })(
                <Input
                  placeholder="Número"
                  prefix={
                    <Icon
                      type="check-square"
                      style={{ color: 'rgba(0,0,0,.25)' }}
                    />
                  }
                />
              )}
            </Form.Item>

            <Form.Item style={{ width: '32%' }}>
              {getFieldDecorator('departure.city', {
                rules: [
                  {
                    required: true,
                    message: 'Por favor digite a cidade de partida',
                    min: 3,
                  },
                ],
                initialValue: inputValues.departure.city,
              })(
                <Input
                  placeholder="Cidade"
                  prefix={
                    <Icon
                      type="check-square"
                      style={{ color: 'rgba(0,0,0,.25)' }}
                    />
                  }
                />
              )}
            </Form.Item>

            <Form.Item style={{ width: '32%' }}>
              {getFieldDecorator('departure.state', {
                rules: [
                  {
                    required: true,
                    message: 'Por favor selecione o estado da excursão',
                    min: 2,
                  },
                ],
                initialValue: inputValues.departure.state,
              })(
                <Select placeholder="Estado" onChange={e => console.log(e)}>
                  {states.map(state => (
                    <Option value={state}>{state}</Option>
                  ))}
                </Select>
              )}
            </Form.Item>
          </section>

          <h4>Sobre o local de destino:</h4>

          <Form.Item>
            {getFieldDecorator('destination.address', {
              rules: [
                {
                  required: true,
                  message: 'Por favor digite o endereço da excursão',
                  min: 3,
                },
              ],
              initialValue: inputValues.departure.address,
            })(
              <Input
                placeholder="Endereço"
                prefix={
                  <Icon
                    type="check-square"
                    style={{ color: 'rgba(0,0,0,.25)' }}
                  />
                }
              />
            )}
          </Form.Item>

          <section style={{ display: 'flex' }}>
            <Form.Item style={{ width: '32%' }}>
              {getFieldDecorator('destination.number', {
                rules: [
                  {
                    required: true,
                    message: 'Por favor digite o número',
                    min: 3,
                  },
                ],
                initialValue: inputValues.departure.address,
              })(
                <Input
                  placeholder="Número partida"
                  prefix={
                    <Icon
                      type="check-square"
                      style={{ color: 'rgba(0,0,0,.25)' }}
                    />
                  }
                />
              )}
            </Form.Item>

            <Form.Item style={{ width: '32%' }}>
              {getFieldDecorator('destination.city', {
                rules: [
                  {
                    required: true,
                    message: 'Por favor digite a cidade de partida',
                    min: 3,
                  },
                ],
                initialValue: inputValues.departure.city,
              })(
                <Input
                  placeholder="Cidade de partida"
                  prefix={
                    <Icon
                      type="check-square"
                      style={{ color: 'rgba(0,0,0,.25)' }}
                    />
                  }
                />
              )}
            </Form.Item>

            <Form.Item style={{ width: '32%' }}>
              {getFieldDecorator('destination.state', {
                rules: [
                  {
                    required: true,
                    message: 'Por favor selecione o estado da excursão',
                    min: 2,
                  },
                ],
                initialValue: inputValues.departure.state,
              })(
                <Select onChange={e => console.log(e)}>
                  {states.map(state => (
                    <Option value={state}>{state}</Option>
                  ))}
                </Select>
              )}
            </Form.Item>
          </section>

          <h4>Datas</h4>

          <section style={{ display: 'flex' }}>
            <Form.Item style={{ marginBottom: 0, width: '48%' }}>
              {getFieldDecorator('departure_date', {
                initialValue: inputValues.departure_date,
              })(
                <>
                  <DatePicker
                    style={{ minWidth: '100%' }}
                    format="YYYY-MM-DD HH:mm"
                    placeholder="Data de partida"
                    disabledDate={disabledDate}
                    // disabledTime={disabledDateTime}
                    showTime={{ defaultValue: moment('00:00:00', 'HH:mm') }}
                    onOk={({ _d: date }) =>
                      setInputValues({
                        ...inputValues,
                        departure_date: date,
                      })
                    }
                  />
                </>
              )}
            </Form.Item>

            <Form.Item style={{ marginBottom: 0, width: '48%' }}>
              {getFieldDecorator('return_date', {
                initialValue: inputValues.return_date,
              })(
                <>
                  <DatePicker
                    style={{ minWidth: '100%' }}
                    format="YYYY-MM-DD HH:mm"
                    placeholder="Data de retorno"
                    disabledDate={disabledDate}
                    // disabledTime={disabledDateTime}
                    showTime={{ defaultValue: moment('00:00:00', 'HH:mm') }}
                    onOk={({ _d: date }) =>
                      setInputValues({
                        ...inputValues,
                        return_date: date,
                      })
                    }
                  />
                </>
              )}
            </Form.Item>
          </section>

          <section style={{ display: 'flex' }}>
            <Form.Item label="Excursão privada:">
              {getFieldDecorator('private', {
                rules: [
                  {
                    required: true,
                  },
                ],
                initialValue: inputValues.private,
              })(
                <>
                  <Switch />
                </>
              )}
            </Form.Item>

            <Form.Item label="Lista de espera:">
              {getFieldDecorator('waiting_list', {
                initialValue: inputValues.waiting_list,
              })(
                <>
                  <Switch />
                </>
              )}
            </Form.Item>
          </section>

          <Form.Item>
            {getFieldDecorator('transport_company', {
              rules: [
                {
                  required: true,
                  message: 'Por favor digite a empresa de transporte',
                  min: 3,
                },
              ],
              initialValue: inputValues.transport_company,
            })(
              <Input
                placeholder="Empresa de transporte"
                prefix={
                  <Icon
                    type="check-square"
                    style={{ color: 'rgba(0,0,0,.25)' }}
                  />
                }
              />
            )}
          </Form.Item>

          <article style={{ display: 'flex' }}>
            <Form.Item label="Tipo de excursão" style={{ width: '32%' }}>
              {getFieldDecorator('travel_type', {
                rules: [
                  {
                    required: true,
                    message: 'O tipo de excursão é obrigatório',
                  },
                ],
                initialValue: inputValues.travel_type,
              })(
                <Select defaultValue="Selecione o tipo de excursão">
                  <Option value="Praia">Praia</Option>
                  <Option value="Show">Show</Option>
                  <Option value="Jogo do Corinthians">
                    Jogo do Corinthians
                  </Option>
                </Select>
              )}
            </Form.Item>

            <Form.Item
              hasFeedback
              label="Quantidade de vagas"
              style={{ width: '32%' }}
            >
              {getFieldDecorator('vacancies', {
                rules: [
                  {
                    required: true,
                    message: 'A quantidade é obrigatória',
                  },
                ],
                initialValue: inputValues.vacancies,
              })(
                <InputNumber
                  style={{ width: '100%' }}
                  min={5}
                  max={100}
                  defaultValue={5}
                />
              )}
            </Form.Item>

            <Form.Item
              hasFeedback
              label="Valor por pessoa"
              style={{ width: '32%' }}
            >
              {getFieldDecorator('unitary_value', {
                rules: [
                  {
                    required: true,
                    message: 'O valor é obrigatório',
                  },
                ],
                initialValue: inputValues.unitary_value,
              })(
                <InputNumber
                  style={{ width: '100%' }}
                  defaultValue={100}
                  formatter={value => `R$ ${value}`}
                  parser={value => value.replace(/R\$\s?|(,*)/g, '')}
                  onChange={e => console.log(e)}
                />
              )}
            </Form.Item>
          </article>

          <Form.Item>
            {getFieldDecorator('payment_types', {
              initialValue: inputValues.payment_types,
            })(
              <Select mode="multiple" placeholder="Formas de pagamento">
                <Option value="credit_card">Cartão de crédito</Option>
                <Option value="invoice">Boleto</Option>
                <Option value="cash">Dinheiro</Option>
              </Select>
            )}
          </Form.Item>

          <Button type="submit" background="primary" style={{ width: '100%' }}>
            Criar excursão
          </Button>
        </Form>
      </Modal>
    </div>
  );
}

export default Form.create()(Excursion);
