import React from 'react';
import { useState } from 'react';
import { styled } from 'styled-components';

const TagCheckBox = (props) => {
  // 로컬 상태 추가
  const [checked, setChecked] = useState(props.checked || false);

  // 체크박스 상태 토글 함수
  const toggleChecked = () => {
    setChecked(!checked);
  };

  return (
    <Wrap>
      <CheckBox type='checkbox' name={props.name} id={props.id} checked={checked} onClick={toggleChecked} />
      <Label htmlFor={props.id}>
        <CheckBoxIcon></CheckBoxIcon>
        <LabelText>{props.label}</LabelText>
      </Label>
    </Wrap>
  );
};

export default TagCheckBox;

const Wrap = styled.div`
  display: flex;
  width: fit-content;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  height: 28px;
  padding: 0 12px;
  border-radius: 14px;
  background-color: #fff;
  border: 1px solid transparent;
  cursor: pointer;
`;
const CheckBoxIcon = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  background: url(./assets/BeatFolio/icon-sub-chk-unchecked.png) no-repeat center / cover;
`;

const CheckBox = styled.input`
  display: none;
  &:checked {
    & + ${Label} {
      background-color: #f3f3ff;
      box-shadow: 0 4px 6px 0 rgba(121, 116, 255, 0.1);
      border: 1px solid #7974ff;
      ${CheckBoxIcon} {
        background: url(./assets/BeatFolio/icon-sub-chk-checked.png) no-repeat center / cover;
      }
    }
  }
`;

const LabelText = styled.span`
  display: block;
  margin-left: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  color: #000;
`;
