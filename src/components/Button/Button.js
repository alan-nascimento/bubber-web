import styled, { keyframes, css } from 'styled-components';

const Rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Button = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading === 'true' && true,
}))`
  background: #face48;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 5px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  box-shadow: 0 3px 15px 1px rgba(55, 58, 64, 0.14);
  font-size: 16px;
  transition: background 0.2s;
  font-weight: bold;

  &:hover {
    background: #face20;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading === true &&
    css`
      svg {
        animation: ${Rotate} 2s linear infinite;
      }
    `}
`;
