import styled from 'styled-components';

const Button = styled.button`
  margin: 5px 0 0;
  height: 52px;
  background: #face48;
  font-weight: bold;
  color: #2d2d2d;
  border: 0;
  border-radius: 30px;
  box-shadow: 0 3px 15px 1px rgba(55, 58, 64, 0.14);
  font-size: 16px;
  transition: background 0.2s;

  &:hover {
    background: #face20;
  }
`;

export default Button;
