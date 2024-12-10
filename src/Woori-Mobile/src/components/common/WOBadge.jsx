import React from 'react';
import styled, { css } from 'styled-components';

const WOBadge = ({ children, count, borderColorType }) => {
  count = count === undefined ? '0' : count > 99 ? 99 + '+' : count;
  borderColorType = borderColorType === undefined ? 'white' : borderColorType;
  return (
    <WOBadgeWrap>
      {children}
      <WOBadgeCircle $borderColorType={borderColorType}>{count}</WOBadgeCircle>
    </WOBadgeWrap>
  );
};

export default WOBadge;

const WOBadgeWrap = styled.div`
  position: relative;
`;

const WOBadgeCircle = styled.span`
  position: absolute;
  top: 1px;
  left: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 17px;
  height: 17px;
  line-height: 17px;
  ${(props) =>
    props.$borderColorType === 'white' &&
    css`
      border: 1px solid var(--White);
    `}

  ${(props) =>
    props.$borderColorType === 'dark' &&
    css`
      border: 1px solid var(--C-Dark-11);
    `}


  font-size: 12px;
  font-weight: 700;
  border-radius: 30px;
  padding: 0 3px;
  background-color: var(--Violet-01);
  color: var(--White);
`;
