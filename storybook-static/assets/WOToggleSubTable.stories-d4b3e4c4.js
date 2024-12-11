import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as h}from"./index-76fb7be0.js";import{u as o,a as n}from"./styled-components.browser.esm-aa768a49.js";import{W as v}from"./WOIconButton-4118cf05.js";import"./_commonjsHelpers-de833af9.js";const u=({tableData:t,type:i})=>{const[l,b]=h.useState(!1),s=t.find(a=>a.totalData);return e.jsxs($,{$tableOpen:l,className:"toggle-sub-table",$type:i,children:[e.jsxs(T,{$tableOpen:l,$type:i,children:[s&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"title",children:s.title}),e.jsx("div",{className:"text",children:s.text})]}),e.jsx(v,{icon:"table-dropdown-black-18",width:10,height:18,onClick:()=>{b(!l)}})]}),e.jsx(D,{$type:i}),e.jsx(k,{$type:i,children:t.filter(a=>!a.totalData).map((a,f)=>e.jsxs(O,{$type:i,children:[e.jsx("div",{className:"title",children:a.title}),e.jsx("div",{className:"text",children:a.text})]},f))})]})},$=o.div`
  flex: 0 0 auto;
  background: var(--C-Dark-02);
  ${t=>t.$type==="type01"&&n`
      background: var(--White);
    `}
  ${t=>t.$tableOpen&&n`
      height: 52px;
      overflow: hidden;
    `}
  & +& {
    margin-top: 8px;
  }
  & + .sub-table {
    margin-top: 8px;
  }
`,T=o.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 20px;
  height: 52px;
  padding: 0 50px 0 20px;

  .icon-btn {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%) rotate(180deg);
  }
  ${t=>t.$tableOpen&&n`
      .icon-btn {
        transform: translateY(-50%);
      }
    `}

  .title {
    color: var(--C-Dark-10);
    font-size: 12px;
    font-weight: 700;
    ${t=>t.$type==="type01"&&n`
        color: var(--Black);
        font-size: 13px;
        font-weight: 700;
      `}
  }
  .text {
    color: var(--C-Dark-08, #566479);
    font-size: 12px;
    font-weight: 700;
    ${t=>t.$type==="type01"&&n`
        color: var(--Black);
        font-size: 14px;
        font-weight: 700;
      `}
  }
`,D=o.div`
  border-top: 1px solid var(--C-Dark-05);

  ${t=>t.$type==="type01"&&n`
      margin: 0 20px;
      width: calc(100% - 40px);
      border-top: 1px solid var(--C-Dark-12);
    `}
`,k=o.div`
  padding: 12px 50px 12px 20px;
  ${t=>t.$type==="type01"&&n`
      padding: 12px 20px 12px;
    `}
`,O=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 20px;
  height: 28px;

  .title {
    color: var(--C-Dark-10);
    font-size: 12px;
    font-weight: 700;
    ${t=>t.$type==="type01"&&n`
        font-size: 13px;
      `}
  }
  .text {
    color: var(--C-Dark-08, #566479);
    font-size: 12px;
    font-weight: 400;
    ${t=>t.$type==="type01"&&n`
        font-size: 13px;
      `}
  }
`;u.__docgenInfo={description:"",methods:[],displayName:"WOToggleSubTable"};const w=`import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import WOIconButton from './WOIconButton';

const WOToggleSubTable = ({ tableData, type }) => {
  const [tableOpen, setTableOpen] = useState(false);

  const totalDataItem = tableData.find((item) => item.totalData);
  return (
    <Wrapper $tableOpen={tableOpen} className='toggle-sub-table' $type={type}>
      <TitleWrap $tableOpen={tableOpen} $type={type}>
        {totalDataItem && (
          <>
            <div className='title'>{totalDataItem.title}</div>
            <div className='text'>{totalDataItem.text}</div>
          </>
        )}
        <WOIconButton
          icon={'table-dropdown-black-18'}
          width={10}
          height={18}
          onClick={() => {
            setTableOpen(!tableOpen);
          }}
        />
      </TitleWrap>
      <BorderLine $type={type} />
      <List $type={type}>
        {tableData
          .filter((item) => !item.totalData)
          .map((item, index) => (
            <Item key={index} $type={type}>
              <div className='title'>{item.title}</div>
              <div className='text'>{item.text}</div>
            </Item>
          ))}
      </List>
    </Wrapper>
  );
};

export default WOToggleSubTable;

const Wrapper = styled.div\`
  flex: 0 0 auto;
  background: var(--C-Dark-02);
  \${(props) =>
    props.$type === 'type01' &&
    css\`
      background: var(--White);
    \`}
  \${(props) =>
    props.$tableOpen &&
    css\`
      height: 52px;
      overflow: hidden;
    \`}
  & +& {
    margin-top: 8px;
  }
  & + .sub-table {
    margin-top: 8px;
  }
\`;

const TitleWrap = styled.div\`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 20px;
  height: 52px;
  padding: 0 50px 0 20px;

  .icon-btn {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%) rotate(180deg);
  }
  \${(props) =>
    props.$tableOpen &&
    css\`
      .icon-btn {
        transform: translateY(-50%);
      }
    \`}

  .title {
    color: var(--C-Dark-10);
    font-size: 12px;
    font-weight: 700;
    \${(props) =>
      props.$type === 'type01' &&
      css\`
        color: var(--Black);
        font-size: 13px;
        font-weight: 700;
      \`}
  }
  .text {
    color: var(--C-Dark-08, #566479);
    font-size: 12px;
    font-weight: 700;
    \${(props) =>
      props.$type === 'type01' &&
      css\`
        color: var(--Black);
        font-size: 14px;
        font-weight: 700;
      \`}
  }
\`;

const BorderLine = styled.div\`
  border-top: 1px solid var(--C-Dark-05);

  \${(props) =>
    props.$type === 'type01' &&
    css\`
      margin: 0 20px;
      width: calc(100% - 40px);
      border-top: 1px solid var(--C-Dark-12);
    \`}
\`;

const List = styled.div\`
  padding: 12px 50px 12px 20px;
  \${(props) =>
    props.$type === 'type01' &&
    css\`
      padding: 12px 20px 12px;
    \`}
\`;

const Item = styled.div\`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 20px;
  height: 28px;

  .title {
    color: var(--C-Dark-10);
    font-size: 12px;
    font-weight: 700;
    \${(props) =>
      props.$type === 'type01' &&
      css\`
        font-size: 13px;
      \`}
  }
  .text {
    color: var(--C-Dark-08, #566479);
    font-size: 12px;
    font-weight: 400;
    \${(props) =>
      props.$type === 'type01' &&
      css\`
        font-size: 13px;
      \`}
  }
\`;
`,S={title:"WooriMobile/table/WOToggleSubTable",component:u,parameters:{layout:"centered",storySource:{source:w}},decorators:[t=>e.jsx("div",{style:{width:"360px"},children:e.jsx(t,{})})],tags:["autodocs"],argTypes:{tableData:{control:"array",description:"Table tableData 입니다.",defaultValue:{summary:void 0},type:{summary:"array",required:!0}},type:{control:"array",description:"title type 입니다.",defaultValue:{summary:void 0},type:{summary:"array",required:!0}},title:{control:"text",description:"table title 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}}}},r={args:{title:"Title",tableData:[{id:"1",title:"Title",text:"text"},{id:"2",title:"Title",text:"text"},{id:"3",title:"Title",text:"text"},{id:"4",title:"Title",text:"text"},{id:"5",title:"Total",text:"text",totalData:!0}]}},p={args:{type:"type01",title:"Title",tableData:[{id:"1",title:"Title",text:"text"},{id:"2",title:"Title",text:"text"},{id:"3",title:"Title",text:"text"},{id:"4",title:"Title",text:"text"},{id:"5",title:"Total",text:"text",totalData:!0}]}};var d,x,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    tableData: [{
      id: '1',
      title: 'Title',
      text: 'text'
    }, {
      id: '2',
      title: 'Title',
      text: 'text'
    }, {
      id: '3',
      title: 'Title',
      text: 'text'
    }, {
      id: '4',
      title: 'Title',
      text: 'text'
    }, {
      id: '5',
      title: 'Total',
      text: 'text',
      totalData: true
    }]
  }
}`,...(c=(x=r.parameters)==null?void 0:x.docs)==null?void 0:c.source}}};var m,y,g;p.parameters={...p.parameters,docs:{...(m=p.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    type: 'type01',
    title: 'Title',
    tableData: [{
      id: '1',
      title: 'Title',
      text: 'text'
    }, {
      id: '2',
      title: 'Title',
      text: 'text'
    }, {
      id: '3',
      title: 'Title',
      text: 'text'
    }, {
      id: '4',
      title: 'Title',
      text: 'text'
    }, {
      id: '5',
      title: 'Total',
      text: 'text',
      totalData: true
    }]
  }
}`,...(g=(y=p.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const B=["Default","Type"];export{r as Default,p as Type,B as __namedExportsOrder,S as default};
