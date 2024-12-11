import{j as i}from"./jsx-runtime-ffb262ed.js";import{W as I}from"./WODatePicker-73f59ae1.js";import{d as L,a as j}from"./common-e2496f61.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-aa768a49.js";import"./DatePicker-8b752de9.js";import"./extends-15b115a7.js";import"./composeClasses-4118efa7.js";import"./styled-80c0ceef.js";import"./ownerWindow-684f99c0.js";import"./index-8d47fad6.js";import"./TextField-8918e36b.js";import"./InputLabel-7ccef553.js";import"./useId-a47493a3.js";import"./index-de0962f3.js";import"./Modal-9b120e55.js";import"./mergeSlotProps-69f81163.js";import"./inheritsLoose-c82a83d4.js";import"./index-d3ea75b5.js";import"./useSlotProps-f7cb9e67.js";import"./debounce-517eeb3c.js";import"./TextareaAutosize-63b07324.js";import"./Chip-9a81eb61.js";import"./assertThisInitialized-081f9914.js";import"./colorManipulator-702d430b.js";import"./Dialog-d847e8ea.js";import"./WOLabel-9cebf678.js";import"./sweetalert2.all-b9842f3b.js";const O=`import React, { useEffect, useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import styled, { css } from 'styled-components';
import dayjs from 'dayjs';
import { defaultDateFormat } from '../../data/common';
import WOLabel from './WOLabel';
import { disabledIconStyle, inputErrorStyle, inputReadonlyStyle, labelStyle } from '../../styles/common.styled';
const WODatePicker = ({ label, labelColor, value, dateFormat, readonly, disabled, isError, onChange, noneFocus }) => {
  // logic
  // dateValue : dayjs타입 날짜
  // formattingValue : '2023-11-11'
  const [dateValue, setDateValue] = useState('');

  const handleChange = (newValue) => {
    // calendar icon 클릭으로 데이터 바꾸는 경우

    const { $y: year, $M: mm, $D: day } = newValue;

    const month = mm + 1;
    const formatDate = \`\${year}-\${month >= 10 ? month : \`0\${month}\`}-\${day >= 10 ? day : \`0\${day}\`}\`; // 2023-11-11
    setDateValue(newValue);
    onChange && onChange(formatDate);
  };

  useEffect(() => {
    setDateValue(value ? dayjs(value) : '');
  }, [value]);

  const CalendarIcon = () => {
    // return '<img src='/assets/woori-mobile/icon/calendar.svg' alt='Date picker opening icon' width={14} />';
  };

  // view
  return (
    <Wrap className='date-picker-wrap'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {label && <WOLabel label={label} color={labelColor} />}
        <DatePickerCustom
          className={\`date-picker \${readonly ? 'readonly' : ''}\`}
          label={''}
          format={dateFormat || defaultDateFormat}
          slots={{ openPickerIcon: CalendarIcon }}
          value={dateValue ? dateValue : null}
          readOnly={readonly}
          disabled={disabled}
          $isError={isError}
          onChange={handleChange}
          $noneFocus={noneFocus}
        />
      </LocalizationProvider>
    </Wrap>
  );
};

export default WODatePicker;

const Wrap = styled.div\`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px 0;
\`;

const DatePickerCustom = styled(DatePicker)\`
  &.date-picker {
    display: flex;
    flex-direction: column;
    gap: 4px 0;
  }

  .MuiInputBase-root:focus-within {
  }

  // label
  .MuiFormLabel-root {
    \${labelStyle}
  }

  // datePicker
  .MuiInputBase-root {
    width: 100%;
    height: 38px;
    padding-right: 0;
    border-radius: 0;
    display: flex;
    border-bottom: 1px solid var(--C-Dark-04);
    justify-content: space-between;
    align-items: center;

    font-family: 'Pretendard', sans-serif;
    color: var(--W-Dark-11);
    font-size: 14px;
    font-weight: 700;

    legend {
      display: none;
    }

    background: url('/assets/woori-mobile/icon/calendar.svg') no-repeat center right / 18px;

    .MuiButtonBase-root {
      width: 18px;
      height: 18px;
    }

    &.Mui-disabled {
      color: var(--W-Dark-07);
      border-color: var(--C-Dark-04);
      border-radius: 0;
      .MuiIconButton-root {
        img {
          \${disabledIconStyle}
        }
      }
    }

    // calendar 아이콘
    .MuiInputAdornment-root {
      margin: 0 2px 0 0;
      .MuiIconButton-root {
        padding: 0;
        display: block;
        margin-right: 0;

        &:hover {
          background: none;
        }
      }
    }

    // input
    .MuiInputBase-input {
      display: flex;
      height: 100%;
      box-sizing: border-box;
      padding: 0;
      -webkit-text-fill-color: initial;
      &::placeholder {
        opacity: 1;
        font-weight: 400;
        color: var(--W-Dark-06);
      }
    }

    &.readonly {
      .MuiInputBase-root {
        \${inputReadonlyStyle}
      }
    }

    \${(props) =>
      props.$isError &&
      css\`
        .MuiInputBase-root {
          \${inputErrorStyle}
        }
      \`}

    .MuiOutlinedInput-notchedOutline {
      display: none;
    }
  }
\`;
`,pe={title:"WooriMobile/Form/WODatePicker",component:I,parameters:{layout:"centered",storySource:{source:O}},decorators:[E=>i.jsx("div",{style:{width:"320px"},children:i.jsx(E,{})})],tags:["autodocs"],argTypes:{label:{control:"text",description:"Label 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!1}},labelColor:{control:"select",options:["default","blue","red"],description:"label 색상 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!1}},value:{control:"text",description:"날짜 value 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!1}},dateFormat:{control:"select",options:[L,j],description:'날짜 Format 으로 "dateFormatMonth"와 같은 변수로 사용합니다',defaultValue:{summary:"YYYY.MM.DD"},type:{summary:"string",required:!1}},disabled:{control:"boolean",description:"disabled여부 입니다.",defaultValue:{summary:!1},type:{summary:"boolean",required:!1}},error:{control:"boolean",description:"error여부 입니다.",defaultValue:{summary:!1},type:{summary:"boolean",required:!1}},onChange:{control:"text",description:'날짜 변경시 실행되는 메소드로 바뀐 value를 넘겨줍니다. (ex. "2023-11-11")',defaultValue:{summary:void 0},type:{summary:"function",required:!1}}}},e={args:{label:"label"}},a={args:{label:"label",value:"2023-11-11"}},r={args:{label:"label",dateFormat:"YYYY.MM"}},n={args:{label:"label",dateFormat:"YYYY.MM",value:"2023-11-11"}},o={args:{label:"label",value:"2023-11-11",disabled:!0}},t={args:{label:"label",value:"2023-11-11",isError:!0}},l={args:{label:"label",value:"2023-11-11",labelColor:"blue"}},s={args:{label:"label",value:"2023-11-11",labelColor:"red"}};var d,u,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'label'
  }
}`,...(m=(u=e.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var c,p,b;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'label',
    value: '2023-11-11'
  }
}`,...(b=(p=a.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var y,g,f;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'label',
    dateFormat: 'YYYY.MM'
  }
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,D,h;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'label',
    dateFormat: 'YYYY.MM',
    value: '2023-11-11'
  }
}`,...(h=(D=n.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};var x,k,M;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'label',
    value: '2023-11-11',
    disabled: true
  }
}`,...(M=(k=o.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var F,V,C;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'label',
    value: '2023-11-11',
    isError: true
  }
}`,...(C=(V=t.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var S,Y,w;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'label',
    value: '2023-11-11',
    labelColor: 'blue'
  }
}`,...(w=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:w.source}}};var P,$,W;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'label',
    value: '2023-11-11',
    labelColor: 'red'
  }
}`,...(W=($=s.parameters)==null?void 0:$.docs)==null?void 0:W.source}}};const be=["Default","Value","DateFormat","DateFormatValue","Disabled","Error","LabelBlue","LabelRed"];export{r as DateFormat,n as DateFormatValue,e as Default,o as Disabled,t as Error,l as LabelBlue,s as LabelRed,a as Value,be as __namedExportsOrder,pe as default};
