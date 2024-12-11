import{j as n}from"./jsx-runtime-ffb262ed.js";import{r as b}from"./index-76fb7be0.js";import{u as o}from"./styled-components.browser.esm-aa768a49.js";import"./_commonjsHelpers-de833af9.js";const h=e=>{const[r,x]=b.useState(e.checked||!1),m=()=>{x(!r)};return n.jsxs(f,{children:[n.jsx(y,{type:"checkbox",name:e.name,id:e.id,checked:r,onClick:m}),n.jsxs(k,{htmlFor:e.id,children:[n.jsx(u,{}),n.jsx(C,{children:e.label})]})]})},g=h,f=o.div`
  display: flex;
  width: fit-content;
`,k=o.label`
  display: flex;
  align-items: center;
  height: 28px;
  padding: 0 12px;
  border-radius: 14px;
  background-color: #fff;
  border: 1px solid transparent;
  cursor: pointer;
`,u=o.span`
  display: block;
  width: 16px;
  height: 16px;
  background: url(./assets/BeatFolio/icon-sub-chk-unchecked.png) no-repeat center / cover;
`,y=o.input`
  display: none;
  &:checked {
    & + ${k} {
      background-color: #f3f3ff;
      box-shadow: 0 4px 6px 0 rgba(121, 116, 255, 0.1);
      border: 1px solid #7974ff;
      ${u} {
        background: url(./assets/BeatFolio/icon-sub-chk-checked.png) no-repeat center / cover;
      }
    }
  }
`,C=o.span`
  display: block;
  margin-left: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  color: #000;
`;h.__docgenInfo={description:"",methods:[],displayName:"TagCheckBox"};const B=`import React from 'react';
import { useState } from 'react';
import { styled } from 'styled-components';

const TagCheckBox = (props) => {
  // 로컬 상태 추가
  const [checked, setChecked] = useState(props.checked || false);

  // 체크박스 상태 토글 함수
  const toggleChecked = () => {
    setChecked(!checked);
  };

  return (
    <Wrap>
      <CheckBox type='checkbox' name={props.name} id={props.id} checked={checked} onClick={toggleChecked} />
      <Label htmlFor={props.id}>
        <CheckBoxIcon></CheckBoxIcon>
        <LabelText>{props.label}</LabelText>
      </Label>
    </Wrap>
  );
};

export default TagCheckBox;

const Wrap = styled.div\`
  display: flex;
  width: fit-content;
\`;

const Label = styled.label\`
  display: flex;
  align-items: center;
  height: 28px;
  padding: 0 12px;
  border-radius: 14px;
  background-color: #fff;
  border: 1px solid transparent;
  cursor: pointer;
\`;
const CheckBoxIcon = styled.span\`
  display: block;
  width: 16px;
  height: 16px;
  background: url(./assets/BeatFolio/icon-sub-chk-unchecked.png) no-repeat center / cover;
\`;

const CheckBox = styled.input\`
  display: none;
  &:checked {
    & + \${Label} {
      background-color: #f3f3ff;
      box-shadow: 0 4px 6px 0 rgba(121, 116, 255, 0.1);
      border: 1px solid #7974ff;
      \${CheckBoxIcon} {
        background: url(./assets/BeatFolio/icon-sub-chk-checked.png) no-repeat center / cover;
      }
    }
  }
\`;

const LabelText = styled.span\`
  display: block;
  margin-left: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  color: #000;
\`;
`,F={title:"BeatFolio/CheckBox/TagCheckBox",component:g,parameters:{layout:"padded",storySource:{source:B}},tags:["autodocs"],argTypes:{name:{control:"text",description:"CheckBox name 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}},id:{control:"text",description:"CheckBox id 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}},label:{control:"text",description:"CheckBox label 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}},checked:{control:"boolean",options:["dark",void 0],description:"CheckBox checked 상태 입니다.",defaultValue:{summary:void 0},type:{summary:"boolean",required:!0}}}},c={args:{name:"check-01",id:"check-01-01",label:"Label",checked:!1}},t={args:{name:"check-01",id:"check-01-02",label:"Label",checked:!0}};var a,s,d;c.parameters={...c.parameters,docs:{...(a=c.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    name: 'check-01',
    id: 'check-01-01',
    label: 'Label',
    checked: false
  }
}`,...(d=(s=c.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var l,i,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    name: 'check-01',
    id: 'check-01-02',
    label: 'Label',
    checked: true
  }
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const v=["Dark","DarkCheckced"];export{c as Dark,t as DarkCheckced,v as __namedExportsOrder,F as default};
