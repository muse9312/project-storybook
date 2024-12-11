import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as f}from"./index-76fb7be0.js";import{u as a,a as d}from"./styled-components.browser.esm-aa768a49.js";import{W as x}from"./WOIconButton-4118cf05.js";import"./_commonjsHelpers-de833af9.js";const p=({title:t,tableData:c})=>{const[o,g]=f.useState(!1);return e.jsxs(m,{$tableOpen:o,children:[e.jsxs(h,{$tableOpen:o,children:[t,e.jsx(x,{icon:"arr-toggle-white-14",width:14,height:14,onClick:()=>{g(!o)}})]}),e.jsx(u,{children:e.jsx(b,{children:c.map(n=>e.jsxs(v,{children:[e.jsx("div",{className:"title",children:n.title}),e.jsxs("div",{className:"text-wrap",children:[e.jsx("div",{className:`text ${n.state==="return"&&"return"}`,children:n.state==="return"?"반려":"승인"}),e.jsx("div",{className:"text",children:n.name}),e.jsx("div",{className:"text",children:n.date})]})]},n.id))})})]})},m=a.div`
  flex: 0 0 auto;
  background: var(--White, #fff);
  ${t=>t.$tableOpen&&d`
      height: 40px;
      overflow: hidden;
    `};
`,h=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 0 20px;
  background: var(--C-Dark-08, #566479);
  color: var(--White, #fff);
  font-size: 13px;
  font-weight: 700;
  .icon-btn {
    transform: rotate(-180deg);
  }
  ${t=>t.$tableOpen&&d`
      .icon-btn {
        transform: rotate(0deg);
      }
    `}
`,u=a.div`
  padding: 12px;
`,b=a.div`
  border-top: 1px solid var(--C-Dark-02, #ededf3);
  border-bottom: 1px solid var(--C-Dark-02, #ededf3);
`,v=a.div`
  display: flex;
  width: 100%;
  height: 26px;
  .title {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 92px;
    height: 100%;
    color: var(--C-Dark-12, #0e213f);
    font-size: 12px;
    font-weight: 400;
    background: #f5f6fa;
  }
  .text-wrap {
    flex: 2.6;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    .text {
      text-align: center;
      min-width: 92px;
      padding: 0 8px;
      font-size: 12px;
      font-weight: 400;
      color: var(--W-Dark-12, #111);
      &:first-child {
        min-width: 60px;
        color: var(--C-Dark-12, #0e213f);
        font-weight: 700;
        &.return {
          color: var(--Red-01, #ff5d5d);
        }
      }
    }
  }
`;p.__docgenInfo={description:"",methods:[],displayName:"WOToggleTable"};const T=`import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import WOIconButton from './WOIconButton';

const WOToggleTable = ({ title, tableData }) => {
  const [tableOpen, setTableOpen] = useState(false);

  return (
    <Wrapper $tableOpen={tableOpen}>
      <ToggleHeader $tableOpen={tableOpen}>
        {title}
        <WOIconButton
          icon='arr-toggle-white-14'
          width={14}
          height={14}
          onClick={() => {
            setTableOpen(!tableOpen);
          }}
        />
      </ToggleHeader>
      <ToggleBody>
        <ToggleTable>
          {tableData.map((item) => (
            <ToggleTableItem key={item.id}>
              <div className='title'>{item.title}</div>
              <div className='text-wrap'>
                <div className={\`text \${item.state === 'return' && 'return'}\`}>{item.state === 'return' ? '반려' : '승인'}</div>
                <div className='text'>{item.name}</div>
                <div className='text'>{item.date}</div>
              </div>
            </ToggleTableItem>
          ))}
        </ToggleTable>
      </ToggleBody>
    </Wrapper>
  );
};

export default WOToggleTable;

const Wrapper = styled.div\`
  flex: 0 0 auto;
  background: var(--White, #fff);
  \${(props) =>
    props.$tableOpen &&
    css\`
      height: 40px;
      overflow: hidden;
    \`};
\`;

const ToggleHeader = styled.div\`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 0 20px;
  background: var(--C-Dark-08, #566479);
  color: var(--White, #fff);
  font-size: 13px;
  font-weight: 700;
  .icon-btn {
    transform: rotate(-180deg);
  }
  \${(props) =>
    props.$tableOpen &&
    css\`
      .icon-btn {
        transform: rotate(0deg);
      }
    \`}
\`;

const ToggleBody = styled.div\`
  padding: 12px;
\`;

const ToggleTable = styled.div\`
  border-top: 1px solid var(--C-Dark-02, #ededf3);
  border-bottom: 1px solid var(--C-Dark-02, #ededf3);
\`;

const ToggleTableItem = styled.div\`
  display: flex;
  width: 100%;
  height: 26px;
  .title {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 92px;
    height: 100%;
    color: var(--C-Dark-12, #0e213f);
    font-size: 12px;
    font-weight: 400;
    background: #f5f6fa;
  }
  .text-wrap {
    flex: 2.6;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    .text {
      text-align: center;
      min-width: 92px;
      padding: 0 8px;
      font-size: 12px;
      font-weight: 400;
      color: var(--W-Dark-12, #111);
      &:first-child {
        min-width: 60px;
        color: var(--C-Dark-12, #0e213f);
        font-weight: 700;
        &.return {
          color: var(--Red-01, #ff5d5d);
        }
      }
    }
  }
\`;
`,j={title:"WooriMobile/table/WOToggleTable",component:p,parameters:{layout:"centered",storySource:{source:T}},decorators:[t=>e.jsx("div",{style:{width:"360px"},children:e.jsx(t,{})})],tags:["autodocs"],argTypes:{title:{control:"text",description:"Table title 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}},tableData:{control:"array",description:"Table tableData 입니다.",defaultValue:{summary:void 0},type:{summary:"array",required:!0}}}},r={args:{title:"Title",tableData:[{id:"1",title:"Title",state:"approval",name:"text",date:"text"},{id:"2",title:"Title",state:"approval",name:"text",date:"text"},{id:"3",title:"Title",state:"approval",name:"text",date:"text"},{id:"4",title:"Title",state:"return",name:"text",date:"text"}]}};var i,l,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    tableData: [{
      id: '1',
      title: 'Title',
      state: 'approval',
      name: 'text',
      date: 'text'
    }, {
      id: '2',
      title: 'Title',
      state: 'approval',
      name: 'text',
      date: 'text'
    }, {
      id: '3',
      title: 'Title',
      state: 'approval',
      name: 'text',
      date: 'text'
    }, {
      id: '4',
      title: 'Title',
      state: 'return',
      name: 'text',
      date: 'text'
    }]
  }
}`,...(s=(l=r.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const D=["Default"];export{r as Default,D as __namedExportsOrder,j as default};
