import{j as v}from"./jsx-runtime-ffb262ed.js";import{r as f}from"./index-76fb7be0.js";import{u as d}from"./styled-components.browser.esm-aa768a49.js";import"./_commonjsHelpers-de833af9.js";const m=({width:t,height:r,icon:p,initialState:h})=>{const[n,$]=f.useState(!!h||!1),y=a=>{a.stopPropagation(),a.preventDefault(),$(!n)};return v.jsx(S,{type:"button",className:"toggle-btn",$width:t||18,$height:r||18,$icon:p,$isActive:n,onClick:y})},B=d.button`
  cursor: pointer;
  width: ${t=>t.$width&&`${t.$width}px`};
  height: ${t=>t.$height&&`${t.$height}px`};
`,S=d(B)`
  ${t=>t.$isActive?`
        background:url('/assets/woori-pc//icon/${t.$icon}-active.svg') no-repeat center / cover;
  `:`background:url('/assets/woori-pc//icon/${t.$icon}.svg') no-repeat center / cover;`}
`;m.__docgenInfo={description:"",methods:[],displayName:"WOToggleButton"};const A={title:"WooriPC/Button/WOToggleButton",component:m,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{width:{control:"number",description:"ToggleButton Width 입니다.",defaultValue:{summary:18}},height:{control:"number",description:"ToggleButton Height 입니다.",type:{summary:"number",required:!1}},icon:{control:"text",description:"ToggleButtons 아이콘 명 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}},initialState:{control:"boolean",description:"ToggleButtons 초기 상태 입니다.",defaultValue:{summary:void 0},type:{summary:"boolean",required:!1}}}},e={args:{width:20,height:20,icon:"star"}},o={args:{width:20,height:20,icon:"star",initialState:!0}};var s,i,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    width: 20,
    height: 20,
    icon: 'star'
  }
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var u,g,l;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    width: 20,
    height: 20,
    icon: 'star',
    initialState: true
  }
}`,...(l=(g=o.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};const W=["Star","StarActive"];export{e as Star,o as StarActive,W as __namedExportsOrder,A as default};
