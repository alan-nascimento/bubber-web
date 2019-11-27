import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 500px;
  text-align: center;
  margin: 50px 0;

  form {
    background: #fff;
    padding: 50px;
    display: flex;
    flex-direction: column;
    border: 1px solid #ced4d0;

    h1 {
      margin-bottom: 30px;
    }

    div {
      margin-top: 20px;
    }

    input {
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
