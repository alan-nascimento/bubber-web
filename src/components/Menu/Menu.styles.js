import styled from 'styled-components';
import { Menu as AntMenu } from 'antd';

export const Menu = styled(AntMenu)`
  min-height: 100%;
  max-width: 300px;

  .ant-menu-item {
    color: #2d2d2d;

    &::after {
      border-right: 3px solid #face48 !important;
    }

    &:hover {
      color: #777;
    }
  }

  .ant-menu-item-selected {
    color: #face48;
    font-weight: bold;
    background-color: #fefefe !important ;

    &:hover {
      color: #face48;
    }

    .anticon {
      &::after {
        color: #face48;
      }
    }
  }

  button {
    background: #face48;
    border: 1px solid #face48;
    margin: 0;
    position: relative;
    left: 17px;
    top: 9px;

    &:hover,
    &:active,
    &:focus {
      background: #face48;
      border: 1px solid #face48;
    }
  }
`;
