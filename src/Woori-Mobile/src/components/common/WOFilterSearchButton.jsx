import React from 'react';
import styled, { css } from 'styled-components';

const WOFilterSearchButton = ({ title, selectValue, type, onClick }) => {
  return (
    <Wrapper type='button' className={type === 'type-02' ? 'type-02' : 'type-01'} $type={type} onClick={onClick}>
      <Title>{title}</Title>
      <SelectValue>
        {selectValue}
        <Arr />
      </SelectValue>
    </Wrapper>
  );
};

export default WOFilterSearchButton;

const Wrapper = styled.button`
  position: relative;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 12px;
  width: 100%;
  height: 62px;
  padding: 0 20px;
  background-color: #fff;
  &.type-01 {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: calc(100% - 40px);
      height: 1px;
      background: var(--C-Dark-02, #ededf3);
    }
    &:first-child {
      &::before {
        display: none;
      }
    }
  }
  &.type-02 {
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: calc(100% - 40px);
      height: 1px;
      background: var(--C-Dark-02, #ededf3);
    }
    &:last-child {
      &::after {
        display: none;
      }
    }
  }

  ${(props) =>
    props.$type === 'type-02' &&
    css`
      background: #f3f8ff;
    `}
`;

const Title = styled.div`
  max-width: 50px;
  color: var(--W-Dark-12, #111);
  font-size: 13px;
  font-weight: 700;
  text-align: left;
  word-break: auto-phrase;
`;

const SelectValue = styled.div`
  display: flex;
  align-items: center;
  gap: 0 4px;
  color: var(--C-Dark-12, #0e213f);
  font-size: 14px;
  font-weight: 400;
  text-align: left;
`;

const Arr = styled.div`
  width: 18px;
  height: 18px;
  background: url(/assets/woori-mobile/icon/arr-black-18.svg) no-repeat center / cover;
`;
