import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const WODualInput = ({ label, id, name, readonly, disabled, blind, placeholder, value, type, error }) => {
  const [inputText, setInputText] = useState(value ? value[0] : '');
  const [inputText2, setInputText2] = useState(value ? value[1] : '');
  const [isFocused, setIsFocused] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(false);
  const onChange = (e) => {
    setInputText(e.target.value);
  };
  const onChange2 = (e) => {
    setInputText2(e.target.value);
  };

  // 포커스 관리
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const clearText = () => {
    setInputText(''); // 입력 필드를 비우는 함수
  };

  const clearText2 = () => {
    setInputText2(''); // 두 번째 입력 필드를 비우는 함수
  };

  useEffect(() => {
    setIsReadOnly(readonly);
  }, [readonly]);

  return (
    <Wrap>
      <Label htmlFor={id} $blind={blind}>
        {label}
      </Label>
      <FormWrap $isFocused={isFocused} $disabled={disabled} $readOnly={isReadOnly} $error={error}>
        <InputGroup>
          <Form
            type={type || 'text'}
            id={id}
            name={name}
            readOnly={isReadOnly}
            disabled={disabled}
            placeholder={placeholder}
            onChange={onChange}
            value={inputText}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {inputText && <ClearBtn className='clear-btn' type='button' onClick={clearText} />} {/* 텍스트가 있을 때만 Clear 버튼 표시 */}
        </InputGroup>
        <Seperator />
        <InputGroup>
          <Form
            type={type || 'text'}
            id={`${id}-02`}
            name={name}
            readOnly={isReadOnly}
            disabled={disabled}
            placeholder={placeholder}
            onChange={onChange2}
            value={inputText2}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {inputText2 && <ClearBtn className='clear-btn' type='button' onClick={clearText2} />} {/* 텍스트가 있을 때만 Clear 버튼 표시 */}
        </InputGroup>
      </FormWrap>
    </Wrap>
  );
};

export default WODualInput;

const InputGroup = styled.div`
  position: relative;
  flex-grow: 1;
`;

const ClearBtn = styled.button`
  position: absolute;
  top: 50%;
  right: ${(props) => (props.$rightPadding ? `${props.$rightPadding - 16}px` : '0')}; // rightPadding 값에 따라 right 값을 동적으로 변경
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  background: url(/assets/woori-mobile/icon/input-clear-gray.svg) no-repeat center / cover;
`;

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3px 0px;
  width: 100%;
`;

const Label = styled.label`
  width: 100%;
  color: var(--W-Dark-10);
  font-size: 12px;
  font-weight: 700;
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

const FormWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  border-bottom: 1px solid ${(props) => (props.$isFocused ? 'var(--Blue-01)' : 'var(--C-Dark-04)')}; // focus 조건부 스타일
  ${(props) =>
    props.$error &&
    css`
      border-bottom: 1px solid var(--Red-02);
    `}
`;

const Form = styled.input`
  display: flex;
  width: 100%;
  height: 38px;
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  color: #333;
  background-color: transparent;
  &::placeholder {
    color: var(--W-Dark-06);
    font-weight: 400;
  }
  &:focus {
    border-color: ${(props) => (props.$error === 'error' ? 'var(--Red-02)' : 'var(--Blue-01)')};
    outline: none;
  }
  &:readonly {
    color: var(--W-Dark-07);
    & + .clear-btn {
      display: none;
    }
  }
  &:disabled {
    color: var(--W-Dark-07);
    &:focus {
      border: unset;
    }
    & + .clear-btn {
      display: none;
    }
  }
`;
const Seperator = styled.i`
  display: block;
  flex: 0 0 auto;
  width: 6px;
  height: 1px;
  background: var(--W-Dark-11);
`;
