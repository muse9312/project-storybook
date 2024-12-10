import { TextField } from '@mui/material';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const WOLoginInput = ({ id, name, label, type, placeholder, value, button, error, errorText, time }) => {
  const [inputValue, setInputValue] = useState(value || '');
  const [labelShrink, setLabelShrink] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputFocus = () => {
    setLabelShrink(true);
  };

  const handleInputBlur = () => {
    if (inputValue === '') {
      setLabelShrink(false);
    }
  };

  const handleInputClear = () => {
    setInputValue('');
    setLabelShrink(false);
  };

  return (
    <>
      <Wrapper>
        <CustomInput
          type={type || 'text'}
          id={id}
          name={name}
          label={labelShrink ? label : placeholder}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          error={error}
          $hasButton={button}
          $hasTime={time}
          fullWidth={true}></CustomInput>
        {button && button}
        {time && <Time>{time}</Time>}
        {inputValue !== '' && setLabelShrink !== false ? <ClearBtn $hasButton={button} $hasTime={time} onClick={handleInputClear} /> : ''}
      </Wrapper>
      {error && errorText ? <ErrorText>{errorText}</ErrorText> : ''}
    </>
  );
};

export default WOLoginInput;

const ClearBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  display: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: url(/assets/woori-mobile/icon/clear-grey-18.svg) no-repeat center / cover;
  ${(props) =>
    props.$hasButton &&
    css`
      right: 116px;
    `}
  ${(props) =>
    props.$hasTime &&
    css`
      right: 65px;
    `}
`;

const Wrapper = styled.div`
  position: relative;
  & + & {
    margin-top: 16px;
  }
  .auth-btn {
    position: absolute;
    right: 7px;
    top: 50%;
    transform: translateY(-50%);
  }
  &:focus-within {
    ${ClearBtn} {
      display: block;
    }
  }
`;

const CustomInput = styled(TextField)`
  .MuiFormLabel-root {
    color: var(--C-Dark-06, #9ea6b2);
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 400;
    line-height: 100%;
    top: -1px;
    &.Mui-error {
      color: var(--Red-02, #fc8686);
    }
  }
  .MuiFormLabel-root[data-shrink='true'] {
    top: 3px;
    left: 2px;
    color: var(--W-Dark-06);
    &.Mui-error {
      color: var(--Red-02, #fc8686);
    }
    &.Mui-focused {
      color: var(--W-Dark-11, #333);
      &.Mui-error {
        color: var(--Red-02, #fc8686);
      }
    }
  }

  .MuiInputBase-root {
    line-height: 100%;
    &.MuiOutlinedInput-root {
      border-radius: 8px;
      .MuiOutlinedInput-notchedOutline {
        border-width: 1px;
        border-color: var(--C-Dark-03, #e5e5ed);
      }
      &:hover {
        .MuiOutlinedInput-notchedOutline {
          border-color: var(--C-Dark-03, #e5e5ed);
        }
      }
    }
    &.MuiOutlinedInput-root {
      &.Mui-focused {
        .MuiOutlinedInput-notchedOutline {
          border-width: 1px;
          border-color: var(--W-Dark-11, #333);
          &:hover {
            .MuiOutlinedInput-notchedOutline {
              border-color: var(--W-Dark-11, #333);
            }
          }
        }
      }
    }
    .MuiInputBase-input {
      padding: 13px 14px;
      padding-right: 42px;
      color: var(--W-Dark-11, #333);
      font-family: Pretendard;
      font-size: 14px;
      font-weight: 700;
      line-height: 130%; /* 18.2px */
      text-overflow: ellipsis;
      ${(props) =>
        props.$hasButton &&
        css`
          padding-right: 146px;
        `}
      ${(props) =>
        props.$hasTime &&
        css`
          padding-right: 95px;
        `}
    }
    &.Mui-error {
      .MuiOutlinedInput-notchedOutline {
        border-color: var(--Red-02, #fc8686);
      }
      &:hover {
        .MuiOutlinedInput-notchedOutline {
          border-color: var(--Red-02, #fc8686);
        }
      }
      &.MuiOutlinedInput-root {
        &.Mui-focused {
          .MuiOutlinedInput-notchedOutline {
            border-color: var(--Red-02, #fc8686);
            &:hover {
              .MuiOutlinedInput-notchedOutline {
                border-color: var(--Red-02, #fc8686);
              }
            }
          }
        }
      }
    }
  }
`;

const Time = styled.div`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  color: var(--Red-01, #ff5d5d);
  font-size: 14px;
  font-weight: 700;
`;

const ErrorText = styled.div`
  margin-top: 8px;
  color: var(--Red-02, #fc8686);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`;
