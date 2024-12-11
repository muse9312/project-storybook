import{j as r}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import{u as w}from"./styled-components.browser.esm-aa768a49.js";import"./_commonjsHelpers-de833af9.js";const o=({children:n,wrapType:i,wrapRowGap:d,wrapColumnGap:u})=>r.jsx(h,{$wrapType:i,$wrapRowGap:d,$wrapColumnGap:u,children:n}),h=w.div`
  display: flex;
  flex-direction: ${n=>n.$wrapType?`${n.$wrapType}`:"column"};

  row-gap: ${n=>n.$wrapRowGap?`${n.$wrapRowGap}px`:"unset"};
  column-gap: ${n=>n.$wrapColumnGap?`${n.$wrapColumnGap}px`:"unset"};

  > :first-child:nth-last-child(2):last-child,
  :first-child:nth-last-child(2) ~ div {
    margin-left: auto;
  }
`;o.__docgenInfo={description:"",methods:[],displayName:"WOCommonWrap"};const y=`import React from 'react';
import styled from 'styled-components';

const WOCommonWrap = ({ children, wrapType, wrapRowGap, wrapColumnGap }) => {
  return (
    <CommonWrap $wrapType={wrapType} $wrapRowGap={wrapRowGap} $wrapColumnGap={wrapColumnGap}>
      {children}
    </CommonWrap>
  );
};

export default WOCommonWrap;

const CommonWrap = styled.div\`
  display: flex;
  flex-direction: \${(props) => (props.$wrapType ? \`\${props.$wrapType}\` : 'column')};

  row-gap: \${(props) => (props.$wrapRowGap ? \`\${props.$wrapRowGap}px\` : 'unset')};
  column-gap: \${(props) => (props.$wrapColumnGap ? \`\${props.$wrapColumnGap}px\` : 'unset')};

  > :first-child:nth-last-child(2):last-child,
  :first-child:nth-last-child(2) ~ div {
    margin-left: auto;
  }
\`;
`,f={title:"WooriMobile/common/WOCommonWrap",component:o,parameters:{layout:"centered",storySource:{source:y}},decorators:[n=>r.jsx("div",{children:r.jsx(n,{})})],tags:["autodocs"],argTypes:{wrapType:{control:"select",options:["column","row"],description:"column, row를 선택할수있습니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}},wrapRowGap:{control:"text",description:"row gap을 설정합니다.",defaultValue:{summary:void 0},type:{summary:"number",required:!1}},wrapColumnGap:{control:"text",description:"column gap을 설정합니다.",defaultValue:{summary:void 0},type:{summary:"number",required:!1}}}},p=()=>r.jsxs(o,{wrapType:"row",wrapColumnGap:"10",children:[r.jsx("span",{children:"1"}),r.jsx("span",{children:"2"}),r.jsx("span",{children:"3"}),r.jsx("span",{children:"4"}),r.jsx("span",{children:"5"}),r.jsx("span",{children:"6"})]}),a=()=>r.jsxs(o,{wrapType:"column",wrapRowGap:"10",children:[r.jsx("span",{children:"1"}),r.jsx("span",{children:"2"}),r.jsx("span",{children:"3"}),r.jsx("span",{children:"4"}),r.jsx("span",{children:"5"}),r.jsx("span",{children:"6"})]});p.__docgenInfo={description:"",methods:[],displayName:"Column"};a.__docgenInfo={description:"",methods:[],displayName:"Row"};var s,e,t;p.parameters={...p.parameters,docs:{...(s=p.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return <WOCommonWrap wrapType="row" wrapColumnGap="10">\r
            <span>1</span>\r
            <span>2</span>\r
            <span>3</span>\r
            <span>4</span>\r
            <span>5</span>\r
            <span>6</span>\r
        </WOCommonWrap>;
}`,...(t=(e=p.parameters)==null?void 0:e.docs)==null?void 0:t.source}}};var m,l,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <WOCommonWrap wrapType="column" wrapRowGap="10">\r
            <span>1</span>\r
            <span>2</span>\r
            <span>3</span>\r
            <span>4</span>\r
            <span>5</span>\r
            <span>6</span>\r
        </WOCommonWrap>;
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const G=["Column","Row"];export{p as Column,a as Row,G as __namedExportsOrder,f as default};
