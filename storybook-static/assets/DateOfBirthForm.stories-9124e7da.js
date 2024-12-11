import{j as c}from"./jsx-runtime-ffb262ed.js";import{r as d}from"./index-76fb7be0.js";import{I as m}from"./index-263a97c4.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-aa768a49.js";const o=()=>{const[a,t]=d.useState(""),p=s=>{const e=s.target.value,l=e[e.length-1];s.nativeEvent.inputType==="deleteContentBackward"?a.endsWith("*")?t(e.slice(0,-6)):a.includes("-")&&t(e.slice(0,-1)):e.length===6&&l!=="-"?t(e+"-"):e.length===8&&l!=="*"?t(e+"******"):t(e)};return c.jsx(m,{type:"text",pattern:"\\d*",maxlength:14,label:"생년월일",name:"input01",bg:"white",placeholder:"생년월일 7자리",labelVisible:!0,value:a,onChange:p})},h=o;o.__docgenInfo={description:"",methods:[],displayName:"DateOfBirthForm"};const g=`import React, { useState } from 'react';
import Input from '../Input';

const DateOfBirthForm = () => {
  const [value, setValue] = useState('');

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const lastChar = inputValue[inputValue.length - 1];
    const inputType = e.nativeEvent.inputType;

    if (inputType === 'deleteContentBackward') {
      if (value.endsWith('*')) {
        setValue(inputValue.slice(0, -6)); // Removes last * and preceding digit
      } else if (value.includes('-')) {
        setValue(inputValue.slice(0, -1)); // Removes - and preceding digit
      }
    } else {
      if (inputValue.length === 6 && lastChar !== '-') {
        setValue(inputValue + '-');
      } else if (inputValue.length === 8 && lastChar !== '*') {
        setValue(inputValue + '******');
      } else {
        setValue(inputValue);
      }
    }
  };

  return (
    <Input
      type='text'
      pattern='\\d*'
      maxlength={14}
      label='생년월일'
      name='input01'
      bg='white'
      placeholder='생년월일 7자리'
      labelVisible
      value={value}
      onChange={handleInputChange}
    />
  );
};

export default DateOfBirthForm;
`,y={title:"BeatFolio/Input/DateOfBirthForm",component:h,parameters:{layout:"padded",storySource:{source:g}},tags:["autodocs"]},n={args:{}};var r,i,u;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {}
}`,...(u=(i=n.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const B=["Input"];export{n as Input,B as __namedExportsOrder,y as default};
