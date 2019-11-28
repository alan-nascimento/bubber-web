import React, { memo } from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import { Container } from './Error.styles';

export default memo(function Error({ message }) {
  return (
    <Container>
      <FiAlertCircle size={24} />
      {message}
    </Container>
  );
});
