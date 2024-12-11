import{j as r}from"./jsx-runtime-ffb262ed.js";import{W as ae}from"./WOButton-a92410a3.js";import{W as e}from"./WOIcon-b00d259e.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-aa768a49.js";import"./common.styled-d4908734.js";const ue={title:"WooriPC/Button/WOButton",component:ae,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["text","primary","secondary","outlined","fillOutlined","notice","gradient","help","box","personal"],description:"버튼 스타일타입 입니다.",defaultValue:{summary:"primary"},type:{summary:"string",required:!1}},type:{control:"select",options:["button","submit"],description:"버튼타입 입니다.",defaultValue:{summary:"button"},type:{summary:"string",required:!1}},size:{control:"select",options:["sm","md","lg"],description:"사이즈 입니다.",defaultValue:{summary:"sm"},type:{summary:"string",required:!1}},severity:{control:"select",options:["error"],description:"severity 타입 입니다.",defaultValue:{summary:""},type:{summary:"string",required:!1}},disabled:{control:"boolean",description:"버튼 disabled 여부입니다.",defaultValue:{summary:!1},type:{summary:"boolean",required:!1}},isActive:{control:"boolean",description:"버튼 active 여부로 hover와 같은 스타일로 변경 됩니다.",defaultValue:{summary:!1},type:{summary:"boolean",required:!1}},startIcon:{control:null,description:"버튼 자식요소 앞에 배치될 아이콘 입니다",defaultValue:{summary:void 0}},endIcon:{control:null,description:"버튼 자식요소 뒤에 배치될 아이콘 입니다",defaultValue:{summary:void 0}},children:{description:"버튼 자식요소에 배치될 요소 입니다"},onClick:{control:"text",description:"버튼 클릭 메소드 입니다.",action:"onClick",type:{summary:"function",required:!1}}}},a={args:{variant:"primary",children:"버튼"}},n={args:{variant:"primary",children:"버튼",type:"submit"}},s={args:{variant:"primary",disabled:!0,children:"버튼"}},t={args:{variant:"outlined",isActive:!0,children:"버튼"}},o={args:{variant:"secondary",children:"버튼"}},i={args:{variant:"secondary",disabled:!0,children:"버튼"}},c={args:{variant:"outlined",children:"버튼"}},d={args:{variant:"outlined",disabled:!0,children:"버튼"}},u={args:{variant:"fillOutlined",children:"버튼"}},l={args:{variant:"notice",children:"모두보기",endIcon:r.jsx(e,{icon:"arrow",width:9,height:10})}},m={args:{variant:"gradient",children:"조회"}},p={args:{variant:"help",children:"도움말"}},h={args:{variant:"box",children:"자주 쓰는 업무",startIcon:r.jsx(e,{width:10,height:10,icon:"plus-blue"})}},g={args:{variant:"personal",children:"로그아웃"}},y={args:{variant:"primary",size:"sm",children:"버튼"}},C={args:{variant:"primary",size:"md",children:"버튼"}},v={args:{variant:"primary",size:"lg",children:"버튼"}},B={args:{variant:"primary",children:"버튼",startIcon:r.jsx(e,{icon:"arrow-button-white",width:16,height:16})}},I={args:{variant:"primary",children:"버튼",endIcon:r.jsx(e,{icon:"arrow-button-white",width:16,height:16})}},S={args:{variant:"primary",children:"버튼",disabled:!0,endIcon:r.jsx(e,{icon:"arrow-button-white",width:16,height:16})}},b={args:{variant:"secondary",children:"버튼",startIcon:r.jsx(e,{icon:"print",width:16,height:16})}},D={args:{variant:"secondary",children:"버튼",disabled:!0,startIcon:r.jsx(e,{icon:"print",width:16,height:16})}},w={args:{variant:"outlined",children:"버튼",startIcon:r.jsx(e,{icon:"print",width:16,height:16})}},O={args:{variant:"outlined",children:"버튼",disabled:!0,startIcon:r.jsx(e,{icon:"print",width:16,height:16})}},f={args:{variant:"outlined",size:"md",children:"버튼",startIcon:r.jsx(e,{icon:"print",width:16,height:16})}},x={args:{variant:"outlined",size:"lg",children:"버튼",startIcon:r.jsx(e,{icon:"print",width:24,height:24})}},W={args:{children:"버튼",severity:"error"}};var A,j,z;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  // 컴포넌트에 넘겨줄 props 정리
  args: {
    // props명 : 넘겨줄 props 값-
    variant: 'primary',
    children: '버튼'
  }
}`,...(z=(j=a.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var E,P,V;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: '버튼',
    type: 'submit'
  }
}`,...(V=(P=n.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var q,F,L;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    disabled: true,
    children: '버튼'
  }
}`,...(L=(F=s.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var M,T,k;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    isActive: true,
    children: '버튼'
  }
}`,...(k=(T=t.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var G,H,N;o.parameters={...o.parameters,docs:{...(G=o.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: '버튼'
  }
}`,...(N=(H=o.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var _,R,J;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    disabled: true,
    children: '버튼'
  }
}`,...(J=(R=i.parameters)==null?void 0:R.docs)==null?void 0:J.source}}};var K,Q,U;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    children: '버튼'
  }
}`,...(U=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    disabled: true,
    children: '버튼'
  }
}`,...(Z=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,rr,er;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    variant: 'fillOutlined',
    children: '버튼'
  }
}`,...(er=(rr=u.parameters)==null?void 0:rr.docs)==null?void 0:er.source}}};var ar,nr,sr;l.parameters={...l.parameters,docs:{...(ar=l.parameters)==null?void 0:ar.docs,source:{originalSource:`{
  args: {
    variant: 'notice',
    children: '모두보기',
    endIcon: <WOIcon icon={'arrow'} width={9} height={10} />
  }
}`,...(sr=(nr=l.parameters)==null?void 0:nr.docs)==null?void 0:sr.source}}};var tr,or,ir;m.parameters={...m.parameters,docs:{...(tr=m.parameters)==null?void 0:tr.docs,source:{originalSource:`{
  args: {
    variant: 'gradient',
    children: '조회'
  }
}`,...(ir=(or=m.parameters)==null?void 0:or.docs)==null?void 0:ir.source}}};var cr,dr,ur;p.parameters={...p.parameters,docs:{...(cr=p.parameters)==null?void 0:cr.docs,source:{originalSource:`{
  args: {
    variant: 'help',
    children: '도움말'
  }
}`,...(ur=(dr=p.parameters)==null?void 0:dr.docs)==null?void 0:ur.source}}};var lr,mr,pr;h.parameters={...h.parameters,docs:{...(lr=h.parameters)==null?void 0:lr.docs,source:{originalSource:`{
  args: {
    variant: 'box',
    children: '자주 쓰는 업무',
    startIcon: <WOIcon width={10} height={10} icon='plus-blue' />
  }
}`,...(pr=(mr=h.parameters)==null?void 0:mr.docs)==null?void 0:pr.source}}};var hr,gr,yr;g.parameters={...g.parameters,docs:{...(hr=g.parameters)==null?void 0:hr.docs,source:{originalSource:`{
  args: {
    variant: 'personal',
    children: '로그아웃'
  }
}`,...(yr=(gr=g.parameters)==null?void 0:gr.docs)==null?void 0:yr.source}}};var Cr,vr,Br;y.parameters={...y.parameters,docs:{...(Cr=y.parameters)==null?void 0:Cr.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'sm',
    children: '버튼'
  }
}`,...(Br=(vr=y.parameters)==null?void 0:vr.docs)==null?void 0:Br.source}}};var Ir,Sr,br;C.parameters={...C.parameters,docs:{...(Ir=C.parameters)==null?void 0:Ir.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    children: '버튼'
  }
}`,...(br=(Sr=C.parameters)==null?void 0:Sr.docs)==null?void 0:br.source}}};var Dr,wr,Or;v.parameters={...v.parameters,docs:{...(Dr=v.parameters)==null?void 0:Dr.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'lg',
    children: '버튼'
  }
}`,...(Or=(wr=v.parameters)==null?void 0:wr.docs)==null?void 0:Or.source}}};var fr,xr,Wr;B.parameters={...B.parameters,docs:{...(fr=B.parameters)==null?void 0:fr.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: '버튼',
    startIcon: <WOIcon icon={'arrow-button-white'} width={16} height={16} />
  }
}`,...(Wr=(xr=B.parameters)==null?void 0:xr.docs)==null?void 0:Wr.source}}};var Ar,jr,zr;I.parameters={...I.parameters,docs:{...(Ar=I.parameters)==null?void 0:Ar.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: '버튼',
    endIcon: <WOIcon icon={'arrow-button-white'} width={16} height={16} />
  }
}`,...(zr=(jr=I.parameters)==null?void 0:jr.docs)==null?void 0:zr.source}}};var Er,Pr,Vr;S.parameters={...S.parameters,docs:{...(Er=S.parameters)==null?void 0:Er.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: '버튼',
    disabled: true,
    endIcon: <WOIcon icon={'arrow-button-white'} width={16} height={16} />
  }
}`,...(Vr=(Pr=S.parameters)==null?void 0:Pr.docs)==null?void 0:Vr.source}}};var qr,Fr,Lr;b.parameters={...b.parameters,docs:{...(qr=b.parameters)==null?void 0:qr.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: '버튼',
    startIcon: <WOIcon icon={'print'} width={16} height={16} />
  }
}`,...(Lr=(Fr=b.parameters)==null?void 0:Fr.docs)==null?void 0:Lr.source}}};var Mr,Tr,kr;D.parameters={...D.parameters,docs:{...(Mr=D.parameters)==null?void 0:Mr.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: '버튼',
    disabled: true,
    startIcon: <WOIcon icon={'print'} width={16} height={16} />
  }
}`,...(kr=(Tr=D.parameters)==null?void 0:Tr.docs)==null?void 0:kr.source}}};var Gr,Hr,Nr;w.parameters={...w.parameters,docs:{...(Gr=w.parameters)==null?void 0:Gr.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    children: '버튼',
    startIcon: <WOIcon icon={'print'} width={16} height={16} />
  }
}`,...(Nr=(Hr=w.parameters)==null?void 0:Hr.docs)==null?void 0:Nr.source}}};var _r,Rr,Jr;O.parameters={...O.parameters,docs:{...(_r=O.parameters)==null?void 0:_r.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    children: '버튼',
    disabled: true,
    startIcon: <WOIcon icon={'print'} width={16} height={16} />
  }
}`,...(Jr=(Rr=O.parameters)==null?void 0:Rr.docs)==null?void 0:Jr.source}}};var Kr,Qr,Ur;f.parameters={...f.parameters,docs:{...(Kr=f.parameters)==null?void 0:Kr.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    size: 'md',
    children: '버튼',
    startIcon: <WOIcon icon={'print'} width={16} height={16} />
  }
}`,...(Ur=(Qr=f.parameters)==null?void 0:Qr.docs)==null?void 0:Ur.source}}};var Xr,Yr,Zr;x.parameters={...x.parameters,docs:{...(Xr=x.parameters)==null?void 0:Xr.docs,source:{originalSource:`{
  args: {
    variant: 'outlined',
    size: 'lg',
    children: '버튼',
    startIcon: <WOIcon icon={'print'} width={24} height={24} />
  }
}`,...(Zr=(Yr=x.parameters)==null?void 0:Yr.docs)==null?void 0:Zr.source}}};var $r,re,ee;W.parameters={...W.parameters,docs:{...($r=W.parameters)==null?void 0:$r.docs,source:{originalSource:`{
  args: {
    children: '버튼',
    severity: 'error'
  }
}`,...(ee=(re=W.parameters)==null?void 0:re.docs)==null?void 0:ee.source}}};const le=["Default","SubmitType","Disabled","IsActive","Secondary","SecondaryDisabled","Outlined","OutlinedDisabled","FillOutlined","Notice","Gradient","Help","Box","Personal","PrimarySmall","PrimaryMedium","PrimaryLarge","StartIcon","EndIcon","IconDisabled","StartIconSecondary","IconSecondaryDisabled","StartIconOutlined","IconOutlinedDisabled","StartIconMedium","StartIconLarge","Error"];export{h as Box,a as Default,s as Disabled,I as EndIcon,W as Error,u as FillOutlined,m as Gradient,p as Help,S as IconDisabled,O as IconOutlinedDisabled,D as IconSecondaryDisabled,t as IsActive,l as Notice,c as Outlined,d as OutlinedDisabled,g as Personal,v as PrimaryLarge,C as PrimaryMedium,y as PrimarySmall,o as Secondary,i as SecondaryDisabled,B as StartIcon,x as StartIconLarge,f as StartIconMedium,w as StartIconOutlined,b as StartIconSecondary,n as SubmitType,le as __namedExportsOrder,ue as default};
