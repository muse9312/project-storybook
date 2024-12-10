import styled, { css } from 'styled-components';
import { useState } from 'react';

const WORadio = ({ item, blind, disabled, isChecked, onChange }) => {
  // 로컬 상태 추가
  const [checked, setChecked] = useState(!!isChecked || false);

  const toggleChecked = (e) => {
    e.stopPropagation();
    setChecked(!checked);
    if (onChange) {
      onChange(item, !checked);
    }
  };
  return (
    <Wrap className='radio'>
      <Form type='radio' name={item.name || 'radio'} id={item.id} disabled={!!disabled} checked={isChecked} onChange={toggleChecked}></Form>
      <Label htmlFor={item.id} $blind={blind}>
        {item.label}
      </Label>
    </Wrap>
  );
};

export default WORadio;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0 6px;
`;

const Label = styled.label`
  color: var(--W-Dark-11, #333);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  ${(props) =>
    props.$blind === true &&
    css`
      position: absolute;
      width: 1px;
      height: 1px;
      clip: rect(0, 0, 0, 0);
      overflow: hidden;
    `}
`;

const Form = styled.input`
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: url(/assets/woori-mobile/icon/radio-default.svg) no-repeat center / cover;
  cursor: pointer;
  &:checked {
    background: url(/assets/woori-mobile/icon/radio-active.svg) no-repeat center / cover;
    & + ${Label} {
      /* font-weight: 600; */
    }
  }
`;
