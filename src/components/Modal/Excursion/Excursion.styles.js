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

export const Content = styled.div`
  width: 100%;
  text-align: center;
  margin: 50px 0;

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
      color: #face48;
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
