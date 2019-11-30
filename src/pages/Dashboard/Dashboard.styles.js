import styled from 'styled-components';

export const Container = styled.div`
  section {
    display: flex;
    justify-content: space-between;
    margin: 30px;

    h1 {
      font-size: 26px;
      font-weight: bold;
    }

    button {
      font-size: 14px;
    }
  }
`;

export const Content = styled.div`
  background: #fff;
  min-height: 80vh;
`;
