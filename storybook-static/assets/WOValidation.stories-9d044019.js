import{j as t}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import{u as r}from"./styled-components.browser.esm-aa768a49.js";import{W as d}from"./WOIcon-b00d259e.js";import"./_commonjsHelpers-de833af9.js";const c=({itemList:s})=>t.jsx(l,{children:s.map(e=>t.jsxs(p,{children:[t.jsx(d,{icon:!e.isCheck&&"check"||(e.isCheck==="pass"?"check_blue":"check_red"),width:12,height:12}),t.jsx(u,{$vailCheck:e.isCheck,children:e.title})]},e.id))}),l=r.div`
  display: flex;
  gap: 0 12px;
`,p=r.div`
  display: flex;
  gap: 0 4px;
  align-items: center;
`,u=r.div`
  color: ${s=>{switch(s.$vailCheck){case"pass":return"var(--Blue-02)";case"error":return"var(--Red-02)";default:return"var(--W-Dark-06)"}}};
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.12px;
`;c.__docgenInfo={description:"",methods:[],displayName:"WOValidationCheck"};const f={title:"WooriPC/Common/WOValidationCheck",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{itemList:{control:"text",description:"list 입니다.",defaultValue:{summary:"white"},type:{summary:"text",required:!0}}}},i={args:{itemList:[{id:"1",title:"소문자"},{id:"2",title:"특수문자",isCheck:"error"},{id:"3",title:"숫자",isCheck:"pass"},{id:"4",title:"6자 이상",isCheck:"pass"}]}};var a,n,o;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    itemList: [{
      id: '1',
      title: '소문자'
    }, {
      id: '2',
      title: '특수문자',
      isCheck: 'error'
    }, {
      id: '3',
      title: '숫자',
      isCheck: 'pass'
    }, {
      id: '4',
      title: '6자 이상',
      isCheck: 'pass'
    }]
  }
}`,...(o=(n=i.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const g=["Default"];export{i as Default,g as __namedExportsOrder,f as default};
