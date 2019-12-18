import React from 'react';
import styled from 'styled-components';
import { Modal as ModalBase } from 'antd';

const Modal = styled(ModalBase)`
  .ant-btn {
    display: none;
  }

  .ant-btn-primary {
    display: flex;
    background: #EA1D2C;
    outline: 0;
    border: 0;

    &:hover,
    &:active,
    &:focus {
      background: #EA1D2C;
    }
  }
`;

export default function Success({
  visible,
  handleVisible,
  message,
  error,
  handleOk,
}) {
  const onOk = () => {
    if (error) {
      return handleVisible(false);
    }

    handleOk();
    handleVisible(false);
  };

  return (
    <Modal
      visible={visible}
      onOk={() => onOk()}
      onCancel={() => handleVisible(false)}
      destroyOnClose
    >
      {message}
    </Modal>
  );
}
