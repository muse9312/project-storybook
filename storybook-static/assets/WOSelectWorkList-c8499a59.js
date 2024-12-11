import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as x}from"./index-76fb7be0.js";import{u as i}from"./styled-components.browser.esm-aa768a49.js";import"./WOIconButton-4118cf05.js";const g=({width:t,height:s,icon:a,initialState:n,onClick:o})=>{const[r,c]=x.useState(!!n||!1),l=p=>{p.stopPropagation(),p.preventDefault(),c(!r),o&&o(!r)};return e.jsx(f,{type:"button",className:"toggle-btn",$width:t||18,$height:s||18,$icon:a,$isActive:r,onClick:l})},d=i.button`
  cursor: pointer;
  width: ${t=>t.$width&&`${t.$width}px`};
  height: ${t=>t.$height&&`${t.$height}px`};
`,f=i(d)`
  ${t=>t.$isActive?`
        background:url('/assets/woori-mobile/icon/${t.$icon}-active.svg') no-repeat center / cover;
  `:`background:url('/assets/woori-mobile/icon/${t.$icon}.svg') no-repeat center / cover;`}
`;g.__docgenInfo={description:"",methods:[],displayName:"WOToggleButton"};const h=({depth1:t,depth2:s,depth3:a,area:n,department:o,type:r,favoriteStatus:c})=>e.jsxs($,{$type:r,children:[e.jsx(g,{icon:"star",onClick:l=>{console.log(l)},initialState:c}),e.jsxs(m,{children:[e.jsxs(u,{children:[t&&t," > ",s&&s," > ",a&&a]}),n||o?e.jsxs(v,{children:[n&&e.jsx("span",{children:n}),o&&e.jsx("span",{children:o})]}):""]})]}),$=i.div`
  display: flex;
  align-items: center;
  gap: 0 14px;
  padding: ${t=>t.$type==="main"?"14px 20px":"16px 20px"};
`,m=i.div`
  display: flex;
  flex-direction: column;
  gap: 4px 0;
`,u=i.div`
  display: flex;
  align-items: center;
  flex: 1;
  color: var(--C-Dark-11, #1a2c49);
  font-size: 14px;
  font-weight: 400;
`,v=i.div`
  display: flex;
  align-items: center;
  gap: 0 13px;
  span {
    color: var(--C-Dark-06, #9ea6b2);
    font-size: 12px;
    font-weight: 400;
    & + span {
      position: relative;
      &::before {
        content: '';
        position: absolute;
        left: -7px;
        top: 50%;
        transform: translateY(-50%);
        width: 1px;
        height: 9px;
        background-color: var(--C-Dark-06, #9ea6b2);
      }
    }
  }
`;h.__docgenInfo={description:"",methods:[],displayName:"WOSelectWorkList"};export{h as W};
