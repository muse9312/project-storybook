import styled, { css } from 'styled-components';
import { useState } from 'react';

const WOCheckbox = ({ item, blind, isChecked, flex, onChange, titleArea, type, round, fontWght }) => {
  // 로컬 상태 추가
  const [checked, setChecked] = useState(!!isChecked || false);

  // 체크박스 상태 토글 함수
  const toggleChecked = () => {
    setChecked(!checked);
    if (onChange) {
      onChange(item, !checked);
    }
  };

  return (
    <Wrapper $titleArea={titleArea} $type={type}>
      <Inner $flex={flex} $round={round} $type={type}>
        <Form type='checkbox' name={item.name} id={item.id} checked={checked} onChange={toggleChecked} $round={round} />

        <Label htmlFor={item.id} $blind={blind} $type={type} $fontWght={fontWght}>
          {item.label}
        </Label>
      </Inner>
    </Wrapper>
  );
};
export default WOCheckbox;

const Wrapper = styled.div`
  ${(props) =>
    props.$titleArea &&
    css`
      display: flex;
      align-items: flex-end;
      height: 54px;
    `}
  ${(props) =>
    props.$type === 'table' &&
    css`
      width: fit-content;
      margin: 0 auto;
    `}
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  ${(props) =>
    props.$round &&
    css`
      height: auto;
    `}

  gap: 0 4px;
  ${(props) =>
    props.$type === 'table' &&
    css`
      height: auto;
    `}
`;
const Label = styled.label`
  padding-right: 10px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: var(--W-Dark-11);
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
  ${(props) =>
    props.$type === 'fit' &&
    css`
      min-width: auto;
      padding-right: 0;
    `}

    ${(props) =>
    props.$fontWght &&
    css`
      font-weight: 700;
    `}
`;
const Form = styled.input`
  display: block;
  width: 16px;
  height: 16px;
  background: url(/assets/woori-mobile/icon/checkbox-default.svg) no-repeat center / cover;
  cursor: pointer;
  &:checked {
    background: url(/assets/woori-mobile/icon/checkbox-checked.svg) no-repeat center / cover;
  }

  ${(props) =>
    props.$round &&
    css`
      background: url(/assets/woori-mobile/icon/checkbox-circle-default.svg) no-repeat center / cover;
      cursor: pointer;
      &:checked {
        background: url(/assets/woori-mobile/icon/checkbox-circle-checked.svg) no-repeat center / cover;
      }
    `}
`;
