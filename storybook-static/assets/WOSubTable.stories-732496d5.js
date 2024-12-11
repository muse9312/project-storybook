import{j as e}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import{u as d,a as s}from"./styled-components.browser.esm-aa768a49.js";import"./_commonjsHelpers-de833af9.js";const n=({tableData:t,type:l,title:p,disableWrap:f,titleWidth:y})=>e.jsxs(T,{className:"sub-table",$type:l,children:[p&&e.jsx(j,{children:p}),e.jsx(w,{$type:l,children:e.jsx("div",{className:"sub-table__wrap",children:t.map(o=>e.jsx(_,{$type:l,children:o.children&&o.children.map(i=>e.jsxs($,{$disableWrap:f,$type:l,titleWidth:y,children:[e.jsx("div",{className:"title",children:i.title}),e.jsx("div",{className:`text ${i.isNum&&"num"}`,children:i.isError?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"error",children:"0"}),"원"]}):e.jsx(e.Fragment,{children:i.text})})]},i.id))},o.id))})})]}),T=d.div`
  flex: 0 0 auto;
  min-width: 1256px;
  overflow: hidden;
  & + & {
    margin-top: 8px;
  }
  ${t=>t.$type==="modal"&&s`
      min-width: auto;
    `};
`,w=d.div`
  padding: 16px 32px;
  border-radius: 12px;
  background: #f5f6fa;

  ${t=>t.$type==="page"&&s`
      background: #ededf3;
    `};
  .sub-table {
    &__wrap {
      margin: 0 -36px;
      display: flex;
    }
  }
`,j=d.div`
  margin-bottom: 8px;
  color: #333;
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
`,_=d.div`
  min-width: 33.3%;
  border-right: 1px solid var(--C-Dark-03);
  padding: 0 36px;
  ${t=>t.$type==="page"&&s`
      border-right: 1px solid var(--W-Dark-03);
    `}
  &:last-child {
    border-right: unset;
    /* padding-right: 0; */
  }
`,$=d.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  min-height: 36px;
  .title {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    width: ${t=>`${t.titleWidth||160}px`};
    color: #263752;
    white-space: wrap;
    line-height: 110%;
  }
  .text {
    display: flex;
    align-items: center;
    color: #566479;
    font-weight: 400;
    white-space: wrap;
    line-height: 110%;
    &.num {
      margin-left: auto;
    }
    .error {
      color: #ff5d5d;
      line-height: 21px;
    }
  }
  ${t=>t.$type==="page"&&s`
      .title {
        font-size: 14px;
        font-weight: 700;
      }
      .text {
        font-size: 14px;
        font-weight: 400;
      }
    `}

  ${t=>t.$type==="modal"&&s`
      .title {
        font-size: 12px;
        font-weight: 700;
      }
      .text {
        font-size: 12px;
        font-weight: 400;
      }
    `}
`;n.__docgenInfo={description:"",methods:[],displayName:"WOSubTable"};const b=[{id:"1",children:[{id:"1-1",title:"공금예금계좌구분",text:"세입"},{id:"1-2",title:"회계번호",text:"00000-구세일반"},{id:"1-3",title:"관리모점코드",text:"000000-서울시청금융센터"},{id:"1-4",title:"최종거래일",text:"YYYY-MM-DD"}]},{id:"2",children:[{id:"2-1",title:"시/구세 구분",text:"구세"},{id:"2-2",title:"기관번호",text:"000-강동"},{id:"2-3",title:"신규일",text:"YYYY-MM-YY"},{id:"2-4",title:"최종일련번호",text:"0"}]},{id:"3",children:[{id:"3-1",title:"계좌상태",text:"정상 (활동계좌)"},{id:"3-2",title:"회계연도",text:"2023"},{id:"3-3",title:"해지일",text:"-"},{id:"3-4",title:"세입계좌수",text:"0"}]}],Y={title:"WooriPC/Table/WOSubTable",component:n,parameters:{},decorators:[t=>e.jsx("div",{style:{width:"1784px",padding:"20px"},children:e.jsx(t,{})})],tags:["autodocs"],argTypes:{tableData:{control:"array",description:"Table TableData 입니다.",defaultValue:{summary:void 0},type:{summary:"array",required:!0}},type:{control:"select",options:["page",void 0],description:"Table type 입니다. ( 모달 내부 아닌 페이지 에서 사용시 추가 )",defaultValue:{summary:void 0},type:{summary:"string",required:!1}}}},a=()=>e.jsx(e.Fragment,{children:e.jsx(n,{tableData:b})}),r=()=>e.jsx(e.Fragment,{children:e.jsx(n,{tableData:b,type:"page"})});a.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"PageType"};var c,x,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <>\r
      <WOSubTable tableData={TD_ARV0101V01_Sub01} />\r
    </>;
}`,...(m=(x=a.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};var h,u,g;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return <>\r
      <WOSubTable tableData={TD_ARV0101V01_Sub01} type='page' />\r
    </>;
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const N=["Default","PageType"];export{a as Default,r as PageType,N as __namedExportsOrder,Y as default};
