import{j as t}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import{u as d}from"./styled-components.browser.esm-aa768a49.js";import"./_commonjsHelpers-de833af9.js";const n=({tableData:u,bullet:o})=>t.jsx(s,{className:"sub-view-table",children:u.map(r=>t.jsxs(l,{children:[o&&t.jsx(t.Fragment,{children:"• "}),r.title," ",r.text]},r.id))}),s=d.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  background: #f7f8fa;
`,l=d.div`
  width: 50%;
  padding: 0 12px;
  font-size: 14px;
  font-weight: 400;
  line-height: 30px;
  color: var(--W-Dark-09);
`;n.__docgenInfo={description:"",methods:[],displayName:"WOSubViewTable"};const B={title:"WooriPC/Table/WOSubViewTable",component:n,parameters:{docs:{description:{component:`## 데이터 형식 예시\r
\`\`\`jsx\r

export const subViewTableData = [\r
{\r
id: '1',\r
title: '당월누계',\r
text: ' = 전월누계+당월분-당월반납',\r
},\r
{\r
id: '2',\r
title: '잔여 한도',\r
text: '10,000,000',\r
},\r
{\r
id: '3',\r
title: '확인유무',\r
text: '불일치',\r
},\r
{\r
id: '4',\r
title: '우리은행',\r
text: '강동구청지점',\r
},\r
];\r

\`\`\``}}},decorators:[u=>t.jsx("div",{style:{width:"1784px",padding:"20px"},children:t.jsx(u,{})})],tags:["autodocs"],argTypes:{tableData:{control:"array",description:"Table TableData 입니다.",defaultValue:{summary:void 0},type:{summary:"array",required:!0}}}},e=()=>t.jsx(t.Fragment,{children:t.jsx(n,{tableData:[{id:"1",title:"당월누계",text:" = 전월누계+당월분-당월반납"},{id:"2",title:"잔여 한도",text:"10,000,000"},{id:"3",title:"확인유무",text:"불일치"},{id:"4",title:"우리은행",text:"강동구청지점"}],type:"page"})});e.__docgenInfo={description:"",methods:[],displayName:"Default"};var a,i,C;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  return <>\r
      <WOSubViewTable tableData={[{
      id: '1',
      title: '당월누계',
      text: ' = 전월누계+당월분-당월반납'
    }, {
      id: '2',
      title: '잔여 한도',
      text: '10,000,000'
    }, {
      id: '3',
      title: '확인유무',
      text: '불일치'
    }, {
      id: '4',
      title: '우리은행',
      text: '강동구청지점'
    }]} type='page' />\r
    </>;
}`,...(C=(i=e.parameters)==null?void 0:i.docs)==null?void 0:C.source}}};const m=["Default"];export{e as Default,m as __namedExportsOrder,B as default};
