import{j as a}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import{u as m,a as s}from"./styled-components.browser.esm-aa768a49.js";import"./_commonjsHelpers-de833af9.js";const y=({children:e,count:r,borderColorType:o})=>(r=r===void 0?"0":r>99?"99+":r,o=o===void 0?"white":o,a.jsxs(g,{children:[e,a.jsx(x,{$borderColorType:o,children:r})]})),g=m.div`
  position: relative;
`,x=m.span`
  position: absolute;
  top: 1px;
  left: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 17px;
  height: 17px;
  line-height: 17px;
  ${e=>e.$borderColorType==="white"&&s`
      border: 1px solid var(--White);
    `}

  ${e=>e.$borderColorType==="dark"&&s`
      border: 1px solid var(--C-Dark-11);
    `}


  font-size: 12px;
  font-weight: 700;
  border-radius: 30px;
  padding: 0 3px;
  background-color: var(--Violet-01);
  color: var(--White);
`;y.__docgenInfo={description:"",methods:[],displayName:"WOBadge"};const h=`import React from 'react';
import styled, { css } from 'styled-components';

const WOBadge = ({ children, count, borderColorType }) => {
  count = count === undefined ? '0' : count > 99 ? 99 + '+' : count;
  borderColorType = borderColorType === undefined ? 'white' : borderColorType;
  return (
    <WOBadgeWrap>
      {children}
      <WOBadgeCircle $borderColorType={borderColorType}>{count}</WOBadgeCircle>
    </WOBadgeWrap>
  );
};

export default WOBadge;

const WOBadgeWrap = styled.div\`
  position: relative;
\`;

const WOBadgeCircle = styled.span\`
  position: absolute;
  top: 1px;
  left: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 17px;
  height: 17px;
  line-height: 17px;
  \${(props) =>
    props.$borderColorType === 'white' &&
    css\`
      border: 1px solid var(--White);
    \`}

  \${(props) =>
    props.$borderColorType === 'dark' &&
    css\`
      border: 1px solid var(--C-Dark-11);
    \`}


  font-size: 12px;
  font-weight: 700;
  border-radius: 30px;
  padding: 0 3px;
  background-color: var(--Violet-01);
  color: var(--White);
\`;
`,T={title:"WooriMobile/Common/WOBadge",component:y,parameters:{layout:"centered",storySource:{source:h}},tags:["autodocs"],argTypes:{count:{control:"text",description:"누적 알림 입니다.",defaultValue:{summary:0},type:{summary:"text",required:!0}},borderColorType:{control:"text",description:"보더 색상 입니다.",defaultValue:{summary:"white"},type:{summary:"text",required:!0}}}},n={args:{count:"3",borderColorType:"white"}},t={args:{count:"0",borderColorType:"dark"}};var d,i,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    count: '3',
    borderColorType: 'white'
  }
}`,...(p=(i=n.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,l,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    count: '0',
    borderColorType: 'dark'
  }
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const B=["TypeA","TypeB"];export{n as TypeA,t as TypeB,B as __namedExportsOrder,T as default};
