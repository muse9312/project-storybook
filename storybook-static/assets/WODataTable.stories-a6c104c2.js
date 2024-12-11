import{j as t}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import{u as n}from"./styled-components.browser.esm-aa768a49.js";import"./_commonjsHelpers-de833af9.js";const d=({tableData:a})=>t.jsx(s,{children:a.map(r=>t.jsxs(p,{children:[t.jsx(x,{children:r.title}),t.jsx(c,{children:r.text})]},r.id))}),s=n.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0 28px;
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  background: var(--C-Dark-09, #3c4b63);
`,p=n.div`
  display: flex;
  align-items: center;
  gap: 0 10px;
  width: calc((100% - 28px) / 2);
  height: 20px;
`,x=n.div`
  position: relative;
  flex: 0 0 auto;
  width: fit-content;
  padding-left: 7px;
  color: var(--White, #fff);
  font-size: 12px;
  font-weight: 400;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: #fff;
  }
`,c=n.div`
  flex: 1;
  width: 100%;
  color: var(--C-Dark-06, #9ea6b2);
  font-size: 12px;
  font-weight: 400;
  text-align: right;
`;d.__docgenInfo={description:"",methods:[],displayName:"WODataTable"};const f=`import React from 'react';
import styled from 'styled-components';

const WODataTable = ({ tableData }) => {
  return (
    <Wrapper>
      {tableData.map((item) => (
        <TableItem key={item.id}>
          <Title>{item.title}</Title>
          <Text>{item.text}</Text>
        </TableItem>
      ))}
    </Wrapper>
  );
};

export default WODataTable;

const Wrapper = styled.div\`
  display: flex;
  flex-wrap: wrap;
  gap: 0 28px;
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  background: var(--C-Dark-09, #3c4b63);
\`;
const TableItem = styled.div\`
  display: flex;
  align-items: center;
  gap: 0 10px;
  width: calc((100% - 28px) / 2);
  height: 20px;
\`;

const Title = styled.div\`
  position: relative;
  flex: 0 0 auto;
  width: fit-content;
  padding-left: 7px;
  color: var(--White, #fff);
  font-size: 12px;
  font-weight: 400;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: #fff;
  }
\`;

const Text = styled.div\`
  flex: 1;
  width: 100%;
  color: var(--C-Dark-06, #9ea6b2);
  font-size: 12px;
  font-weight: 400;
  text-align: right;
\`;
`,g={title:"WooriMobile/table/WODataTable",component:d,parameters:{layout:"centered",storySource:{source:f}},decorators:[a=>t.jsx("div",{style:{width:"320px"},children:t.jsx(a,{})})],tags:["autodocs"],argTypes:{tableData:{control:"array",description:"Table tableData 입니다.",defaultValue:{summary:void 0},type:{summary:"array",required:!0}}}},e={args:{tableData:[{id:"1",title:"Label",text:"text"},{id:"2",title:"Label",text:"text"},{id:"3",title:"Label",text:"text"},{id:"4",title:"Label",text:"text"}]}};var i,o,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
      text: 'text'
    }]
  }
}`,...(l=(o=e.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const y=["Default"];export{e as Default,y as __namedExportsOrder,g as default};
