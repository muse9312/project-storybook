import{j as t}from"./jsx-runtime-ffb262ed.js";import{u,a as m}from"./styled-components.browser.esm-aa768a49.js";import{r as o}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const p=({tabs:a,onChange:b,activeTabID:r})=>{const[l,s]=o.useState(r||a[0].id),C=e=>{s(e),b(e)};return o.useEffect(()=>{s(r)},[r]),t.jsx(f,{children:a.map(e=>t.jsx(x,{type:"button",$active:l===e.id,onClick:()=>C(e.id),children:e.name},e.id))})},f=u.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 42px;
  padding: 4px;
  border-radius: 30px;
  background: var(--C-Dark-01, #f5f6fa);
`,x=u.button`
  width: 100%;
  height: 100%;
  border-radius: 26px;
  padding: 8px 20px;
  text-align: center;
  color: var(--C-Dark-06, #9ea6b2);
  font-size: 14px;
  font-weight: 700;
  border: 1px solid transparent;
  ${a=>a.$active&&m`
      border: 1px solid var(--C-Dark-11, #1a2c49);
      background: var(--White, #fff);
      color: var(--C-Dark-11, #1a2c49);
    `};
`;p.__docgenInfo={description:"",methods:[],displayName:"WOMainTabs"};const g=`import styled, { css } from 'styled-components';
import React, { useEffect, useState } from 'react';

const WOMainTabs = ({ tabs, onChange, activeTabID }) => {
  const [selectedTab, setSelectedTab] = useState(activeTabID || tabs[0].id);

  const handleSelectedTab = (tabId) => {
    setSelectedTab(tabId);
    onChange(tabId);
  };

  useEffect(() => {
    setSelectedTab(activeTabID);
  }, [activeTabID]);

  return (
    <TabList>
      {tabs.map((tab) => (
        <TabItem type='button' key={tab.id} $active={selectedTab === tab.id ? true : false} onClick={() => handleSelectedTab(tab.id)}>
          {tab.name}
        </TabItem>
      ))}
    </TabList>
  );
};

export default WOMainTabs;

const TabList = styled.div\`
  display: flex;
  align-items: center;
  width: 100%;
  height: 42px;
  padding: 4px;
  border-radius: 30px;
  background: var(--C-Dark-01, #f5f6fa);
\`;

const TabItem = styled.button\`
  width: 100%;
  height: 100%;
  border-radius: 26px;
  padding: 8px 20px;
  text-align: center;
  color: var(--C-Dark-06, #9ea6b2);
  font-size: 14px;
  font-weight: 700;
  border: 1px solid transparent;
  \${(props) =>
    props.$active &&
    css\`
      border: 1px solid var(--C-Dark-11, #1a2c49);
      background: var(--White, #fff);
      color: var(--C-Dark-11, #1a2c49);
    \`};
\`;
`,D={title:"WooriMobile/Tabs/WOMainTabs",component:p,parameters:{layout:"centered",storySource:{source:g}},decorators:[a=>t.jsx("div",{style:{width:"320px"},children:t.jsx(a,{})})],tags:["autodocs"],argTypes:{onChange:{control:"text",description:"Tabs onChange 함수 입니다.",defaultValue:{summary:void 0},type:{summary:"function",required:!0}},tabs:{control:"array",description:"Tabs id,name 입니다.",defaultValue:{summary:void 0},type:{summary:"array",required:!0}}}},n={args:{onChange:()=>{},tabs:[{id:1,name:"📂  자주 쓰는 업무"},{id:2,name:"📋  주제별 업무"}]}};var d,i,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  // 컴포넌트에 넘겨줄 props 정리
  args: {
    // props명 : 넘겨줄 props 값-
    onChange: () => {},
    tabs: [{
      id: 1,
      name: '📂  자주 쓰는 업무'
    }, {
      id: 2,
      name: '📋  주제별 업무'
    }]
  }
}`,...(c=(i=n.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const k=["Default"];export{n as Default,k as __namedExportsOrder,D as default};
