import styled from 'styled-components';
import { Menu as AntMenu } from 'antd';

export const Menu = styled(AntMenu)`
  min-height: 100%;
  max-width: 300px;

  .ant-menu-item {
    color: #2d2d2d;

    &::after {
      border-right: 3px solid #EA1D2C !important;
    }

    &:hover {
      color: #777;
    }
  }

  .ant-menu-item-selected {
    color: #EA1D2C;
    font-weight: bold;
    background-color: #fefefe !important ;

    &:hover {
      color: #EA1D2C;
    }

    .anticon {
      &::after {
        color: #EA1D2C;
      }
    }
  }

  button {
    background: #EA1D2C;
    border: 1px solid #EA1D2C;
    margin: 0;
    position: relative;
    left: 17px;
    top: 9px;

    &:hover,
    &:active,
    &:focus {
      background: #EA1D2C;
      border: 1px solid #EA1D2C;
    }
  }
`;
