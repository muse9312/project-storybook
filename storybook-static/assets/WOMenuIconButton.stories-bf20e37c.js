import{j as t}from"./jsx-runtime-ffb262ed.js";import{u as a}from"./styled-components.browser.esm-aa768a49.js";import{r as n}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const f=({imageFile:s,text:e,activeMenu:r,isMenuOpen:u,onHover:y})=>{const[,v]=n.useState(!1),[i,c]=n.useState(!1),l=p=>{v(p),y(p)};return n.useEffect(()=>{u&&r&&r.title===e?c(!0):c(!1)},[u,r,e]),t.jsx(C,{type:"button",className:`${i?"active":""}`,onMouseOver:()=>l(!0),onMouseOut:()=>l(!1),children:t.jsxs("div",{className:"area",children:[t.jsx(B,{src:i?`${s}_selected.svg`:`${s}.svg`}),t.jsx(x,{className:"title",children:e})]})})},B=a.img`
  display: block;
  margin: 0 auto;
  width: 34px;
  height: 34px;
`,x=a.span`
  display: block;
  color: #fff;
  font-size: 13px;
  line-height: 13px;
  font-weight: 700;
  opacity: 0.6;
`,C=a.button`
  display: inline-block;
  position: relative;
  padding: 0 8px;
  margin: 1px 0;
  width: 100%;
  text-align: center;
  .area {
    padding: 6px 0;
  }

  .mark {
    display: block;
    position: absolute;
    width: 6px;
    left: -8px;
    top: 0;
    bottom: 0;
    background-color: transparent;
  }
  &:hover,
  &.active {
    ${x} {
      color: var(--woori-navy);
      opacity: 1;
    }
    .area {
      background-color: rgba(255, 255, 255, 0.4);
      border-radius: 8px;
    }
    .mark {
      background-color: var(--woori-navy);
    }
  }
`;f.__docgenInfo={description:"",methods:[],displayName:"WOMenuIconButton"};const O={title:"WooriPC/Button/WOMenuIconButton",component:f,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{imageFile:{control:"text",description:"WOMenuIconButton 아이콘 이미지 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}},text:{control:"text",description:"WOMenuIconButton 아이콘 아래에 보여질 텍스트 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}},activeMenu:{control:"object",description:"WOMenuIconButton 아이콘에 active되어야하는 메뉴정보 입니다",defaultValue:{summary:void 0},type:{summary:"object",required:!0}},onClick:{control:"text",description:"WOMenuIconButton 아이콘 버튼 클릭 메소드 입니다.",action:"onClick",type:{summary:"function",required:!1}}}},o={args:{imageFile:"/assets/woori-pc/menu/icon_main_01",text:"세입",onHover:()=>{}}};var d,m,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  // 컴포넌트에 넘겨줄 props 정리
  args: {
    // props명 : 넘겨줄 props 값-
    imageFile: '/assets/woori-pc/menu/icon_main_01',
    text: '세입',
    onHover: () => {}
  }
}`,...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const A=["Default"];export{o as Default,A as __namedExportsOrder,O as default};
