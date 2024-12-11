import{j as b}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import{u as re,a as r}from"./styled-components.browser.esm-aa768a49.js";import"./_commonjsHelpers-de833af9.js";const oe=e=>b.jsxs(te,{theme:e.theme,type:e.type,size:e.size,bg:e.bg,disabled:e.disabled,onClick:e.onClick,children:[e.num&&b.jsx(se,{children:e.num})," ",e.text]}),ne=oe,te=re.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 8px;

  height: ${e=>e.size==="md"?"42px":"48px"};
  font-size: ${e=>e.size==="md"?"14px":"16px"};
  font-weight: ${e=>e.size==="md"?"600":"500"};
  line-height: ${e=>e.size==="md"?"21px":"24px"};

  // 메인버튼 화이트 테마 기본 && 라인 && 컬러
  ${e=>e.theme==="white"&&r`
      background-color: #000;
      color: #fff;
      &:disabled {
        background-color: #eee;
        color: #888;
      }
      // 화이트 테마 라인
      ${e.type==="line"&&r`
        background-color: #fff;
        color: #000;
        border: 1px solid #888;
        &:disabled {
          background-color: #fff;
          color: #888;
          border: 1px solid #ddd;
        }
        // 화이트 테마 컬러,라인
        ${e.bg==="purple"&&r`
          box-shadow: 0 4px 6px 0 rgba(121, 116, 255, 0.1);
          background-color: #f3f3ff;
          border: 1px solid #7974ff;
          color: #7974ff;
        `}
        ${e.bg==="red"&&r`
          border: 1px solid #ee5246;
          background-color: #fff5f4;
          color: #ee5246;
          box-shadow: 0 4px 6px 0 rgba(245, 62, 80, 0.1);
        `}
      `}
      // 화이트 테마 컬러
            ${e.bg==="purple"&&r`
        background-color: rgba(121, 116, 255, 0.08);
        color: #7974ff;
      `} // 화이트 테마 컬러
    `}

  // 메인버튼 다크 테마 기본 && 라인 && 컬러
    ${e=>e.theme==="dark"&&r`
      background-image: radial-gradient(ellipse at 50% 50%, #0094ca, #92d9ff 100%);
      color: #fff;
      &:disabled {
        background-image: unset;
        background-color: #333;
        color: #999;
      }
      // 다크 테마 라인
      ${e.type==="line"&&r`
        background-image: unset;
        background-color: #0d141c;
        border: 1px solid #9198a5;
        &:disabled {
          background-color: #0d141c;
          color: #777;
          border: 1px solid #555;
        }
      `}
      // 다크 테마 컬러
            ${e.bg==="purple"&&r`
        background-image: unset;
        background-color: rgba(121, 116, 255, 0.08);
        color: #7974ff;
      `}
            // 다크 테마 컬러
            ${e.bg==="white"&&r`
        background-image: unset;
        background-color: #f4f6f8;
        border: solid 1px #f4f6f8;
        color: #000;
      `}
    `}
`,se=re.div`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  color: #fff;
  border-radius: 50%;
  -webkit-backdrop-filter: blur(1px);
  backdrop-filter: blur(1px);
  background-color: rgba(255, 255, 255, 0.15);
`;oe.__docgenInfo={description:"",methods:[],displayName:"Button"};const ae=`import React from 'react';
import { styled, css } from 'styled-components';

const Button = (props) => {
  return (
    <Btn theme={props.theme} type={props.type} size={props.size} bg={props.bg} disabled={props.disabled} onClick={props.onClick}>
      {props.num && <Num>{props.num}</Num>} {props.text}
    </Btn>
  );
};

