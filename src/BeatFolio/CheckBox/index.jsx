import React from 'react';
import { useState } from 'react';
import { css, styled } from 'styled-components';

const CheckBox = (props) => {
  // 로컬 상태 추가
  const [checked, setChecked] = useState(props.checked || false);

  // 체크박스 상태 토글 함수
  const toggleChecked = () => {
    setChecked(!checked);
  };

  return (
    <Wrap>
      <Label htmlFor={props.id}>
        <LabelText labelVisible={props.labelVisible} size={props.size} theme={props.theme} disabled={props.disabled}>
          {props.label}
        </LabelText>
        <Input
          type='checkbox'
          name={props.name}
          id={props.id}
          disabled={props.disabled}
          theme={props.theme}
          checked={checked}
          size={props.size}
          onClick={toggleChecked}></Input>
      </Label>
    </Wrap>
  );
};

export default CheckBox;

const Wrap = styled.div`
  width: fit-content;
`;

const Input = styled.input`
  width: 24px;
  height: 24px;
  border: 1px solid ${(props) => (props.theme === 'dark' ? '#3e4751' : '#ccc')};
  border-radius: 50%;
  cursor: pointer;
  &:disabled {
    border: 1px solid ${(props) => (props.theme === 'dark' ? '#333' : '#eee')};
    cursor: default;
  }
  &:checked {
    border: unset;
    background: url('./assets/BeatFolio/icon-chkbox-checked.png') no-repeat center / cover;
    &:disabled {
      border: 1px solid none;
      background: ${(props) =>
          props.theme === 'dark' ? "url('./assets/BeatFolio/icon-chkbox-03-disabled.png')" : "url('./assets/BeatFolio/icon-chkbox-01-disabled.png')"}
        no-repeat center / cover;
      cursor: default;
    }
  }

  ${(props) =>
    props.size === 'sm' &&
    css`
      border: unset;
      background: url('./assets/BeatFolio/icon-sub-chk-unchecked.png') no-repeat center / 16px 16px;
      &:checked {
        border: unset;
        background: url('./assets/BeatFolio/icon-sub-chk-checked.png') no-repeat center / 16px 16px;
      }
    `}
`;

const Label = styled.label`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

const LabelText = styled.span`
  display: block;
  ${(props) =>
    props.labelVisible
      ? css`
          font-size: 14px;
          font-weight: 700;
          line-height: 21px;
          color: #000;
          ${props.size === 'md' &&
          css`
            font-size: 14px;
            font-weight: 500;
            line-height: 21px;
          `}
          ${props.size === 'sm' &&
          css`
            font-size: 12px;
            font-weight: 500;
            line-height: 18px;
          `}
                  & + ${Input} {
            margin-right: 8px;
          }
          ${props.disabled &&
          css`
            font-weight: 500;
            color: rgba(204, 204, 204, 1);
          `}
          ${props.theme === 'dark' &&
          css`
            color: #fff;
          `}
        `
      : css`
          font-style: normal !important;
          font-variant-ligatures: normal !important;
          font-variant-caps: normal !important;
          line-height: 0 !important;
          color: transparent !important;
          text-shadow: none !important;
          background-color: transparent !important;
          border: 0 !important;
          z-index: -1;
          border: 0;
          width: 1px;
          height: 1px;
          clip: rect(1px, 1px, 1px, 1px);
          clip-path: inset(50%);
          overflow: hidden;
          white-space: nowrap;
          display: inline-block;
          position: absolute;
        `}
`;
