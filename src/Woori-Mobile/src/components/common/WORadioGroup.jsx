import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const WORadioGroup = ({ title, radioType, size, radioItems, onChange, defaultCheckedValue, readonly, disabled }) => {
  const [value, setValue] = useState('');

  radioType = radioType === null ? 'normal' : radioType;

  const handleChange = (e) => {
    if (readonly) return; // Prevent changes if readonly is true
    const { value } = e.target;
    if (!value) return;
    const checkedItem = radioItems.find((item) => item.value === value);
    setValue(value);
    onChange && onChange(checkedItem);
  };

  useEffect(() => {
    if (defaultCheckedValue) {
      setValue(defaultCheckedValue.value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <RadioBoxWrap>
        {title && <RadioBoxTitle $radioType={radioType}>{title}</RadioBoxTitle>}
        <RadioBoxInner $radioType={radioType}>
          {radioItems &&
            radioItems.map((item) => (
              <Wrap key={item.id} $radioType={radioType} $size={size}>
                {readonly ? (
                  value === item.value && <Label>{item.label}</Label>
                ) : (
                  <>
                    <FormWrap className={radioType === 'button' ? 'button-type' : ''} $size={size}>
                      <Form
                        type='radio'
                        name={item.name}
                        id={item.id}
                        value={item.value}
                        checked={value === item.value}
                        onChange={handleChange}
                        disabled={item.disabled || disabled}
                      />

                      {radioType === 'normal' && <FormRadioCircle className='radio-circle' />}
                      {radioType === 'button' && <Label htmlFor={item.id}>{item.label}</Label>}
                    </FormWrap>
                    {radioType === 'normal' && <Label htmlFor={item.id}>{item.label}</Label>}
                  </>
                )}
              </Wrap>
            ))}
        </RadioBoxInner>
      </RadioBoxWrap>
    </>
  );
};

export default WORadioGroup;

const RadioBoxWrap = styled.div`
  width: 100%;
`;
const RadioBoxTitle = styled.div`
  color: var(--W-Dark-10);
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  margin-bottom: ${(props) => (props.$radioType === 'normal' ? '3' : '10')}px;
`;

const RadioBoxInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: ${(props) => (props.$radioType === 'normal' ? '0 12px' : '4px')};

  > div:first-child:nth-last-child(2),
  div:first-child:nth-last-child(2) ~ div {
    width: calc(50% - ${(props) => (props.$radioType === 'normal' ? '12px' : '4px')} / 2);

    label {
      max-width: none;
    }

    ${(props) =>
      props.$radioType === 'normal' &&
      css`
        flex-basis: auto;
      `}
  }

  > div:only-child {
    width: 100%;

    label {
      max-width: none;
    }
  }
`;

const FormWrap = styled.div`
  position: relative;

  &.button-type {
    width: 100%;

    input {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;

      &:checked + label {
        background-color: var(--Blue-01);
        border-color: var(--Blue-01);
        color: var(--White);
      }

      &:disabled + label {
        background-color: var(--White);
        border-color: var(--C-Dark-04);
        color: var(--C-Dark-06);
        cursor: default;
      }
    }

    label {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      min-height: 38px;
      padding: 0 8px;
      border-radius: 6px;
      border: 1px solid var(--C-Dark-04);
      font-size: 13px;
      font-weight: 700;
      color: var(--C-Dark-10);
      background-color: var(--White);
      line-height: 1;
    }
    ${(props) =>
      props.$size === 'lg' &&
      css`
        label {
          height: 46px;
          color: var(--Cool-Dark-10, #263752);
          font-size: 16px;
          font-weight: 700;
          border-radius: 8px;
        }
      `}
  }
`;

const FormRadioCircle = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 7px;
  height: 7px;
  border-radius: 100%;
  background-color: var(--W-Dark-11);
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  width: calc((100% - ${(props) => (props.$radioType === 'normal' ? '18' : '4') * 2}px) / 3);
  height: 38px;
  ${(props) =>
    props.$radioType === 'normal' &&
    css`
      flex-basis: fit-content;
    `}

  > label {
    margin-left: 6px;
  }
  ${(props) =>
    props.$size === 'lg' &&
    css`
      height: 46px;
    `}
`;

const Label = styled.label`
  font-size: 13px;
  font-weight: 700;
  color: var(--W-Dark-11);
  cursor: pointer;
  line-height: 16px;
`;

const Form = styled.input`
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid var(--C-Dark-05);
  &:checked {
    & + .radio-circle {
      display: block;
    }
  }
  &:disabled {
    & + .radio-circle {
      background-color: var(--W-Dark-11);
    }
  }
`;
