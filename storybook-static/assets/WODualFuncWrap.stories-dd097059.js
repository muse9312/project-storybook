import{j as e}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import{u as $,a as d}from"./styled-components.browser.esm-aa768a49.js";import{W as p}from"./WOComboBox-dd50b7bf.js";import{W as L}from"./WOCheckBox-22829e02.js";import{W as F}from"./WODatePicker-73f59ae1.js";import{W as j}from"./WODateRangePicker-54e68b27.js";import{W as y}from"./WOLabel-9cebf678.js";import"./_commonjsHelpers-de833af9.js";import"./TextField-8918e36b.js";import"./extends-15b115a7.js";import"./composeClasses-4118efa7.js";import"./styled-80c0ceef.js";import"./InputLabel-7ccef553.js";import"./useId-a47493a3.js";import"./index-de0962f3.js";import"./Modal-9b120e55.js";import"./mergeSlotProps-69f81163.js";import"./inheritsLoose-c82a83d4.js";import"./index-d3ea75b5.js";import"./ownerWindow-684f99c0.js";import"./useSlotProps-f7cb9e67.js";import"./debounce-517eeb3c.js";import"./TextareaAutosize-63b07324.js";import"./MenuItem-cd9f00c5.js";import"./Chip-9a81eb61.js";import"./assertThisInitialized-081f9914.js";import"./Autocomplete-fbfec46a.js";import"./index-08d2ae59.js";import"./DatePicker-8b752de9.js";import"./index-8d47fad6.js";import"./colorManipulator-702d430b.js";import"./Dialog-d847e8ea.js";import"./common-e2496f61.js";import"./sweetalert2.all-b9842f3b.js";const r=({children:n,firstElementAuto:a,includeLabel:c})=>e.jsx(A,{$firstElementAuto:a,$includeLabel:c,children:c?e.jsxs(e.Fragment,{children:[n.filter(s=>s.type.name==="WOLabel"),e.jsx(E,{children:n.filter(s=>s.type.name!=="WOLabel")})]}):n}),A=$.div`
  display: grid;

  ${n=>n.$includeLabel?d`
        row-gap: 3px;
      `:d`
        grid-template-columns: ${a=>`${a.$firstElementAuto?"auto":"80px"}`} 1fr;
        gap: ${a=>`${a.$includeLabel?"3px":"0"}`} ${a=>`${a.$firstElementAuto?"10px":"14px"}`};
        align-items: center;
        > :last-child {
          margin-top: auto;
        }
      `}
`,E=$.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
`;r.__docgenInfo={description:"",methods:[],displayName:"WODualFuncWrap"};const _=`import React from 'react';
import styled, { css } from 'styled-components';

const WODualFuncWrap = ({ children, firstElementAuto, includeLabel }) => {
  return (
    <DualFuncWrap $firstElementAuto={firstElementAuto} $includeLabel={includeLabel}>
      {!includeLabel ? (
        children
      ) : (
        <>
          {children.filter((item) => item.type.name === 'WOLabel')}
          <InputWrap>{children.filter((item) => item.type.name !== 'WOLabel')}</InputWrap>
        </>
      )}
    </DualFuncWrap>
  );
};

export default WODualFuncWrap;

