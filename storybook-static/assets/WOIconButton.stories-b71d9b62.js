import{W as m}from"./WOIconButton-4118cf05.js";import"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-aa768a49.js";const h=`import React from 'react';
import styled, { css } from 'styled-components';

const WOIconButton = ({ icon, width, height, onClick, newNotice, theme }) => {
  return (
    <IconComponents
      type='button'
      className='icon-btn'
      $icon={icon}
      $width={width ? width : 18}
      $height={height ? height : 18}
      $newNotice={newNotice}
      $theme={theme}
      onClick={onClick}></IconComponents>
  );
};

export default WOIconButton;
const IconBaseStyle = styled.button\`
  display: block;
  width: \${(props) => props.$width && \`\${props.$width}px\`};
  height: \${(props) => props.$height && \`\${props.$height}px\`};
\`;

const IconComponents = styled(IconBaseStyle)\`
  flex: 0 0 auto;
  \${(props) =>
    props.$icon &&
    \`
        background:url('/assets/woori-mobile/icon/\${props.$icon}.svg') no-repeat center / cover;
  \`}
  \${(props) =>
    props.$newNotice &&
    css\`
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
      \${(props) =>
        props.$theme === 'dark' &&
        css\`
          &::after {
            content: '';
            border-color: var(--C-Dark-11);
          }
        \`}
    \`}
\`;
`,B={title:"WooriMobile/button/WOIconButton",component:m,parameters:{layout:"centered",storySource:{source:h},docs:{description:{component:"``\r\nIconButton 컴포넌트 사용시 Icon Props Icon 파일 명으로 전달\r\nIconButton 파일명은 ex) plus,arr 같이 아이콘 명만 작성 하고 svg 파일로 통일 \r\n``"}}},tags:["autodocs"],argTypes:{width:{control:"number",description:"IconButton Width 입니다.",defaultValue:{summary:14},type:{summary:"number",required:!1}},height:{control:"number",description:"IconButton Height 입니다.",defaultValue:{summary:14},type:{summary:"number",required:!1}},icon:{control:"text",description:"IconButton 명 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}}}},n={args:{width:30,height:30,icon:"arr-back-30"}},o={args:{width:30,height:30,icon:"star-black-30"}},t={args:{width:30,height:30,icon:"menu-black-30"}};var e,r,s;n.parameters={...n.parameters,docs:{...(e=n.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    width: 30,
    height: 30,
    icon: 'arr-back-30'
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var c,i,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    width: 30,
    height: 30,
    icon: 'star-black-30'
  }
}`,...(u=(i=o.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var a,p,d;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    width: 30,
    height: 30,
    icon: 'menu-black-30'
  }
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const $=["Arr","Star","Menu"];export{n as Arr,t as Menu,o as Star,$ as __namedExportsOrder,B as default};
