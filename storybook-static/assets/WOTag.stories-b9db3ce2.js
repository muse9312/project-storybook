import{W as a}from"./WOTag-f360050e.js";import"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-aa768a49.js";const o=`import React from 'react';
import styled from 'styled-components';

const WOTag = ({ label, text }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default WOTag;

const Wrapper = styled.div\`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 0 8px;
  width: fit-content;
  height: 32px;
  padding: 0px 14px;
  border-radius: 100px;
  background: var(--C-Dark-01, #f5f6fa);
  white-space: nowrap;
  & + & {
    margin-left: 6px;
  }
\`;

const Label = styled.div\`
  color: var(--Blue-01, #3284ff);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
\`;
const Text = styled.div\`
  color: var(--C-Dark-12, #0e213f);
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
\`;
`,c={title:"WooriMobile/Tag/WOTag",component:a,parameters:{layout:"centered",storySource:{source:o}},tags:["autodocs"],argTypes:{label:{control:"text",description:"Taglabel 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}},text:{control:"text",description:"Tag text 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}}}},e={args:{label:"label",text:"text"}};var t,n,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  // 컴포넌트에 넘겨줄 props 정리
  args: {
    label: 'label',
    text: 'text'
  }
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const d=["Default"];export{e as Default,d as __namedExportsOrder,c as default};
