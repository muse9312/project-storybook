import{j as n}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import{u as v}from"./styled-components.browser.esm-aa768a49.js";import"./_commonjsHelpers-de833af9.js";const $=({social:o,onClick:e})=>n.jsxs(n.Fragment,{children:[o==="kakao"&&n.jsxs(a,{social:o,onClick:e,children:[n.jsx(r,{social:o}),"카카오로 시작하기"]}),o==="naver"&&n.jsxs(a,{social:o,onClick:e,children:[n.jsx(r,{social:o}),"네이버로 시작하기"]}),o==="facebook"&&n.jsxs(a,{social:o,onClick:e,children:[n.jsx(r,{social:o}),"페이스북으로 시작하기"]}),o==="google"&&n.jsxs(a,{social:o,onClick:e,children:[n.jsx(r,{social:o}),"구글메일로 시작하기"]}),o==="email"&&n.jsxs(a,{social:o,onClick:e,children:[n.jsx(r,{social:o}),"이메일 가입"]})]}),F=$,a=v.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: #fff;
  ${o=>o.social==="kakao"&&`
        background-color:#ffcd00;
        color:#000;
    `}
  ${o=>o.social==="naver"&&`
        background-color:#06c759;
    `}
    ${o=>o.social==="facebook"&&`
        background-color:#4268b3;
    `}
    ${o=>o.social==="google"&&`
        background: #F4F6F8;
        color:#000;
    `}
    ${o=>o.social==="email"&&`
        background-color:#24282e;
    `}
    & +& {
    margin-top: 10px;
  }
`,r=v.span`
  display: block;
  width: 16px;
  height: 16px;
  margin-right: 6px;
  ${o=>o.social==="kakao"&&`
        background:url(./assets/BeatFolio/icon-loginlogo-kakao-black-16-px@2x.png) no-repeat center / cover;
    `}
  ${o=>o.social==="naver"&&`
        background:url(./assets/BeatFolio/icon-loginlogo-naver-naver-16-px@2x.png) no-repeat center / cover;
    `}
    ${o=>o.social==="facebook"&&`
        background:url(./assets/BeatFolio/icon-loginlogo-facebook-16-px@2x.png) no-repeat center / cover;
    `}
    ${o=>o.social==="google"&&`
        background:url(./assets/BeatFolio/icon-loginlogo-google-16-px@2x.png) no-repeat center / cover;
    `}
    ${o=>o.social==="email"&&`
        background:url(./assets/BeatFolio/icon-loginlogo-email-16-px@2x.png) no-repeat center / cover;
    `}
`;$.__docgenInfo={description:"",methods:[],displayName:"SocialRegisterButton"};const y=`import React from 'react';
import { styled } from 'styled-components';

const SocialRegisterButton = ({ social, onClick }) => {
  return (
    <>
      {social === 'kakao' && (
        <Btn social={social} onClick={onClick}>
          <Icon social={social} />
          카카오로 시작하기
        </Btn>
      )}
      {social === 'naver' && (
        <Btn social={social} onClick={onClick}>
          <Icon social={social} />
          네이버로 시작하기
        </Btn>
      )}
      {social === 'facebook' && (
        <Btn social={social} onClick={onClick}>
          <Icon social={social} />
          페이스북으로 시작하기
        </Btn>
      )}
      {social === 'google' && (
        <Btn social={social} onClick={onClick}>
          <Icon social={social} />
          구글메일로 시작하기
        </Btn>
      )}
      {social === 'email' && (
        <Btn social={social} onClick={onClick}>
          <Icon social={social} />
          이메일 가입
        </Btn>
      )}
    </>
  );
};

export default SocialRegisterButton;

const Btn = styled.button\`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: #fff;
  \${(props) =>
    props.social === 'kakao' &&
    \`
        background-color:#ffcd00;
        color:#000;
    \`}
  \${(props) =>
    props.social === 'naver' &&
    \`
        background-color:#06c759;
    \`}
    \${(props) =>
    props.social === 'facebook' &&
    \`
        background-color:#4268b3;
    \`}
    \${(props) =>
    props.social === 'google' &&
    \`
        background: #F4F6F8;
        color:#000;
    \`}
    \${(props) =>
    props.social === 'email' &&
    \`
        background-color:#24282e;
    \`}
    & +& {
    margin-top: 10px;
  }
\`;

const Icon = styled.span\`
  display: block;
  width: 16px;
  height: 16px;
  margin-right: 6px;
  \${(props) =>
    props.social === 'kakao' &&
    \`
        background:url(./assets/BeatFolio/icon-loginlogo-kakao-black-16-px@2x.png) no-repeat center / cover;
    \`}
  \${(props) =>
    props.social === 'naver' &&
    \`
        background:url(./assets/BeatFolio/icon-loginlogo-naver-naver-16-px@2x.png) no-repeat center / cover;
    \`}
    \${(props) =>
    props.social === 'facebook' &&
    \`
        background:url(./assets/BeatFolio/icon-loginlogo-facebook-16-px@2x.png) no-repeat center / cover;
    \`}
    \${(props) =>
    props.social === 'google' &&
    \`
        background:url(./assets/BeatFolio/icon-loginlogo-google-16-px@2x.png) no-repeat center / cover;
    \`}
    \${(props) =>
    props.social === 'email' &&
    \`
        background:url(./assets/BeatFolio/icon-loginlogo-email-16-px@2x.png) no-repeat center / cover;
    \`}
\`;
`,I={title:"BeatFolio/Button/SocialRegisterButton",component:F,parameters:{layout:"padded",storySource:{source:y}},tags:["autodocs"],argTypes:{social:{control:"select",options:["kakao","naver","facebook","email"],description:"Button Social Type 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}}}},s={args:{social:"kakao"}},c={args:{social:"naver"}},t={args:{social:"facebook"}},i={args:{social:"email"}};var l,p,g;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    social: 'kakao'
  }
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var u,d,k;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    social: 'naver'
  }
}`,...(k=(d=c.parameters)==null?void 0:d.docs)==null?void 0:k.source}}};var m,x,b;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    social: 'facebook'
  }
}`,...(b=(x=t.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var f,B,h;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    social: 'email'
  }
}`,...(h=(B=i.parameters)==null?void 0:B.docs)==null?void 0:h.source}}};const w=["KakaoRegister","NaverRegister","FacebookRegister","EmailRegister"];export{i as EmailRegister,t as FacebookRegister,s as KakaoRegister,c as NaverRegister,w as __namedExportsOrder,I as default};
