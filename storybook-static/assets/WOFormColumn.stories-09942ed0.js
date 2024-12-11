import{j as o}from"./jsx-runtime-ffb262ed.js";import{W as r}from"./WOComboBox-56701d7a.js";import{W as D}from"./WODateRangePicker-44f7ac1e.js";import{W as j}from"./WOFormColumn-1e91cf36.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-aa768a49.js";import"./common.styled-d4908734.js";import"./WOLabel-293b1256.js";import"./InputLabel-7ccef553.js";import"./composeClasses-4118efa7.js";import"./extends-15b115a7.js";import"./styled-80c0ceef.js";import"./TextField-8918e36b.js";import"./useId-a47493a3.js";import"./index-de0962f3.js";import"./Modal-9b120e55.js";import"./mergeSlotProps-69f81163.js";import"./inheritsLoose-c82a83d4.js";import"./index-d3ea75b5.js";import"./ownerWindow-684f99c0.js";import"./useSlotProps-f7cb9e67.js";import"./debounce-517eeb3c.js";import"./TextareaAutosize-63b07324.js";import"./MenuItem-cd9f00c5.js";import"./Chip-9a81eb61.js";import"./assertThisInitialized-081f9914.js";import"./Autocomplete-fbfec46a.js";import"./index-08d2ae59.js";import"./WODatePicker-cb0d3eaf.js";import"./DatePicker-8b752de9.js";import"./index-8d47fad6.js";import"./colorManipulator-702d430b.js";import"./Dialog-d847e8ea.js";import"./common-85643e36.js";import"./sweetalert2.all-b9842f3b.js";const lo={title:"WooriPC/Form/WOFormColumn",component:j,parameters:{layout:"centered",docs:{description:{component:"```jsx\r\nForm에서 각 input들의 너비를 제어하기 위한 일종의 Grid system 컴포넌트 \r\n```"}}},decorators:[f=>o.jsx("div",{style:{minWidth:"230px"},children:o.jsx(f,{})})],tags:["autodocs"],argTypes:{col:{control:"number",description:"차지할 input 컬럼 갯수 입니다.",defaultValue:{summary:void 0},type:{summary:"number",required:!1}},width:{control:"number",description:"컬럼 너비값 입니다.",defaultValue:{summary:void 0},type:{summary:"number",required:!1}},gridType:{control:"select",options:["type01"],description:"각 요소들의 너비가 다른 경우 입니다.",defaultValue:{summary:"button"},type:{summary:"string",required:!1}},isAlignCenter:{control:"boolean",description:"여러개의 input이 들어가는 경우 수직정렬 여부 입니다. (기본: end)",defaultValue:{summary:!1},type:{summary:"boolean",required:!1}},children:{description:"보여질 input요소 입니다"}}},e={args:{children:o.jsx(r,{label:"부서명",optionList:[{id:1,label:"전체"},{id:2,label:"option"}]})}},i={args:{col:2,children:o.jsx(r,{label:"부서명",optionList:[{id:1,label:"전체"},{id:2,label:"option"}]})}},t={args:{col:2,children:o.jsxs(o.Fragment,{children:[o.jsx(r,{label:"부서명",optionList:[{id:1,label:"전체"},{id:2,label:"option"}]}),o.jsx(r,{label:"부서명",optionList:[{id:1,label:"전체"},{id:2,label:"option"}]})]})}},n={args:{width:300,children:o.jsx(o.Fragment,{children:o.jsx(r,{label:"부서명",optionList:[{id:1,label:"전체"},{id:2,label:"option"}]})})}},a={args:{col:2,gridType:"type01",children:o.jsxs(o.Fragment,{children:[o.jsx(r,{label:"일자구분",optionList:[{id:1,label:"승인일자"},{id:2,label:"option"}],isAutoComplete:!0}),o.jsx(D,{label:"",periodValue:["2023-11-01","2023-11-01"]})]})}};var l,s,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: <WOComboBox label={'부서명'} optionList={[{
      id: 1,
      label: '전체'
    }, {
      id: 2,
      label: 'option'
    }]} />
  }
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var u,m,d;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    col: 2,
    children: <WOComboBox label={'부서명'} optionList={[{
      id: 1,
      label: '전체'
    }, {
      id: 2,
      label: 'option'
    }]} />
  }
}`,...(d=(m=i.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var c,C,b;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    col: 2,
    children: <>\r
        <WOComboBox label={'부서명'} optionList={[{
        id: 1,
        label: '전체'
      }, {
        id: 2,
        label: 'option'
      }]} />\r
        <WOComboBox label={'부서명'} optionList={[{
        id: 1,
        label: '전체'
      }, {
        id: 2,
        label: 'option'
      }]} />\r
      </>
  }
}`,...(b=(C=t.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var B,g,x;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    width: 300,
    children: <>\r
        <WOComboBox label={'부서명'} optionList={[{
        id: 1,
        label: '전체'
      }, {
        id: 2,
        label: 'option'
      }]} />\r
      </>
  }
}`,...(x=(g=n.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var y,h,W;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    col: 2,
    gridType: 'type01',
    children: <>\r
        <WOComboBox label={'일자구분'} optionList={[{
        id: 1,
        label: '승인일자'
      }, {
        id: 2,
        label: 'option'
      }]} isAutoComplete={true} />\r
        <WODateRangePicker label={''} periodValue={['2023-11-01', '2023-11-01']} />\r
      </>
  }
}`,...(W=(h=a.parameters)==null?void 0:h.docs)==null?void 0:W.source}}};const so=["Default","Col2","Col2Input2","Width300","GridType"];export{i as Col2,t as Col2Input2,e as Default,a as GridType,n as Width300,so as __namedExportsOrder,lo as default};
