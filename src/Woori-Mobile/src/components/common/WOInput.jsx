import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

const WOInput = ({ label, id, name, height, size, readonly, disabled, blind, placeholder, value, rightText, type, styleType }) => {
  const [inputText, setInputText] = useState(value || '');
  const rightTextRef = useRef(null); // rightText의 ref를 생성
  const [rightPadding, setRightPadding] = useState(0); // 기본 오른쪽 패딩 값

  console.log(rightText);

  useEffect(() => {
    if (rightTextRef.current) {
      setRightPadding(rightTextRef.current.offsetWidth); // rightText의 너비 + 기본 패딩 + 6px
    }
  }, [rightText]); // rightText가 변경될 때마다 실행

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const clearText = () => {
    setInputText(''); // 입력 필드를 비우는 함수
  };

  return (
    <Wrap $size={size} className='input'>
      {label && (
        <Label htmlFor={id} $blind={blind}>
          {label}
        </Label>
      )}
      <FormWrap>
        <Form
          type={type || 'text'}
          id={id}
          name={name}
          readOnly={readonly}
          disabled={disabled}
          placeholder={placeholder}
          onChange={onChange}
          value={inputText}
          $styleType={styleType}
          $height={height}
          $rightPadding={rightPadding} // 오른쪽 패딩 동적 적용
        />
        {inputText && <ClearBtn className='clear-btn' type='button' onClick={clearText} $rightPadding={rightPadding} />}
        {/* 텍스트가 있을 때만 Clear 버튼 표시 */}
      </FormWrap>
      {rightText && <RightText ref={rightTextRef}>{rightText}</RightText>}
    </Wrap>
  );
};

export default WOInput;

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
  line-height: 16px;
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
  position: relative;
`;
const ClearBtn = styled.button`
  position: absolute;
  top: 50%;
  right: ${(props) => (props.$rightPadding ? `${props.$rightPadding}px` : '0')}; // rightPadding 값에 따라 right 값을 동적으로 변경
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  background: url(/assets/woori-mobile/icon/input-clear-gray.svg) no-repeat center / cover;
`;

const Form = styled.input`
  display: flex;
  width: 100%;
  height: ${(props) => (props.$height ? `${props.$height}px` : '38px')};
  padding: 7px ${(props) => props.$rightPadding + 20}px 7px 0; // 오른쪽 패딩 동적 적용
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  border-bottom: 1px solid ${(props) => (props.$styleType === 'email' ? 'none' : props.$styleType === 'error' ? 'var(--Red-02)' : 'var(--W-Dark-04)')};
  background-color: transparent;
  color: var(--W-Dark-11);
  &::placeholder {
    color: var(--W-Dark-06);
    font-weight: 400;
  }
  &:focus {
    border-color: ${(props) => (props.$styleType === 'error' ? 'var(--Red-02)' : 'var(--Blue-01)')};
    outline: none;
  }
  &:readonly {
    color: var(--W-Dark-07);
    border-bottom: 1px solid var(--C-Dark-04);
    & + .clear-btn {
      display: none;
    }
  }
  &:disabled {
    color: var(--W-Dark-07);
    border-bottom: 1px solid var(--C-Dark-04);
    &:focus {
      border: unset;
    }
    & + .clear-btn {
      display: none;
    }
  }
`;

const RightText = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  color: var(--W-Dark-11);
  font-size: 14px;
  font-weight: 700;
  line-height: 38px;
`;
