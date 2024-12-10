import React from 'react';
import styled from 'styled-components';
import WOToggleButton from './WOToggleButton';
import WOIconButton from './WOIconButton';

const WOSelectWorkList = ({ depth1, depth2, depth3, area, department, type, favoriteStatus }) => {
  return (
    <Wrapper $type={type}>
      <WOToggleButton
        icon='star'
        onClick={(isActive) => {
          console.log(isActive);
        }}
        initialState={favoriteStatus}
      />
      <ListWrap>
        <DepthList>
          {depth1 && depth1} &gt; {depth2 && depth2} &gt; {depth3 && depth3}
        </DepthList>
        {area || department ? (
          <Area>
            {area && <span>{area}</span>}
            {department && <span>{department}</span>}
          </Area>
        ) : (
          ''
        )}
      </ListWrap>
    </Wrapper>
  );
};

export default WOSelectWorkList;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0 14px;
  padding: ${(props) => (props.$type === 'main' ? '14px 20px' : '16px 20px')};
`;
const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px 0;
`;

const DepthList = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  color: var(--C-Dark-11, #1a2c49);
  font-size: 14px;
  font-weight: 400;
`;

const Area = styled.div`
  display: flex;
  align-items: center;
  gap: 0 13px;
  span {
    color: var(--C-Dark-06, #9ea6b2);
    font-size: 12px;
    font-weight: 400;
    & + span {
      position: relative;
      &::before {
        content: '';
        position: absolute;
        left: -7px;
        top: 50%;
        transform: translateY(-50%);
        width: 1px;
        height: 9px;
        background-color: var(--C-Dark-06, #9ea6b2);
      }
    }
  }
`;
