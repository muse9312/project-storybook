import{j as d}from"./jsx-runtime-ffb262ed.js";import{W as N}from"./WOComboBox-56701d7a.js";import{s as e}from"./response-51863d76.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-aa768a49.js";import"./common.styled-d4908734.js";import"./WOLabel-293b1256.js";import"./InputLabel-7ccef553.js";import"./composeClasses-4118efa7.js";import"./extends-15b115a7.js";import"./styled-80c0ceef.js";import"./TextField-8918e36b.js";import"./useId-a47493a3.js";import"./index-de0962f3.js";import"./Modal-9b120e55.js";import"./mergeSlotProps-69f81163.js";import"./inheritsLoose-c82a83d4.js";import"./index-d3ea75b5.js";import"./ownerWindow-684f99c0.js";import"./useSlotProps-f7cb9e67.js";import"./debounce-517eeb3c.js";import"./TextareaAutosize-63b07324.js";import"./MenuItem-cd9f00c5.js";import"./Chip-9a81eb61.js";import"./assertThisInitialized-081f9914.js";import"./Autocomplete-fbfec46a.js";import"./index-08d2ae59.js";const qe={title:"WooriPC/Form/WOComboBox",component:N,parameters:{layout:"centered"},decorators:[M=>d.jsx("div",{style:{width:"230px"},children:d.jsx(M,{})})],tags:["autodocs"],argTypes:{label:{control:"text",description:"Label 입니다.",defaultValue:{summary:void 0},type:{summary:"text",required:!1}},labelColor:{control:"select",options:["default","blue","red"],description:"label 색상 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!1}},optionList:{control:"array",description:"콤보 데이터 리스트 입니다.",defaultValue:{summary:void 0},type:{summary:"array",required:!0}},isAutoComplete:{control:"boolean",description:"텍스트 입력 가능여부 입니다.",defaultValue:{summary:!1},type:{summary:"boolean",required:!1}},defaultValue:{control:"object",description:"진입시 선택될 value 입니다. 미입력시 첫번째 아이템 기본선택 입니다",defaultValue:{summary:void 0},type:{summary:"object",required:!1}},disabled:{control:"boolean",description:"disabled여부 입니다.",defaultValue:{summary:!1},type:{summary:"boolean",required:!1}},readonly:{control:"boolean",description:"readonly여부 입니다.",defaultValue:{summary:!1},type:{summary:"boolean",required:!1}},isError:{control:"boolean",description:"error여부 입니다.",defaultValue:{summary:!1},type:{summary:"boolean",required:!1}},width:{control:"number",description:"콤보박스 너비값 입니다.",defaultValue:{summary:230},type:{summary:"number",required:!1}},type:{control:"select",options:["default","filter"],description:"스타일 타입 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!1}},isHorizontal:{control:"boolean",description:"label 가로스타일 여부입니다.",defaultValue:{summary:!1},type:{summary:"boolean",required:!1}},onChange:{control:"number",description:"메뉴 선택시 실행되는 메소드로 선택된 value를 넘겨줍니다",defaultValue:{summary:void 0},type:{summary:"function",required:!1}}}},r={args:{label:"label",optionList:e}},o={args:{label:"label",optionList:e,isAutoComplete:!0}},a={args:{label:"label",optionList:e,disabled:!0}},t={args:{label:"label",optionList:e,isError:!0}},s={args:{label:"label",optionList:e,labelColor:"blue"}},l={args:{label:"label",optionList:e,labelColor:"red"}},i={args:{label:"label",optionList:e,readonly:!0}},n={args:{label:"label",optionList:e,defaultValue:e[2]}},p={args:{label:"label",width:180,optionList:e}},m={args:{label:"label",optionList:e,type:"filter"}},u={args:{label:"label",optionList:e,isHorizontal:"true",isAutoComplete:!0}};var c,b,y;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'label',
    optionList: sampleOptionList
  }
}`,...(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var f,L,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'label',
    optionList: sampleOptionList,
    isAutoComplete: true
  }
}`,...(g=(L=o.parameters)==null?void 0:L.docs)==null?void 0:g.source}}};var O,C,V;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'label',
    optionList: sampleOptionList,
    disabled: true
  }
}`,...(V=(C=a.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var q,x,S;t.parameters={...t.parameters,docs:{...(q=t.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'label',
    optionList: sampleOptionList,
    isError: true
  }
}`,...(S=(x=t.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var v,h,A;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'label',
    optionList: sampleOptionList,
    labelColor: 'blue'
  }
}`,...(A=(h=s.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};var E,W,j;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'label',
    optionList: sampleOptionList,
    labelColor: 'red'
  }
}`,...(j=(W=l.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var D,z,B;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'label',
    optionList: sampleOptionList,
    readonly: true
  }
}`,...(B=(z=i.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var H,R,w;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: 'label',
    optionList: sampleOptionList,
    defaultValue: sampleOptionList[2]
  }
}`,...(w=(R=n.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var F,T,_;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'label',
    width: 180,
    optionList: sampleOptionList
  }
}`,...(_=(T=p.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var P,k,G;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'label',
    optionList: sampleOptionList,
    type: 'filter'
  }
}`,...(G=(k=m.parameters)==null?void 0:k.docs)==null?void 0:G.source}}};var I,J,K;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'label',
    optionList: sampleOptionList,
    isHorizontal: 'true',
    isAutoComplete: true
  }
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const xe=["Default","AutoComplete","Disabled","Error","LabelBlue","LabelRed","ReadOnly","DefaultValue","Width","TypeFilter","Horizontal"];export{o as AutoComplete,r as Default,n as DefaultValue,a as Disabled,t as Error,u as Horizontal,s as LabelBlue,l as LabelRed,i as ReadOnly,m as TypeFilter,p as Width,xe as __namedExportsOrder,qe as default};