const DualFuncWrap = styled.div\`
  display: grid;

  \${(props) => {
    if (!props.$includeLabel) {
      return css\`
        grid-template-columns: \${(props) => \`\${props.$firstElementAuto ? 'auto' : '80px'}\`} 1fr;
        gap: \${(props) => \`\${props.$includeLabel ? '3px' : '0'}\`} \${(props) => \`\${props.$firstElementAuto ? '10px' : '14px'}\`};
        align-items: center;
        > :last-child {
          margin-top: auto;
        }
      \`;
    } else {
      return css\`
        row-gap: 3px;
      \`;
    }
  }}
\`;

const InputWrap = styled.div\`
  display: flex;
  column-gap: 10px;
  align-items: center;
\`;
`,ue={title:"WooriMobile/Form/WODualFuncWrap",component:r,parameters:{layout:"centered",storySource:{source:_}},decorators:[n=>e.jsx("div",{style:{width:"320px"},children:e.jsx(n,{})})],tags:["autodocs"],argTypes:{}},t=()=>e.jsx(e.Fragment,{children:e.jsxs(r,{children:[e.jsx(p,{label:"label",onChange:()=>{},optionList:[{id:1,label:"data1"},{id:2,label:"data2"},{id:3,label:"data3"}]}),e.jsx(p,{onChange:()=>{},optionList:[{id:1,label:"data1"},{id:2,label:"data2"},{id:3,label:"data3"}]})]})}),o=()=>e.jsx(e.Fragment,{children:e.jsxs(r,{children:[e.jsx(p,{label:"label",onChange:()=>{},optionList:[{id:1,label:"data1"},{id:2,label:"data2"},{id:3,label:"data3"}]}),e.jsx(F,{label:"label",onChange:()=>{}})]})}),i=()=>e.jsx(e.Fragment,{children:e.jsxs(r,{firstElementAuto:!0,children:[e.jsx(L,{round:!0,blind:!0,item:{id:"chk01",name:"chk01"}}),e.jsx(j,{onChange:()=>{}})]})}),l=()=>e.jsx(e.Fragment,{children:e.jsxs(r,{firstElementAuto:!0,includeLabel:!0,children:[e.jsx(y,{label:"label"}),e.jsx(L,{round:!0,blind:!0,item:{id:"chk01",name:"chk01"}}),e.jsx(j,{onChange:()=>{}})]})});t.__docgenInfo={description:"",methods:[],displayName:"Combo"};o.__docgenInfo={description:"",methods:[],displayName:"Date"};i.__docgenInfo={description:"",methods:[],displayName:"checkboxWithRangeDatePicker"};l.__docgenInfo={description:"",methods:[],displayName:"LabelWithCheckboxAndRangeDatePicker"};var m,u,b;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <>\r
            <WODualFuncWrap>\r
                <WOComboBox label="label" onChange={() => {}} optionList={[{
        id: 1,
        label: 'data1'
      }, {
        id: 2,
        label: 'data2'
      }, {
        id: 3,
        label: 'data3'
      }]} />\r
                <WOComboBox onChange={() => {}} optionList={[{
        id: 1,
        label: 'data1'
      }, {
        id: 2,
        label: 'data2'
      }, {
        id: 3,
        label: 'data3'
      }]} />\r
            </WODualFuncWrap>\r
        </>;
}`,...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var W,h,x;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <>\r
            <WODualFuncWrap>\r
                <WOComboBox label="label" onChange={() => {}} optionList={[{
        id: 1,
        label: 'data1'
      }, {
        id: 2,
        label: 'data2'
      }, {
        id: 3,
        label: 'data3'
      }]} />\r
                <WODatePicker label="label" onChange={() => {}} />\r
            </WODualFuncWrap>\r
        </>;
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var g,f,O;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <>\r
            <WODualFuncWrap firstElementAuto>\r
                <WOCheckBox round blind item={{
        id: 'chk01',
        name: 'chk01'
      }} />\r
                <WODateRangePicker onChange={() => {}} />\r
            </WODualFuncWrap>\r
        </>;
}`,...(O=(f=i.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};var D,k,C;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <>\r
            <WODualFuncWrap firstElementAuto includeLabel>\r
                <WOLabel label="label" />\r
                <WOCheckBox round blind item={{
        id: 'chk01',
        name: 'chk01'
      }} />\r
                <WODateRangePicker onChange={() => {}} />\r
            </WODualFuncWrap>\r
        </>;
}`,...(C=(k=l.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const be=["Combo","Date","checkboxWithRangeDatePicker","LabelWithCheckboxAndRangeDatePicker"];export{t as Combo,o as Date,l as LabelWithCheckboxAndRangeDatePicker,be as __namedExportsOrder,i as checkboxWithRangeDatePicker,ue as default};
