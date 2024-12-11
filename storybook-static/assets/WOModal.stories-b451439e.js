import{j as n}from"./jsx-runtime-ffb262ed.js";import{r as o}from"./index-76fb7be0.js";import{u as p,a as k}from"./styled-components.browser.esm-aa768a49.js";import{W as T}from"./WOIconButton-4118cf05.js";import{D as G}from"./Drawer-05549b2e.js";import{W as r}from"./WOButton-ab404921.js";import"./_commonjsHelpers-de833af9.js";import"./composeClasses-4118efa7.js";import"./extends-15b115a7.js";import"./index-de0962f3.js";import"./Modal-9b120e55.js";import"./styled-80c0ceef.js";import"./mergeSlotProps-69f81163.js";import"./inheritsLoose-c82a83d4.js";import"./index-d3ea75b5.js";import"./ownerWindow-684f99c0.js";import"./useSlotProps-f7cb9e67.js";import"./debounce-517eeb3c.js";const s=({isOpen:e,title:t,onClose:I,buttons:C,children:M,size:w,buttonGrid:S})=>{const[$,m]=o.useState(!1),x=i=>{i&&i.type==="keydown"&&(i.key==="Tab"||i.key==="Shift")||(I(),m(!1))};return o.useEffect(()=>{m(e)},[e]),n.jsx(n.Fragment,{children:n.jsxs(_,{anchor:"bottom",$size:w,className:"bottom-layer",open:$,onClose:i=>x(i),children:[n.jsxs(N,{children:[n.jsx("p",{className:"title",children:t||""}),n.jsx(T,{icon:"close-20",width:20,height:20,onClick:i=>x(i)})]}),n.jsx(q,{children:M}),C&&n.jsx(H,{$buttonGrid:S,children:C})]})})},_=p(G)`
  &.MuiDrawer-root {
    z-index: 2900;
  }
  .MuiDrawer-paperAnchorBottom {
    border-radius: 24px 24px 0px 0px;
    box-shadow: 0px -3px 14px 0px rgba(0, 0, 0, 0.1);
    padding-top: 8px;
    height: calc(100dvh - 48px);
    max-height: calc(100dvh - 48px);
    z-index: 900;
    ${e=>e.$size==="fit"&&k`
        height: auto;
      `}
  }
`,N=p.div`
  flex: 0 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  .title {
    color: var(--W-Dark-11, #333);
    font-size: 16px;
    font-weight: 700;
  }
  .icon-btn {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
`,q=p.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: ${e=>`${e.$gap?`${e.$gap}px`:"0"}`};
  overflow-y: auto;
