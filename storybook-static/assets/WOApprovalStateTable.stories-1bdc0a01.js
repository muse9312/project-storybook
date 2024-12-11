import{j as e}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import{u as r,a}from"./styled-components.browser.esm-aa768a49.js";import"./_commonjsHelpers-de833af9.js";const T=({manager:t,confirm:c,name:d,date:m,modify:u,id:o,disabled:p})=>e.jsx(A,{children:e.jsxs(W,{children:[e.jsx(N,{$id:o,$disabled:p,children:e.jsx("p",{className:"title-text",children:t})}),e.jsxs(_,{$id:o,children:[e.jsx(x,{$modify:u,children:e.jsx("p",{className:"item-text",children:!p&&c})}),e.jsx("div",{className:"rectangle"}),e.jsx(x,{$id:o,children:e.jsx("p",{className:"item-text",children:!p&&d})}),e.jsx("div",{className:"rectangle"}),e.jsx(x,{children:e.jsx("p",{className:"item-text",children:!p&&m})})]})]})}),A=r.div`
  display: flex;
  width: 845px;
  border-radius: '4px 0 0 0';
  &:nth-child(2) {
    margin-right: 18px;
  }
`,W=r.div`
  flex: 1;
`,N=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 32px;
  padding: 5px 60px;
  gap: 10px;
  border: 1px solid #ededf3;
  background-color: #566479;
  ${t=>t.$disabled&&a`
      background-color: #ededf3;
    `}
  border-radius: 4px 0 0 0;
  ${t=>t.$id===2&&a`
      border-radius: 0 4px 0 0;
      border-left: unset;
    `}

  .title-text {
    color: #d7d7de;
    ${t=>t.$disabled&&a`
        color: #9ea6b2;
      `}
    font-size: 12px;
    font-weight: 700;
  }
`,_=r.div`
  display: flex;
  width: 100%;
  height: 38px;
  border: 1px solid #ededf3;
  border-top: unset;
  border-radius: 0 0 0 4px;
  ${t=>t.$id===2&&a`
      border-radius: 0 0 4px 0;
      border-left: unset;
    `}
  background: #fff;
  .rectangle {
    flex: 0 0 auto;
    background-color: #ededf3;
    width: 1px;
    height: 100%;
  }
`,x=r.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  gap: 10px;

  .item-text {
    color: ${t=>t.$modify===!0?"#FF5D5D":"#0E213F"};
    font-size: 12px;
    font-weight: 700;
    text-align: center;
  }
`;T.__docgenInfo={description:"",methods:[],displayName:"WOApprovalColumn"};const n=({title:t,tableData:c,type:d,disabled:m})=>e.jsx(w,{$type:d,children:e.jsxs(S,{$type:d,children:[e.jsx(O,{$type:d,children:t}),e.jsx("div",{className:"test",children:c.map(u=>u.columns.map(o=>e.jsx(T,{...o,modify:!o.isApprove,disabled:m},o.id)))})]})}),w=r.div`
  min-width: 1256px;
  ${t=>t.$type==="modal"&&a`
      min-width: auto;
    `}
`,S=r.div`
  ${t=>t.$type!=="modal"&&a`
      display: flex;
      flex-direction: column;
      padding: 20px;
      background: #fff;
      border: 1px solid #ededf3;
      border-radius: 12px;
    `}

  .test {
    display: flex;
  }

  ${t=>t.$disabled&&a``}
`,O=r.div`
  display: flex;
  color: #0e213f;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 12px;
  ${t=>t.$type==="modal"&&a`
      margin-bottom: 8px;
    `}
`;n.__docgenInfo={description:"",methods:[],displayName:"WOApprovalStateTable"};const f=[{columns:[{id:1,manager:"금고담당자",confirm:"반려",isApprove:!1,name:"김우리",date:"2023.11.03"},{id:2,manager:"금고책임자",confirm:"승인",isApprove:!0,name:"이기고",date:"2023.11.03"}]},{columns:[{id:1,manager:"주무관",confirm:"반려",isApprove:!1,name:"김우리",date:"2023.11.03"},{id:2,manager:"팀장",confirm:"승인",isApprove:!0,name:"김다해",date:"2023.11.03"}]}],q={title:"WooriPC/Table/WOApprovalStateTable",component:n,parameters:{},decorators:[t=>e.jsx("div",{style:{width:"1784px",padding:"20px"},children:e.jsx(t,{})})],tags:["autodocs"],argTypes:{tableData:{control:"array",description:"Table TableData 입니다.",defaultValue:{summary:void 0},type:{summary:"array",required:!0}},type:{control:"select",options:["page",void 0],description:"Table type 입니다. [ ex) type이 modal 일때, min-width: auto] ",defaultValue:{summary:void 0},type:{summary:"string",required:!1}},background:{control:"boolean",description:"table 및 title padding 없을시 true 입니다 ",defaultValue:{summary:void 0},type:{summary:"boolean",required:!1}},disabled:{control:"boolean",description:"table 비활성화시 true 입니다. ",defaultValue:{summary:void 0},type:{summary:"boolean",required:!1}}}},s=()=>e.jsx(e.Fragment,{children:e.jsx(n,{title:"결제진행상태",tableData:f})}),i=()=>e.jsx(e.Fragment,{children:e.jsx(n,{title:"결제진행상태",tableData:f,type:"modal"})}),l=()=>e.jsx(e.Fragment,{children:e.jsx(n,{title:"결제진행상태",tableData:f,disabled:!0})});s.__docgenInfo={description:"",methods:[],displayName:"Default"};i.__docgenInfo={description:"",methods:[],displayName:"type"};l.__docgenInfo={description:"",methods:[],displayName:"disabled"};var b,g,y;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <>\r
      <WOApprovalStateTable title={'결제진행상태'} tableData={test1} />\r
    </>;
}`,...(y=(g=s.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var h,v,j;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return <>\r
      <WOApprovalStateTable title={'결제진행상태'} tableData={test1} type={'modal'} />\r
    </>;
}`,...(j=(v=i.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var C,$,D;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  return <>\r
      <WOApprovalStateTable title={'결제진행상태'} tableData={test1} disabled />\r
    </>;
}`,...(D=($=l.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};const V=["Default","type","disabled"];export{s as Default,V as __namedExportsOrder,q as default,l as disabled,i as type};
