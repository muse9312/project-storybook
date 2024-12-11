import{j as n}from"./jsx-runtime-ffb262ed.js";import{r as a}from"./index-76fb7be0.js";import{u as t,a as K}from"./styled-components.browser.esm-aa768a49.js";import"./_commonjsHelpers-de833af9.js";const F=({label:e,id:c,name:j,height:B,size:E,readonly:q,disabled:V,blind:N,placeholder:L,value:_,rightText:r,type:Y,styleType:M})=>{const[g,h]=a.useState(_||""),u=a.useRef(null),[m,A]=a.useState(0);console.log(r),a.useEffect(()=>{u.current&&A(u.current.offsetWidth)},[r]);const G=J=>{h(J.target.value)},H=()=>{h("")};return n.jsxs(Q,{$size:E,className:"input",children:[e&&n.jsx(U,{htmlFor:c,$blind:N,children:e}),n.jsxs(X,{children:[n.jsx(ee,{type:Y||"text",id:c,name:j,readOnly:q,disabled:V,placeholder:L,onChange:G,value:g,$styleType:M,$height:B,$rightPadding:m}),g&&n.jsx(Z,{className:"clear-btn",type:"button",onClick:H,$rightPadding:m})]}),r&&n.jsx(ne,{ref:u,children:r})]})},Q=t.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3px 0px;
  width: 100%;
`,U=t.label`
  width: 100%;
  color: var(--W-Dark-10);
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  ${e=>e.$blind===!0&&K`
      position: absolute;
      width: 1px;
      height: 1px;
      clip: rect(0, 0, 0, 0);
      overflow: hidden;
    `}
`,X=t.div`
  position: relative;
`,Z=t.button`
  position: absolute;
  top: 50%;
  right: ${e=>e.$rightPadding?`${e.$rightPadding}px`:"0"}; // rightPadding 값에 따라 right 값을 동적으로 변경
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  background: url(/assets/woori-mobile/icon/input-clear-gray.svg) no-repeat center / cover;
`,ee=t.input`
  display: flex;
  width: 100%;
  height: ${e=>e.$height?`${e.$height}px`:"38px"};
  padding: 7px ${e=>e.$rightPadding+20}px 7px 0; // 오른쪽 패딩 동적 적용
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  border-bottom: 1px solid ${e=>e.$styleType==="email"?"none":e.$styleType==="error"?"var(--Red-02)":"var(--W-Dark-04)"};
  background-color: transparent;
  color: var(--W-Dark-11);
  &::placeholder {
    color: var(--W-Dark-06);
    font-weight: 400;
  }
  &:focus {
    border-color: ${e=>e.$styleType==="error"?"var(--Red-02)":"var(--Blue-01)"};
    outline: none;
  }
  &:readonly {
    color: var(--W-Dark-07);
    border-bottom: 1px solid var(--C-Dark-04);
    & + .clear-btn {
      display: none;
    }
  }
  &:disabled {
    color: var(--W-Dark-07);
    border-bottom: 1px solid var(--C-Dark-04);
    &:focus {
      border: unset;
    }
    & + .clear-btn {
      display: none;
    }
  }
`,ne=t.div`
  position: absolute;
  right: 0;
  bottom: 0;
  color: var(--W-Dark-11);
  font-size: 14px;
  font-weight: 700;
  line-height: 38px;
`;F.__docgenInfo={description:"",methods:[],displayName:"WOInput"};const te=`import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

const WOInput = ({ label, id, name, height, size, readonly, disabled, blind, placeholder, value, rightText, type, styleType }) => {
  const [inputText, setInputText] = useState(value || '');
  const rightTextRef = useRef(null); // rightText의 ref를 생성
  const [rightPadding, setRightPadding] = useState(0); // 기본 오른쪽 패딩 값

  console.log(rightText);

  useEffect(() => {
    if (rightTextRef.current) {
      setRightPadding(rightTextRef.current.offsetWidth); // rightText의 너비 + 기본 패딩 + 6px
    }
  }, [rightText]); // rightText가 변경될 때마다 실행

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const clearText = () => {
    setInputText(''); // 입력 필드를 비우는 함수
  };

  return (
    <Wrap $size={size} className='input'>
      {label && (
        <Label htmlFor={id} $blind={blind}>
          {label}
        </Label>
      )}
      <FormWrap>
        <Form
          type={type || 'text'}
          id={id}
          name={name}
          readOnly={readonly}
          disabled={disabled}
          placeholder={placeholder}
          onChange={onChange}
          value={inputText}
          $styleType={styleType}
          $height={height}
          $rightPadding={rightPadding} // 오른쪽 패딩 동적 적용
        />
        {inputText && <ClearBtn className='clear-btn' type='button' onClick={clearText} $rightPadding={rightPadding} />}
        {/* 텍스트가 있을 때만 Clear 버튼 표시 */}
      </FormWrap>
      {rightText && <RightText ref={rightTextRef}>{rightText}</RightText>}
    </Wrap>
  );
};

export default WOInput;

