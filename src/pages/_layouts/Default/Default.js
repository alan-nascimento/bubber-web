import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './Default.styles';
import { Header } from '~/components';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
