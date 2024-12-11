import{j as t}from"./jsx-runtime-ffb262ed.js";import{r as x}from"./index-76fb7be0.js";import{u as s,a as v}from"./styled-components.browser.esm-aa768a49.js";import{W as g}from"./WODatePicker-cb0d3eaf.js";import{W as D}from"./WOLabel-293b1256.js";import{e as j}from"./common.styled-d4908734.js";const $=({label:a,labelColor:m,periodValue:r,dateFormat:i,readonly:e,disabled:n,isError:f,onChange:p,hidePlaceholder:c})=>{const[h,d]=x.useState(["",""]),u=(o,b)=>{const l=h.map((k,W)=>o===W?b:k);d(l),p&&p(l)};return x.useEffect(()=>{r&&d(r)},[r]),t.jsxs(I,{children:[a&&t.jsx(D,{label:a,color:m}),t.jsxs(y,{className:e?"readonly":"",$disabled:n,$isError:f,children:[t.jsx(g,{label:"",value:r&&r[0],dateFormat:i,readonly:e,disabled:n,onChange:o=>u(0,o),noneFocus:!0,hidePlaceholder:c}),t.jsx(C,{}),t.jsx(g,{label:"",value:r&&r[1],dateFormat:i,readonly:e,disabled:n,onChange:o=>u(1,o),noneFocus:!0,hidePlaceholder:c})]})]})},I=s.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px 0;
`,y=s.div`
  display: flex;
  align-items: center;
  height: 32px;
  padding: 0 4px;
  border-radius: 4px;
  border: 1px solid var(--C-Dark-02);
  background-color: ${a=>`${a.$disabled?"var(--C-Dark-02)":"var(--White)"}`};

  &:focus-within {
    border-radius: 4px;
    border: 1px solid var(--Cool-Dark-06, #9ea6b2);
  }

  .MuiInputBase-root {
    border: none;
    height: 32px;
    background-color: transparent;

    .MuiInputBase-input {
      padding-left: 6px;
    }

    // calendar 아이콘
    .MuiInputAdornment-root {
      margin: 0;
      .MuiIconButton-root {
        padding: 6px;
      }
    }
  }

  &.readonly {
    border-color: transparent;
    padding: 0;
    .date-picker-wrap:last-child {
      .readonly .MuiInputBase-root .MuiInputBase-input {
        padding-left: 6px;
      }
    }
  }

  ${a=>a.$isError&&v`
      ${j}
    `}
`,C=s.i`
  display: block;
  flex: 0 0 auto;
  width: 4px;
  height: 1px;
  background-color: #000;
  background: var(--C-Dark-10);
`;$.__docgenInfo={description:"",methods:[],displayName:"WODateRangePicker"};export{$ as W};
