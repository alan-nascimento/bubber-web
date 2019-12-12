import React from 'react';
import styled from 'styled-components';

let backgroundImage = 'https://miro.medium.com/max/1024/1*fXJ8LDLTrbIHHnbQpe4i8w.png';

const Head = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 30px;
  background: url(backgroundImage);
  box-shadow: 0 0 5px 0 #999;
`;
const Header = () => {
  return(
    <Head>
      <span>teste header</span>
    </Head>
  )
};

export default Header;
