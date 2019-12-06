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
  display: flex;
`;

export const List = styled.ul`
  width: 100%;

  li {
    list-style: none;
    min-height: 200px;
    max-width: 100%;
    background: #ffffff;
    border-radius: 5px;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.13);
    padding: 30px;
    margin: 30px;

    strong {
      &::after {
        content: ':';
        margin-right: 5px;
      }
    }
  }
`;
