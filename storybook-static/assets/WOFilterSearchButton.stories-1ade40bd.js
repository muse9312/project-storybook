import{j as e}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import{u as o,a as m}from"./styled-components.browser.esm-aa768a49.js";import"./_commonjsHelpers-de833af9.js";const u=({title:t,selectValue:f,type:a,onClick:y})=>e.jsxs(x,{type:"button",className:a==="type-02"?"type-02":"type-01",$type:a,onClick:y,children:[e.jsx(g,{children:t}),e.jsxs(h,{children:[f,e.jsx(b,{})]})]}),x=o.button`
  position: relative;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 12px;
  width: 100%;
  height: 62px;
  padding: 0 20px;
  background-color: #fff;
  &.type-01 {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: calc(100% - 40px);
      height: 1px;
      background: var(--C-Dark-02, #ededf3);
    }
    &:first-child {
      &::before {
        display: none;
      }
    }
  }
  &.type-02 {
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: calc(100% - 40px);
      height: 1px;
      background: var(--C-Dark-02, #ededf3);
    }
    &:last-child {
      &::after {
        display: none;
      }
    }
  }

  ${t=>t.$type==="type-02"&&m`
      background: #f3f8ff;
    `}
`,g=o.div`
  max-width: 50px;
  color: var(--W-Dark-12, #111);
  font-size: 13px;
  font-weight: 700;
  text-align: left;
  word-break: auto-phrase;
`,h=o.div`
  display: flex;
  align-items: center;
  gap: 0 4px;
  color: var(--C-Dark-12, #0e213f);
  font-size: 14px;
  font-weight: 400;
  text-align: left;
`,b=o.div`
  width: 18px;
  height: 18px;
  background: url(/assets/woori-mobile/icon/arr-black-18.svg) no-repeat center / cover;
`;u.__docgenInfo={description:"",methods:[],displayName:"WOFilterSearchButton"};const k=`import React from 'react';
import styled, { css } from 'styled-components';

const WOFilterSearchButton = ({ title, selectValue, type, onClick }) => {
  return (
    <Wrapper type='button' className={type === 'type-02' ? 'type-02' : 'type-01'} $type={type} onClick={onClick}>
      <Title>{title}</Title>
      <SelectValue>
        {selectValue}
        <Arr />
      </SelectValue>
    </Wrapper>
  );
};

export default WOFilterSearchButton;

const Wrapper = styled.button\`
  position: relative;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 12px;
  width: 100%;
  height: 62px;
  padding: 0 20px;
  background-color: #fff;
  &.type-01 {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: calc(100% - 40px);
      height: 1px;
      background: var(--C-Dark-02, #ededf3);
    }
    &:first-child {
      &::before {
        display: none;
      }
    }
  }
  &.type-02 {
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: calc(100% - 40px);
      height: 1px;
      background: var(--C-Dark-02, #ededf3);
    }
    &:last-child {
      &::after {
        display: none;
      }
    }
  }

  \${(props) =>
    props.$type === 'type-02' &&
    css\`
      background: #f3f8ff;
    \`}
\`;

const Title = styled.div\`
  max-width: 50px;
  color: var(--W-Dark-12, #111);
  font-size: 13px;
  font-weight: 700;
  text-align: left;
  word-break: auto-phrase;
\`;

const SelectValue = styled.div\`
  display: flex;
  align-items: center;
  gap: 0 4px;
  color: var(--C-Dark-12, #0e213f);
  font-size: 14px;
  font-weight: 400;
  text-align: left;
\`;

const Arr = styled.div\`
  width: 18px;
  height: 18px;
  background: url(/assets/woori-mobile/icon/arr-black-18.svg) no-repeat center / cover;
\`;
`,V={title:"WooriMobile/button/WOFilterSearchButton",component:u,parameters:{layout:"centered",storySource:{source:k}},decorators:[t=>e.jsx("div",{style:{width:"360px"},children:e.jsx(t,{})})],tags:["autodocs"],argTypes:{title:{control:"text",description:"WOFilterSearchButton title 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}},selectValue:{control:"text",description:"WOFilterSearchButton selectValue 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}},type:{control:"text",description:"WOFilterSearchButton type 입니다.",defaultValue:{summary:"type-01"},type:{summary:"string",required:!1}},onClick:{control:"text",description:"버튼 클릭 메소드 입니다.",action:"onClick",type:{summary:"function",required:!0}}}},n={args:{title:"title",selectValue:"value"}},r={args:{title:"title",selectValue:"value",type:"type-02"}};var i,l,s;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    title: 'title',
    selectValue: 'value'
  }
}`,...(s=(l=n.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var c,p,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: 'title',
    selectValue: 'value',
    type: 'type-02'
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const C=["Default","SinglePopup"];export{n as Default,r as SinglePopup,C as __namedExportsOrder,V as default};
