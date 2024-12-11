import{j as e}from"./jsx-runtime-ffb262ed.js";import{W as r}from"./WOComboBox-dd50b7bf.js";import"./index-76fb7be0.js";import{u as c,a as d}from"./styled-components.browser.esm-aa768a49.js";import"./WOLabel-9cebf678.js";import"./InputLabel-7ccef553.js";import"./composeClasses-4118efa7.js";import"./extends-15b115a7.js";import"./styled-80c0ceef.js";import"./_commonjsHelpers-de833af9.js";import"./TextField-8918e36b.js";import"./useId-a47493a3.js";import"./index-de0962f3.js";import"./Modal-9b120e55.js";import"./mergeSlotProps-69f81163.js";import"./inheritsLoose-c82a83d4.js";import"./index-d3ea75b5.js";import"./ownerWindow-684f99c0.js";import"./useSlotProps-f7cb9e67.js";import"./debounce-517eeb3c.js";import"./TextareaAutosize-63b07324.js";import"./MenuItem-cd9f00c5.js";import"./Chip-9a81eb61.js";import"./assertThisInitialized-081f9914.js";import"./Autocomplete-fbfec46a.js";import"./index-08d2ae59.js";const a=({children:n,gridType:o,gridRowGap:l,as:g})=>(o=o===void 0?"normal":o,l=l===void 0?"40":l,e.jsx(y,{$gridType:o,$gridRowGap:l,as:g,children:n})),y=c.div`
  display: grid;
  ${n=>{if(n.$gridType==="form"){const o=n.$gridRowGap;return d`
        row-gap: ${o}px;
        padding: 20px;
      `}else if(n.$gridType==="normal")return d`
        gap: 0;
        padding: 0;
      `}}
`;a.__docgenInfo={description:"",methods:[],displayName:"GridSystem"};const D=`import React from 'react';
import styled, { css } from 'styled-components';

const GridSystem = ({ children, gridType, gridRowGap, as }) => {
  gridType = gridType === undefined ? 'normal' : gridType;
  gridRowGap = gridRowGap === undefined ? '40' : gridRowGap;

  return (
    <GridSystemWrap $gridType={gridType} $gridRowGap={gridRowGap} as={as}>
      {children}
    </GridSystemWrap>
  );
};

export default GridSystem;

const GridSystemWrap = styled.div\`
  display: grid;
  \${(props) => {
    if (props.$gridType === 'form') {
      const gridRowGap = props.$gridRowGap;
      return css\`
        row-gap: \${gridRowGap}px;
        padding: 20px;
      \`;
    } else if (props.$gridType === 'normal') {
      return css\`
        gap: 0;
        padding: 0;
      \`;
    }
  }}
\`;
`,H={title:"WooriMobile/Layout/GridSystem",component:a,parameters:{layout:"centered",storySource:{source:D}},decorators:[n=>e.jsx("div",{style:{width:"320px"},children:e.jsx(n,{})})],tags:["autodocs"],argTypes:{gridType:{control:"select",options:["form","normal"],description:"그리드 형태입니다. (form, normal)",defaultValue:{summary:"normal"},type:{summary:"string",required:!0}},gridRowGap:{control:"text",description:"간격입니다.",defaultValue:{summary:"40"},type:{summary:"text",required:!1}}}},i=()=>e.jsx(e.Fragment,{children:e.jsxs(a,{gridType:"form",children:[e.jsx(r,{isAutoComplete:!0,label:"기관구분",onChange:()=>{},defaultValue:{id:1,label:"서울시청"},optionList:[{id:1,label:"서울시청"},{id:2,label:"시청01"},{id:3,label:"시청02"}]}),e.jsx(r,{isAutoComplete:!0,label:"기관명",onChange:()=>{},optionList:[{id:1,label:"서울시청"},{id:2,label:"시청01"},{id:3,label:"시청02"}]}),e.jsx(r,{isAutoComplete:!0,label:"부서명",onChange:()=>{},disabled:!0,defaultValue:{id:1,label:"전체"},optionList:[{id:1,label:"전체"},{id:2,label:"부서1"},{id:3,label:"부서2"}]})]})}),t=()=>e.jsx(e.Fragment,{children:e.jsxs(a,{gridType:"form",gridRowGap:"20",children:[e.jsx(r,{isAutoComplete:!0,label:"기관구분",onChange:()=>{},defaultValue:{id:1,label:"서울시청"},optionList:[{id:1,label:"서울시청"},{id:2,label:"시청01"},{id:3,label:"시청02"}]}),e.jsx(r,{isAutoComplete:!0,label:"기관명",onChange:()=>{},optionList:[{id:1,label:"서울시청"},{id:2,label:"시청01"},{id:3,label:"시청02"}]}),e.jsx(r,{isAutoComplete:!0,label:"부서명",onChange:()=>{},disabled:!0,defaultValue:{id:1,label:"전체"},optionList:[{id:1,label:"전체"},{id:2,label:"부서1"},{id:3,label:"부서2"}]})]})});i.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"RowGap"};var u,s,C;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <>\r
            <GridSystem gridType="form">\r
                <WOComboBox isAutoComplete={true} label="기관구분" onChange={() => {}} defaultValue={{
        id: 1,
        label: '서울시청'
      }} optionList={[{
        id: 1,
        label: '서울시청'
      }, {
        id: 2,
        label: '시청01'
      }, {
        id: 3,
        label: '시청02'
      }]} />\r
                <WOComboBox isAutoComplete={true} label="기관명" onChange={() => {}} optionList={[{
        id: 1,
        label: '서울시청'
      }, {
        id: 2,
        label: '시청01'
      }, {
        id: 3,
        label: '시청02'
      }]} />\r
\r
                <WOComboBox isAutoComplete={true} label="부서명" onChange={() => {}} disabled defaultValue={{
        id: 1,
        label: '전체'
      }} optionList={[{
        id: 1,
        label: '전체'
      }, {
        id: 2,
        label: '부서1'
      }, {
        id: 3,
        label: '부서2'
      }]} />\r
            </GridSystem>\r
        </>;
}`,...(C=(s=i.parameters)==null?void 0:s.docs)==null?void 0:C.source}}};var p,m,b;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return <>\r
            <GridSystem gridType="form" gridRowGap="20">\r
                <WOComboBox isAutoComplete={true} label="기관구분" onChange={() => {}} defaultValue={{
        id: 1,
        label: '서울시청'
      }} optionList={[{
        id: 1,
        label: '서울시청'
      }, {
        id: 2,
        label: '시청01'
      }, {
        id: 3,
        label: '시청02'
      }]} />\r
                <WOComboBox isAutoComplete={true} label="기관명" onChange={() => {}} optionList={[{
        id: 1,
        label: '서울시청'
      }, {
        id: 2,
        label: '시청01'
      }, {
        id: 3,
        label: '시청02'
      }]} />\r
\r
                <WOComboBox isAutoComplete={true} label="부서명" onChange={() => {}} disabled defaultValue={{
        id: 1,
        label: '전체'
      }} optionList={[{
        id: 1,
        label: '전체'
      }, {
        id: 2,
        label: '부서1'
      }, {
        id: 3,
        label: '부서2'
      }]} />\r
            </GridSystem>\r
        </>;
}`,...(b=(m=t.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const J=["Default","RowGap"];export{i as Default,t as RowGap,J as __namedExportsOrder,H as default};
