import{j as i}from"./jsx-runtime-ffb262ed.js";import{W as R}from"./WODateRangePicker-54e68b27.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-aa768a49.js";import"./WODatePicker-73f59ae1.js";import"./DatePicker-8b752de9.js";import"./extends-15b115a7.js";import"./composeClasses-4118efa7.js";import"./styled-80c0ceef.js";import"./ownerWindow-684f99c0.js";import"./index-8d47fad6.js";import"./TextField-8918e36b.js";import"./InputLabel-7ccef553.js";import"./useId-a47493a3.js";import"./index-de0962f3.js";import"./Modal-9b120e55.js";import"./mergeSlotProps-69f81163.js";import"./inheritsLoose-c82a83d4.js";import"./index-d3ea75b5.js";import"./useSlotProps-f7cb9e67.js";import"./debounce-517eeb3c.js";import"./TextareaAutosize-63b07324.js";import"./Chip-9a81eb61.js";import"./assertThisInitialized-081f9914.js";import"./colorManipulator-702d430b.js";import"./Dialog-d847e8ea.js";import"./common-e2496f61.js";import"./sweetalert2.all-b9842f3b.js";import"./WOLabel-9cebf678.js";const L=`import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import WODatePicker from './WODatePicker';
import WOLabel from './WOLabel';
import { inputErrorStyle } from '../../styles/common.styled';

const WODateRangePicker = ({ label, labelColor, periodValue, dateFormat, readonly, disabled, isError, onChange }) => {
  // logic
  // periodValue : ['2023-11-11', '2023-11-11']
  const [dateValue, setDateValue] = useState(['', '']);

  const handleChange = (index, newValue) => {
    const result = dateValue.map((item, itemIndex) => (index === itemIndex ? newValue : item));
    setDateValue(result);
    onChange && onChange(result);
  };

  useEffect(() => {
    periodValue && setDateValue(periodValue);
  }, [periodValue]);

  // view
  return (
    <Wrap>
      {label && <WOLabel label={label} color={labelColor} />}
      <DateWrap className={readonly ? 'readonly' : ''} $disabled={disabled} $isError={isError}>
        <WODatePicker
          label={''}
          value={periodValue && periodValue[0]}
          dateFormat={dateFormat}
          readonly={readonly}
          disabled={disabled}
          onChange={(newValue) => handleChange(0, newValue)}
          noneFocus={true}
        />
        <Seperator />
        <WODatePicker
          label={''}
          value={periodValue && periodValue[1]}
          dateFormat={dateFormat}
          readonly={readonly}
          disabled={disabled}
          onChange={(newValue) => handleChange(1, newValue)}
          noneFocus={true}
        />
      </DateWrap>
    </Wrap>
  );
};

export default WODateRangePicker;

const Wrap = styled.div\`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px 0;
\`;

const DateWrap = styled.div\`
  display: flex;
  align-items: center;
  gap: 14px;
  border-bottom: 1px solid var(--C-Dark-04);

  div.MuiInputBase-root {
    border: none;
    height: 38px;
    border-radius: 0;
    border-bottom: 0;
    // calendar 아이콘
    .MuiInputAdornment-root {
      margin: 0;
      .MuiIconButton-root {
        padding: 0;

        &:hover {
          background: none;
        }
      }
    }
  }

  &.readonly {
    color: var(--W-Dark-07);
    padding: 0;
  }

  \${(props) =>
    props.$isError &&
    css\`
      \${inputErrorStyle}
    \`}
\`;

const Seperator = styled.i\`
  display: block;
  flex: 0 0 auto;
  width: 6px;
  height: 1px;
  background-color: var(--C-Dark-11);
\`;
`,me={title:"WooriMobile/Form/WODateRangePicker",component:R,parameters:{layout:"centered",storySource:{source:L}},decorators:[P=>i.jsx("div",{style:{width:"320px"},children:i.jsx(P,{})})],tags:["autodocs"],argTypes:{label:{control:"text",description:"Label 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!1}},labelColor:{control:"select",options:["default","blue","red"],description:"label 색상 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!1}},periodValue:{control:"array",description:"날짜 value 입니다.",defaultValue:{summary:void 0},type:{summary:"array",required:!1}},dateFormat:{control:"select",options:["YYYY.MM.DD","YYYY.MM"],description:"날짜 Format 입니다.",defaultValue:{summary:"YYYY.MM.DD"},type:{summary:"string",required:!1}},disabled:{control:"boolean",description:"disabled여부 입니다.",defaultValue:{summary:!1},type:{summary:"boolean",required:!1}},isError:{control:"boolean",description:"error여부 입니다.",defaultValue:{summary:!1},type:{summary:"boolean",required:!1}},onChange:{control:"text",description:'날짜 변경시 실행되는 메소드로 바뀐 periodValue를 넘겨줍니다. (ex. ["2023-11-11", "2023-11-30"])',defaultValue:{summary:void 0},type:{summary:"function",required:!1}}}},e={args:{label:"label"}},r={args:{label:"label",periodValue:["2023-11-11","2023-12-11"]}},a={args:{label:"label",dateFormat:"YYYY.MM"}},o={args:{label:"label",dateFormat:"YYYY.MM",periodValue:["2023-11-11","2023-12-11"]}},n={args:{label:"label",periodValue:["2023-11-11","2023-12-11"],disabled:!0}},l={args:{label:"label",periodValue:["2023-11-11","2023-12-11"],isError:!0}},t={args:{label:"label",periodValue:["2023-11-11","2023-12-11"],labelColor:"blue"}},s={args:{label:"label",periodValue:["2023-11-11","2023-12-11"],labelColor:"red"}};var d,u,p;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'label'
  }
}`,...(p=(u=e.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,c,b;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'label',
    periodValue: ['2023-11-11', '2023-12-11']
  }
}`,...(b=(c=r.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var g,y,V;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'label',
    dateFormat: 'YYYY.MM'
  }
}`,...(V=(y=a.parameters)==null?void 0:y.docs)==null?void 0:V.source}}};var f,D,Y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'label',
    dateFormat: 'YYYY.MM',
    periodValue: ['2023-11-11', '2023-12-11']
  }
}`,...(Y=(D=o.parameters)==null?void 0:D.docs)==null?void 0:Y.source}}};var x,h,W;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'label',
    periodValue: ['2023-11-11', '2023-12-11'],
    disabled: true
  }
}`,...(W=(h=n.parameters)==null?void 0:h.docs)==null?void 0:W.source}}};var C,F,M;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'label',
    periodValue: ['2023-11-11', '2023-12-11'],
    isError: true
  }
}`,...(M=(F=l.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var v,S,k;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'label',
    periodValue: ['2023-11-11', '2023-12-11'],
    labelColor: 'blue'
  }
}`,...(k=(S=t.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var E,O,w;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'label',
    periodValue: ['2023-11-11', '2023-12-11'],
    labelColor: 'red'
  }
}`,...(w=(O=s.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};const ce=["Default","Value","DateFormat","DateFormatValue","Disabled","Error","LabelBlue","LabelRed"];export{a as DateFormat,o as DateFormatValue,e as Default,n as Disabled,l as Error,t as LabelBlue,s as LabelRed,r as Value,ce as __namedExportsOrder,me as default};
