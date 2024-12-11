import{j as o}from"./jsx-runtime-ffb262ed.js";import{r as u}from"./index-76fb7be0.js";import{u as s,a as k}from"./styled-components.browser.esm-aa768a49.js";import{W as m}from"./WODatePicker-73f59ae1.js";import{b as v,W as j}from"./WOLabel-9cebf678.js";const D=({label:a,labelColor:x,periodValue:r,dateFormat:i,readonly:e,disabled:n,isError:g,onChange:c})=>{const[h,p]=u.useState(["",""]),d=(t,f)=>{const l=h.map((b,W)=>t===W?f:b);p(l),c&&c(l)};return u.useEffect(()=>{r&&p(r)},[r]),o.jsxs(E,{children:[a&&o.jsx(j,{label:a,color:x}),o.jsxs(y,{className:e?"readonly":"",$disabled:n,$isError:g,children:[o.jsx(m,{label:"",value:r&&r[0],dateFormat:i,readonly:e,disabled:n,onChange:t=>d(0,t),noneFocus:!0}),o.jsx($,{}),o.jsx(m,{label:"",value:r&&r[1],dateFormat:i,readonly:e,disabled:n,onChange:t=>d(1,t),noneFocus:!0})]})]})},E=s.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px 0;
`,y=s.div`
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

  ${a=>a.$isError&&k`
      ${v}
    `}
`,$=s.i`
  display: block;
  flex: 0 0 auto;
  width: 6px;
  height: 1px;
  background-color: var(--C-Dark-11);
`;D.__docgenInfo={description:"",methods:[],displayName:"WODateRangePicker"};export{D as W};
