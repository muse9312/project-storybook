import{j as r}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import{u as l,a as n}from"./styled-components.browser.esm-aa768a49.js";import{W as u}from"./WOIconButton-4118cf05.js";import"./_commonjsHelpers-de833af9.js";const d=({type:o,onClick:a,customClass:c,drawerOpen:i})=>r.jsx(m,{$type:o,className:c,$drawerOpen:i,children:r.jsx(u,{icon:o==="fds"?"scroll-top-white":"scroll-top",width:14,height:20,onClick:a})}),m=l.div`
  position: fixed;
  right: 10px;
  bottom: 10px;
  width: 46px;
  height: 46px;
  padding: 14px 16px;
  border: 1px solid #ededf3;
  border-radius: 100px;
  background: rgba(255, 255, 255, 056);
  z-index: 999;

  ${o=>o.$type==="fds"&&n`
      border: 1px solid rgba(189, 215, 255, 0.12);
      background: rgba(189, 215, 255, 0.12);
    `}
  ${o=>o.$drawerOpen&&n`
      bottom: 126px;
    `}
`;d.__docgenInfo={description:"",methods:[],displayName:"WOScrollTopButton"};const x=`import React from 'react';
import { styled, css } from 'styled-components';
import WOIconButton from './WOIconButton';

const WOScrollTopButton = ({ type, onClick, customClass, drawerOpen }) => {
  return (
    <Wrap $type={type} className={customClass} $drawerOpen={drawerOpen}>
      <WOIconButton icon={type === 'fds' ? 'scroll-top-white' : 'scroll-top'} width={14} height={20} onClick={onClick} />
    </Wrap>
  );
};

export default WOScrollTopButton;

const Wrap = styled.div\`
  position: fixed;
  right: 10px;
  bottom: 10px;
  width: 46px;
  height: 46px;
  padding: 14px 16px;
  border: 1px solid #ededf3;
  border-radius: 100px;
  background: rgba(255, 255, 255, 056);
  z-index: 999;

  \${(props) =>
    props.$type === 'fds' &&
    css\`
      border: 1px solid rgba(189, 215, 255, 0.12);
      background: rgba(189, 215, 255, 0.12);
    \`}
  \${(props) =>
    props.$drawerOpen &&
    css\`
      bottom: 126px;
    \`}
\`;
`,O={title:"WooriMobile/button/WOScrollTopButton",component:d,parameters:{layout:"centered",storySource:{source:x},docs:{description:{component:"``"}}},tags:["autodocs"],argTypes:{type:{control:"text",description:" type이 fds일때 background와 border가 변경됩니다 ",defaultValue:{summary:0},type:{summary:"text",required:!0}},onClick:{control:"text",description:"버튼 클릭 메소드 입니다.",action:"onClick",type:{summary:"function",required:!1}}}},t={args:{type:"fds"}};var e,p,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    type: 'fds'
  }
}`,...(s=(p=t.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const W=["type"];export{W as __namedExportsOrder,O as default,t as type};
