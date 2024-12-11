import{j as e}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import{u as i}from"./styled-components.browser.esm-aa768a49.js";import{I as n}from"./index-263a97c4.js";import"./_commonjsHelpers-de833af9.js";const V=s=>e.jsxs(e.Fragment,{children:[s.case==="1"&&e.jsxs(e.Fragment,{children:[e.jsxs(r,{children:[e.jsx(n,{type:"password",label:s.label,name:"password01",id:"password01",bg:"white",placeholder:"비밀번호 입력",labelVisible:!0}),e.jsxs(l,{children:[e.jsx(a,{children:"영문포함"}),e.jsx(a,{children:"숫자포함"}),e.jsx(a,{children:"8-20자 이내"}),e.jsx(a,{children:"특수문자"})]})]}),e.jsxs(r,{children:[e.jsx(n,{type:"password",label:s.label,name:"password01",id:"password02",bg:"white",placeholder:"비밀번호 확인"}),e.jsx(l,{children:e.jsx(a,{children:"비밀번호 일치"})})]})]}),s.case==="2"&&e.jsxs(e.Fragment,{children:[e.jsxs(r,{children:[e.jsx(n,{type:"password",label:s.label,name:"password01",id:"password01",bg:"white",value:"123123",placeholder:"비밀번호 입력",labelVisible:!0}),e.jsxs(l,{children:[e.jsx(a,{className:"on",children:"영문포함"}),e.jsx(a,{className:"on",children:"숫자포함"}),e.jsx(a,{className:"error",children:"8-20자 이내"}),e.jsx(a,{className:"error",children:"특수문자"})]})]}),e.jsxs(r,{children:[e.jsx(n,{type:"password",label:s.label,name:"password01",id:"password02",bg:"white",value:"123123",placeholder:"비밀번호 확인"}),e.jsx(l,{children:e.jsx(a,{children:"비밀번호 일치"})})]})]}),s.case==="3"&&e.jsxs(e.Fragment,{children:[e.jsxs(r,{children:[e.jsx(n,{type:"password",label:s.label,name:"password01",id:"password01",bg:"white",value:"123123123",placeholder:"비밀번호 입력",labelVisible:!0}),e.jsxs(l,{children:[e.jsx(a,{className:"on",children:"영문포함"}),e.jsx(a,{className:"on",children:"숫자포함"}),e.jsx(a,{className:"on",children:"8-20자 이내"}),e.jsx(a,{className:"on",children:"특수문자"})]})]}),e.jsxs(r,{children:[e.jsx(n,{type:"password",label:s.label,name:"password01",id:"password02",bg:"white",value:"123123123",placeholder:"비밀번호 확인"}),e.jsx(l,{children:e.jsx(a,{className:"on",children:"비밀번호 일치"})})]})]})]}),j=V,r=i.div`
  & + & {
    margin-top: 10px;
  }
`,l=i.div`
  display: flex;
  margin-top: 8px;
  padding-left: 6px;
`,a=i.span`
  position: relative;
  display: block;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #999;
  &::after {
    content: '';
    position: absolute;
    right: -18px;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    width: 16px;
    height: 16px;
    background: url(./assets/BeatFolio/icon-sub-chk-unchecked.png) no-repeat center / cover;
  }
  & + & {
    margin-left: 28px;
  }
  &.on {
    color: #7974ff;
    &::after {
      background: url(./assets/BeatFolio/icon-sub-chk-checked.png) no-repeat center / cover;
    }
  }
  &.error {
    color: #f53e50;
    &::after {
      background: url(./assets/BeatFolio/icon-sub-chk-checked-ex.png) no-repeat center / cover;
    }
  }
`;V.__docgenInfo={description:"",methods:[],displayName:"PasswordInputSet"};const f=`import React from 'react';
import { styled } from 'styled-components';
import Input from '../Input';

const PasswordInputSet = (props) => {
  return (
    <>
      {props.case === '1' && (
        <>
          <Wrap>
            <Input type='password' label={props.label} name='password01' id='password01' bg='white' placeholder='비밀번호 입력' labelVisible />
            <ValidateBox>
              <Validate>영문포함</Validate>
              <Validate>숫자포함</Validate>
              <Validate>8-20자 이내</Validate>
              <Validate>특수문자</Validate>
            </ValidateBox>
          </Wrap>
          <Wrap>
            <Input type='password' label={props.label} name='password01' id='password02' bg='white' placeholder='비밀번호 확인' />
            <ValidateBox>
              <Validate>비밀번호 일치</Validate>
            </ValidateBox>
          </Wrap>
        </>
      )}
      {props.case === '2' && (
        <>
          <Wrap>
            <Input type='password' label={props.label} name='password01' id='password01' bg='white' value='123123' placeholder='비밀번호 입력' labelVisible />
            <ValidateBox>
              <Validate className='on'>영문포함</Validate>
              <Validate className='on'>숫자포함</Validate>
              <Validate className='error'>8-20자 이내</Validate>
              <Validate className='error'>특수문자</Validate>
            </ValidateBox>
          </Wrap>
          <Wrap>
            <Input type='password' label={props.label} name='password01' id='password02' bg='white' value='123123' placeholder='비밀번호 확인' />
            <ValidateBox>
              <Validate>비밀번호 일치</Validate>
            </ValidateBox>
          </Wrap>
        </>
      )}
      {props.case === '3' && (
        <>
          <Wrap>
            <Input
              type='password'
              label={props.label}
              name='password01'
              id='password01'
              bg='white'
              value='123123123'
              placeholder='비밀번호 입력'
              labelVisible
            />
            <ValidateBox>
              <Validate className='on'>영문포함</Validate>
              <Validate className='on'>숫자포함</Validate>
              <Validate className='on'>8-20자 이내</Validate>
              <Validate className='on'>특수문자</Validate>
            </ValidateBox>
          </Wrap>
          <Wrap>
            <Input type='password' label={props.label} name='password01' id='password02' bg='white' value='123123123' placeholder='비밀번호 확인' />
            <ValidateBox>
              <Validate className='on'>비밀번호 일치</Validate>
            </ValidateBox>
          </Wrap>
        </>
      )}
    </>
  );
};

export default PasswordInputSet;

const Wrap = styled.div\`
  & + & {
    margin-top: 10px;
  }
\`;

const ValidateBox = styled.div\`
  display: flex;
  margin-top: 8px;
  padding-left: 6px;
\`;
const Validate = styled.span\`
  position: relative;
  display: block;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #999;
  &::after {
    content: '';
    position: absolute;
    right: -18px;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    width: 16px;
    height: 16px;
    background: url(./assets/BeatFolio/icon-sub-chk-unchecked.png) no-repeat center / cover;
  }
  & + & {
    margin-left: 28px;
  }
  &.on {
    color: #7974ff;
    &::after {
      background: url(./assets/BeatFolio/icon-sub-chk-checked.png) no-repeat center / cover;
    }
  }
  &.error {
    color: #f53e50;
    &::after {
      background: url(./assets/BeatFolio/icon-sub-chk-checked-ex.png) no-repeat center / cover;
    }
  }
\`;
`,N={title:"BeatFolio/Input/PasswordInputSet",component:j,parameters:{layout:"padded",storySource:{source:f}},tags:["autodocs"],argTypes:{case:{control:"text",description:"PasswordInput case 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}}}},t={args:{case:"1"}},o={args:{case:"2"}},d={args:{case:"3"}};var p,c,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    case: '1'
  }
}`,...(h=(c=t.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var m,u,x;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    case: '2'
  }
}`,...(x=(u=o.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var b,w,g;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    case: '3'
  }
}`,...(g=(w=d.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};const W=["Case1","Case2","Case3"];export{t as Case1,o as Case2,d as Case3,W as __namedExportsOrder,N as default};
