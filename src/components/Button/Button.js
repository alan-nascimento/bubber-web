import styled, { keyframes, css } from 'styled-components';

const Rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Button = styled.button`
  max-height: ${props => props.shape === 'circle' && '88px'};
  box-sizing: border-box;
  min-height: 36px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: ${props => props.shape === 'circle' && '24px'};
  padding-bottom: ${props => props.shape === 'circle' && '24px'};
  height: ${props => `${props.height}px`};
  border: none;
  margin: 5px;
  border: ${props =>
    props.type === 'outline'
      ? '1px solid #767b85'
      : props.type === 'primary-outline'
      ? '1px solid #face48'
      : props.type === 'success-outline'
      ? '1px solid #4ac79b'
      : 'none'};
  border-radius: ${props => (props.shape === 'circle' ? '50%' : '30px')};
  box-shadow: ${props =>
    props.type === 'primary'
      ? '0 3px 15px 1px rgba(55, 58, 64, 0.14)'
      : 'none'};
  background: ${props =>
    props.type === 'outline'
      ? '#ffffff'
      : props.type === 'primary-outline'
      ? '#ffffff'
      : props.type === 'success-outline'
      ? '#ffffff'
      : props.type === 'success'
      ? '#4ac79b'
      : props.type === 'destructive'
      ? '#ed4f4f'
      : props.type === 'disabled'
      ? '#ced0d4'
      : 'none'};
  background-image: ${props =>
    props.type === 'primary' && 'linear-gradient(110deg, #face48, #fcde83)'};
  color: ${props =>
    props.type === 'success-outline'
      ? '#4ac79b'
      : props.type === 'success'
      ? '#ffffff'
      : props.type === 'destructive'
      ? '#ffffff'
      : props.type === 'disabled'
      ? '#ffffff'
      : '#2d2d2d'};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: center;
  outline: 0;
  transition: 0.3s;
  cursor: pointer;
  pointer-events: ${props => (props.type === 'disabled' ? 'none' : 'pointer')};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: ${props =>
      props.type === 'outline'
        ? '#f4f4f4'
        : props.type === 'primary-outline'
        ? '#fff6e0'
        : props.type === 'success-outline'
        ? '#d8f3e9'
        : props.type === 'success'
        ? '#35ab82'
        : props.type === 'destructive'
        ? '#e82121'
        : 'none'};
    background-image: ${props =>
      props.type === 'primary' && 'linear-gradient(110deg, #f9c116, #fbd151)'};
  }
  &:active {
    background: ${props =>
      props.type === 'primary'
        ? '#f8bd07'
        : props.type === 'outline'
        ? '#e6e6e6'
        : props.type === 'primary-outline'
        ? '#ffe7ad'
        : props.type === 'success-outline'
        ? '#b1e7d4'
        : props.type === 'success'
        ? '#298464'
        : props.type === 'destructive'
        ? '#c21414'
        : 'none'};
    background-image: ${props =>
      props.type === 'primary' && 'linear-gradient(110deg, #f8bd07, #facd42)'};
  }
  &:focus {
    box-shadow: ${props =>
      props.type === 'primary-outline'
        ? '0px 0px 0 2px #face48'
        : props.type === 'success-outline'
        ? '0px 0px 0 2px #4ac79b'
        : '0px 0px 0 2px #2d2d2d'};
  }
  img {
    margin-right: 10px;
  }
  ${props =>
    props.style &&
    Object.entries(props.style).map(
      item => `${item[0]}: ${item[1]} !important;`
    )}

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

export default Button;
