import{j as u}from"./jsx-runtime-ffb262ed.js";import{u as s,a as n}from"./styled-components.browser.esm-aa768a49.js";import{r as D}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const i=({tabs:t,onChange:d})=>{const[c,m]=D.useState(t[0].id),p=e=>{m(e),d(e)};return u.jsx(l,{children:t.map(e=>u.jsx(b,{type:"button",$active:c===e.id,onClick:()=>p(e.id),children:e.name},e.id))})},l=s.div`
  display: flex;
  align-items: center;
  gap: 0 20px;
  width: fit-content;
  height: 42px;
`,b=s.button`
  padding-bottom: 11px;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  height: 42px;
  ${t=>t.$active?n`
          border-bottom: 1px solid var(--C-Dark-11);
          color: var(--C-Dark-11);
        `:n`
          color: rgba(26, 44, 73, 0.4);
          border-bottom: 1px solid transparent;
        `}
`;i.__docgenInfo={description:"",methods:[],displayName:"WOMainTabs"};const T={title:"WooriPC/Tabs/WOMainTab",component:i,parameters:{layout:"centered",docs:{description:{component:"```jsx\r\nTabs Components 사용시 사용 페이지에서 \r\nOnClick 이벤트 사용\r\n선택된 탭 받아와 상태 변경후 상태에 따라 렌더\r\n선택된 탭 content는 WOTabContent 컴포넌트 사용\r\n```"}}},tags:["autodocs"],argTypes:{onChange:{control:"text",description:"Tabs onChange 함수 입니다.",defaultValue:{summary:void 0},type:{summary:"function",required:!0}},tabs:{control:"array",description:"Tabs id,name 입니다.",defaultValue:{summary:void 0},type:{summary:"array",required:!0}}}},a={args:{onChange:()=>{},tabs:[{id:"tab1",name:"📂  자주 쓰는 업무"},{id:"tab2",name:"📋  주제별 업무"}]}};var o,r,C;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    onChange: () => {},
    tabs: [{
      id: 'tab1',
      name: '📂  자주 쓰는 업무'
    }, {
      id: 'tab2',
      name: '📋  주제별 업무'
    }]
  }
}`,...(C=(r=a.parameters)==null?void 0:r.docs)==null?void 0:C.source}}};const f=["Main"];export{a as Main,f as __namedExportsOrder,T as default};
