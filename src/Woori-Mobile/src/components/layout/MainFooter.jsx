import React from 'react';
import styled, { css } from 'styled-components';

const MainFooter = ({ children, type }) => {
  return <MainFooterWrap $type={type}>{children}</MainFooterWrap>;
};

export default MainFooter;

const MainFooterWrap = styled.div`
  flex: 0 0 auto;
  border-top: 1px solid var(--C-Dark-02);
  padding: 12px;
  background-color: var(--White);
  z-index: 2000;
  ${(props) =>
    props.$type === 'fixed' &&
    css`
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      border-top: unset;
    `}
`;
