import{j as i}from"./jsx-runtime-ffb262ed.js";import{r as d}from"./index-76fb7be0.js";import{u as c,a as u}from"./styled-components.browser.esm-aa768a49.js";import{l as j,i as I,a as C,W as O}from"./WOLabel-9cebf678.js";import{T as z,F as W,S as A}from"./TextField-8918e36b.js";import{M as H}from"./MenuItem-cd9f00c5.js";import{A as N}from"./Autocomplete-fbfec46a.js";const P=({label:t,labelColor:x,optionList:r,isAutoComplete:s,defaultValue:n,disabled:m,readonly:a,isError:h,width:g,type:f,isHorizontal:M,onChange:l})=>{const[b,p]=d.useState(""),[y,w]=d.useState(""),S=o=>{const{value:e}=o.target,$=r.find(F=>F.id===e);p(e),l&&$&&l($)},v=(o,e)=>{p(e),l&&l(e)},B=(o,e)=>{w(e)};return d.useEffect(()=>{if(s){p(n?n.label:r[0].label),w(n?n.label:r[0].label);return}p(n?n.id:r[0].id)},[n,s,r]),i.jsx(i.Fragment,{children:s?i.jsx(_,{disablePortal:!0,id:"combo-box",className:`select-wrap autocomplete ${a?"readonly":""}`,width:g,options:r,$isHorizontal:M,$color:x,renderInput:o=>i.jsx(z,{error:h,...o,label:t}),value:b,inputValue:y,disabled:m,readOnly:a,onChange:v,onInputChange:B,isOptionEqualToValue:(o,e)=>o.value===e.value}):i.jsx(k,{width:g,className:`select-wrap ${f==="fds"?"type-fds":""}`,$type:f,$isHorizontal:M,children:i.jsxs(W,{disabled:m,children:[t&&i.jsx(O,{label:t,color:x}),i.jsx(E,{labelId:t,id:"select",className:`select ${a?"readonly":""}`,label:t,value:b,inputProps:{readOnly:a},error:h,onChange:S,children:r.map(o=>i.jsx(H,{value:o.id,children:o.label},o.id))})]})})})},_=c(N)`
  width: ${t=>`${t.width?`${t.width}px`:"100%"}`};

  &.autocomplete {
    .MuiFormControl-root {
      display: flex;
      flex-direction: column;
      gap: 3px;
    }
    // label
    .MuiFormLabel-root {
      ${j}
    }

    // inputWrap
    .MuiInputBase-root {
      ${I}
    }
    &.readonly {
      .MuiInputBase-root {
        ${C}
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
  ${t=>t.$isHorizontal&&u`
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
    `}
`,k=c.div`
  width: ${t=>`${t.width?`${t.width}px`:"100%"}`};

  display: flex;
  flex-direction: column;

  .MuiFormControl-root {
    width: 100%;
    gap: 3px;
  }

  ${t=>t.$type==="filter"&&u`
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
    `}

  // Horzontal
  ${t=>t.$isHorizontal&&u`
      .MuiFormControl-root {
        flex-direction: row;
        gap: 2px;
      }
      .MuiFormLabel-root {
        min-width: 60px;
        width: 60px;
      }
    `}

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
`,E=c(A)`
  // inputWrap

  &.MuiInputBase-root {
    ${I}

    &.Mui-disabled {
      border-color: var(--C-Dark-04);
      color: var(--W-Dark-07);
    }
  }

  .MuiOutlinedInput-notchedOutline {
    display: none;
  }
`;P.__docgenInfo={description:"",methods:[],displayName:"WOComboBox"};export{P as W};
