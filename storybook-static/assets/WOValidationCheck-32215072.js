import{j as i}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import{u as a}from"./styled-components.browser.esm-aa768a49.js";import{W as r}from"./WOIcon-d41c31b7.js";const c=({itemList:s})=>i.jsx(t,{className:"validation-check",children:s.map(e=>i.jsxs(o,{children:[i.jsx(r,{icon:!e.isCheck&&"check"||(e.isCheck==="pass"?"check_blue":"check_red"),width:12,height:12}),i.jsx(n,{$vailCheck:e.isCheck,children:e.title})]},e.id))}),t=a.div`
  display: flex;
  gap: 0 12px;
`,o=a.div`
  display: flex;
  gap: 0 4px;
  align-items: center;
`,n=a.div`
  color: ${s=>{switch(s.$vailCheck){case"pass":return"var(--Blue-02)";case"error":return"var(--Red-02)";default:return"var(--W-Dark-06)"}}};
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`;c.__docgenInfo={description:"",methods:[],displayName:"WOValidationCheck"};export{c as W};
