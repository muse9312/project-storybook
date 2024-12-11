import{W as l}from"./WOLoginInput-341e3522.js";import"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-aa768a49.js";import"./TextField-8918e36b.js";import"./extends-15b115a7.js";import"./composeClasses-4118efa7.js";import"./styled-80c0ceef.js";import"./InputLabel-7ccef553.js";import"./useId-a47493a3.js";import"./index-de0962f3.js";import"./Modal-9b120e55.js";import"./mergeSlotProps-69f81163.js";import"./inheritsLoose-c82a83d4.js";import"./index-d3ea75b5.js";import"./ownerWindow-684f99c0.js";import"./useSlotProps-f7cb9e67.js";import"./debounce-517eeb3c.js";import"./TextareaAutosize-63b07324.js";const p=`import { TextField } from '@mui/material';
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

const ClearBtn = styled.button\`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  display: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: url(/assets/woori-mobile/icon/clear-grey-18.svg) no-repeat center / cover;
  \${(props) =>
    props.$hasButton &&
    css\`
      right: 116px;
    \`}
  \${(props) =>
    props.$hasTime &&
    css\`
      right: 65px;
    \`}
\`;

const Wrapper = styled.div\`
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
    \${ClearBtn} {
      display: block;
    }
  }
\`;

const CustomInput = styled(TextField)\`
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
      \${(props) =>
        props.$hasButton &&
        css\`
          padding-right: 146px;
        \`}
      \${(props) =>
        props.$hasTime &&
        css\`
          padding-right: 95px;
        \`}
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
\`;

const Time = styled.div\`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  color: var(--Red-01, #ff5d5d);
  font-size: 14px;
  font-weight: 700;
\`;

const ErrorText = styled.div\`
  margin-top: 8px;
  color: var(--Red-02, #fc8686);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
\`;
`,V={title:"WooriMobile/Form/WOLoginInput",component:l,parameters:{layout:"centered",storySource:{source:p}},tags:["autodocs"],argTypes:{name:{control:"text",description:"Input Name 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}},id:{control:"text",description:"Input Id 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}},label:{control:"text",description:"Input Label 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}},readonly:{control:"boolean",description:"Input readonly 상태입니다.",defaultValue:{summary:void 0},type:{summary:"boolean",required:!1}},disabled:{control:"boolean",description:"Input disabled 상태입니다.",defaultValue:{summary:void 0},type:{summary:"boolean",required:!1}},blind:{control:"boolean",description:"label 화면에 보이지 않는 상태입니다.",defaultValue:{summary:void 0},type:{summary:"boolean",required:!1}},rightText:{control:"text",description:"Input rightText 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!1}}}},n={args:{name:"input01",id:"input01-01",label:"아이디",placeholder:"아이디를 입력해 주세요."}},e={args:{name:"input01",id:"input01-01",label:"아이디",placeholder:"아이디를 입력해 주세요.",error:!0}};var t,r,o;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    name: 'input01',
    id: 'input01-01',
    label: '아이디',
    placeholder: '아이디를 입력해 주세요.'
  }
}`,...(o=(r=n.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var u,a,i;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    name: 'input01',
    id: 'input01-01',
    label: '아이디',
    placeholder: '아이디를 입력해 주세요.',
    error: true
  }
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const L=["Default","Error"];export{n as Default,e as Error,L as __namedExportsOrder,V as default};
