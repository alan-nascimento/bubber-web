import styled from 'styled-components';
import { Modal as AntdModal } from 'antd';

export const Modal = styled(AntdModal)`
  .ant-modal-title {
    font-weight: bold;
    font-size: 22px;
  }

  .ant-modal-footer {
    button {
    }
  }

  section {
    display: flex;
    justify-content: space-between;

    .ant-form-item {
      display: flex;

      .ant-form-item-label {
        width: 120px;
      }
    }
  }

  .ant-switch-checked {
    background: #face48;
  }
`;
