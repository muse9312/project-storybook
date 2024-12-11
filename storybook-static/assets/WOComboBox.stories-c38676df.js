import{j as u}from"./jsx-runtime-ffb262ed.js";import{W as G}from"./WOComboBox-dd50b7bf.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-aa768a49.js";import"./WOLabel-9cebf678.js";import"./InputLabel-7ccef553.js";import"./composeClasses-4118efa7.js";import"./extends-15b115a7.js";import"./styled-80c0ceef.js";import"./TextField-8918e36b.js";import"./useId-a47493a3.js";import"./index-de0962f3.js";import"./Modal-9b120e55.js";import"./mergeSlotProps-69f81163.js";import"./inheritsLoose-c82a83d4.js";import"./index-d3ea75b5.js";import"./ownerWindow-684f99c0.js";import"./useSlotProps-f7cb9e67.js";import"./debounce-517eeb3c.js";import"./TextareaAutosize-63b07324.js";import"./MenuItem-cd9f00c5.js";import"./Chip-9a81eb61.js";import"./assertThisInitialized-081f9914.js";import"./Autocomplete-fbfec46a.js";import"./index-08d2ae59.js";const J=`import { Autocomplete, FormControl, MenuItem, Select, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { inputStyle, labelStyle, inputReadonlyStyle } from '../../styles/common.styled';
import WOLabel from './WOLabel';

// Type type = 'filter'

const WOComboBox = ({ label, labelColor, optionList, isAutoComplete, defaultValue, disabled, readonly, isError, width, type, isHorizontal, onChange }) => {
  // logic
  // defaultValue: { id: 1, label: 'data1' }

  const [value, setValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleSelectChange = (event) => {
    const { value } = event.target;
    const selectedItem = optionList.find((item) => item.id === value);
    setValue(value);
    onChange && selectedItem && onChange(selectedItem);
  };

  const handleAutoSelectChange = (_, newValue) => {
    setValue(newValue);
    onChange && onChange(newValue);
  };
  const handleAutoSelectInputChange = (_, newInputValue) => {
    setInputValue(newInputValue);
  };

  useEffect(() => {
    if (!!isAutoComplete) {
      setValue(defaultValue ? defaultValue.label : optionList[0].label);
      setInputValue(defaultValue ? defaultValue.label : optionList[0].label);
      return;
    }
    setValue(defaultValue ? defaultValue.id : optionList[0].id);
  }, [defaultValue, isAutoComplete, optionList]);

  // view
  return (
    <>
      {isAutoComplete ? (
        <AutocompleteCustom
          disablePortal
          id='combo-box'
          className={\`select-wrap autocomplete \${readonly ? 'readonly' : ''}\`}
          width={width}
          options={optionList}
          $isHorizontal={isHorizontal}
          $color={labelColor}
          renderInput={(params) => <TextField error={isError} {...params} label={label} />}
          value={value}
          inputValue={inputValue}
          disabled={disabled}
          readOnly={readonly}
          onChange={handleAutoSelectChange}
          onInputChange={handleAutoSelectInputChange}
          isOptionEqualToValue={(option, value) => option.value === value.value}
        />
      ) : (
        <SelectWrap width={width} className={\`select-wrap \${type === 'fds' ? 'type-fds' : ''}\`} $type={type} $isHorizontal={isHorizontal}>
          <FormControl disabled={disabled}>
            {label && <WOLabel label={label} color={labelColor} />}

            <SelectCustom
              labelId={label}
              id='select'
              className={\`select \${readonly ? 'readonly' : ''}\`}
              label={label}
              value={value}
              inputProps={{ readOnly: readonly }}
              error={isError}
              onChange={handleSelectChange}
              // defaultOpen={true}
            >
              {optionList.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.label}
                </MenuItem>
              ))}
            </SelectCustom>
          </FormControl>
        </SelectWrap>
      )}
    </>
  );
};

export default WOComboBox;

const AutocompleteCustom = styled(Autocomplete)\`
  width: \${(props) => \`\${props.width ? \`\${props.width}px\` : '100%'}\`};

  &.autocomplete {
    .MuiFormControl-root {
      display: flex;
      flex-direction: column;
      gap: 3px;
    }
    // label
    .MuiFormLabel-root {
      \${labelStyle}
    }

    // inputWrap
    .MuiInputBase-root {
      \${inputStyle}
    }
    &.readonly {
      .MuiInputBase-root {
        \${inputReadonlyStyle}
      }
    }

    // optionBox
    & + .MuiAutocomplete-popper {
      z-index: 999;
      .MuiPaper-root {
        max-height: 250px;
        .MuiAutocomplete-listbox {
          overflow: visible;
        }
      }
      // 각각의 옵션
      .MuiAutocomplete-option {
        font-family: 'Pretendard', sans-serif;
        color: #333;
        font-size: 12px;
        font-weight: 400;
      }
    }
  }

  .MuiOutlinedInput-notchedOutline {
    display: none;
  }

  // Horzontal
  \${(props) =>
    props.$isHorizontal &&
    css\`
      &.autocomplete {
        .MuiFormControl-root {
          flex-direction: row;
          gap: 2px;
        }
        .MuiFormLabel-root {
          min-width: 60px;
          width: 60px;
        }
      }
    \`}
\`;

const SelectWrap = styled.div\`
  width: \${(props) => \`\${props.width ? \`\${props.width}px\` : '100%'}\`};

  display: flex;
  flex-direction: column;

  .MuiFormControl-root {
    width: 100%;
    gap: 3px;
  }

  \${(props) =>
    props.$type === 'filter' &&
    css\`
      width: fit-content;
      height: fit-content;
      .select.MuiInputBase-root {
        height: 38px;
        .MuiInputBase-input {
          box-sizing: border-box;
          height: 38px;
          padding: 6px 32px 6px 0;
          padding-right: 20px !important;
        }

        .MuiSelect-icon {
          width: 14px;
          height: 14px;
          right: 0;
        }
      }
    \`}

  // Horzontal
  \${(props) =>
    props.$isHorizontal &&
    css\`
      .MuiFormControl-root {
        flex-direction: row;
        gap: 2px;
      }
      .MuiFormLabel-root {
        min-width: 60px;
        width: 60px;
      }
    \`}

    &.type-fds {
    width: auto;
    min-width: 120px;
    .MuiInputBase-root .MuiSelect-icon {
      background-image: url(/assets/woori-mobile/icon/arrow-dropdown-gray.svg);
      right: 10px;
    }
    .select.MuiInputBase-root {
      border: 1px solid rgba(189, 215, 255, 0.2);
      border-radius: 4px;
      height: 32px;
      font-size: 13px;
      font-weight: 400;
      color: #fff;

      .MuiInputBase-input {
        line-height: 32px;
        padding-top: 0;
        padding-bottom: 0;
        padding-left: 10px;
        height: 100%;
      }
    }
  }
\`;

const SelectCustom = styled(Select)\`
  // inputWrap

  &.MuiInputBase-root {
    \${inputStyle}

    &.Mui-disabled {
      border-color: var(--C-Dark-04);
      color: var(--W-Dark-07);
    }
  }

  .MuiOutlinedInput-notchedOutline {
    display: none;
  }
\`;
`,Ce={title:"WooriMobile/Form/WOComboBox",component:G,parameters:{layout:"centered",storySource:{source:J}},decorators:[N=>u.jsx("div",{style:{width:"320px"},children:u.jsx(N,{})})],tags:["autodocs"],argTypes:{label:{control:"text",description:"Label 입니다.",defaultValue:{summary:void 0},type:{summary:"text",required:!1}},labelColor:{control:"select",options:["default","blue","red"],description:"label 색상 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!1}},optionList:{control:"array",description:"콤보 데이터 리스트 입니다.",defaultValue:{summary:void 0},type:{summary:"array",required:!0}},isAutoComplete:{control:"boolean",description:"텍스트 입력 가능여부 입니다.",defaultValue:{summary:!1},type:{summary:"boolean",required:!1}},defaultValue:{control:"object",description:"진입시 선택될 value 입니다. 미입력시 첫번째 아이템 기본선택 입니다",defaultValue:{summary:void 0},type:{summary:"object",required:!1}},disabled:{control:"boolean",description:"disabled여부 입니다.",defaultValue:{summary:!1},type:{summary:"boolean",required:!1}},readonly:{control:"boolean",description:"readonly여부 입니다.",defaultValue:{summary:!1},type:{summary:"boolean",required:!1}},isError:{control:"boolean",description:"error여부 입니다.",defaultValue:{summary:!1},type:{summary:"boolean",required:!1}},width:{control:"number",description:"콤보박스 너비값 입니다.",defaultValue:{summary:230},type:{summary:"number",required:!1}},type:{control:"select",options:["default","filter"],description:"스타일 타입 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!1}},onChange:{control:"number",description:"메뉴 선택시 실행되는 메소드로 선택된 value를 넘겨줍니다",defaultValue:{summary:void 0},type:{summary:"function",required:!1}},itemAdd:{control:"boolean",description:"combobox추가 여부입니다.",defaultValue:{summary:!1},type:{summary:"boolean",required:!1}}}},e={args:{label:"label",optionList:[{id:1,label:"2024"},{id:2,label:"2023"},{id:3,label:"2022"}]}},n={args:{label:"label",optionList:[{id:1,label:"2024"},{id:2,label:"2023"},{id:3,label:"2022"}],isAutoComplete:!0}},l={args:{label:"label",optionList:[{id:1,label:"2024"},{id:2,label:"2023"},{id:3,label:"2022"}],disabled:!0}},o={args:{label:"label",optionList:[{id:1,label:"2024"},{id:2,label:"2023"},{id:3,label:"2022"}],isError:!0}},a={args:{label:"label",optionList:[{id:1,label:"2024"},{id:2,label:"2023"},{id:3,label:"2022"}],labelColor:"blue"}},t={args:{label:"label",optionList:[{id:1,label:"2024"},{id:2,label:"2023"},{id:3,label:"2022"}],labelColor:"red"}},r={args:{label:"label",optionList:[{id:1,label:"2024"},{id:2,label:"2023"},{id:3,label:"2022"}],readonly:!0}},i={args:{label:"label",optionList:[{id:1,label:"2024"},{id:2,label:"2023"},{id:3,label:"2022"}],defaultValue:[{id:1,label:"2024"}]}},s={args:{label:"label",width:180,optionList:[{id:1,label:"2024"},{id:2,label:"2023"},{id:3,label:"2022"}]}},d={args:{label:"label",optionList:[{id:1,label:"2024"},{id:2,label:"2023"},{id:3,label:"2022"}],type:"filter"}},p={args:{label:"label",optionList:[{id:1,label:"2024"},{id:2,label:"2023"},{id:3,label:"2022"}],itemAdd:!0}};var m,b,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'label',
    optionList: [{
      id: 1,
      label: '2024'
    }, {
      id: 2,
      label: '2023'
    }, {
      id: 3,
      label: '2022'
    }]
  }
}`,...(c=(b=e.parameters)==null?void 0:b.docs)==null?void 0:c.source}}};var y,f,g;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'label',
    optionList: [{
      id: 1,
      label: '2024'
    }, {
      id: 2,
      label: '2023'
    }, {
      id: 3,
      label: '2022'
    }],
    isAutoComplete: true
  }
}`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var h,x,C;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'label',
    optionList: [{
      id: 1,
      label: '2024'
    }, {
      id: 2,
      label: '2023'
    }, {
      id: 3,
      label: '2022'
    }],
    disabled: true
  }
}`,...(C=(x=l.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var V,L,w;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'label',
    optionList: [{
      id: 1,
      label: '2024'
    }, {
      id: 2,
      label: '2023'
    }, {
      id: 3,
      label: '2022'
    }],
    isError: true
  }
}`,...(w=(L=o.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var S,v,I;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'label',
    optionList: [{
      id: 1,
      label: '2024'
    }, {
      id: 2,
      label: '2023'
    }, {
      id: 3,
      label: '2022'
    }],
    labelColor: 'blue'
  }
}`,...(I=(v=a.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var M,A,$;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'label',
    optionList: [{
      id: 1,
      label: '2024'
    }, {
      id: 2,
      label: '2023'
    }, {
      id: 3,
      label: '2022'
    }],
    labelColor: 'red'
  }
}`,...($=(A=t.parameters)==null?void 0:A.docs)==null?void 0:$.source}}};var O,W,B;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'label',
    optionList: [{
      id: 1,
      label: '2024'
    }, {
      id: 2,
      label: '2023'
    }, {
      id: 3,
      label: '2022'
    }],
    readonly: true
  }
}`,...(B=(W=r.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var F,q,z;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'label',
    optionList: [{
      id: 1,
      label: '2024'
    }, {
      id: 2,
      label: '2023'
    }, {
      id: 3,
      label: '2022'
    }],
    defaultValue: [{
      id: 1,
      label: '2024'
    }]
  }
}`,...(z=(q=i.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var E,H,D;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'label',
    width: 180,
    optionList: [{
      id: 1,
      label: '2024'
    }, {
      id: 2,
      label: '2023'
    }, {
      id: 3,
      label: '2022'
    }]
  }
}`,...(D=(H=s.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};var R,T,j;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'label',
    optionList: [{
      id: 1,
      label: '2024'
    }, {
      id: 2,
      label: '2023'
    }, {
      id: 3,
      label: '2022'
    }],
    type: 'filter'
  }
}`,...(j=(T=d.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var k,P,_;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'label',
    optionList: [{
      id: 1,
      label: '2024'
    }, {
      id: 2,
      label: '2023'
    }, {
      id: 3,
      label: '2022'
    }],
    itemAdd: true
  }
}`,...(_=(P=p.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};const Ve=["Default","AutoComplete","Disabled","Error","LabelBlue","LabelRed","ReadOnly","DefaultValue","Width","TypeFilter","ItemAdd"];export{n as AutoComplete,e as Default,i as DefaultValue,l as Disabled,o as Error,p as ItemAdd,a as LabelBlue,t as LabelRed,r as ReadOnly,d as TypeFilter,s as Width,Ve as __namedExportsOrder,Ce as default};
