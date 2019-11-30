import React, { useState } from 'react';

import { Form, Input, DatePicker, Select, InputNumber, Switch } from 'antd';

import { Button } from '~/components';

import { Modal } from './Excursion.styles';

const { Option } = Select;
const { RangePicker } = DatePicker;

export function Excursion({ form }) {
  const [visible, setVisible] = useState(false);

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

  function onChange(value, dateString) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  }

  function onOk(value) {
    console.log('onOk: ', value);
  }

  const { getFieldDecorator } = form;

  return (
    <div>
      <Button onClick={showModal}>Adicionar excursão</Button>
      <Modal
        title="Criar uma excursão"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form {...formItemLayout}>
          <Form.Item
            validateStatus="error"
            help="O nome da excursão é obrigatório"
          >
            <Input placeholder="Nome da viagem" id="error" />
          </Form.Item>
          <Form.Item
            validateStatus="error"
            help="O endereço do local é obrigatório"
          >
            <Input placeholder="Endereço do local" id="warning" />
          </Form.Item>

          <Form.Item style={{ marginBottom: 0, minWidth: '100%' }}>
            <Form.Item
              validateStatus="error"
              help="Por favor, selecione uma data válida"
            >
              <div>
                <RangePicker
                  showTime={{ format: 'HH:mm' }}
                  format="DD-MM-YYYY HH:mm"
                  placeholder={['Data de partida', 'Data de volta']}
                  onChange={onChange}
                  onOk={onOk}
                />
              </div>
            </Form.Item>
          </Form.Item>

          <Form.Item
            hasFeedback
            validateStatus="error"
            help="O tipo de excursão é obrigatório"
          >
            <Select defaultValue="Selecione o tipo de excursão">
              <Option value="1">Praia</Option>
              <Option value="2">Show</Option>
              <Option value="3">Jogo do Corinthians</Option>
            </Select>
          </Form.Item>

          <section>
            <Form.Item hasFeedback validateStatus="success">
              <InputNumber min={5} max={100} defaultValue={5} />
            </Form.Item>

            <Form.Item hasFeedback validateStatus="success">
              <InputNumber
                defaultValue={0}
                formatter={value =>
                  `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                }
                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                onChange={onChange}
              />
            </Form.Item>

            <Form.Item hasFeedback validateStatus="success">
              <InputNumber
                defaultValue={0}
                formatter={value =>
                  `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                }
                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                onChange={onChange}
              />
            </Form.Item>

            <Form.Item hasFeedback validateStatus="success">
              <InputNumber
                defaultValue={0}
                formatter={value =>
                  `R$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                }
                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                onChange={onChange}
              />
            </Form.Item>
          </section>

          <Form.Item>
            {getFieldDecorator('select', {
              rules: [
                {
                  required: true,
                  message:
                    'Por favor, selecione pelo menos uma forma de pagamento',
                  type: 'array',
                },
              ],
            })(
              <Select mode="multiple" placeholder="Formas de pagamento">
                <Option value="credit-card">Cartão de crédito</Option>
                <Option value="invoice">Boleto</Option>
                <Option value="cash">Dinheiro</Option>
              </Select>
            )}
          </Form.Item>

          <section>
            <Form.Item label="Lista de espera:">
              {getFieldDecorator('switch', { valuePropName: 'checked' })(
                <Switch />
              )}
            </Form.Item>
          </section>
        </Form>
      </Modal>
    </div>
  );
}

export default Form.create()(Excursion);
