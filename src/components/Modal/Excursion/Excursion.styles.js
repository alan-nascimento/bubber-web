import styled from 'styled-components';
import { Modal as AntdModal } from 'antd';

export const Modal = styled(AntdModal)`
  .ant-modal-title {
    font-weight: bold;
    font-size: 22px;
  }

  .ant-modal-footer {
    display: none;
  }

  article {
    display: flex;
    justify-content: space-between;

    .ant-form-item {
      display: flex;
      flex-direction: column;

      .ant-form-item-label {
        display: flex;
        align-items: center;
        width: 100%;
      }
    }
  }

  section {
    display: flex;
    justify-content: space-between;

    .ant-form-item {
      width: 50%;
      display: flex;
      flex-direction: column;

      .ant-form-item-label {
        width: 50%;
      }
    }
  }

  .ant-switch-checked {
    background: #EA1D2C;
  }
`;

export const Content = styled.div`
  width: 100%;
  text-align: center;
  margin: 0 0 20px;

  form {
    background: #fff;
    padding: 0 20px;
    display: flex;
    flex-direction: column;

    div {
      margin-top: 20px;
    }

    span {
      min-width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    input {
      width: 100%;
      border: 1px solid #ced0d4;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #2d2d2d;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(0, 0, 0, 0.4);
      }
    }

    button {
      margin-top: 30px;
    }

    a {
      color: #EA1D2C;
      font-weight: bold;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
