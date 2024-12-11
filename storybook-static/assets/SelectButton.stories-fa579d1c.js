import{j as h}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import{u as x}from"./styled-components.browser.esm-aa768a49.js";import"./_commonjsHelpers-de833af9.js";const l=({text:e,theme:g})=>h.jsx(y,{theme:g,children:e}),f=l,y=x.button`
  position: relative;
  width: 100%;
  height: 40px;
  padding: 0 12px;
  background-color: ${e=>e.theme==="dark"?"#181E26":"#fff"};
  background-color: ${e=>e.theme==="grey"&&"#F4F6F8"};
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: ${e=>e.theme==="dark"?"#999":"#000"};
  text-align: left;
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background: ${e=>e.theme==="dark"||e.theme==="grey"?"url(./assets/BeatFolio/input-arrow-down-grey.png)":"url(./assets/BeatFolio/icon-arrow-down.png)"}
      no-repeat center / cover;
  }
`;l.__docgenInfo={description:"",methods:[],displayName:"SelectButton"};const B=`import React from 'react';
import { styled } from 'styled-components';

const SelectButton = ({ text, theme }) => {
  return <Btn theme={theme}>{text}</Btn>;
};

export default SelectButton;

const Btn = styled.button\`
  position: relative;
  width: 100%;
  height: 40px;
  padding: 0 12px;
  background-color: \${(props) => (props.theme === 'dark' ? '#181E26' : '#fff')};
  background-color: \${(props) => props.theme === 'grey' && '#F4F6F8'};
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: \${(props) => (props.theme === 'dark' ? '#999' : '#000')};
  text-align: left;
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background: \${(props) =>
        props.theme === 'dark' || props.theme === 'grey' ? 'url(./assets/BeatFolio/input-arrow-down-grey.png)' : 'url(./assets/BeatFolio/icon-arrow-down.png)'}
      no-repeat center / cover;
  }
\`;
`,C={title:"BeatFolio/Button/SelectButton",component:f,parameters:{layout:"padded",storySource:{source:B}},tags:["autodocs"],argTypes:{text:{control:"text",description:"Button Text 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}},theme:{control:"select",options:["dark","grey",void 0],description:"Button Theme 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}}}},t={args:{text:"임시 텍스트",theme:void 0}},r={args:{text:"임시 텍스트",theme:"dark"}},o={args:{text:"임시 텍스트",theme:"grey"}};var n,s,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    text: '임시 텍스트',
    theme: undefined
  }
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var p,u,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    text: '임시 텍스트',
    theme: 'dark'
  }
}`,...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var i,d,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    text: '임시 텍스트',
    theme: 'grey'
  }
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const b=["WhiteSelect","DarkSelect","GreySelect"];export{r as DarkSelect,o as GreySelect,t as WhiteSelect,b as __namedExportsOrder,C as default};
