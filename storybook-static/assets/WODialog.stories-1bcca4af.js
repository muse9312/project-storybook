import{j as n}from"./jsx-runtime-ffb262ed.js";import{r as p}from"./index-76fb7be0.js";import{W as o}from"./WODialog-1b07d360.js";import{W as t}from"./WOButton-ab404921.js";import{W as I}from"./WORadioGroup-0cbf99ac.js";import"./_commonjsHelpers-de833af9.js";import"./WOIconButton-4118cf05.js";import"./styled-components.browser.esm-aa768a49.js";import"./Dialog-d847e8ea.js";import"./composeClasses-4118efa7.js";import"./extends-15b115a7.js";import"./styled-80c0ceef.js";import"./Modal-9b120e55.js";import"./mergeSlotProps-69f81163.js";import"./inheritsLoose-c82a83d4.js";import"./index-d3ea75b5.js";import"./ownerWindow-684f99c0.js";import"./useSlotProps-f7cb9e67.js";import"./useId-a47493a3.js";const j=`import { Dialog } from '@mui/material';
import React, { useEffect, useState } from 'react';
import WOIconButton from './WOIconButton';
import styled, { css } from 'styled-components';

const WODialog = ({ isOpen: isPropOpen, onClose, bgColor, title, children, buttons, buttonGrid, center, totalCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    onClose();
    setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(isPropOpen);
  }, [isPropOpen]);

  return (
    <CustomDialog fullScreen={center ? false : true} $center={center} $bgColor={bgColor} open={isOpen} onClose={() => handleClose()}>
      <Header $center={center} $totalCount={totalCount}>
        <div className='title'>{title}</div>
        {totalCount && <div className='count'>총 {totalCount}건</div>}
        <WOIconButton icon={'close-20'} width={20} height={20} onClick={() => handleClose()} />
      </Header>
      <ContentWrap $center={center}>{children}</ContentWrap>
      {buttons && (
        <Footer $buttonGrid={buttonGrid} className='dialog-footer' $center={center}>
          {buttons}
        </Footer>
      )}
    </CustomDialog>
  );
};

export default WODialog;

const CustomDialog = styled(Dialog)\`
  display: flex;
  flex-direction: column;
  &.MuiDialog-root {
    z-index: 3000;
  }
  \${(props) =>
    props.$bgColor === 'gradient' &&
    css\`
      .MuiPaper-root {
        background: var(--Grad-BG-01, linear-gradient(180deg, #ebedff 0%, #ffeaea 100%));
      }
      .dialog-footer {
        border-top: unset;
      }
    \`};
  \${(props) =>
    props.$center &&
    css\`
      .MuiPaper-root {
        border-radius: 8px;
        margin: 0 20px;
      }
    \`}
\`;

const Header = styled.div\`
  position: relative;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  \${(props) =>
    props.$totalCount &&
    css\`
      justify-content: space-between;
      padding: 0 56px 0 20px;
    \`}
  .title {
    color: var(--W-Dark-11, #333);
    font-size: 16px;
    font-weight: 700;
  }
  .count {
    color: var(--W-Dark-11, #333);
    font-size: 14px;
    font-weight: 700;
  }
  .icon-btn {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
  \${(props) =>
    props.$center &&
    css\`
      justify-content: flex-start;
      padding: 0 20px;
    \`}
\`;

const ContentWrap = styled.div\`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  \${(props) =>
    props.$center &&
    css\`
      display: flex;
      align-items: center;
      width: 320px;
      padding: 10px 20px;
      .btn + .btn {
        margin-left: 6px;
      }
    \`}
\`;

const Footer = styled.div\`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 4px;
  height: 70px;
  padding: 0 12px;
  border-top: 1px solid var(--C-Dark-02);
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
  \${(props) =>
    props.$center &&
    css\`
      justify-content: center;
      border-top: unset;
      .btn {
        width: 138px;
      }
    \`}
\`;
`,J={title:"WooriMobile/Modal/WODialog",component:o,parameters:{layout:"centered",storySource:{source:j}},tags:["autodocs"],argTypes:{isOpen:{control:"boolean",description:"modal 오픈상태 입니다.",defaultValue:{summary:!1},type:{summary:"boolean",required:!0}},title:{control:"text",description:"modal 타이틀명 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}},buttons:{description:"modal footer 버튼 입니다. 컴포넌트를 전달하면 됩니다."},children:{description:"modal 콘텐츠 및 버튼영역 입니다."},onClose:{control:"text",description:"modal 닫힐때 실행되는 메소드 입니다.",action:"onClick",type:{summary:"function",required:!1}},buttonGrid:{control:"text",description:"modal buttonGrid 입니다.",action:"onClick",type:{summary:"string",required:!1}},bgColor:{control:"text",description:"modal bgColor 입니다.",action:"onClick",type:{summary:"string",required:!1}}}},s=()=>{const[r,e]=p.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(t,{variant:"secondary",size:"lg",onClick:()=>e(!0),children:"Open"}),n.jsx(o,{title:"Title",isOpen:r,onClose:()=>e(!1),children:"asdasdasd"})]})},a=()=>{const[r,e]=p.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(t,{variant:"secondary",size:"lg",onClick:()=>e(!0),children:"Open"}),n.jsx(o,{title:"Title",isOpen:r,onClose:()=>e(!1),buttons:n.jsx(n.Fragment,{children:n.jsx(t,{onClick:()=>{},size:"lg",variant:"primary",children:"버튼"})}),children:"asdasdasd"})]})},i=()=>{const[r,e]=p.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(t,{variant:"secondary",size:"lg",onClick:()=>e(!0),children:"Open"}),n.jsx(o,{title:"Title",isOpen:r,onClose:()=>e(!1),buttonGrid:"type-01",buttons:n.jsxs(n.Fragment,{children:[n.jsx(t,{onClick:()=>{},size:"lg",variant:"secondary",children:"버튼"}),n.jsx(t,{onClick:()=>{},size:"lg",variant:"primary",children:"버튼"})]}),children:"asdasdasd"})]})},l=()=>{const[r,e]=p.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(t,{variant:"secondary",size:"lg",onClick:()=>e(!0),children:"Open"}),n.jsx(o,{title:"선택된 업무",bgColor:"gradient",isOpen:r,onClose:()=>e(!1),buttons:n.jsx(n.Fragment,{children:n.jsx(t,{onClick:()=>{},size:"lg",variant:"primary",children:"조회추가"})}),children:"asdasdasd"})]})},d=()=>{const[r,e]=p.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(t,{variant:"secondary",size:"lg",onClick:()=>e(!0),children:"Open"}),n.jsx(o,{title:"보고서 결재",center:!0,isOpen:r,onClose:()=>e(!1),buttons:n.jsx(n.Fragment,{children:n.jsx(t,{onClick:()=>{},size:"md",variant:"primary-sub",children:"저장"})}),children:n.jsx(I,{radioType:"button",size:"lg",defaultCheckedValue:{id:"rdo1-1",label:"반려",name:"rdo1",value:"반려"},radioItems:[{id:"rdo1-1",label:"반려",name:"rdo1",value:"반려"},{id:"rdo1-2",label:"승인",name:"rdo1",value:"승인"}]})})]})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"HasButton"};i.__docgenInfo={description:"",methods:[],displayName:"HasButtonGrid"};l.__docgenInfo={description:"",methods:[],displayName:"Gradient"};d.__docgenInfo={description:"",methods:[],displayName:"Center"};var c,u,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <>\r
            <WOButton variant="secondary" size="lg" onClick={() => setIsOpen(true)}>\r
                Open\r
            </WOButton>\r
            <WODialog title="Title" isOpen={isOpen} onClose={() => setIsOpen(false)}>\r
                asdasdasd\r
            </WODialog>\r
        </>;
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var O,C,g;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <>\r
            <WOButton variant="secondary" size="lg" onClick={() => setIsOpen(true)}>\r
                Open\r
            </WOButton>\r
            <WODialog title="Title" isOpen={isOpen} onClose={() => setIsOpen(false)} buttons={<>\r
                        <WOButton onClick={() => {}} size="lg" variant="primary">\r
                            버튼\r
                        </WOButton>\r
                    </>}>\r
                asdasdasd\r
            </WODialog>\r
        </>;
}`,...(g=(C=a.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var f,x,y;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <>\r
            <WOButton variant="secondary" size="lg" onClick={() => setIsOpen(true)}>\r
                Open\r
            </WOButton>\r
            <WODialog title="Title" isOpen={isOpen} onClose={() => setIsOpen(false)} buttonGrid="type-01" buttons={<>\r
                        <WOButton onClick={() => {}} size="lg" variant="secondary">\r
                            버튼\r
                        </WOButton>\r
                        <WOButton onClick={() => {}} size="lg" variant="primary">\r
                            버튼\r
                        </WOButton>\r
                    </>}>\r
                asdasdasd\r
            </WODialog>\r
        </>;
}`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var b,h,B;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <>\r
            <WOButton variant="secondary" size="lg" onClick={() => setIsOpen(true)}>\r
                Open\r
            </WOButton>\r
            <WODialog title="선택된 업무" bgColor="gradient" isOpen={isOpen} onClose={() => setIsOpen(false)} buttons={<>\r
                        <WOButton onClick={() => {}} size="lg" variant="primary">\r
                            조회추가\r
                        </WOButton>\r
                    </>}>\r
                asdasdasd\r
            </WODialog>\r
        </>;
}`,...(B=(h=l.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var W,v,D;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <>\r
            <WOButton variant="secondary" size="lg" onClick={() => setIsOpen(true)}>\r
                Open\r
            </WOButton>\r
            <WODialog title="보고서 결재" center={true} isOpen={isOpen} onClose={() => setIsOpen(false)} buttons={<>\r
                        <WOButton onClick={() => {}} size="md" variant="primary-sub">\r
                            저장\r
                        </WOButton>\r
                    </>}>\r
                <WORadioGroup radioType="button" size="lg" defaultCheckedValue={{
        id: 'rdo1-1',
        label: '반려',
        name: 'rdo1',
        value: '반려'
      }} radioItems={[{
        id: 'rdo1-1',
        label: '반려',
        name: 'rdo1',
        value: '반려'
      }, {
        id: 'rdo1-2',
        label: '승인',
        name: 'rdo1',
        value: '승인'
      }]} />\r
            </WODialog>\r
        </>;
}`,...(D=(v=d.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};const K=["Default","HasButton","HasButtonGrid","Gradient","Center"];export{d as Center,s as Default,l as Gradient,a as HasButton,i as HasButtonGrid,K as __namedExportsOrder,J as default};
