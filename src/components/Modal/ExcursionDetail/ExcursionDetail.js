import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Avatar, Input } from 'antd';
import {
  FaRegCheckCircle,
  FaArrowCircleDown,
  FaArrowCircleUp,
} from 'react-icons/fa';
import { formatToBRL } from 'brazilian-values';

import {
  MdLockOutline,
  MdLockOpen,
  MdPeopleOutline,
  MdAttachMoney,
} from 'react-icons/md';

import api from '~/services/api';

import { Button } from '~/components';
import {
  Modal,
  Content,
  Header,
  List,
  Text,
  PassagerInfo,
  Actions,
  Local,
  DashedLine,
  Divider,
  ExcursionValue,
  ExcursionType,
  ListGroup,
  ListTitle,
} from './ExcursionDetail.styles';

const passagers = [
  { avatar: '', id: '123456', name: 'Gledson' },
  { avatar: '', id: '123456', name: 'Alan' },
  { avatar: '', id: '123456', name: 'Ismael' },
  { avatar: '', id: '123456', name: 'Ricardo' },
];

export default function ExcursionDetail({ visible, handleVisible, data = {} }) {
  const profile = useSelector(state => state.user.profile);

  console.warn('data', data);

  return (
    data && (
      <>
        <Modal
          title="Minha excursão"
          visible={visible}
          onOk={() => handleVisible(false)}
          onCancel={() => handleVisible(false)}
        >
          <Content>
            <Header>
              <Local>
                <div>
                  <FaArrowCircleDown size={14} />
                  <strong>Carapicuípa - SP</strong>
                </div>
                <DashedLine />
                <div>
                  <FaArrowCircleUp size={14} />
                  <strong>Baixada Santista - SP</strong>
                </div>
              </Local>
              <Divider />
              <ExcursionValue>
                <p>{formatToBRL(data.unit_value && data.unit_value)}</p>
              </ExcursionValue>
              <Divider />
              <ExcursionType>
                {data.private ? (
                  <>
                    <MdLockOutline size={20} color="#" />
                    <span>Privada</span>
                  </>
                ) : (
                  <>
                    <MdLockOpen size={20} color="#" />
                    <span>Pública</span>
                  </>
                )}
              </ExcursionType>
              <Divider />
              <ExcursionType>
                <MdPeopleOutline size={20} color="#" />
                <span>
                  {data.vacancies &&
                    data.vacancies - data.paid &&
                    data.paid.length}{' '}
                  vagas disponiveis
                </span>
              </ExcursionType>
            </Header>
            <Actions>
              <Button background="primary">
                <FaRegCheckCircle size={18} color="#2d2d2d" />
                Adicionar passageiro não listado
              </Button>
              <Input.Search
                placeholder="Procurar passageiro"
                onSearch={value => console.log(value)}
                style={{ width: 200 }}
              />
            </Actions>
            <ListGroup>
              <List>
                <ListTitle>Passeiros interessados</ListTitle>
                {data.pending_passenger &&
                  data.pending_passenger.map(passager => (
                    <li key={passager.id} style={{ marginRight: '10px' }}>
                      <PassagerInfo>
                        <Avatar
                          style={{
                            backgroundColor: '#face48',
                            verticalAlign: 'middle',
                          }}
                          size="large"
                        >
                          <strong>{passager[0] || ''}</strong>
                        </Avatar>
                        <Text>
                          <strong>{passager || ''}</strong>
                        </Text>
                      </PassagerInfo>
                      <Button background="success-outline">
                        Confirmar passageiro
                      </Button>
                    </li>
                  ))}
              </List>
              <List>
                <ListTitle>Passeiros confirmados</ListTitle>
                {data.paid &&
                  data.paid.map(passager => (
                    <li key={passager} style={{ marginRight: '10px' }}>
                      <PassagerInfo>
                        <Avatar
                          style={{
                            backgroundColor: '#face48',
                            verticalAlign: 'middle',
                          }}
                          size="large"
                        >
                          <strong>{passager[0] || ''}</strong>
                        </Avatar>
                        <Text>
                          <strong>{passager || ''}</strong>
                        </Text>
                      </PassagerInfo>
                      <MdAttachMoney size={24} color="" />
                      <Button background="outline">Remover passageiro</Button>
                    </li>
                  ))}
              </List>
            </ListGroup>
          </Content>
        </Modal>
      </>
    )
  );
}
