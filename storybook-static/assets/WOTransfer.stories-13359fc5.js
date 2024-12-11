import{j as r}from"./jsx-runtime-ffb262ed.js";import{W as n}from"./WOComboBox-56701d7a.js";import{W as a}from"./WOFormColumn-1e91cf36.js";import"./index-76fb7be0.js";import{a as c,u as t}from"./styled-components.browser.esm-aa768a49.js";import{W as C}from"./WOIcon-b00d259e.js";import"./common.styled-d4908734.js";import"./WOLabel-293b1256.js";import"./InputLabel-7ccef553.js";import"./composeClasses-4118efa7.js";import"./extends-15b115a7.js";import"./styled-80c0ceef.js";import"./_commonjsHelpers-de833af9.js";import"./TextField-8918e36b.js";import"./useId-a47493a3.js";import"./index-de0962f3.js";import"./Modal-9b120e55.js";import"./mergeSlotProps-69f81163.js";import"./inheritsLoose-c82a83d4.js";import"./index-d3ea75b5.js";import"./ownerWindow-684f99c0.js";import"./useSlotProps-f7cb9e67.js";import"./debounce-517eeb3c.js";import"./TextareaAutosize-63b07324.js";import"./MenuItem-cd9f00c5.js";import"./Chip-9a81eb61.js";import"./assertThisInitialized-081f9914.js";import"./Autocomplete-fbfec46a.js";import"./index-08d2ae59.js";const e=({mainTitle:d,children:i})=>r.jsxs(x,{children:[r.jsx(f,{children:d}),i[0]," ",r.jsx(C,{icon:"arrow-down-double",width:42,height:42}),i[1]," "]}),l=c`
  display: flex;
  align-items: center;
  padding: 16px 32px;
  border-radius: 12px;
  background: var(--C-Dark-01);
  gap: 16px;
`,x=t.div`
  .icon {
    margin: 2px auto;
  }
`,f=t.span`
  display: block;
  color: var(--W-Dark-11);
  font-size: 14px;
  font-weight: 700;
  padding-bottom: 8px;
`,s=t.span`
  display: flex;
  align-items: center;
  color: var(--C-Dark-10);
  font-size: 14px;
  font-weight: 700;
  padding-right: 32px;
  &::before {
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50px;
    background-color: var(--C-Dark-10);
    margin-right: 8px;
  }
`,A=t.div`
  ${l}
`,T=t.div`
  ${l}
`;e.__docgenInfo={description:"",methods:[],displayName:"WOTransfer"};const K={title:"WooriPC/Box/WOTransfer",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{mainTitle:{control:"text",description:"타이틀명 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}},children:{description:"sheet에 보여질 콘텐츠입니다"}}},o=()=>r.jsxs(e,{mainTitle:"A의 기금 권한을 B에게 이관",children:[r.jsxs(A,{children:[r.jsx(s,{children:"A의 기금권한"}),r.jsx(a,{children:r.jsx(n,{label:"부서명",optionList:[{id:1,label:"119특수구조단"}],isAutoComplete:!0})})]}),r.jsxs(T,{children:[r.jsx(s,{children:"B의 기금권한"}),r.jsx(a,{children:r.jsx(n,{label:"부서명",optionList:[{id:1,label:"119특수구조단"}],isAutoComplete:!0})})]})]});o.__docgenInfo={description:"",methods:[],displayName:"Default"};var m,p,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <WOTransfer mainTitle='A의 기금 권한을 B에게 이관'>\r
      <FromArea>\r
        <TransferTitle>A의 기금권한</TransferTitle>\r
        <WOFormColumn>\r
          <WOComboBox label='부서명' optionList={[{
          id: 1,
          label: '119특수구조단'
        }]} isAutoComplete={true} />\r
        </WOFormColumn>\r
      </FromArea>\r
      <ToArea>\r
        <TransferTitle>B의 기금권한</TransferTitle>\r
        <WOFormColumn>\r
          <WOComboBox label='부서명' optionList={[{
          id: 1,
          label: '119특수구조단'
        }]} isAutoComplete={true} />\r
        </WOFormColumn>\r
      </ToArea>\r
    </WOTransfer>;
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const Q=["Default"];export{o as Default,Q as __namedExportsOrder,K as default};
