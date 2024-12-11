import{j as t}from"./jsx-runtime-ffb262ed.js";import{L as u,B as f}from"./index-b81b1b23.js";import"./index-76fb7be0.js";import{u as m}from"./styled-components.browser.esm-aa768a49.js";import"./index-d3ea75b5.js";import"./_commonjsHelpers-de833af9.js";import"./index-c4d0dbf5.js";const g=({type:n,onClick:o})=>t.jsxs(t.Fragment,{children:[n==="user"&&t.jsx(s,{onClick:o,children:t.jsxs(i,{children:[t.jsx("div",{className:"icon",children:"🙋‍♀️"}),t.jsxs("div",{className:"text",children:[t.jsx("div",{className:"tit",children:"개인으로 가입"}),t.jsx("div",{className:"txt",children:"개인으로 경기를 참여하고 싶다면!"})]})]})}),n==="company"&&t.jsx(s,{to:"/CompanyRegister",onClick:o,children:t.jsxs(i,{children:[t.jsx("div",{className:"icon",children:"🪐"}),t.jsxs("div",{className:"text",children:[t.jsx("div",{className:"tit",children:"기업으로 가입"}),t.jsx("div",{className:"txt",children:"사업 목적으로 경기를 개최하고 싶다면!"})]})]})})]}),h=g,s=m(u)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 69px;
  padding: 0 16px 0 20px;
  border-radius: 12px;
  background-color: #f4f6f8;
  border: 1px solid transparent;

  & + & {
    margin-top: 12px;
  }
  &:focus {
    border: 1px solid #7974ff;
    background-color: #f3f3ff;
    box-shadow: 0 4px 6px 0 rgba(121, 116, 255, 0.1);
  }
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background: url(./assets/BeatFolio/icon-arrow-right.png) no-repeat center / cover;
  }
`,i=m.div`
  display: flex;
  align-items: center;
  .icon {
    margin-right: 21px;
    font-size: 24px;
    line-height: 32px;
  }
  .text {
    .tit {
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      color: #000;
      text-align: left;
    }
    .txt {
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      color: #777;
    }
  }
`;g.__docgenInfo={description:"",methods:[],displayName:"EmailRegisterButton"};const y=`import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const EmailRegisterButton = ({ type, onClick }) => {
  return (
    <>
      {type === 'user' && (
        <Btn onClick={onClick}>
          <TextWrap>
            <div className='icon'>🙋‍♀️</div>
            <div className='text'>
              <div className='tit'>개인으로 가입</div>
              <div className='txt'>개인으로 경기를 참여하고 싶다면!</div>
            </div>
          </TextWrap>
        </Btn>
      )}
      {type === 'company' && (
        <Btn to='/CompanyRegister' onClick={onClick}>
          <TextWrap>
            <div className='icon'>🪐</div>
            <div className='text'>
              <div className='tit'>기업으로 가입</div>
              <div className='txt'>사업 목적으로 경기를 개최하고 싶다면!</div>
            </div>
          </TextWrap>
        </Btn>
      )}
    </>
  );
};

export default EmailRegisterButton;

const Btn = styled(Link)\`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 69px;
  padding: 0 16px 0 20px;
  border-radius: 12px;
  background-color: #f4f6f8;
  border: 1px solid transparent;

  & + & {
    margin-top: 12px;
  }
  &:focus {
    border: 1px solid #7974ff;
    background-color: #f3f3ff;
    box-shadow: 0 4px 6px 0 rgba(121, 116, 255, 0.1);
  }
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background: url(./assets/BeatFolio/icon-arrow-right.png) no-repeat center / cover;
  }
\`;

const TextWrap = styled.div\`
  display: flex;
  align-items: center;
  .icon {
    margin-right: 21px;
    font-size: 24px;
    line-height: 32px;
  }
  .text {
    .tit {
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      color: #000;
      text-align: left;
    }
    .txt {
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      color: #777;
    }
  }
\`;
`,k={title:"BeatFolio/Button/EmailRegisterButton",component:h,decorators:[n=>t.jsx(f,{children:t.jsx(n,{})})],parameters:{layout:"padded",storySource:{source:y}},tags:["autodocs"],argTypes:{type:{control:"select",options:["user","company"],description:"Button Type 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}}}},e={args:{type:"user"}},r={args:{type:"company"}};var a,c,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    type: 'user'
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,l,x;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    type: 'company'
  }
}`,...(x=(l=r.parameters)==null?void 0:l.docs)==null?void 0:x.source}}};const C=["UserRegister","CompanyRegister"];export{r as CompanyRegister,e as UserRegister,C as __namedExportsOrder,k as default};
