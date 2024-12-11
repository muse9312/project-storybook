import{j as s}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import{u as i,a as n}from"./styled-components.browser.esm-aa768a49.js";const $=({icon:o,width:t,height:e,onClick:r,newNotice:a,theme:c})=>s.jsx(l,{type:"button",className:"icon-btn",$icon:o,$width:t||18,$height:e||18,$newNotice:a,$theme:c,onClick:r}),d=i.button`
  display: block;
  width: ${o=>o.$width&&`${o.$width}px`};
  height: ${o=>o.$height&&`${o.$height}px`};
`,l=i(d)`
  flex: 0 0 auto;
  ${o=>o.$icon&&`
        background:url('/assets/woori-mobile/icon/${o.$icon}.svg') no-repeat center / cover;
  `}
  ${o=>o.$newNotice&&n`
      position: relative;
      &::after {
        content: '';
        position: absolute;
        top: 3px;
        left: 15px;
        display: block;
        width: 10px;
        height: 10px;
        border: 2px solid #fff;
        background-color: var(--Red-02);
        border-radius: 50%;
        box-sizing: border-box;
      }
      ${t=>t.$theme==="dark"&&n`
          &::after {
            content: '';
            border-color: var(--C-Dark-11);
          }
        `}
    `}
`;$.__docgenInfo={description:"",methods:[],displayName:"WOIconButton"};export{$ as W};
