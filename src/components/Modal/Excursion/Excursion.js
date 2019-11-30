import React, { useState } from 'react';

import { Modal } from 'antd';
import { Button } from '~/components';

export default function Excursion() {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);

  const handleOk = () => setVisible(false);

  const handleCancel = () => setVisible(false);

  return (
    <div>
      <Button onClick={showModal}>Adicionar excursão</Button>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
}
