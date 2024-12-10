import React from 'react';
import styled, { css } from 'styled-components';

const GridSystem = ({ children, gridType, gridRowGap, as }) => {
  gridType = gridType === undefined ? 'normal' : gridType;
  gridRowGap = gridRowGap === undefined ? '40' : gridRowGap;

  return (
    <GridSystemWrap $gridType={gridType} $gridRowGap={gridRowGap} as={as}>
      {children}
    </GridSystemWrap>
  );
};

export default GridSystem;

const GridSystemWrap = styled.div`
  display: grid;
  ${(props) => {
    if (props.$gridType === 'form') {
      const gridRowGap = props.$gridRowGap;
      return css`
        row-gap: ${gridRowGap}px;
        padding: 20px;
      `;
    } else if (props.$gridType === 'normal') {
      return css`
        gap: 0;
        padding: 0;
      `;
    }
  }}
`;
