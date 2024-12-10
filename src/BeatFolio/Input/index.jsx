import React, { useEffect, useRef, useState } from 'react';
import { css, styled } from 'styled-components';

const Input = React.forwardRef((props, ref) => {
  const [inputText, setInputText] = useState('');
  const [rightTextWidth, setRightTextWidth] = useState(0);
  const [timeWidth, setTimeWidth] = useState(0);
  const rightTextRef = useRef(null);
  const timeRef = useRef(null);

  useEffect(() => {
    setInputText(props.value || '');
  }, [props.value]);

  useEffect(() => {
    if (rightTextRef.current) {
      setRightTextWidth(rightTextRef.current.offsetWidth);
    }
    if (timeRef.current) {
      setTimeWidth(timeRef.current.offsetWidth);
    }
  }, [props.button, props.rightText, props.time]);

  const onChangeInput = (e) => {
    setInputText(e.target.value);
    props.onChange && props.onChange(e);
  };

  const onReset = (e) => {
    e.preventDefault();
    setInputText('');
  };

  return (
    <InputBox>
      <Label bg={props.bg} labelVisible={props.labelVisible}>
        {props.label}
      </Label>
      <InputBtnWrap>
        <InputComponent
          as={props.as}
          ref={ref}
          name={props.name}
          id={props.id}
          placeholder={props.placeholder}
          value={inputText}
          bg={props.bg}
          search={props.search}
          noneClear={props.noneClear}
          onChange={onChangeInput}
          disabled={props.disabled}
          rightText={props.rightText}
          rightTextWidth={rightTextWidth}
          time={props.time}
          timeWidth={timeWidth}
          error={props.error}
          errorMsg={props.errorMsg}
          autoComplete='off'
          maxlength={props.maxlength}
          pattern={props.pattern}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
        />
        {inputText !== '' && (
          <InputClear
            noneClear={props.noneClear}
            bg={props.bg}
            onMouseDown={onReset}
            right={Math.max(rightTextWidth, timeWidth) + 24}
            rightText={props.rightText}
            time={props.time}
          />
        )}
        {props.time && (
          <Time ref={timeRef} button={props.button}>
            {props.time}
          </Time>
        )}
        {props.rightText && <InputRightText ref={rightTextRef}>{props.rightText}</InputRightText>}
      </InputBtnWrap>
      {props.errorMsg && (
        <InputError>
          {props.errorMsg.split('\n').map((msg) => (
            <>
              {msg}
              <br />
            </>
          ))}
        </InputError>
      )}
      {props.completeMsg && <InputComplete>{props.completeMsg}</InputComplete>}
      {props.defaultMsg && <InputDefault>{props.defaultMsg}</InputDefault>}
    </InputBox>
  );
});

export default Input;

const InputBox = styled.div`
  position: relative;
  width: 100%;
`;
const InputBtnWrap = styled.div`
  position: relative;
`;

const InputClear = styled.button`
  display: none;
  position: absolute;
  top: 12px;
  right: ${(props) => (props.rightText || props.time ? `${props.right}px` : '12px')};
  width: 16px;
  height: 16px;
  background: ${(props) =>
    (props.bg = 'black'
      ? 'url("./assets/BeatFolio/input-clear-dark.png") no-repeat center / cover'
      : 'url("./assets/BeatFolio/input-clear-black.png") no-repeat center / cover')};
  ${(props) =>
    props.noneClear &&
    `
        opacity:0;
    `}
`;

const InputComponent = styled.input`
  width: 100%;
  height: 40px;
  padding: ${(props) => (props.rightText ? `10px ${props.rightTextWidth + 50}px 9px 12px` : '10px 40px 9px 12px')};
  padding: ${(props) => (props.time ? `10px ${props.timeWidth + 50}px 9px 12px` : '10px 40px 9px 12px')};
  border-radius: 10px;
  position: relative;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  border: 1px solid transparent;
  &::placeholder {
    color: #999;
  }
  &:focus-visible {
    outline: none;
  }

  ${(props) =>
    props.bg === 'sky' &&
    css`
      background-color: #f4f6f8;
      color: #000;
      &:focus {
        border: 1px solid #000;
        & + ${InputClear} {
          display: block;
        }
      }
      &:disabled {
        color: #c8cfd4;
        &::placeholder {
          color: #c8cfd4;
        }
      }
    `}
  ${(props) =>
    props.bg === 'white' &&
    css`
      background-color: #fff;
      color: #000;
      &:focus {
        border: 1px solid #000;
        & + ${InputClear} {
          display: block;
        }
      }
      &:disabled {
        color: #aaa;
        &::placeholder {
          color: #aaa;
        }
      }
    `}
    ${(props) =>
    props.bg === 'black' &&
    css`
      background-color: #181e26;
      color: #fff;
      &:focus {
        border: 1px solid #494870;
        & + ${InputClear} {
          display: block;
        }
      }
      &:disabled {
        color: #999;
        &::placeholder {
          color: #999;
        }
      }
    `}

    ${(props) =>
    props.search &&
    css`
      &:focus {
        border: 1px solid transparent;
        & + ${InputClear} {
          display: block;
        }
      }
    `}
    ${(props) =>
    props.errorMsg &&
    css`
      border: 1px solid red;
      &:focus {
        border: 1px solid red;
      }
    `}
    ${(props) =>
    props.error &&
    css`
      border: 1px solid red;
      &:focus {
        border: 1px solid red;
      }
    `}
`;
const Label = styled.label`
  ${(props) =>
    props.labelVisible
      ? css`
          font-size: 14px;
          font-weight: 700;
          line-height: 21px;
          color: ${props.bg === 'black' ? '#fff' : '#000'};
          & + ${InputBtnWrap} {
            margin-top: 12px;
          }
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

const InputRightText = styled.span`
  display: block;
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  font-size: 14px;
  font-weight: 500;
  color: #999;
`;

const InputError = styled.span`
  display: block;
  padding: 8px 6px 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #f53e50;
`;
const InputComplete = styled.span`
  display: block;
  padding: 8px 6px 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #72aeff;
`;
const InputDefault = styled.span`
  display: block;
  padding: 8px 6px 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #555;
`;

// 임시 타임

const Time = styled.div`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #777;
`;
