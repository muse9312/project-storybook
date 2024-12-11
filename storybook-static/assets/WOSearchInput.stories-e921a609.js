import{j as t}from"./jsx-runtime-ffb262ed.js";import{W as i}from"./WOSearchInput-88444089.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-aa768a49.js";import"./TextField-8918e36b.js";import"./extends-15b115a7.js";import"./composeClasses-4118efa7.js";import"./styled-80c0ceef.js";import"./InputLabel-7ccef553.js";import"./useId-a47493a3.js";import"./index-de0962f3.js";import"./Modal-9b120e55.js";import"./mergeSlotProps-69f81163.js";import"./inheritsLoose-c82a83d4.js";import"./index-d3ea75b5.js";import"./ownerWindow-684f99c0.js";import"./useSlotProps-f7cb9e67.js";import"./debounce-517eeb3c.js";import"./TextareaAutosize-63b07324.js";import"./Autocomplete-fbfec46a.js";import"./index-08d2ae59.js";import"./Chip-9a81eb61.js";import"./assertThisInitialized-081f9914.js";const p=`import React, { useState } from 'react';
import styled from 'styled-components';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
const WOSearchInput = ({ tableData, onChange, placeholder }) => {
  const [val, setVal] = useState('');

  const handleAutoSelectChange = (_, newValue) => {
    setVal(newValue);
    onChange && onChange(newValue);
  };

  return (
    <Wrap>
      <SearchInputCustom
        id='highlights-demo'
        value={val}
        onChange={handleAutoSelectChange}
        options={tableData}
        getOptionLabel={(option) => option.title || ''}
        renderInput={(params) => <TextField {...params} placeholder={placeholder} />}
        renderOption={(props, option, { inputValue }) => {
          const matches = match(option.title, inputValue, { insideWords: true });
          const parts = parse(option.title, matches);
          return (
            <li {...props}>
              <div>
                {parts.map((part, index) => (
                  <span
                    key={index}
                    style={{
                      color: part.highlight ? 'var(--Blue-01)' : 'var(--C-Dark-08)',
                    }}>
                    {part.text}
                  </span>
                ))}
              </div>
            </li>
          );
        }}
      />
    </Wrap>
  );
};

export default WOSearchInput;

const Wrap = styled.div\`
  width: 100%;
\`;

const SearchInputCustom = styled(Autocomplete)\`
  &.MuiAutocomplete-root {
    .MuiInputBase-root {
      width: 100%;
      height: 42px;
      padding: 0 16px;
      background-color: transparent;
      display: flex;

      border-radius: 12px;
      border: 1px solid var(--C-Dark-02);
      background: #fff;
      justify-content: space-between;
      align-items: center;

      color: var(--C-Dark-12);
      font-size: 14px;
      font-weight: 400;
      line-height: 18;

      &.Mui-focused {
        border: 1px solid var(--Blue-01);
      }
    }

    legend {
      display: none;
    }

    .MuiOutlinedInput-root {
      .MuiAutocomplete-input {
        padding: 0 12px 0 0;
      }

      .MuiAutocomplete-endAdornment {
        right: 0;
      }
    }
    .MuiAutocomplete-endAdornment {
      top: unset;
    }

    &::placeholder {
      color: var(--C-Dark-06);
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
    }

    .MuiAutocomplete-clearIndicator {
      margin-right: 14px;
    }

    // searchIcon
    .MuiAutocomplete-endAdornment {
      .MuiAutocomplete-popupIndicator {
        width: 20px;
        height: 20px;
        right: 16px;
        background: url(/assets/woori-mobile/icon/search-blue.svg) no-repeat center;
        transform: none;
        .MuiSvgIcon-root {
          display: none;
        }
      }
    }

    // claseIcon
    .MuiAutocomplete-clearIndicator {
      width: 18px;
      height: 18px;
      margin: none;
      margin-right: 30px;
      background: url(/assets/woori-mobile/icon/search-close.svg) no-repeat center;
      transform: none;
      .MuiSvgIcon-root {
        display: none;
      }
    }
    .MuiOutlinedInput-notchedOutline {
      display: none;
    }
  }
\`;
`,V={title:"WooriMobile/Form/WOSearchInput",component:i,parameters:{layout:"centered",storySource:{source:p}},decorators:[a=>t.jsx("div",{style:{width:"320px"},children:t.jsx(a,{})})],tags:["autodocs"],argTypes:{tableData:{control:"object",description:"tableData 입니다.",defaultValue:{summary:void 0},type:{summary:"object",required:!0}},placeholder:{control:"object",description:"placeholder 입니다.",defaultValue:{summary:void 0},type:{summary:"object",required:!0}},onchange:{control:"object",description:"메뉴 선택시 실행되는 메소드로 선택된 value를 넘겨줍니다",defaultValue:{summary:void 0},type:{summary:"object",required:!0}}}},n={args:{placeholder:"업무 키워드를 검색하세요.",tableData:[{title:"세입계좌현황"},{title:"세입거래내역장"},{title:"Woori_Mobile/세입거래명세"}]}};var e,o,r;n.parameters={...n.parameters,docs:{...(e=n.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    placeholder: '업무 키워드를 검색하세요.',
    tableData: [{
      title: '세입계좌현황'
    }, {
      title: '세입거래내역장'
    }, {
      title: 'Woori_Mobile/세입거래명세'
    }]
  }
}`,...(r=(o=n.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const k=["Default"];export{n as Default,k as __namedExportsOrder,V as default};
