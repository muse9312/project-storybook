import{j as n}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import{u as p,a as e}from"./styled-components.browser.esm-aa768a49.js";import"./_commonjsHelpers-de833af9.js";const C=({tableData:t,type:a,title:x})=>n.jsxs(S,{$type:a,$title:x,className:"sub-table",children:[x&&n.jsx(j,{children:x}),t.map(i=>n.jsxs(W,{$type:a,children:[n.jsx(z,{$type:a,children:i.title}),n.jsx(N,{className:i.isNum?"num-text":"",$type:a,children:i.text})]},i.id))]}),S=p.div`
  flex: 0 0 auto;
  width: 100%;
  padding: 20px;
  background: var(--C-Dark-01, #f5f6fa);
  & + & {
    margin-top: 8px;
  }
  & + .toggle-sub-table {
    margin-top: 8px;
  }
  ${t=>t.$type==="type-01"&&e`
      padding: 0 20px 14px 20px;
      background: #fff;
      ${a=>a.$title?"":e`
              padding: 14px 20px;
            `}
    `}
  ${t=>t.$type==="type-02"&&e`
      padding: 12px 20px;
      background: var(--C-Dark-02, #ededf3);
      & + .table {
        margin-top: 8px;
      }
    `}
`,j=p.div`
  margin-bottom: 14px;
  padding: 20px 0 12px;
  color: #000;
  font-size: 16px;
  font-weight: 700;
  border-bottom: 1px solid var(--C-Dark-02);
`,W=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 12px;
  padding: 6px 0px;
  ${t=>t.$type==="type-01"&&e`
      padding: 4px 0px;
      & + & {
        margin-top: 6px;
      }
    `}
  ${t=>t.$type==="type-02"&&e`
      padding: 4px 0px;
    `}
`,z=p.div`
  flex: 0 0 auto;
  width: 120px;
  color: var(--C-Dark-10, #263752);
  font-size: 12px;
  font-weight: 700;
  ${t=>t.$type==="type-01"&&e`
      color: var(--C-Dark-10, #263752);
      font-size: 13px;
    `}
  ${t=>t.$type==="type-02"&&e`
      position: relative;
      padding-left: 7px;
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background-color: var(--C-Dark-10);
      }
    `}
`,N=p.div`
  width: 180px;
  color: var(--C-Dark-08);
  font-size: 12px;
  font-weight: 400;
  &.num-text {
    text-align: right;
  }
  ${t=>t.$type==="type-01"&&e`
      font-size: 13px;
    `}
  ${t=>(t.$type==="type-02"||t.$type==="type-01")&&e`
      text-align: right;
    `}
`;C.__docgenInfo={description:"",methods:[],displayName:"WOSubTable"};const O=`import React from 'react';
import styled, { css } from 'styled-components';

const WOSubTable = ({ tableData, type, title }) => {
  return (
    <Wrapper $type={type} $title={title} className='sub-table'>
      {title && <TableTitle>{title}</TableTitle>}
      {tableData.map((item) => (
        <TableItem key={item.id} $type={type}>
          <Title $type={type}>{item.title}</Title>
          <Text className={item.isNum ? 'num-text' : ''} $type={type}>
            {item.text}
          </Text>
        </TableItem>
      ))}
    </Wrapper>
  );
};

export default WOSubTable;

const Wrapper = styled.div\`
  flex: 0 0 auto;
  width: 100%;
  padding: 20px;
  background: var(--C-Dark-01, #f5f6fa);
  & + & {
    margin-top: 8px;
  }
  & + .toggle-sub-table {
    margin-top: 8px;
  }
  \${(props) =>
    props.$type === 'type-01' &&
    css\`
      padding: 0 20px 14px 20px;
      background: #fff;
      \${(props) =>
        props.$title
          ? ''
          : css\`
              padding: 14px 20px;
            \`}
    \`}
  \${(props) =>
    props.$type === 'type-02' &&
    css\`
      padding: 12px 20px;
      background: var(--C-Dark-02, #ededf3);
      & + .table {
        margin-top: 8px;
      }
    \`}
\`;

const TableTitle = styled.div\`
  margin-bottom: 14px;
  padding: 20px 0 12px;
  color: #000;
  font-size: 16px;
  font-weight: 700;
  border-bottom: 1px solid var(--C-Dark-02);
\`;

const TableItem = styled.div\`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 12px;
  padding: 6px 0px;
  \${(props) =>
    props.$type === 'type-01' &&
    css\`
      padding: 4px 0px;
      & + & {
        margin-top: 6px;
      }
    \`}
  \${(props) =>
    props.$type === 'type-02' &&
    css\`
      padding: 4px 0px;
    \`}
\`;

const Title = styled.div\`
  flex: 0 0 auto;
  width: 120px;
  color: var(--C-Dark-10, #263752);
  font-size: 12px;
  font-weight: 700;
  \${(props) =>
    props.$type === 'type-01' &&
    css\`
      color: var(--C-Dark-10, #263752);
      font-size: 13px;
    \`}
  \${(props) =>
    props.$type === 'type-02' &&
    css\`
      position: relative;
      padding-left: 7px;
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background-color: var(--C-Dark-10);
      }
    \`}
\`;

const Text = styled.div\`
  width: 180px;
  color: var(--C-Dark-08);
  font-size: 12px;
  font-weight: 400;
  &.num-text {
    text-align: right;
  }
  \${(props) =>
    props.$type === 'type-01' &&
    css\`
      font-size: 13px;
    \`}
  \${(props) =>
    (props.$type === 'type-02' || props.$type === 'type-01') &&
    css\`
      text-align: right;
    \`}
\`;
`,E={title:"WooriMobile/table/WOSubTable",component:C,parameters:{layout:"centered",storySource:{source:O}},decorators:[t=>n.jsx("div",{style:{width:"320px"},children:n.jsx(t,{})})],tags:["autodocs"],argTypes:{tableData:{control:"array",description:"Table tableData 입니다.",defaultValue:{summary:void 0},type:{summary:"array",required:!0}},type:{control:"text",description:"Table type 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}},title:{control:"text",description:"Table type-01 일시 title 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}}}},r={args:{tableData:[{id:"1",title:"Label",text:"text"},{id:"2",title:"Label",text:"text"},{id:"3",title:"Label",text:"text"},{id:"4",title:"Label",text:"0000",isNum:!0}]}},l={args:{tableData:[{id:"1",title:"Label",text:"text"},{id:"2",title:"Label",text:"text"},{id:"3",title:"Label",text:"text"},{id:"4",title:"Label",text:"0000"}],type:"type-01"}},o={args:{tableData:[{id:"1",title:"Label",text:"text"},{id:"2",title:"Label",text:"text"},{id:"3",title:"Label",text:"text"},{id:"4",title:"Label",text:"0000"}],type:"type-01",title:"title"}},s={args:{tableData:[{id:"1",title:"Label",text:"text"},{id:"2",title:"Label",text:"text"},{id:"3",title:"Label",text:"text"},{id:"4",title:"Label",text:"0000"}],type:"type-01",title:"title",totalData:!0}},d={args:{tableData:[{id:"1",title:"Label",text:"text"},{id:"2",title:"Label",text:"text"},{id:"3",title:"Label",text:"text"},{id:"4",title:"Label",text:"0000"}],type:"type-02"}};var c,b,y;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    tableData: [{
      id: '1',
      title: 'Label',
      text: 'text'
    }, {
      id: '2',
      title: 'Label',
      text: 'text'
    }, {
      id: '3',
      title: 'Label',
      text: 'text'
    }, {
      id: '4',
      title: 'Label',
      text: '0000',
      isNum: true
    }]
  }
}`,...(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var m,u,g;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    tableData: [{
      id: '1',
      title: 'Label',
      text: 'text'
    }, {
      id: '2',
      title: 'Label',
      text: 'text'
    }, {
      id: '3',
      title: 'Label',
      text: 'text'
    }, {
      id: '4',
      title: 'Label',
      text: '0000'
    }],
    type: 'type-01'
  }
}`,...(g=(u=l.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,$,T;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    tableData: [{
      id: '1',
      title: 'Label',
      text: 'text'
    }, {
      id: '2',
      title: 'Label',
      text: 'text'
    }, {
      id: '3',
      title: 'Label',
      text: 'text'
    }, {
      id: '4',
      title: 'Label',
      text: '0000'
    }],
    type: 'type-01',
    title: 'title'
  }
}`,...(T=($=o.parameters)==null?void 0:$.docs)==null?void 0:T.source}}};var L,D,h;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    tableData: [{
      id: '1',
      title: 'Label',
      text: 'text'
    }, {
      id: '2',
      title: 'Label',
      text: 'text'
    }, {
      id: '3',
      title: 'Label',
      text: 'text'
    }, {
      id: '4',
      title: 'Label',
      text: '0000'
    }],
    type: 'type-01',
    title: 'title',
    totalData: true
  }
}`,...(h=(D=s.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};var v,k,w;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    tableData: [{
      id: '1',
      title: 'Label',
      text: 'text'
    }, {
      id: '2',
      title: 'Label',
      text: 'text'
    }, {
      id: '3',
      title: 'Label',
      text: 'text'
    }, {
      id: '4',
      title: 'Label',
      text: '0000'
    }],
    type: 'type-02'
  }
}`,...(w=(k=d.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const R=["Default","Type01","Type01Title","Type01Total","Type02"];export{r as Default,l as Type01,o as Type01Title,s as Type01Total,d as Type02,R as __namedExportsOrder,E as default};
