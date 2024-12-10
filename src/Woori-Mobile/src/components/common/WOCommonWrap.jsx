import React from 'react';
import styled from 'styled-components';

const WOCommonWrap = ({ children, wrapType, wrapRowGap, wrapColumnGap }) => {
  return (
    <CommonWrap $wrapType={wrapType} $wrapRowGap={wrapRowGap} $wrapColumnGap={wrapColumnGap}>
      {children}
    </CommonWrap>
  );
};

export default WOCommonWrap;

const CommonWrap = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.$wrapType ? `${props.$wrapType}` : 'column')};

  row-gap: ${(props) => (props.$wrapRowGap ? `${props.$wrapRowGap}px` : 'unset')};
  column-gap: ${(props) => (props.$wrapColumnGap ? `${props.$wrapColumnGap}px` : 'unset')};

  > :first-child:nth-last-child(2):last-child,
  :first-child:nth-last-child(2) ~ div {
    margin-left: auto;
  }
`;
