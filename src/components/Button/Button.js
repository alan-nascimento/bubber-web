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
    props.background === 'outline'
      ? '1px solid #767b85'
      : props.background === 'primary-outline'
      ? '1px solid #EA1D2C'
      : props.background === 'success-outline'
      ? '1px solid #4ac79b'
      : 'none'};
  border-radius: ${props => (props.shape === 'circle' ? '50%' : '30px')};
  box-shadow: ${props =>
    props.background === 'primary'
      ? '0 3px 15px 1px rgba(55, 58, 64, 0.14)'
      : 'none'};
  background: ${props =>
    props.background === 'outline'
      ? '#ffffff'
      : props.background === 'primary-outline'
      ? '#ffffff'
      : props.background === 'success-outline'
      ? '#ffffff'
      : props.background === 'success'
      ? '#4ac79b'
      : props.background === 'destructive'
      ? '#ed4f4f'
      : props.background === 'disabled'
      ? '#ced0d4'
      : 'none'};
  background-image: ${props =>
    props.background === 'primary' &&
    'linear-gradient(110deg, #EA1D2C, #EA1D2C)'};
  color: ${props =>
    props.background === 'success-outline'
      ? '#4ac79b'
      : props.background === 'success'
      ? '#ffffff'
      : props.background === 'destructive'
      ? '#ffffff'
      : props.background === 'disabled'
      ? '#ffffff'
      : '#ffffff'};
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
  pointer-events: ${props =>
    props.background === 'disabled' ? 'none' : 'pointer'};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: ${props =>
      props.background === 'outline'
        ? '#f4f4f4'
        : props.background === 'primary-outline'
        ? '#fff6e0'
        : props.background === 'success-outline'
        ? '#d8f3e9'
        : props.background === 'success'
        ? '#35ab82'
        : props.background === 'destructive'
        ? '#e82121'
        : 'none'};
    background-image: ${props =>
      props.background === 'primary' &&
      'linear-gradient(110deg, #EA1D2C, #EA1D2C)'};
  }
  &:active {
    background: ${props =>
      props.background === 'primary'
        ? '#EA1D2C'
        : props.background === 'outline'
        ? '#e6e6e6'
        : props.background === 'primary-outline'
        ? '#ffe7ad'
        : props.background === 'success-outline'
        ? '#b1e7d4'
        : props.background === 'success'
        ? '#298464'
        : props.background === 'destructive'
        ? '#c21414'
        : 'none'};
    background-image: ${props =>
      props.background === 'primary' &&
      'linear-gradient(110deg, #EA1D2C, #EA1D2C)'};
  }
  &:focus {
    box-shadow: ${props =>
      props.background === 'primary-outline'
        ? '0px 0px 0 2px #EA1D2C'
        : props.background === 'success-outline'
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
