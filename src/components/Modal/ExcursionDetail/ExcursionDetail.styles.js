import styled from 'styled-components';
import { Modal as AntdModal } from 'antd';

export const Modal = styled(AntdModal)`
  && {
    width: 100% !important;
    height: 100vh !important;
    padding: 0;
    margin: 0;
    top: 0;
    border-radius: 0;

    .ant-modal-body {
      min-height: calc(100vh - 56px);
    }
  }

  .ant-modal-title {
    font-weight: bold;
    font-size: 22px;
  }

  .ant-modal-footer {
    display: none;
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

export const Header = styled.header`
  height: 80px;
  border-bottom: 1px solid #ced4d0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const List = styled.ul`
  width: 50%;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    min-height: 100px;
    max-width: 100%;
    background: #ffffff;
    border-radius: 5px;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.13);
    padding: 30px;
    margin: 30px 50px;

    img {
      width: 200px;
      height: 200px;
      margin-right: 10px;
      opacity: 0.6;
    }
  }
`;

export const Text = styled.p`
  font-size: 1.25rem;
  color: #face48;
`;

export const PassagerInfo = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-left: 10px;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 50px 0;

  button {
    height: 44px;
    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }

  input {
    height: 44px;
  }
`;

export const Local = styled.div`
  display: flex;

  div {
    display: flex;
    align-items: center;

    strong {
      font-size: 16px;
      margin-left: 10px;
    }
  }
`;

export const DashedLine = styled.div`
  border-top: 1.5px dashed #aaa;
  width: 10vw;
  position: relative;
  margin: 10px 30px;
`;

export const Divider = styled.div`
  border-right: 1px solid #ced4d0;
  height: calc(100% - 30px);
  margin: 0 20px;
`;

export const ExcursionValue = styled.div`
  p {
    font-size: 16px;
    color: #4ac79b;
    font-weight: bold;
    margin: 0;
  }
`;

export const ExcursionType = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;

  svg {
    margin-right: 10px;
  }
`;

export const ListGroup = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
`;

export const ListTitle = styled.h4`
  font-size: 20px;
  font-weight: bold;
  color: #4ac79b;
`;