`,H=p.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  padding: 12px;
  gap: 0 4px;
  border-top: 1px solid var(--C-Dark-02, #ededf3);
  ${e=>e.$buttonGrid==="type-01"&&k`
      .btn {
        &:first-child {
          min-width: 113px;
          width: 113px;
        }
      }
    `}
`;p.div`
  padding: 0px 20px 8px;
  color: var(--Red-01);
  font-size: 10px;
  font-weight: 400;
`;s.__docgenInfo={description:"",methods:[],displayName:"WOModal"};const R=`import { Drawer } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import WOIconButton from './WOIconButton';

// type size = 'sm' | 'md' | 'lg' | 'xl' (center 타입인 경우)
// type direction = 'center' | 'bottom'
// type bgColor = 'white' | 'gray'

const WOModal = ({ isOpen: isPropOpen, title, onClose, buttons, children, size, buttonGrid }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    onClose();
    setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(isPropOpen);
  }, [isPropOpen]);

  return (
    <>
      <DrawerCustom anchor={'bottom'} $size={size} className={'bottom-layer'} open={isOpen} onClose={(event) => handleClose(event)}>
        <TitleArea>
          <p className='title'>{title || ''}</p>
          <WOIconButton icon={'close-20'} width={20} height={20} onClick={(event) => handleClose(event)} />
        </TitleArea>
        <ModalContentArea>{children}</ModalContentArea>
        {buttons && <ModalButtonArea $buttonGrid={buttonGrid}>{buttons}</ModalButtonArea>}
      </DrawerCustom>
    </>
  );
};

export default WOModal;

const DrawerCustom = styled(Drawer)\`
  &.MuiDrawer-root {
    z-index: 2900;
  }
  .MuiDrawer-paperAnchorBottom {
    border-radius: 24px 24px 0px 0px;
    box-shadow: 0px -3px 14px 0px rgba(0, 0, 0, 0.1);
    padding-top: 8px;
    height: calc(100dvh - 48px);
    max-height: calc(100dvh - 48px);
    z-index: 900;
    \${(props) =>
      props.$size === 'fit' &&
      css\`
        height: auto;
      \`}
  }
\`;

const TitleArea = styled.div\`
  flex: 0 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  .title {
    color: var(--W-Dark-11, #333);
    font-size: 16px;
    font-weight: 700;
  }
  .icon-btn {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
\`;

const ModalContentArea = styled.div\`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: \${(props) => \`\${props.$gap ? \`\${props.$gap}px\` : '0'}\`};
  overflow-y: auto;
\`;
const ModalButtonArea = styled.div\`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  padding: 12px;
  gap: 0 4px;
  border-top: 1px solid var(--C-Dark-02, #ededf3);
  \${(props) =>
    props.$buttonGrid === 'type-01' &&
    css\`
      .btn {
        &:first-child {
          min-width: 113px;
          width: 113px;
        }
      }
    \`}
\`;

export const ModalSupportingText = styled.div\`
  padding: 0px 20px 8px;
  color: var(--Red-01);
  font-size: 10px;
  font-weight: 400;
\`;
`,un={title:"WooriMobile/Modal/WOModal",component:s,parameters:{layout:"centered",storySource:{source:R}},tags:["autodocs"],argTypes:{isOpen:{control:"boolean",description:"modal 오픈상태 입니다.",defaultValue:{summary:!1},type:{summary:"boolean",required:!0}},title:{control:"text",description:"modal 타이틀명 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}},buttons:{description:"modal footer 버튼 입니다. 컴포넌트를 전달하면 됩니다."},children:{description:"modal 콘텐츠 및 버튼영역 입니다."},onClose:{control:"text",description:"modal 닫힐때 실행되는 메소드 입니다.",action:"onClick",type:{summary:"function",required:!1}},size:{control:"select",description:"modal 사이즈 입니다.",options:["fit",void 0],defaultValue:{summary:"sm"},type:{summary:"string",required:!1}},buttonGrid:{control:"text",description:"modal buttonGrid 입니다.",action:"onClick",type:{summary:"string",required:!1}},bgColor:{control:"text",description:"modal background color 입니다.",type:{summary:"string",required:!1}}}},a=()=>{const[e,t]=o.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(r,{variant:"secondary",size:"lg",onClick:()=>t(!0),children:"Open"}),n.jsxs(s,{isOpen:e,direction:"center",title:"Title",onClose:()=>t(!1),children:[n.jsx("div",{children:"모달 콘텐츠"}),n.jsx("div",{children:"모달 콘텐츠"}),n.jsx("div",{children:"모달 콘텐츠"}),n.jsx("div",{children:"모달 콘텐츠"}),n.jsx("div",{children:"모달 콘텐츠"})]})]})},d=()=>{const[e,t]=o.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(r,{variant:"secondary",size:"lg",onClick:()=>t(!0),children:"Open"}),n.jsxs(s,{isOpen:e,direction:"center",title:"Title",buttons:n.jsx(n.Fragment,{children:n.jsx(r,{onClick:()=>{},size:"lg",variant:"primary",children:"버튼"})}),onClose:()=>t(!1),children:[n.jsx("div",{children:"모달 콘텐츠"}),n.jsx("div",{children:"모달 콘텐츠"}),n.jsx("div",{children:"모달 콘텐츠"}),n.jsx("div",{children:"모달 콘텐츠"}),n.jsx("div",{children:"모달 콘텐츠"}),n.jsx("div",{children:"모달 콘텐츠"})]})]})},u=()=>{const[e,t]=o.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(r,{variant:"secondary",size:"lg",onClick:()=>t(!0),children:"Open"}),n.jsxs(s,{isOpen:e,direction:"center",title:"Title",buttonGrid:"type-01",buttons:n.jsxs(n.Fragment,{children:[n.jsx(r,{onClick:()=>{},size:"lg",variant:"secondary",children:"버튼"}),n.jsx(r,{onClick:()=>{},size:"lg",variant:"primary",children:"버튼"})]}),onClose:()=>t(!1),children:[n.jsx("div",{children:"모달 콘텐츠"}),n.jsx("div",{children:"모달 콘텐츠"}),n.jsx("div",{children:"모달 콘텐츠"}),n.jsx("div",{children:"모달 콘텐츠"}),n.jsx("div",{children:"모달 콘텐츠"}),n.jsx("div",{children:"모달 콘텐츠"})]})]})},l=()=>{const[e,t]=o.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(r,{variant:"secondary",size:"lg",onClick:()=>t(!0),children:"Open"}),n.jsxs(s,{isOpen:e,direction:"center",title:"Title",size:"fit",buttons:n.jsx(n.Fragment,{children:n.jsx(r,{onClick:()=>{},size:"lg",variant:"primary",children:"버튼"})}),onClose:()=>t(!1),children:[n.jsx("div",{children:"모달 콘텐츠"}),n.jsx("div",{children:"모달 콘텐츠"}),n.jsx("div",{children:"모달 콘텐츠"}),n.jsx("div",{children:"모달 콘텐츠"}),n.jsx("div",{children:"모달 콘텐츠"}),n.jsx("div",{children:"모달 콘텐츠"})]})]})},c=()=>{const[e,t]=o.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(r,{variant:"secondary",size:"lg",onClick:()=>t(!0),children:"Open"}),n.jsxs(s,{bgColor:"gray",isOpen:e,direction:"center",title:"Title",buttonGrid:"type-01",buttons:n.jsxs(n.Fragment,{children:[n.jsx(r,{onClick:()=>{},size:"lg",variant:"secondary",children:"버튼"}),n.jsx(r,{onClick:()=>{},size:"lg",variant:"primary",children:"버튼"})]}),onClose:()=>t(!1),children:[n.jsx("div",{children:"모달 콘텐츠"}),n.jsx("div",{children:"모달 콘텐츠"}),n.jsx("div",{children:"모달 콘텐츠"}),n.jsx("div",{children:"모달 콘텐츠"}),n.jsx("div",{children:"모달 콘텐츠"}),n.jsx("div",{children:"모달 콘텐츠"})]})]})};a.__docgenInfo={description:"",methods:[],displayName:"Default"};d.__docgenInfo={description:"",methods:[],displayName:"HasButton"};u.__docgenInfo={description:"",methods:[],displayName:"HasButtonGrid"};l.__docgenInfo={description:"",methods:[],displayName:"Fit"};c.__docgenInfo={description:"",methods:[],displayName:"BgColor"};var v,h,B;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <>\r
            <WOButton variant="secondary" size="lg" onClick={() => setIsOpen(true)}>\r
                Open\r
            </WOButton>\r
            <WOModal isOpen={isOpen} direction="center" title="Title" onClose={() => setIsOpen(false)}>\r
                <div>모달 콘텐츠</div>\r
                <div>모달 콘텐츠</div>\r
                <div>모달 콘텐츠</div>\r
                <div>모달 콘텐츠</div>\r
                <div>모달 콘텐츠</div>\r
            </WOModal>\r
        </>;
}`,...(B=(h=a.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var O,f,g;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <>\r
            <WOButton variant="secondary" size="lg" onClick={() => setIsOpen(true)}>\r
                Open\r
            </WOButton>\r
            <WOModal isOpen={isOpen} direction="center" title="Title" buttons={<>\r
                        <WOButton onClick={() => {}} size="lg" variant="primary">\r
                            버튼\r
                        </WOButton>\r
                    </>} onClose={() => setIsOpen(false)}>\r
                <div>모달 콘텐츠</div>\r
                <div>모달 콘텐츠</div>\r
                <div>모달 콘텐츠</div>\r
                <div>모달 콘텐츠</div>\r
                <div>모달 콘텐츠</div>\r
                <div>모달 콘텐츠</div>\r
            </WOModal>\r
        </>;
}`,...(g=(f=d.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var y,A,j;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <>\r
            <WOButton variant="secondary" size="lg" onClick={() => setIsOpen(true)}>\r
                Open\r
            </WOButton>\r
            <WOModal isOpen={isOpen} direction="center" title="Title" buttonGrid={'type-01'} buttons={<>\r
                        <WOButton onClick={() => {}} size="lg" variant="secondary">\r
                            버튼\r
                        </WOButton>\r
                        <WOButton onClick={() => {}} size="lg" variant="primary">\r
                            버튼\r
                        </WOButton>\r
                    </>} onClose={() => setIsOpen(false)}>\r
                <div>모달 콘텐츠</div>\r
                <div>모달 콘텐츠</div>\r
                <div>모달 콘텐츠</div>\r
                <div>모달 콘텐츠</div>\r
                <div>모달 콘텐츠</div>\r
                <div>모달 콘텐츠</div>\r
            </WOModal>\r
        </>;
}`,...(j=(A=u.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var E,D,b;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <>\r
            <WOButton variant="secondary" size="lg" onClick={() => setIsOpen(true)}>\r
                Open\r
            </WOButton>\r
            <WOModal isOpen={isOpen} direction="center" title="Title" size="fit" buttons={<>\r
                        <WOButton onClick={() => {}} size="lg" variant="primary">\r
                            버튼\r
                        </WOButton>\r
                    </>} onClose={() => setIsOpen(false)}>\r
                <div>모달 콘텐츠</div>\r
                <div>모달 콘텐츠</div>\r
                <div>모달 콘텐츠</div>\r
                <div>모달 콘텐츠</div>\r
                <div>모달 콘텐츠</div>\r
                <div>모달 콘텐츠</div>\r
            </WOModal>\r
        </>;
}`,...(b=(D=l.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};var W,F,z;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <>\r
            <WOButton variant="secondary" size="lg" onClick={() => setIsOpen(true)}>\r
                Open\r
            </WOButton>\r
            <WOModal bgColor={'gray'} isOpen={isOpen} direction="center" title="Title" buttonGrid={'type-01'} buttons={<>\r
                        <WOButton onClick={() => {}} size="lg" variant="secondary">\r
                            버튼\r
                        </WOButton>\r
                        <WOButton onClick={() => {}} size="lg" variant="primary">\r
                            버튼\r
                        </WOButton>\r
                    </>} onClose={() => setIsOpen(false)}>\r
                <div>모달 콘텐츠</div>\r
                <div>모달 콘텐츠</div>\r
                <div>모달 콘텐츠</div>\r
                <div>모달 콘텐츠</div>\r
                <div>모달 콘텐츠</div>\r
                <div>모달 콘텐츠</div>\r
            </WOModal>\r
        </>;
}`,...(z=(F=c.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};const ln=["Default","HasButton","HasButtonGrid","Fit","BgColor"];export{c as BgColor,a as Default,l as Fit,d as HasButton,u as HasButtonGrid,ln as __namedExportsOrder,un as default};
