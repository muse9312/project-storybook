import{j as i}from"./jsx-runtime-ffb262ed.js";import{r as x}from"./index-76fb7be0.js";import{u as h,a}from"./styled-components.browser.esm-aa768a49.js";import{l as z,i as S,c as C}from"./common.styled-d4908734.js";import{W as B}from"./WOLabel-293b1256.js";import{T as A,F as k,S as H}from"./TextField-8918e36b.js";import{M as N}from"./MenuItem-cd9f00c5.js";import{A as P}from"./Autocomplete-fbfec46a.js";const _=({label:t,labelColor:g,optionList:n,isAutoComplete:l,defaultValue:r,disabled:$,readonly:s,isError:f,width:M,height:b,type:p,isHorizontal:w,onChange:c,placeholder:d})=>{const[y,u]=x.useState(""),[v,m]=x.useState(""),F=o=>{const{value:e}=o.target,I=n.find(W=>W.id===e);u(e),c&&I&&c(I)},O=(o,e)=>{u(e),c&&c(e)},j=(o,e)=>{m(e)};return x.useEffect(()=>{p==="type01"&&!r?l&&m(d):l?(u(r?r.label:n[0].label),m(r?r.label:n[0].label)):u(r?r.id:n[0].id)},[r,l,n,d,p]),i.jsx(i.Fragment,{children:l?i.jsx(E,{disablePortal:!0,id:"combo-box",className:`select-wrap autocomplete ${s?"readonly":""}`,width:M,$height:b,options:n,$isHorizontal:w,$color:g,renderInput:o=>i.jsx(A,{error:f,...o,$type:p,label:t,placeholder:d}),value:y,inputValue:v,disabled:$,readOnly:s,$type:p,onChange:O,onInputChange:j,isOptionEqualToValue:(o,e)=>o.value===e.value}):i.jsx(T,{width:M,className:"select-wrap",$type:p,$isHorizontal:w,$height:b,children:i.jsxs(k,{disabled:$,children:[t&&i.jsx(B,{label:t,color:g}),i.jsx(D,{labelId:t,id:"select",className:`select ${s?"readonly":""}`,label:t,value:y,inputProps:{readOnly:s},error:f,onChange:F,children:n.map(o=>i.jsx(N,{value:o.id,children:o.label},o.id))})]})})})},E=h(P)`
  width: ${t=>`${t.width?`${t.width}px`:"100%"}`};

  &.autocomplete {
    .MuiFormControl-root {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    // label
    .MuiFormLabel-root {
      ${z}
    }

    // inputWrap
    .MuiInputBase-root {
      ${S}
      ${t=>t.$type==="type01"&&a`
          .MuiOutlinedInput-input {
            color: var(--W-Dark-11);
            font-size: 14px;
            font-weight: 400;
            line-height: 21px;
          }
          ::placeholder {
            color: var(--C-Dark-06, #9ea6b2);
            opacity: 1;
          }
        `}
    }
    &.readonly {
      .MuiInputBase-root {
        ${C}
      }
    }

    // optionBox
    & + .MuiAutocomplete-popper {
      z-index: 999;
      padding-bottom: 50px;

      ${t=>t.$type==="type01"&&a`
          padding-bottom: 0;
        `}
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
        &[aria-selected='true'] {
          background-color: transparent;
        }
        &.Mui-focused {
          background-color: #ededf3;
        }
      }
    }
    & + .MuiAutocomplete-popper[data-popper-placement='top'] {
      padding-top: 50px;
      padding-bottom: 0;
    }
  }

  .MuiOutlinedInput-notchedOutline {
    display: none;
  }

  // Horzontal
  ${t=>t.$isHorizontal&&a`
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
`,T=h.div`
  width: ${t=>`${t.width?`${t.width}px`:"100%"}`};

  display: flex;
  flex-direction: column;

  .MuiFormControl-root {
    width: 100%;
    gap: 4px;
  }

  ${t=>t.$type==="filter"&&a`
      width: fit-content;
      height: fit-content;
      .select.MuiInputBase-root {
        background: var(--White);
        height: 26px;
        .MuiInputBase-input {
          box-sizing: border-box;
          height: 26px;
          padding: 6px 32px 6px 6px;
          padding-right: 32px !important;
        }
        .MuiSelect-icon {
          width: 14px;
          height: 14px;
          right: 6px;
        }
        
      }
    }
  `}

  // Horzontal
  ${t=>t.$isHorizontal&&a`
      .MuiFormControl-root {
        flex-direction: row;
        gap: 2px;
      }
      .MuiFormLabel-root {
        min-width: 60px;
        width: 60px;
      }
    `}
`,D=h(H)`
  // inputWrap

  &.MuiInputBase-root {
    ${S}
  }

  .MuiOutlinedInput-notchedOutline {
    display: none;
  }
`;_.__docgenInfo={description:"",methods:[],displayName:"WOComboBox"};export{_ as W};
