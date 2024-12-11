import{j as e}from"./jsx-runtime-ffb262ed.js";import{W as u}from"./WOTabs-7578990d.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-aa768a49.js";const c=`import styled, { css } from 'styled-components';
import React, { useState } from 'react';

const WOTabs = ({ tabs, type, onChange, activeTabID }) => {
  const [selectedTab, setSelectedTab] = useState(activeTabID || tabs[0].id);

  const handleSelectedTab = (tabId) => {
    setSelectedTab(tabId);
    onChange(tabId);
  };

  return (
    <TabList className='tab' $type={type}>
      {tabs.map((tab) => (
        <TabItem
          type='button'
          key={tab.id}
          className={\`tab-item\`}
          $active={selectedTab === tab.id ? true : false}
          onClick={() => handleSelectedTab(tab.id)}
          $type={type}>
          {tab.name}
        </TabItem>
      ))}
    </TabList>
  );
};

export default WOTabs;

const TabItem = styled.button\`
  // 기본 스타일
  width: 100%;
  height: 40px;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  color: var(--C-Dark-05, #c9c9d0);
  border-bottom: 3px solid transparent;
  z-index: 1;
  // 활성 상태 스타일
  \${(props) =>
    props.$active &&
    css\`
      color: var(--Blue-01, #3284ff);
      border-bottom: 3px solid var(--Blue-01, #3284ff);
    \`}
  \${(props) =>
    props.$type === 'fit' &&
    css\`
      flex: 0 0 auto;
    \`}
\`;

const TabList = styled.div\`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  \${(props) =>
    props.$type === 'fit' &&
    css\`
      min-width: 100%;
      width: fit-content;
      gap: 0 20px;
      padding: 0 20px;
      \${TabItem} {
        width: fit-content;
      }
      &::after {
        content: '';
        flex: 0 0 auto;
        display: block;
        width: 20px;
        height: 40px;
      }
    \`}
\`;
`,f={title:"WooriMobile/Tabs/WOTabs",component:u,parameters:{layout:"centered",storySource:{source:c}},decorators:[d=>e.jsx("div",{style:{width:"320px"},children:e.jsx(d,{})})],tags:["autodocs"],argTypes:{onChange:{control:"text",description:"Tabs onChange 함수 입니다.",defaultValue:{summary:void 0},type:{summary:"function",required:!0}},tabs:{control:"array",description:"Tabs id,name 입니다.",defaultValue:{summary:void 0},type:{summary:"array",required:!0}},type:{control:"array",description:"Tabs type 입니다.",defaultValue:{summary:void 0},type:{summary:"array",required:!1}}}},n={args:{onChange:()=>{},tabs:[{id:1,name:"tab1"},{id:2,name:"tab2"}]}},t={args:{onChange:()=>{},type:"fit",tabs:[{id:1,name:"tab1"},{id:2,name:"tab2"},{id:3,name:"tab3"},{id:4,name:"tab4"},{id:5,name:"tab5"}]}};var a,s,r;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  // 컴포넌트에 넘겨줄 props 정리
  args: {
    // props명 : 넘겨줄 props 값-
    onChange: () => {},
    tabs: [{
      id: 1,
      name: 'tab1'
    }, {
      id: 2,
      name: 'tab2'
    }]
  }
}`,...(r=(s=n.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var o,i,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  // 컴포넌트에 넘겨줄 props 정리
  args: {
    // props명 : 넘겨줄 props 값-
    onChange: () => {},
    type: 'fit',
    tabs: [{
      id: 1,
      name: 'tab1'
    }, {
      id: 2,
      name: 'tab2'
    }, {
      id: 3,
      name: 'tab3'
    }, {
      id: 4,
      name: 'tab4'
    }, {
      id: 5,
      name: 'tab5'
    }]
  }
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const T=["Default","Fit"];export{n as Default,t as Fit,T as __namedExportsOrder,f as default};
