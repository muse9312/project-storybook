import{j as a}from"./jsx-runtime-ffb262ed.js";import{u as s,a as i}from"./styled-components.browser.esm-aa768a49.js";import{r as f}from"./index-76fb7be0.js";const m=({tabs:t,type:o,onChange:r,activeTabID:d})=>{const[c,p]=f.useState(d||t[0].id),l=e=>{p(e),r(e)};return a.jsx(x,{className:"tab",$type:o,children:t.map(e=>a.jsx(n,{type:"button",className:"tab-item",$active:c===e.id,onClick:()=>l(e.id),$type:o,children:e.name},e.id))})},n=s.button`
  // 기본 스타일
  width: 100%;
  height: 40px;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  color: var(--C-Dark-05, #c9c9d0);
  border-bottom: 3px solid transparent;
  z-index: 1;
  // 활성 상태 스타일
  ${t=>t.$active&&i`
      color: var(--Blue-01, #3284ff);
      border-bottom: 3px solid var(--Blue-01, #3284ff);
    `}
  ${t=>t.$type==="fit"&&i`
      flex: 0 0 auto;
    `}
`,x=s.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  ${t=>t.$type==="fit"&&i`
      min-width: 100%;
      width: fit-content;
      gap: 0 20px;
      padding: 0 20px;
      ${n} {
        width: fit-content;
      }
      &::after {
        content: '';
        flex: 0 0 auto;
        display: block;
        width: 20px;
        height: 40px;
      }
    `}
`;m.__docgenInfo={description:"",methods:[],displayName:"WOTabs"};export{m as W};