export default Button;
const Btn = styled.button\`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 8px;

  height: \${(props) => (props.size === 'md' ? '42px' : '48px')};
  font-size: \${(props) => (props.size === 'md' ? '14px' : '16px')};
  font-weight: \${(props) => (props.size === 'md' ? '600' : '500')};
  line-height: \${(props) => (props.size === 'md' ? '21px' : '24px')};

  // 메인버튼 화이트 테마 기본 && 라인 && 컬러
  \${(props) =>
    // 화이트 테마 기본
    props.theme === 'white' &&
    css\`
      background-color: #000;
      color: #fff;
      &:disabled {
        background-color: #eee;
        color: #888;
      }
      // 화이트 테마 라인
      \${props.type === 'line' &&
      css\`
        background-color: #fff;
        color: #000;
        border: 1px solid #888;
        &:disabled {
          background-color: #fff;
          color: #888;
          border: 1px solid #ddd;
        }
        // 화이트 테마 컬러,라인
        \${props.bg === 'purple' &&
        css\`
          box-shadow: 0 4px 6px 0 rgba(121, 116, 255, 0.1);
          background-color: #f3f3ff;
          border: 1px solid #7974ff;
          color: #7974ff;
        \`}
        \${props.bg === 'red' &&
        css\`
          border: 1px solid #ee5246;
          background-color: #fff5f4;
          color: #ee5246;
          box-shadow: 0 4px 6px 0 rgba(245, 62, 80, 0.1);
        \`}
      \`}
      // 화이트 테마 컬러
            \${props.bg === 'purple' &&
      css\`
        background-color: rgba(121, 116, 255, 0.08);
        color: #7974ff;
      \`} // 화이트 테마 컬러
    \`}

  // 메인버튼 다크 테마 기본 && 라인 && 컬러
    \${(props) =>
    // 다크 테마 기본
    props.theme === 'dark' &&
    css\`
      background-image: radial-gradient(ellipse at 50% 50%, #0094ca, #92d9ff 100%);
      color: #fff;
      &:disabled {
        background-image: unset;
        background-color: #333;
        color: #999;
      }
      // 다크 테마 라인
      \${props.type === 'line' &&
      css\`
        background-image: unset;
        background-color: #0d141c;
        border: 1px solid #9198a5;
        &:disabled {
          background-color: #0d141c;
          color: #777;
          border: 1px solid #555;
        }
      \`}
      // 다크 테마 컬러
            \${props.bg === 'purple' &&
      css\`
        background-image: unset;
        background-color: rgba(121, 116, 255, 0.08);
        color: #7974ff;
      \`}
            // 다크 테마 컬러
            \${props.bg === 'white' &&
      css\`
        background-image: unset;
        background-color: #f4f6f8;
        border: solid 1px #f4f6f8;
        color: #000;
      \`}
    \`}
\`;

const Num = styled.div\`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  color: #fff;
  border-radius: 50%;
  -webkit-backdrop-filter: blur(1px);
  backdrop-filter: blur(1px);
  background-color: rgba(255, 255, 255, 0.15);
\`;
`,pe={title:"BeatFolio/Button/MainButton",component:ne,parameters:{layout:"centered",storySource:{source:ae}},decorators:[e=>b.jsx("div",{style:{width:"320px"},children:b.jsx(e,{})})],tags:["autodocs"],argTypes:{theme:{control:"select",options:["white","dark"],description:"Button Theme 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}},text:{control:"text",description:"Button text 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}},size:{control:"select",options:["md",void 0],description:"Button size 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!1}},disabled:{control:"boolean",description:"Button disabled 상태 입니다.",defaultValue:{summary:!1},type:{summary:"boolean",required:!1}},bg:{control:"select",options:["purple","red",void 0],description:"Button bg 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!1}},type:{control:"select",options:["line",void 0],description:"Button type 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!1}},num:{control:"number",description:"Button num 입니다.",defaultValue:{summary:void 0},type:{summary:"number",required:!1}}}},o={args:{theme:"white",text:"임시 텍스트"}},n={args:{theme:"white",text:"임시 텍스트",disabled:!0}},t={args:{theme:"white",text:"임시 텍스트",type:"line"}},s={args:{theme:"white",text:"임시 텍스트",disabled:!0,type:"line"}},a={args:{theme:"white",text:"임시 텍스트",bg:"purple"}},d={args:{theme:"white",text:"임시 텍스트",bg:"purple",type:"line"}},i={args:{theme:"white",text:"임시 텍스트",bg:"red",type:"line"}},u={args:{theme:"dark",text:"임시 텍스트"}},c={args:{theme:"dark",text:"임시 텍스트",disabled:!0}},p={args:{theme:"dark",text:"임시 텍스트",type:"line"}},l={args:{theme:"dark",text:"임시 텍스트",disabled:!0,type:"line"}},m={args:{theme:"dark",text:"임시 텍스트",disabled:void 0,bg:"purple"}},g={args:{theme:"dark",text:"임시 텍스트",bg:"white"}};var f,h,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    theme: 'white',
    text: '임시 텍스트'
  }
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var k,D,C;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    theme: 'white',
    text: '임시 텍스트',
    disabled: true
  }
}`,...(C=(D=n.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var y,w,B;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    theme: 'white',
    text: '임시 텍스트',
    type: 'line'
  }
}`,...(B=(w=t.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var $,L,z;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    theme: 'white',
    text: '임시 텍스트',
    disabled: true,
    type: 'line'
  }
}`,...(z=(L=s.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var S,v,A;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    theme: 'white',
    text: '임시 텍스트',
    bg: 'purple'
  }
}`,...(A=(v=a.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var j,q,V;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    theme: 'white',
    text: '임시 텍스트',
    bg: 'purple',
    type: 'line'
  }
}`,...(V=(q=d.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var P,N,_;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    theme: 'white',
    text: '임시 텍스트',
    bg: 'red',
    type: 'line'
  }
}`,...(_=(N=i.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var R,E,T;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    theme: 'dark',
    text: '임시 텍스트'
  }
}`,...(T=(E=u.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var W,F,I;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    theme: 'dark',
    text: '임시 텍스트',
    disabled: true
  }
}`,...(I=(F=c.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var M,O,G;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    theme: 'dark',
    text: '임시 텍스트',
    type: 'line'
  }
}`,...(G=(O=p.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var H,J,K;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    theme: 'dark',
    text: '임시 텍스트',
    disabled: true,
    type: 'line'
  }
}`,...(K=(J=l.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    theme: 'dark',
    text: '임시 텍스트',
    disabled: undefined,
    bg: 'purple'
  }
}`,...(X=(U=m.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    theme: 'dark',
    text: '임시 텍스트',
    bg: 'white'
  }
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const le=["Light","LightDisabled","LightLine","LightLineDisabled","LightPurple","LightLinePurple","LightLineRed","Dark","DarkDisabled","DarkLine","DarkLineDisabled","DarkPurple","DarkWhite"];export{u as Dark,c as DarkDisabled,p as DarkLine,l as DarkLineDisabled,m as DarkPurple,g as DarkWhite,o as Light,n as LightDisabled,t as LightLine,s as LightLineDisabled,d as LightLinePurple,i as LightLineRed,a as LightPurple,le as __namedExportsOrder,pe as default};