const Wrap = styled.div\`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3px 0px;
  width: 100%;
\`;

const Label = styled.label\`
  width: 100%;
  color: var(--W-Dark-10);
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  \${(props) =>
    props.$blind === true &&
    css\`
      position: absolute;
      width: 1px;
      height: 1px;
      clip: rect(0, 0, 0, 0);
      overflow: hidden;
    \`}
\`;

const FormWrap = styled.div\`
  position: relative;
\`;
const ClearBtn = styled.button\`
  position: absolute;
  top: 50%;
  right: \${(props) => (props.$rightPadding ? \`\${props.$rightPadding}px\` : '0')}; // rightPadding 값에 따라 right 값을 동적으로 변경
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  background: url(/assets/woori-mobile/icon/input-clear-gray.svg) no-repeat center / cover;
\`;

const Form = styled.input\`
  display: flex;
  width: 100%;
  height: \${(props) => (props.$height ? \`\${props.$height}px\` : '38px')};
  padding: 7px \${(props) => props.$rightPadding + 20}px 7px 0; // 오른쪽 패딩 동적 적용
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  border-bottom: 1px solid \${(props) => (props.$styleType === 'email' ? 'none' : props.$styleType === 'error' ? 'var(--Red-02)' : 'var(--W-Dark-04)')};
  background-color: transparent;
  color: var(--W-Dark-11);
  &::placeholder {
    color: var(--W-Dark-06);
    font-weight: 400;
  }
  &:focus {
    border-color: \${(props) => (props.$styleType === 'error' ? 'var(--Red-02)' : 'var(--Blue-01)')};
    outline: none;
  }
  &:readonly {
    color: var(--W-Dark-07);
    border-bottom: 1px solid var(--C-Dark-04);
    & + .clear-btn {
      display: none;
    }
  }
  &:disabled {
    color: var(--W-Dark-07);
    border-bottom: 1px solid var(--C-Dark-04);
    &:focus {
      border: unset;
    }
    & + .clear-btn {
      display: none;
    }
  }
\`;

const RightText = styled.div\`
  position: absolute;
  right: 0;
  bottom: 0;
  color: var(--W-Dark-11);
  font-size: 14px;
  font-weight: 700;
  line-height: 38px;
\`;
`,le={title:"WooriMobile/Form/WOInput",component:F,parameters:{layout:"centered",storySource:{source:te}},tags:["autodocs"],argTypes:{name:{control:"text",description:"Input Name 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}},id:{control:"text",description:"Input Id 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}},label:{control:"text",description:"Input Label 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}},readonly:{control:"boolean",description:"Input readonly 상태입니다.",defaultValue:{summary:void 0},type:{summary:"boolean",required:!1}},disabled:{control:"boolean",description:"Input disabled 상태입니다.",defaultValue:{summary:void 0},type:{summary:"boolean",required:!1}},blind:{control:"boolean",description:"label 화면에 보이지 않는 상태입니다.",defaultValue:{summary:void 0},type:{summary:"boolean",required:!1}},rightText:{control:"text",description:"Input rightText 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!1}}}},o={args:{name:"input01",id:"input01-01",label:"label",placeholder:"text"}},i={args:{name:"input04",id:"input04-04",label:"label",blind:!0,placeholder:"text"}},l={args:{name:"input06",id:"input06-06",label:"label",blind:!1,placeholder:"text",disabled:!0,value:"value"}},s={args:{name:"input06",id:"input06-06",blind:!1,placeholder:"text",value:"value",readonly:!0}},d={args:{name:"input05",id:"input05-05",label:"label",blind:!1,placeholder:"text",rightText:"만원이상"}},p={args:{name:"input06",id:"input06-06",label:"label",blind:!1,placeholder:"text",styleType:"error"}};var x,b,y;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    name: 'input01',
    id: 'input01-01',
    label: 'label',
    placeholder: 'text'
  }
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var f,v,$;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    name: 'input04',
    id: 'input04-04',
    label: 'label',
    blind: true,
    placeholder: 'text'
  }
}`,...($=(v=i.parameters)==null?void 0:v.docs)==null?void 0:$.source}}};var T,W,R;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    name: 'input06',
    id: 'input06-06',
    label: 'label',
    blind: false,
    placeholder: 'text',
    disabled: true,
    value: 'value'
  }
}`,...(R=(W=l.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var k,D,w;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    name: 'input06',
    id: 'input06-06',
    blind: false,
    placeholder: 'text',
    value: 'value',
    readonly: true
  }
}`,...(w=(D=s.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var C,P,I;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    name: 'input05',
    id: 'input05-05',
    label: 'label',
    blind: false,
    placeholder: 'text',
    rightText: '만원이상'
  }
}`,...(I=(P=d.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var S,O,z;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    name: 'input06',
    id: 'input06-06',
    label: 'label',
    blind: false,
    placeholder: 'text',
    styleType: 'error'
  }
}`,...(z=(O=p.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};const se=["Default","Blind","Disabled","ReadOnly","RightText","Error"];export{i as Blind,o as Default,l as Disabled,p as Error,s as ReadOnly,d as RightText,se as __namedExportsOrder,le as default};
