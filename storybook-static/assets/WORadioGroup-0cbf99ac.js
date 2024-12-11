import{j as a}from"./jsx-runtime-ffb262ed.js";import{r as b}from"./index-76fb7be0.js";import{u as i,a as l}from"./styled-components.browser.esm-aa768a49.js";const $=({title:r,radioType:o,size:s,radioItems:t,onChange:c,defaultCheckedValue:p,readonly:h,disabled:g})=>{const[x,u]=b.useState("");o=o===null?"normal":o;const v=e=>{if(h)return;const{value:n}=e.target;if(!n)return;const f=t.find(m=>m.value===n);u(n),c&&c(f)};return b.useEffect(()=>{p&&u(p.value)},[]),a.jsx(a.Fragment,{children:a.jsxs(k,{children:[r&&a.jsx(w,{$radioType:o,children:r}),a.jsx(j,{$radioType:o,children:t&&t.map(e=>a.jsx(D,{$radioType:o,$size:s,children:h?x===e.value&&a.jsx(d,{children:e.label}):a.jsxs(a.Fragment,{children:[a.jsxs(W,{className:o==="button"?"button-type":"",$size:s,children:[a.jsx(z,{type:"radio",name:e.name,id:e.id,value:e.value,checked:x===e.value,onChange:v,disabled:e.disabled||g}),o==="normal"&&a.jsx(y,{className:"radio-circle"}),o==="button"&&a.jsx(d,{htmlFor:e.id,children:e.label})]}),o==="normal"&&a.jsx(d,{htmlFor:e.id,children:e.label})]})},e.id))})]})})},k=i.div`
  width: 100%;
`,w=i.div`
  color: var(--W-Dark-10);
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  margin-bottom: ${r=>r.$radioType==="normal"?"3":"10"}px;
`,j=i.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: ${r=>r.$radioType==="normal"?"0 12px":"4px"};

  > div:first-child:nth-last-child(2),
  div:first-child:nth-last-child(2) ~ div {
    width: calc(50% - ${r=>r.$radioType==="normal"?"12px":"4px"} / 2);

    label {
      max-width: none;
    }

    ${r=>r.$radioType==="normal"&&l`
        flex-basis: auto;
      `}
  }

  > div:only-child {
    width: 100%;

    label {
      max-width: none;
    }
  }
`,W=i.div`
  position: relative;

  &.button-type {
    width: 100%;

    input {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;

      &:checked + label {
        background-color: var(--Blue-01);
        border-color: var(--Blue-01);
        color: var(--White);
      }

      &:disabled + label {
        background-color: var(--White);
        border-color: var(--C-Dark-04);
        color: var(--C-Dark-06);
        cursor: default;
      }
    }

    label {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      min-height: 38px;
      padding: 0 8px;
      border-radius: 6px;
      border: 1px solid var(--C-Dark-04);
      font-size: 13px;
      font-weight: 700;
      color: var(--C-Dark-10);
      background-color: var(--White);
      line-height: 1;
    }
    ${r=>r.$size==="lg"&&l`
        label {
          height: 46px;
          color: var(--Cool-Dark-10, #263752);
          font-size: 16px;
          font-weight: 700;
          border-radius: 8px;
        }
      `}
  }
`,y=i.div`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 7px;
  height: 7px;
  border-radius: 100%;
  background-color: var(--W-Dark-11);
`,D=i.div`
  display: flex;
  align-items: center;
  width: calc((100% - ${r=>(r.$radioType==="normal"?"18":"4")*2}px) / 3);
  height: 38px;
  ${r=>r.$radioType==="normal"&&l`
      flex-basis: fit-content;
    `}

  > label {
    margin-left: 6px;
  }
  ${r=>r.$size==="lg"&&l`
      height: 46px;
    `}
`,d=i.label`
  font-size: 13px;
  font-weight: 700;
  color: var(--W-Dark-11);
  cursor: pointer;
  line-height: 16px;
`,z=i.input`
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid var(--C-Dark-05);
  &:checked {
    & + .radio-circle {
      display: block;
    }
  }
  &:disabled {
    & + .radio-circle {
      background-color: var(--W-Dark-11);
    }
  }
`;$.__docgenInfo={description:"",methods:[],displayName:"WORadioGroup"};export{$ as W};
