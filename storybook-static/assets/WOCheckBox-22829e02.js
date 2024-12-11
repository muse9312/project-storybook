import{j as o}from"./jsx-runtime-ffb262ed.js";import{u as r,a as t}from"./styled-components.browser.esm-aa768a49.js";import{r as x}from"./index-76fb7be0.js";const $=({item:e,blind:s,isChecked:l,flex:d,onChange:n,titleArea:h,type:i,round:a,fontWght:p})=>{const[c,g]=x.useState(!!l||!1),u=()=>{g(!c),n&&n(e,!c)};return o.jsx(b,{$titleArea:h,$type:i,children:o.jsxs(f,{$flex:d,$round:a,$type:i,children:[o.jsx(m,{type:"checkbox",name:e.name,id:e.id,checked:c,onChange:u,$round:a}),o.jsx(k,{htmlFor:e.id,$blind:s,$type:i,$fontWght:p,children:e.label})]})})},b=r.div`
  ${e=>e.$titleArea&&t`
      display: flex;
      align-items: flex-end;
      height: 54px;
    `}
  ${e=>e.$type==="table"&&t`
      width: fit-content;
      margin: 0 auto;
    `}
`,f=r.div`
  display: flex;
  align-items: center;
  height: auto;
  ${e=>e.$round&&t`
      height: auto;
    `}

  gap: 0 4px;
  ${e=>e.$type==="table"&&t`
      height: auto;
    `}
`,k=r.label`
  padding-right: 10px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: var(--W-Dark-11);
  cursor: pointer;
  ${e=>e.$blind===!0&&t`
      position: absolute;
      width: 1px;
      height: 1px;
      clip: rect(0, 0, 0, 0);
      overflow: hidden;
    `}
  ${e=>e.$type==="fit"&&t`
      min-width: auto;
      padding-right: 0;
    `}

    ${e=>e.$fontWght&&t`
      font-weight: 700;
    `}
`,m=r.input`
  display: block;
  width: 16px;
  height: 16px;
  background: url(/assets/woori-mobile/icon/checkbox-default.svg) no-repeat center / cover;
  cursor: pointer;
  &:checked {
    background: url(/assets/woori-mobile/icon/checkbox-checked.svg) no-repeat center / cover;
  }

  ${e=>e.$round&&t`
      background: url(/assets/woori-mobile/icon/checkbox-circle-default.svg) no-repeat center / cover;
      cursor: pointer;
      &:checked {
        background: url(/assets/woori-mobile/icon/checkbox-circle-checked.svg) no-repeat center / cover;
      }
    `}
`;$.__docgenInfo={description:"",methods:[],displayName:"WOCheckbox"};export{$ as W};
