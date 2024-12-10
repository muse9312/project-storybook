import React from 'react';
import styled from 'styled-components';

const SubFooter = ({ children }) => {
  return <SubFooterWrap className='footer'>{children}</SubFooterWrap>;
};

export default SubFooter;

const SubFooterWrap = styled.div`
  flex: 0 0 auto;
  border-top: 1px solid var(--C-Dark-02);
  padding: 12px;
  background-color: var(--White);
  z-index: 800;
`;
