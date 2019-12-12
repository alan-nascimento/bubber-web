import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Avatar, Input } from 'antd';
import {
  FaRegCheckCircle,
  FaArrowCircleDown,
  FaArrowCircleUp,
} from 'react-icons/fa';

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
} from './ExcursionDetail.styles';

const passagers = [
  { avatar: '', id: '123456', name: 'Gledson' },
  { avatar: '', id: '123456', name: 'Alan' },
  { avatar: '', id: '123456', name: 'Ismael' },
  { avatar: '', id: '123456', name: 'Ricardo' },
];

export default function ExcursionDetail({ visible, handleVisible }) {
  const profile = useSelector(state => state.user.profile);

  return (
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
              <p>R$ 200,00</p>
            </ExcursionValue>
            <ExcursionType />
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
          <List>
            {passagers.map(passager => (
              <li key={passager.id}>
                <PassagerInfo>
                  <Avatar
                    style={{
                      backgroundColor: '#face48',
                      verticalAlign: 'middle',
                    }}
                    size="large"
                  >
                    <strong>{passager.name[0]}</strong>
                  </Avatar>
                  <Text>
                    <strong>{passager.name}</strong>
                  </Text>
                </PassagerInfo>
                <Button background="success-outline">
                  Confirmar passageiro
                </Button>
              </li>
            ))}
          </List>
        </Content>
      </Modal>
    </>
  );
}
