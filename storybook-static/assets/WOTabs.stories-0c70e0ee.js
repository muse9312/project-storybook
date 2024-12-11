import{j as s}from"./jsx-runtime-ffb262ed.js";import{u as y,a as t}from"./styled-components.browser.esm-aa768a49.js";import{r as $}from"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const f=({tabs:e,type:a,onChange:x,activeTabID:h})=>{const[D,T]=$.useState(h||e[0].id),B=n=>{T(n),x(n)};return s.jsx(A,{$type:a,className:"tab",children:e.map(n=>s.jsx(v,{type:"button",$type:a,className:`tab-item ${a}`,$active:D===n.id,onClick:()=>B(n.id),children:n.name},n.id))})},A=y.div`
  display: flex;
  align-items: center;
  width: fit-content;
  ${e=>e.$type==="type2"&&t`
      padding: 2px;
      border-radius: 12px;
      background: #0e213f;
    `}
  ${e=>e.$type==="type3"&&t`
      padding: 4px;
      border-radius: 100px;
      background: #1a2c49;
    `}
    ${e=>e.$type==="guide"&&t`
      padding: 0 20px;
    `}
`,v=y.button`
  // 기본 스타일
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.4);
  border: 1px solid transparent;

  & + .tab-item {
    margin-left: 28px;
  }

  // 활성 상태 스타일
  ${e=>e.$active&&t`
      color: #fff;
      border-bottom: 1px solid #fff;
    `}

  // type2 스타일
  ${e=>e.$type==="type2"&&t`
      & + .type2 {
        margin-left: 0;
      }
      // type2 스타일 세부 정의
      width: 60px;
      height: 20px;
      border-radius: 10px;
      background: #0e213f;
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
      color: rgba(255, 255, 255, 0.7);
      border: unset;
      text-align: center;

      // type2에서 활성 상태 스타일
      ${a=>a.$active&&t`
          background: #1d2e4b;
          font-weight: 700;
          color: #fff;
          border-bottom: unset;
        `}
    `}
  // type3 스타일
  ${e=>e.$type==="type3"&&t`
      & + .type3 {
        margin-left: 0;
      }
      // type2 스타일 세부 정의
      width: 65px;
      height: 24px;
      border-radius: 100px;
      background: unset;
      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
      color: #86909f;
      border: unset;
      text-align: center;

      // type2에서 활성 상태 스타일
      ${a=>a.$active&&t`
          background: #99a3ff;
          font-weight: 700;
          color: #fff;
          border-bottom: unset;
        `}
    `}

     // guide 스타일
  ${e=>e.$type==="guide"&&t`
      & + .guide {
        margin-left: 17px;
      }
      // guide 스타일 세부 정의

      height: 27px;

      font-size: 14px;
      font-weight: 700;
      line-height: 21px;
      color: var(--C-Dark-11);
      opacity: 0.5;
      transition: all 0.7s;
      text-align: center;

      // guide 활성 상태 스타일
      ${a=>a.$active&&t`
          color: var(--C-Dark-11);
          opacity: 1;
          border-bottom: 1px solid var(--C-Dark-11);
        `}
    `}
`;f.__docgenInfo={description:"",methods:[],displayName:"WOTabs"};const S={title:"WooriPC/Tabs/WOTabs",component:f,parameters:{layout:"centered",docs:{description:{component:"```jsx\r\nTabs Components 사용시 사용 페이지에서 \r\nOnClick 이벤트 사용\r\n선택된 탭 받아와 상태 변경후 상태에 따라 렌더\r\n선택된 탭 content는 WOTabContent 컴포넌트 사용\r\n```"}}},tags:["autodocs"],argTypes:{onChange:{control:"text",description:"Tabs onChange 함수 입니다.",defaultValue:{summary:void 0},type:{summary:"function",required:!0}},tabs:{control:"array",description:"Tabs id,name 입니다.",defaultValue:{summary:void 0},type:{summary:"array",required:!0}},type:{control:"text",description:"Tabs Type 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!1}},activeTabID:{control:"text",description:"Tabs activeTabID 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!1}}}},r={args:{onChange:()=>{},tabs:[{id:"tab1",name:"계좌현황"},{id:"tab2",name:"거래내역장"}]}},o={args:{onChange:()=>{},tabs:[{id:"tab1",name:"전체"},{id:"tab2",name:"일상경비"},{id:"tab3",name:"보통예금"},{id:"tab4",name:"공금계좌"}],type:"type2"}},u={args:{onChange:()=>{},tabs:[{id:"tab1",name:"보고서"},{id:"tab2",name:"내역"}],type:"type3"}};var i,d,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    onChange: () => {},
    tabs: [{
      id: 'tab1',
      name: '계좌현황'
    }, {
      id: 'tab2',
      name: '거래내역장'
    }]
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var C,c,m;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    onChange: () => {},
    tabs: [{
      id: 'tab1',
      name: '전체'
    }, {
      id: 'tab2',
      name: '일상경비'
    }, {
      id: 'tab3',
      name: '보통예금'
    }, {
      id: 'tab4',
      name: '공금계좌'
    }],
    type: 'type2'
  }
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var b,g,l;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    onChange: () => {},
    tabs: [{
      id: 'tab1',
      name: '보고서'
    }, {
      id: 'tab2',
      name: '내역'
    }],
    type: 'type3'
  }
}`,...(l=(g=u.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};const W=["TextTabs","Type2","Type3"];export{r as TextTabs,o as Type2,u as Type3,W as __namedExportsOrder,S as default};
