import{j as a}from"./jsx-runtime-ffb262ed.js";import{r}from"./index-76fb7be0.js";import{u as n,a as B}from"./styled-components.browser.esm-aa768a49.js";import"./_commonjsHelpers-de833af9.js";const k=({label:e,id:i,name:m,readonly:x,disabled:u,blind:C,placeholder:b,value:t,type:f})=>{console.log(t);const[R,T]=r.useState(t?t[0]:""),[_,z]=r.useState(t?t[1]:""),[L,y]=r.useState(!1),[p,N]=r.useState(!1),A=c=>{T(c.target.value)},P=c=>{z(c.target.value)},g=()=>{y(!0)},h=()=>{y(!1)};return r.useEffect(()=>{N(x)},[x]),a.jsxs(G,{children:[a.jsx(H,{htmlFor:i,$blind:C,children:e}),a.jsxs(J,{$isFocused:L,$disabled:u,$readOnly:p,children:[a.jsx(v,{type:f||"text",id:i,name:m,readOnly:p,disabled:u,placeholder:b,onChange:A,value:R,onFocus:g,onBlur:h}),a.jsx(K,{}),a.jsx(v,{type:f||"text",id:`${i}-02`,name:m,readOnly:p,disabled:u,placeholder:b,onChange:P,value:_,onFocus:g,onBlur:h})]})]})},G=n.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px 0px;
  width: 100%;
`,H=n.label`
  width: 100%;
  color: #333;
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  ${e=>e.$blind===!0&&B`
      position: absolute;
      width: 1px;
      height: 1px;
      clip: rect(0, 0, 0, 0);
      overflow: hidden;
    `}
`,J=n.div`
  display: flex;
  align-items: center;
  padding: 0 4px;
  border-radius: 4px;
  border: 1px solid ${e=>e.$isFocused?"#9EA6B2":"#ededf3"}; // focus 조건부 스타일
  background-color: ${e=>e.$disabled?"#EDEDF3":"#fff"}; // disabled 조건부 스타일
  ${e=>e.$readOnly&&B`
      border: unset;
      padding: 0 0;
    `}
`,v=n.input`
  display: flex;
  width: 100%;
  height: 32px;
  padding: 0px 6px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  border-radius: 4px;
  color: #333;
  &::placeholder {
    color: #aaa;
  }
  &:focus {
    outline: none;
  }
  &:read-only {
    &:first-child {
      padding: 0 6px 0 0;
    }
    &:last-child {
      padding: 0 0 0 6px;
    }
    &:disabled {
      padding: 0 6px;
    }
  }
`,K=n.i`
  display: block;
  flex: 0 0 auto;
  width: 4px;
  height: 1px;
  background-color: #000;
  background: var(--C-Dark-10);
`;k.__docgenInfo={description:"",methods:[],displayName:"WODualInput"};const Y={title:"WooriPC/Form/WODualInput",component:k,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text",description:"Input Name 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}},id:{control:"text",description:"Input Id 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}},label:{control:"text",description:"Input Label 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!1}},placeholder:{control:"text",description:"Input placeholder 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!1}},readonly:{control:"boolean",description:"Input readonly 상태입니다.",defaultValue:{summary:void 0},type:{summary:"boolean",required:!1}},disabled:{control:"boolean",description:"Input disabled 상태입니다.",defaultValue:{summary:void 0},type:{summary:"boolean",required:!1}},blind:{control:"boolean",description:"label 화면에 보이지 않는 상태입니다.",defaultValue:{summary:void 0},type:{summary:"boolean",required:!1}},value:{control:"array",description:"Input value 입니다.",defaultValue:{summary:void 0},type:{summary:"array",required:!1}}}},o={args:{name:"input01",id:"input01-01",label:"label",placeholder:"text"}},l={args:{name:"input04",id:"input04-04",label:"label",blind:!0,placeholder:"text"}},s={args:{name:"input06",id:"input06-06",label:"label",blind:!1,placeholder:"text",disabled:!0,value:["123","123123"]}},d={args:{name:"input06",id:"input06-06",blind:!1,placeholder:"text",value:["123","123123"],readonly:!0}};var I,O,$;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    name: 'input01',
    id: 'input01-01',
    label: 'label',
    placeholder: 'text'
  }
}`,...($=(O=o.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var F,D,S;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    name: 'input04',
    id: 'input04-04',
    label: 'label',
    blind: true,
    placeholder: 'text'
  }
}`,...(S=(D=l.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var j,q,w;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    name: 'input06',
    id: 'input06-06',
    label: 'label',
    blind: false,
    placeholder: 'text',
    disabled: true,
    value: ['123', '123123']
  }
}`,...(w=(q=s.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var V,E,W;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    name: 'input06',
    id: 'input06-06',
    blind: false,
    placeholder: 'text',
    value: ['123', '123123'],
    readonly: true
  }
}`,...(W=(E=d.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};const Z=["Default","Blind","Disabled","ReadOnly"];export{l as Blind,o as Default,s as Disabled,d as ReadOnly,Z as __namedExportsOrder,Y as default};
