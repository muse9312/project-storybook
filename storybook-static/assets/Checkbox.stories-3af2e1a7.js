import{j as n}from"./jsx-runtime-ffb262ed.js";import{r as Fe}from"./index-76fb7be0.js";import{u as V,a}from"./styled-components.browser.esm-aa768a49.js";import"./_commonjsHelpers-de833af9.js";const we=e=>{const[S,Le]=Fe.useState(e.checked||!1),ve=()=>{Le(!S)};return n.jsx(Ie,{children:n.jsxs(je,{htmlFor:e.id,children:[n.jsx(Te,{labelVisible:e.labelVisible,size:e.size,theme:e.theme,disabled:e.disabled,children:e.label}),n.jsx($e,{type:"checkbox",name:e.name,id:e.id,disabled:e.disabled,theme:e.theme,checked:S,size:e.size,onClick:ve})]})})},qe=we,Ie=V.div`
  width: fit-content;
`,$e=V.input`
  width: 24px;
  height: 24px;
  border: 1px solid ${e=>e.theme==="dark"?"#3e4751":"#ccc"};
  border-radius: 50%;
  cursor: pointer;
  &:disabled {
    border: 1px solid ${e=>e.theme==="dark"?"#333":"#eee"};
    cursor: default;
  }
  &:checked {
    border: unset;
    background: url('./assets/BeatFolio/icon-chkbox-checked.png') no-repeat center / cover;
    &:disabled {
      border: 1px solid none;
      background: ${e=>e.theme==="dark"?"url('./assets/BeatFolio/icon-chkbox-03-disabled.png')":"url('./assets/BeatFolio/icon-chkbox-01-disabled.png')"}
        no-repeat center / cover;
      cursor: default;
    }
  }

  ${e=>e.size==="sm"&&a`
      border: unset;
      background: url('./assets/BeatFolio/icon-sub-chk-unchecked.png') no-repeat center / 16px 16px;
      &:checked {
        border: unset;
        background: url('./assets/BeatFolio/icon-sub-chk-checked.png') no-repeat center / 16px 16px;
      }
    `}
`,je=V.label`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`,Te=V.span`
  display: block;
  ${e=>e.labelVisible?a`
          font-size: 14px;
          font-weight: 700;
          line-height: 21px;
          color: #000;
          ${e.size==="md"&&a`
            font-size: 14px;
            font-weight: 500;
            line-height: 21px;
          `}
          ${e.size==="sm"&&a`
            font-size: 12px;
            font-weight: 500;
            line-height: 18px;
          `}
                  & + ${$e} {
            margin-right: 8px;
          }
          ${e.disabled&&a`
            font-weight: 500;
            color: rgba(204, 204, 204, 1);
          `}
          ${e.theme==="dark"&&a`
            color: #fff;
          `}
        `:a`
          font-style: normal !important;
          font-variant-ligatures: normal !important;
          font-variant-caps: normal !important;
          line-height: 0 !important;
          color: transparent !important;
          text-shadow: none !important;
          background-color: transparent !important;
          border: 0 !important;
          z-index: -1;
          border: 0;
          width: 1px;
          height: 1px;
          clip: rect(1px, 1px, 1px, 1px);
          clip-path: inset(50%);
          overflow: hidden;
          white-space: nowrap;
          display: inline-block;
          position: absolute;
        `}
`;we.__docgenInfo={description:"",methods:[],displayName:"CheckBox"};const _e=`import React from 'react';
import { useState } from 'react';
import { css, styled } from 'styled-components';

const CheckBox = (props) => {
  // 로컬 상태 추가
  const [checked, setChecked] = useState(props.checked || false);

  // 체크박스 상태 토글 함수
  const toggleChecked = () => {
    setChecked(!checked);
  };

  return (
    <Wrap>
      <Label htmlFor={props.id}>
        <LabelText labelVisible={props.labelVisible} size={props.size} theme={props.theme} disabled={props.disabled}>
          {props.label}
        </LabelText>
        <Input
          type='checkbox'
          name={props.name}
          id={props.id}
          disabled={props.disabled}
          theme={props.theme}
          checked={checked}
          size={props.size}
          onClick={toggleChecked}></Input>
      </Label>
    </Wrap>
  );
};

export default CheckBox;

const Wrap = styled.div\`
  width: fit-content;
\`;

const Input = styled.input\`
  width: 24px;
  height: 24px;
  border: 1px solid \${(props) => (props.theme === 'dark' ? '#3e4751' : '#ccc')};
  border-radius: 50%;
  cursor: pointer;
  &:disabled {
    border: 1px solid \${(props) => (props.theme === 'dark' ? '#333' : '#eee')};
    cursor: default;
  }
  &:checked {
    border: unset;
    background: url('./assets/BeatFolio/icon-chkbox-checked.png') no-repeat center / cover;
    &:disabled {
      border: 1px solid none;
      background: \${(props) =>
          props.theme === 'dark' ? "url('./assets/BeatFolio/icon-chkbox-03-disabled.png')" : "url('./assets/BeatFolio/icon-chkbox-01-disabled.png')"}
        no-repeat center / cover;
      cursor: default;
    }
  }

  \${(props) =>
    props.size === 'sm' &&
    css\`
      border: unset;
      background: url('./assets/BeatFolio/icon-sub-chk-unchecked.png') no-repeat center / 16px 16px;
      &:checked {
        border: unset;
        background: url('./assets/BeatFolio/icon-sub-chk-checked.png') no-repeat center / 16px 16px;
      }
    \`}
\`;

const Label = styled.label\`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
\`;

const LabelText = styled.span\`
  display: block;
  \${(props) =>
    props.labelVisible
      ? css\`
          font-size: 14px;
          font-weight: 700;
          line-height: 21px;
          color: #000;
          \${props.size === 'md' &&
          css\`
            font-size: 14px;
            font-weight: 500;
            line-height: 21px;
          \`}
          \${props.size === 'sm' &&
          css\`
            font-size: 12px;
            font-weight: 500;
            line-height: 18px;
          \`}
                  & + \${Input} {
            margin-right: 8px;
          }
          \${props.disabled &&
          css\`
            font-weight: 500;
            color: rgba(204, 204, 204, 1);
          \`}
          \${props.theme === 'dark' &&
          css\`
            color: #fff;
          \`}
        \`
      : css\`
          font-style: normal !important;
          font-variant-ligatures: normal !important;
          font-variant-caps: normal !important;
          line-height: 0 !important;
          color: transparent !important;
          text-shadow: none !important;
          background-color: transparent !important;
          border: 0 !important;
          z-index: -1;
          border: 0;
          width: 1px;
          height: 1px;
          clip: rect(1px, 1px, 1px, 1px);
          clip-path: inset(50%);
          overflow: hidden;
          white-space: nowrap;
          display: inline-block;
          position: absolute;
        \`}
\`;
`,Oe={title:"BeatFolio/CheckBox/CheckBox",component:qe,parameters:{layout:"padded",storySource:{source:_e}},tags:["autodocs"],argTypes:{id:{control:"text",description:"CheckBox Id 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}},label:{control:"text",description:"CheckBox Label 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}},labelVisible:{control:"boolean",description:"CheckBox Label Visible 여부 입니다.",defaultValue:{summary:void 0},type:{summary:"boolean",required:!1}},size:{control:"select",options:["sm",void 0],description:"CheckBox Size 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!1}},theme:{control:"select",options:["dark",void 0],description:"CheckBox theme 여부 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!1}},disabled:{control:"boolean",description:"CheckBox disabled 여부 입니다.",defaultValue:{summary:void 0},type:{summary:"boolean",required:!1}},checked:{control:"boolean",description:"CheckBox checked 여부 입니다.",defaultValue:{summary:void 0},type:{summary:"boolean",required:!1}}}},s={args:{name:"id01",id:"id-01",label:"label",labelVisible:!1,size:void 0,theme:void 0,disabled:!1,checked:!1}},r={args:{name:"id01",id:"id-02",label:"label",labelVisible:!1,size:void 0,theme:void 0,disabled:!1,checked:!0}},i={args:{name:"id01",id:"id-03",label:"label",labelVisible:!1,size:void 0,theme:void 0,disabled:!0}},d={args:{name:"id01",id:"id-04",label:"label",labelVisible:!1,size:void 0,theme:void 0,disabled:!0,checked:!0}},l={args:{name:"id01",id:"id-05",label:"label",labelVisible:!0,size:void 0,theme:void 0,disabled:!1}},t={args:{name:"id01",id:"id-06",label:"label",labelVisible:!0,size:void 0,theme:void 0,disabled:!0}},o={args:{name:"id01",id:"id-07",label:"label",labelVisible:!0,size:"sm",theme:void 0,disabled:!1}},c={args:{name:"id01",id:"id-08",label:"label",labelVisible:!0,size:"sm",theme:void 0,disabled:!1,checked:!0}},b={args:{name:"id01",id:"id-09",label:"label",labelVisible:!0,size:"sm",theme:void 0,disabled:!0}},m={args:{name:"id01",id:"id-10",label:"label",labelVisible:!1,size:void 0,theme:"dark",disabled:!1}},u={args:{name:"id01",id:"id-11",label:"label",labelVisible:!1,size:void 0,theme:"dark",disabled:!1,checked:!0}},p={args:{name:"id01",id:"id-12",label:"label",labelVisible:!1,size:void 0,theme:"dark",disabled:!0}},h={args:{name:"id01",id:"id-13",label:"label",labelVisible:!1,size:void 0,theme:"dark",disabled:!0,checked:!0}},f={args:{name:"id01",id:"id-14",label:"label",labelVisible:!0,size:void 0,theme:"dark",disabled:!1}},k={args:{name:"id01",id:"id-15",label:"label",labelVisible:!0,size:void 0,theme:"dark",disabled:!0}},g={args:{name:"id01",id:"id-16",label:"label",labelVisible:!0,size:"sm",theme:"dark",disabled:!1}},x={args:{name:"id01",id:"id-17",label:"label",labelVisible:!0,size:"sm",theme:"dark",disabled:!1,checked:!0}},z={args:{name:"id01",id:"id-18",label:"label",labelVisible:!0,size:"sm",theme:"dark",disabled:!0}},D={args:{name:"id01",id:"id-19",label:"label",labelVisible:!0,size:"sm",theme:"dark",disabled:!0,checked:!0}};var y,C,B;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    name: 'id01',
    id: 'id-01',
    label: 'label',
    labelVisible: false,
    size: undefined,
    theme: undefined,
    disabled: false,
    checked: false
  }
}`,...(B=(C=s.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var w,$,L;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    name: 'id01',
    id: 'id-02',
    label: 'label',
    labelVisible: false,
    size: undefined,
    theme: undefined,
    disabled: false,
    checked: true
  }
}`,...(L=($=r.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var v,F,q;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    name: 'id01',
    id: 'id-03',
    label: 'label',
    labelVisible: false,
    size: undefined,
    theme: undefined,
    disabled: true
  }
}`,...(q=(F=i.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var I,j,T;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    name: 'id01',
    id: 'id-04',
    label: 'label',
    labelVisible: false,
    size: undefined,
    theme: undefined,
    disabled: true,
    checked: true
  }
}`,...(T=(j=d.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var _,W,E;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    name: 'id01',
    id: 'id-05',
    label: 'label',
    labelVisible: true,
    size: undefined,
    theme: undefined,
    disabled: false
  }
}`,...(E=(W=l.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var R,N,O;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    name: 'id01',
    id: 'id-06',
    label: 'label',
    labelVisible: true,
    size: undefined,
    theme: undefined,
    disabled: true
  }
}`,...(O=(N=t.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var A,G,H;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    name: 'id01',
    id: 'id-07',
    label: 'label',
    labelVisible: true,
    size: 'sm',
    theme: undefined,
    disabled: false
  }
}`,...(H=(G=o.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,M;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    name: 'id01',
    id: 'id-08',
    label: 'label',
    labelVisible: true,
    size: 'sm',
    theme: undefined,
    disabled: false,
    checked: true
  }
}`,...(M=(K=c.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var P,Q,U;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    name: 'id01',
    id: 'id-09',
    label: 'label',
    labelVisible: true,
    size: 'sm',
    theme: undefined,
    disabled: true
  }
}`,...(U=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    name: 'id01',
    id: 'id-10',
    label: 'label',
    labelVisible: false,
    size: undefined,
    theme: 'dark',
    disabled: false
  }
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,ne;u.parameters={...u.parameters,docs:{...(ee=u.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    name: 'id01',
    id: 'id-11',
    label: 'label',
    labelVisible: false,
    size: undefined,
    theme: 'dark',
    disabled: false,
    checked: true
  }
}`,...(ne=(ae=u.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var se,re,ie;p.parameters={...p.parameters,docs:{...(se=p.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    name: 'id01',
    id: 'id-12',
    label: 'label',
    labelVisible: false,
    size: undefined,
    theme: 'dark',
    disabled: true
  }
}`,...(ie=(re=p.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var de,le,te;h.parameters={...h.parameters,docs:{...(de=h.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    name: 'id01',
    id: 'id-13',
    label: 'label',
    labelVisible: false,
    size: undefined,
    theme: 'dark',
    disabled: true,
    checked: true
  }
}`,...(te=(le=h.parameters)==null?void 0:le.docs)==null?void 0:te.source}}};var oe,ce,be;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    name: 'id01',
    id: 'id-14',
    label: 'label',
    labelVisible: true,
    size: undefined,
    theme: 'dark',
    disabled: false
  }
}`,...(be=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:be.source}}};var me,ue,pe;k.parameters={...k.parameters,docs:{...(me=k.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    name: 'id01',
    id: 'id-15',
    label: 'label',
    labelVisible: true,
    size: undefined,
    theme: 'dark',
    disabled: true
  }
}`,...(pe=(ue=k.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var he,fe,ke;g.parameters={...g.parameters,docs:{...(he=g.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    name: 'id01',
    id: 'id-16',
    label: 'label',
    labelVisible: true,
    size: 'sm',
    theme: 'dark',
    disabled: false
  }
}`,...(ke=(fe=g.parameters)==null?void 0:fe.docs)==null?void 0:ke.source}}};var ge,xe,ze;x.parameters={...x.parameters,docs:{...(ge=x.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    name: 'id01',
    id: 'id-17',
    label: 'label',
    labelVisible: true,
    size: 'sm',
    theme: 'dark',
    disabled: false,
    checked: true
  }
}`,...(ze=(xe=x.parameters)==null?void 0:xe.docs)==null?void 0:ze.source}}};var De,Ve,Se;z.parameters={...z.parameters,docs:{...(De=z.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    name: 'id01',
    id: 'id-18',
    label: 'label',
    labelVisible: true,
    size: 'sm',
    theme: 'dark',
    disabled: true
  }
}`,...(Se=(Ve=z.parameters)==null?void 0:Ve.docs)==null?void 0:Se.source}}};var ye,Ce,Be;D.parameters={...D.parameters,docs:{...(ye=D.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    name: 'id01',
    id: 'id-19',
    label: 'label',
    labelVisible: true,
    size: 'sm',
    theme: 'dark',
    disabled: true,
    checked: true
  }
}`,...(Be=(Ce=D.parameters)==null?void 0:Ce.docs)==null?void 0:Be.source}}};const Ae=["Defualt","DefualtChecked","DefualtDisabled","DefualtCheckedDisabled","Label","LabelDisabled","SizeSm","SizeSmChecked","SizeSmDisabled","DarkDefualt","DarkDefualtChecked","DarkDefualtDisabled","DarkDefualtCheckedDisabled","DarkLabel","DarkLabelDisabled","DarkSizeSm","DarkSizeSmChecked","DarkSizeSmDisabled","DarkSizeSmDisabledChecked"];export{m as DarkDefualt,u as DarkDefualtChecked,h as DarkDefualtCheckedDisabled,p as DarkDefualtDisabled,f as DarkLabel,k as DarkLabelDisabled,g as DarkSizeSm,x as DarkSizeSmChecked,z as DarkSizeSmDisabled,D as DarkSizeSmDisabledChecked,s as Defualt,r as DefualtChecked,d as DefualtCheckedDisabled,i as DefualtDisabled,l as Label,t as LabelDisabled,o as SizeSm,c as SizeSmChecked,b as SizeSmDisabled,Ae as __namedExportsOrder,Oe as default};
