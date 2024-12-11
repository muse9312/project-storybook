import{j as b}from"./jsx-runtime-ffb262ed.js";import{W as zr}from"./WOButton-ab404921.js";import{W as Sr}from"./WOIcon-d41c31b7.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-aa768a49.js";const xr=`import React from 'react';
import styled, { css } from 'styled-components';

const WOButton = ({ variant, size, children, disabled, icon, onClick, type }) => {
  return (
    <Wrapper type={type || 'button'} className='btn' $variant={variant} $size={size} disabled={disabled} onClick={onClick}>
      {icon && icon} {children}
    </Wrapper>
  );
};

export default WOButton;

const Wrapper = styled.button\`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: 700;

  // size
  \${(props) =>
    props.$size === 'sm' &&
    css\`
      height: 24px;
      font-size: 12px;
      width: fit-content;
      padding: 0 8px;
      border-radius: 4px;
    \`}
  \${(props) =>
    props.$size === 'md' &&
    css\`
      height: 38px;
      font-size: 13px;
      width: fit-content;
      padding: 0 16px;
      border-radius: 6px;
    \`}
  \${(props) =>
    props.$size === 'lg' &&
    css\`
      height: 46px;
      font-size: 16px;
      padding: 0 16px;
      border-radius: 8px;
    \`}


  // variant
  \${(props) =>
    props.$variant === 'primary' &&
    css\`
      color: var(--White, #fff);
      background: var(--Grad-BG-02, linear-gradient(343deg, #b0ebcc -1.81%, #99a3ff 46.2%));
      &:disabled {
        color: var(--Blue-04, #bdd7ff);
      }
    \`}
  \${(props) =>
    props.$variant === 'primary-sub' &&
    css\`
      color: var(--White, #fff);
      background: var(--C-Dark-12, #0e213f);
      \${(props) =>
        props.$size === 'sm' &&
        css\`
          background: var(--C-Dark-10);
        \`}
      \${(props) =>
        props.$size === 'md' &&
        css\`
          background: var(--C-Dark-10);
        \`}
      &:disabled {
        color: var(--C-Dark-07, #86909f);
        background: var(--C-Dark-09, #3c4b63);
      }
    \`}
  \${(props) =>
    props.$variant === 'secondary' &&
    css\`
      color: var(--C-Dark-10, #263752);
      background: var(--C-Dark-03, #e5e5ed);
      &:disabled {
        color: var(--C-Dark-06, #9ea6b2);
      }
    \`}
  \${(props) =>
    props.$variant === 'outline' &&
    css\`
      color: var(--C-Dark-10, #263752);
      background-color: var(--White, #fff);
      border: 1px solid var(--C-Dark-04, #d7d7de);
      &:disabled {
        color: var(--C-Dark-06, #9ea6b2);
      }
    \`}
  \${(props) =>
    props.$variant === 'outline-sub01' &&
    css\`
      color: var(--C-Dark-10, #263752);
      background-color: var(--White, #fff);
      border: 1px solid var(--C-Dark-09, #3c4b63);
      &:disabled {
        color: var(--C-Dark-06, #9ea6b2);
      }
    \`}
  // size 예외

  \${(props) =>
    props.$variant === 'outline-sub02' &&
    css\`
      width: fit-content;
      height: 26px;
      padding: 0 10px;
      color: var(--C-Dark-08, #566479);
      background-color: var(--White, #fff);
      border: 1px solid #efefef;
      border-radius: 100px;
      font-size: 12px;
      font-weight: 700;
    \`}

    \${(props) =>
    props.$variant === 'outline-sub03' &&
    css\`
      width: fit-content;
      height: 24px;
      padding: 0 10px;
      color: var(--C-Dark-011);
      background-color: var(--C-Dark-01);
      border-radius: 100px;
      font-size: 12px;
      font-weight: 400;
    \`}
    
    \${(props) =>
    props.$variant === 'text-icon' &&
    css\`
      gap: 0 2px;
      width: fit-content;
      height: 24px;
      padding: 0 6px;
      color: var(--Blue-01, #3284ff);
      font-size: 13px;
      font-weight: 700;
      line-height: 24px;
    \`}
\`;
`,Pr={title:"WooriMobile/Button/WOButton",component:zr,parameters:{layout:"centered",storySource:{source:xr}},decorators:[fr=>b.jsx("div",{style:{width:"320px"},children:b.jsx(fr,{})})],tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","primary-sub","secondary","outlined"],description:"버튼 스타일타입 입니다.",defaultValue:{summary:"primary"},type:{summary:"string",required:!1}},size:{control:"select",options:["sm","md","lg"],description:"사이즈 입니다.",defaultValue:{summary:"lg"},type:{summary:"string",required:!1}},icon:{control:null,description:"버튼 자식요소 앞에 배치될 아이콘 입니다",defaultValue:{summary:void 0}},children:{description:"버튼 자식요소에 배치될 요소 입니다"},disabled:{control:"boolean",description:"버튼 disabled 여부입니다.",defaultValue:{summary:!1},type:{summary:"boolean",required:!1}},onClick:{control:"text",description:"버튼 클릭 메소드 입니다.",action:"onClick",type:{summary:"function",required:!1}}}},r={args:{variant:"primary",size:"sm",children:"버튼"}},n={args:{variant:"primary",size:"md",children:"버튼"}},s={args:{variant:"primary",size:"lg",children:"버튼"}},e={args:{variant:"primary",size:"lg",children:"버튼",disabled:!0}},a={args:{variant:"primary-sub",size:"sm",children:"버튼"}},u={args:{variant:"primary-sub",size:"md",children:"버튼"}},o={args:{variant:"primary-sub",size:"lg",children:"버튼"}},i={args:{variant:"primary-sub",size:"lg",children:"버튼",disabled:!0}},p={args:{variant:"secondary",size:"sm",children:"버튼"}},t={args:{variant:"secondary",size:"md",children:"버튼"}},c={args:{variant:"secondary",size:"lg",children:"버튼"}},C={args:{variant:"secondary",size:"lg",children:"버튼",disabled:!0}},d={args:{variant:"outline",size:"sm",children:"버튼"}},l={args:{variant:"outline",size:"md",children:"버튼"}},m={args:{variant:"outline",size:"lg",children:"버튼"}},B={args:{variant:"outline",size:"lg",children:"버튼",disabled:!0}},A={args:{variant:"outline-sub01",size:"sm",children:"버튼"}},g={args:{variant:"outline-sub02",children:"버튼"}},D={args:{variant:"text-icon",icon:b.jsx(Sr,{icon:"plus-blue-14"}),children:"버튼"}};var y,v,h;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  // 컴포넌트에 넘겨줄 props 정리
  args: {
    // props명 : 넘겨줄 props 값-
    variant: 'primary',
    size: 'sm',
    children: '버튼'
  }
}`,...(h=(v=r.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var f,z,S;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  // 컴포넌트에 넘겨줄 props 정리
  args: {
    // props명 : 넘겨줄 props 값-
    variant: 'primary',
    size: 'md',
    children: '버튼'
  }
}`,...(S=(z=n.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var x,E,k;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  // 컴포넌트에 넘겨줄 props 정리
  args: {
    // props명 : 넘겨줄 props 값-
    variant: 'primary',
    size: 'lg',
    children: '버튼'
  }
}`,...(k=(E=s.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var $,O,F;e.parameters={...e.parameters,docs:{...($=e.parameters)==null?void 0:$.docs,source:{originalSource:`{
  // 컴포넌트에 넘겨줄 props 정리
  args: {
    // props명 : 넘겨줄 props 값-
    variant: 'primary',
    size: 'lg',
    children: '버튼',
    disabled: true
  }
}`,...(F=(O=e.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var W,P,w;a.parameters={...a.parameters,docs:{...(W=a.parameters)==null?void 0:W.docs,source:{originalSource:`{
  // 컴포넌트에 넘겨줄 props 정리
  args: {
    // props명 : 넘겨줄 props 값-
    variant: 'primary-sub',
    size: 'sm',
    children: '버튼'
  }
}`,...(w=(P=a.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var M,L,j;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  // 컴포넌트에 넘겨줄 props 정리
  args: {
    // props명 : 넘겨줄 props 값-
    variant: 'primary-sub',
    size: 'md',
    children: '버튼'
  }
}`,...(j=(L=u.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var I,q,V;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  // 컴포넌트에 넘겨줄 props 정리
  args: {
    // props명 : 넘겨줄 props 값-
    variant: 'primary-sub',
    size: 'lg',
    children: '버튼'
  }
}`,...(V=(q=o.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var T,G,R;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  // 컴포넌트에 넘겨줄 props 정리
  args: {
    // props명 : 넘겨줄 props 값-
    variant: 'primary-sub',
    size: 'lg',
    children: '버튼',
    disabled: true
  }
}`,...(R=(G=i.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};var _,N,H;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  // 컴포넌트에 넘겨줄 props 정리
  args: {
    // props명 : 넘겨줄 props 값-
    variant: 'secondary',
    size: 'sm',
    children: '버튼'
  }
}`,...(H=(N=p.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var J,K,Q;t.parameters={...t.parameters,docs:{...(J=t.parameters)==null?void 0:J.docs,source:{originalSource:`{
  // 컴포넌트에 넘겨줄 props 정리
  args: {
    // props명 : 넘겨줄 props 값-
    variant: 'secondary',
    size: 'md',
    children: '버튼'
  }
}`,...(Q=(K=t.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  // 컴포넌트에 넘겨줄 props 정리
  args: {
    // props명 : 넘겨줄 props 값-
    variant: 'secondary',
    size: 'lg',
    children: '버튼'
  }
}`,...(Y=(X=c.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,rr,nr;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  // 컴포넌트에 넘겨줄 props 정리
  args: {
    // props명 : 넘겨줄 props 값-
    variant: 'secondary',
    size: 'lg',
    children: '버튼',
    disabled: true
  }
}`,...(nr=(rr=C.parameters)==null?void 0:rr.docs)==null?void 0:nr.source}}};var sr,er,ar;d.parameters={...d.parameters,docs:{...(sr=d.parameters)==null?void 0:sr.docs,source:{originalSource:`{
  // 컴포넌트에 넘겨줄 props 정리
  args: {
    // props명 : 넘겨줄 props 값-
    variant: 'outline',
    size: 'sm',
    children: '버튼'
  }
}`,...(ar=(er=d.parameters)==null?void 0:er.docs)==null?void 0:ar.source}}};var ur,or,ir;l.parameters={...l.parameters,docs:{...(ur=l.parameters)==null?void 0:ur.docs,source:{originalSource:`{
  // 컴포넌트에 넘겨줄 props 정리
  args: {
    // props명 : 넘겨줄 props 값-
    variant: 'outline',
    size: 'md',
    children: '버튼'
  }
}`,...(ir=(or=l.parameters)==null?void 0:or.docs)==null?void 0:ir.source}}};var pr,tr,cr;m.parameters={...m.parameters,docs:{...(pr=m.parameters)==null?void 0:pr.docs,source:{originalSource:`{
  // 컴포넌트에 넘겨줄 props 정리
  args: {
    // props명 : 넘겨줄 props 값-
    variant: 'outline',
    size: 'lg',
    children: '버튼'
  }
}`,...(cr=(tr=m.parameters)==null?void 0:tr.docs)==null?void 0:cr.source}}};var Cr,dr,lr;B.parameters={...B.parameters,docs:{...(Cr=B.parameters)==null?void 0:Cr.docs,source:{originalSource:`{
  // 컴포넌트에 넘겨줄 props 정리
  args: {
    // props명 : 넘겨줄 props 값-
    variant: 'outline',
    size: 'lg',
    children: '버튼',
    disabled: true
  }
}`,...(lr=(dr=B.parameters)==null?void 0:dr.docs)==null?void 0:lr.source}}};var mr,Br,Ar;A.parameters={...A.parameters,docs:{...(mr=A.parameters)==null?void 0:mr.docs,source:{originalSource:`{
  // 컴포넌트에 넘겨줄 props 정리
  args: {
    // props명 : 넘겨줄 props 값-
    variant: 'outline-sub01',
    size: 'sm',
    children: '버튼'
  }
}`,...(Ar=(Br=A.parameters)==null?void 0:Br.docs)==null?void 0:Ar.source}}};var gr,Dr,br;g.parameters={...g.parameters,docs:{...(gr=g.parameters)==null?void 0:gr.docs,source:{originalSource:`{
  // 컴포넌트에 넘겨줄 props 정리
  args: {
    // props명 : 넘겨줄 props 값-
    variant: 'outline-sub02',
    children: '버튼'
  }
}`,...(br=(Dr=g.parameters)==null?void 0:Dr.docs)==null?void 0:br.source}}};var yr,vr,hr;D.parameters={...D.parameters,docs:{...(yr=D.parameters)==null?void 0:yr.docs,source:{originalSource:`{
  // 컴포넌트에 넘겨줄 props 정리
  args: {
    // props명 : 넘겨줄 props 값-
    variant: 'text-icon',
    icon: <WOIcon icon="plus-blue-14"></WOIcon>,
    children: '버튼'
  }
}`,...(hr=(vr=D.parameters)==null?void 0:vr.docs)==null?void 0:hr.source}}};const wr=["PrimarySm","PrimaryMd","PrimaryLg","PrimaryDisabled","PrimarySubSm","PrimarySubMd","PrimarySubLg","PrimarySubDisabled","SecondarySm","SecondaryMd","SecondaryLg","SecondaryDisabled","OutlineSm","OutlineMd","OutlineLg","OutlineDisabled","OutlineSub01","OutlineSub02","TextIcon"];export{B as OutlineDisabled,m as OutlineLg,l as OutlineMd,d as OutlineSm,A as OutlineSub01,g as OutlineSub02,e as PrimaryDisabled,s as PrimaryLg,n as PrimaryMd,r as PrimarySm,i as PrimarySubDisabled,o as PrimarySubLg,u as PrimarySubMd,a as PrimarySubSm,C as SecondaryDisabled,c as SecondaryLg,t as SecondaryMd,p as SecondarySm,D as TextIcon,wr as __namedExportsOrder,Pr as default};
