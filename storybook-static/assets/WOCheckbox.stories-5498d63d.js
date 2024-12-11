import{j as r}from"./jsx-runtime-ffb262ed.js";import{u as b,a as n}from"./styled-components.browser.esm-aa768a49.js";import{r as le}from"./index-76fb7be0.js";import{W as ce}from"./WOFormColumn-1e91cf36.js";import{W as ue}from"./WOLabel-293b1256.js";import"./_commonjsHelpers-de833af9.js";import"./common.styled-d4908734.js";import"./InputLabel-7ccef553.js";import"./composeClasses-4118efa7.js";import"./extends-15b115a7.js";import"./styled-80c0ceef.js";const f=({item:e,blind:ne,disabled:re,isChecked:ae,flex:te,onChange:x,readonly:k,titleArea:ie,type:h,round:C,fontWght:oe})=>{const[g,se]=le.useState(!!ae||!1),de=()=>{se(!g),x&&x(e,!g)};return r.jsx(pe,{$titleArea:ie,$type:h,children:r.jsxs(me,{$flex:te,$round:C,$type:h,children:[r.jsx(be,{type:"checkbox",name:e.name,id:e.id,disabled:!!re||!!k,checked:g,onChange:de,$readonly:k,$round:C}),r.jsx(ee,{htmlFor:e.id,$blind:ne,$type:h,$fontWght:oe,children:e.label})]})})},pe=b.div`
  ${e=>e.$titleArea&&n`
      display: flex;
      align-items: flex-end;
      height: 54px;
    `}
  ${e=>e.$type==="table"&&n`
      width: fit-content;
      margin: 0 auto;
    `}
`,me=b.div`
  display: flex;
  align-items: center;
  height: 32px;
  /* height: ${e=>e.$round?"":"32px"}; */
  ${e=>e.$round&&n`
      height: auto;
    `}

  gap: 0 8px;
  ${e=>e.$type==="table"&&n`
      height: auto;
    `}
`,ee=b.label`
  min-width: 94px;
  padding-right: 10px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #333;
  cursor: pointer;
  ${e=>e.$blind===!0&&n`
      position: absolute;
      width: 1px;
      height: 1px;
      clip: rect(0, 0, 0, 0);
      overflow: hidden;
    `}
  ${e=>e.$type==="fit"&&n`
      min-width: auto;
    `}

    ${e=>e.$fontWght&&n`
      font-weight: 700;
    `}
`,be=b.input`
  display: block;
  width: 16px;
  height: 16px;
  background: url(/assets/woori-pc//icon/checkbox-default.svg) no-repeat center / cover;
  cursor: pointer;
  &:checked {
    background: url(/assets/woori-pc//icon/checkbox-active.svg) no-repeat center / cover;
    ${e=>e.$readonly&&n`
        background: url(/assets/woori-pc//icon/checkbox-default.svg) no-repeat center / cover;
      `}
  }
  &:disabled {
    background: url(/assets/woori-pc//icon/checkbox-disabled.svg) no-repeat center / cover;
    cursor: unset;
    & + ${ee} {
      color: #ccc;
      cursor: default;
    }
    &:checked {
      background: url(/assets/woori-pc//icon/checkbox-checked-disabled.svg) no-repeat center / cover;
    }
  }

  ${e=>e.$round&&n`
      width: 18px;
      height: 18px;
      background: url(/assets/woori-pc//icon/circle.svg) no-repeat center / cover;
      cursor: pointer;
      &:checked {
        background: url(/assets/woori-pc//icon/circle-active.svg) no-repeat center / cover;
      }
    `}
`;f.__docgenInfo={description:"",methods:[],displayName:"WOCheckbox"};const We={title:"WooriPC/Form/WOCheckbox",component:f,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{item:{control:"object",description:"CheckBox Name,id,label 입니다.",defaultValue:{summary:void 0},type:{summary:"object",required:!0}},blind:{control:"boolean",description:"CheckBox Label blind 여부 입니다.",defaultValue:{summary:void 0},type:{summary:"boolean",required:!1}},disabled:{control:"boolean",description:"CheckBox disabled 상태 여부 입니다.",defaultValue:{summary:void 0},type:{summary:"boolean",required:!1}},isChecked:{control:"boolean",description:"CheckBox checked 여부 입니다.",defaultValue:{summary:void 0},type:{summary:"boolean",required:!1}},flex:{control:"select",options:["column",void 0],description:"CheckBox 정렬 방식 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!1}},readonly:{control:"boolean",description:"CheckBox readonly 상태 여부 입니다.",defaultValue:{summary:void 0},type:{summary:"boolean",required:!1}},titleArea:{control:"boolean",description:"CheckBox SearchArea 내부 사용시 적용 props 입니다.",defaultValue:{summary:void 0},type:{summary:"boolean",required:!1}}}},t={args:{item:{name:"input01-01",id:"input01-02",label:"Label"},blind:!0,disabled:void 0,isChecked:void 0,flex:void 0}},i={args:{item:{name:"input01-01",id:"input01-03",label:"Label"},blind:!0,disabled:void 0,isChecked:!0,flex:void 0}},o={args:{item:{name:"input01-01",id:"input01-04",label:"Label"},blind:!0,disabled:!0,isChecked:void 0,flex:void 0}},s={args:{item:{name:"input01-01",id:"input01-04",label:"Label"},blind:!0,disabled:!0,isChecked:!0,flex:void 0}},d={args:{item:{name:"input01-01",id:"input01-05",label:"Label"},blind:!0,readonly:!0,isChecked:void 0,flex:void 0}},l={args:{item:{name:"input01-01",id:"input01-06",label:"Label"},blind:!0,readonly:!0,isChecked:!0,flex:void 0}},c={args:{item:{name:"input01-01",id:"input01-07",label:"Label"}}},u={args:{item:{name:"input01-01",id:"input01-08",label:"Label"},isChecked:!0}},p={args:{item:{name:"input01-01",id:"input01-09",label:"Label"},disabled:!0,isChecked:void 0,flex:void 0}},m={args:{item:{name:"input01-01",id:"input01-10",label:"Label"},titleArea:!0}},a=()=>r.jsxs(ce,{direction:"column",children:[r.jsx(ue,{label:"Label"}),r.jsx(f,{blind:!0,item:{id:"input01-01",label:"Label",name:"input01-11"}})]});a.__docgenInfo={description:"",methods:[],displayName:"Column"};var y,v,L;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    item: {
      name: 'input01-01',
      id: 'input01-02',
      label: 'Label'
    },
    blind: true,
    disabled: undefined,
    isChecked: undefined,
    flex: undefined
  }
}`,...(L=(v=t.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var $,w,W;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    item: {
      name: 'input01-01',
      id: 'input01-03',
      label: 'Label'
    },
    blind: true,
    disabled: undefined,
    isChecked: true,
    flex: undefined
  }
}`,...(W=(w=i.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var O,S,j;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    item: {
      name: 'input01-01',
      id: 'input01-04',
      label: 'Label'
    },
    blind: true,
    disabled: true,
    isChecked: undefined,
    flex: undefined
  }
}`,...(j=(S=o.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var A,B,D;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    item: {
      name: 'input01-01',
      id: 'input01-04',
      label: 'Label'
    },
    blind: true,
    disabled: true,
    isChecked: true,
    flex: undefined
  }
}`,...(D=(B=s.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var q,V,F;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    item: {
      name: 'input01-01',
      id: 'input01-05',
      label: 'Label'
    },
    blind: true,
    readonly: true,
    isChecked: undefined,
    flex: undefined
  }
}`,...(F=(V=d.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var _,R,E;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    item: {
      name: 'input01-01',
      id: 'input01-06',
      label: 'Label'
    },
    blind: true,
    readonly: true,
    isChecked: true,
    flex: undefined
  }
}`,...(E=(R=l.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var I,N,T;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    item: {
      name: 'input01-01',
      id: 'input01-07',
      label: 'Label'
    }
  }
}`,...(T=(N=c.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var z,P,G;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    item: {
      name: 'input01-01',
      id: 'input01-08',
      label: 'Label'
    },
    isChecked: true
  }
}`,...(G=(P=u.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};var H,J,K;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    item: {
      name: 'input01-01',
      id: 'input01-09',
      label: 'Label'
    },
    disabled: true,
    isChecked: undefined,
    flex: undefined
  }
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,Q,U;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    item: {
      name: 'input01-01',
      id: 'input01-10',
      label: 'Label'
    },
    titleArea: true
  }
}`,...(U=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;a.parameters={...a.parameters,docs:{...(X=a.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <WOFormColumn direction='column'>\r
      <WOLabel label={'Label'} />\r
      <WOCheckbox blind item={{
      id: 'input01-01',
      label: 'Label',
      name: 'input01-11'
    }} />\r
    </WOFormColumn>;
}`,...(Z=(Y=a.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const Oe=["Default","Checked","Disabled","CheckedDisabled","ReadOnly","ReadOnlyChecked","Label","LabelChecked","LabelDisabled","TitleArea","Column"];export{i as Checked,s as CheckedDisabled,a as Column,t as Default,o as Disabled,c as Label,u as LabelChecked,p as LabelDisabled,d as ReadOnly,l as ReadOnlyChecked,m as TitleArea,Oe as __namedExportsOrder,We as default};
