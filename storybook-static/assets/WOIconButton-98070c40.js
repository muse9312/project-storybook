import{j as i}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import{u as e}from"./styled-components.browser.esm-aa768a49.js";const s=({icon:t,width:o,height:n,onClick:c})=>i.jsx(a,{type:"button",className:"icon-btn",$icon:t,$width:o||18,$height:n||18,onClick:c}),$=e.button`
  display: block;
  width: ${t=>t.$width&&`${t.$width}px`};
  height: ${t=>t.$height&&`${t.$height}px`};
`,a=e($)`
  flex: 0 0 auto;
  ${t=>t.$icon&&`
        background:url('/assets/woori-pc//icon/${t.$icon}.svg') no-repeat center / cover;
  `}
`;s.__docgenInfo={description:"",methods:[],displayName:"WOIconButton"};export{s as W};
