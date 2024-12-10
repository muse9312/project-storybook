import React from 'react';
import styled, { css } from 'styled-components';

const WODualFuncWrap = ({ children, firstElementAuto, includeLabel }) => {
  return (
    <DualFuncWrap $firstElementAuto={firstElementAuto} $includeLabel={includeLabel}>
      {!includeLabel ? (
        children
      ) : (
        <>
          {children.filter((item) => item.type.name === 'WOLabel')}
          <InputWrap>{children.filter((item) => item.type.name !== 'WOLabel')}</InputWrap>
        </>
      )}
    </DualFuncWrap>
  );
};

export default WODualFuncWrap;

const DualFuncWrap = styled.div`
  display: grid;

  ${(props) => {
    if (!props.$includeLabel) {
      return css`
        grid-template-columns: ${(props) => `${props.$firstElementAuto ? 'auto' : '80px'}`} 1fr;
        gap: ${(props) => `${props.$includeLabel ? '3px' : '0'}`} ${(props) => `${props.$firstElementAuto ? '10px' : '14px'}`};
        align-items: center;
        > :last-child {
          margin-top: auto;
        }
      `;
    } else {
      return css`
        row-gap: 3px;
      `;
    }
  }}
`;

const InputWrap = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
`;
