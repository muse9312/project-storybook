import{j as n}from"./jsx-runtime-ffb262ed.js";import{r}from"./index-76fb7be0.js";import{u as t,a as _}from"./styled-components.browser.esm-aa768a49.js";import"./_commonjsHelpers-de833af9.js";const Y=({label:e,id:u,name:x,readonly:b,disabled:p,blind:M,placeholder:h,value:a,type:y,error:A})=>{const[g,f]=r.useState(a?a[0]:""),[v,I]=r.useState(a?a[1]:""),[H,$]=r.useState(!1),[c,J]=r.useState(!1),K=m=>{f(m.target.value)},Q=m=>{I(m.target.value)},F=()=>{$(!0)},W=()=>{$(!1)},U=()=>{f("")},X=()=>{I("")};return r.useEffect(()=>{J(b)},[b]),n.jsxs(Z,{children:[n.jsx(ee,{htmlFor:u,$blind:M,children:e}),n.jsxs(ne,{$isFocused:H,$disabled:p,$readOnly:c,$error:A,children:[n.jsxs(k,{children:[n.jsx(O,{type:y||"text",id:u,name:x,readOnly:c,disabled:p,placeholder:h,onChange:K,value:g,onFocus:F,onBlur:W}),g&&n.jsx(w,{className:"clear-btn",type:"button",onClick:U})," "]}),n.jsx(te,{}),n.jsxs(k,{children:[n.jsx(O,{type:y||"text",id:`${u}-02`,name:x,readOnly:c,disabled:p,placeholder:h,onChange:Q,value:v,onFocus:F,onBlur:W}),v&&n.jsx(w,{className:"clear-btn",type:"button",onClick:X})," "]})]})]})},k=t.div`
  position: relative;
  flex-grow: 1;
`,w=t.button`
  position: absolute;
  top: 50%;
  right: ${e=>e.$rightPadding?`${e.$rightPadding-16}px`:"0"}; // rightPadding 값에 따라 right 값을 동적으로 변경
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  background: url(/assets/woori-mobile/icon/input-clear-gray.svg) no-repeat center / cover;
`,Z=t.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3px 0px;
  width: 100%;
`,ee=t.label`
  width: 100%;
  color: var(--W-Dark-10);
  font-size: 12px;
  font-weight: 700;
  ${e=>e.$blind===!0&&_`
      position: absolute;
      width: 1px;
      height: 1px;
      clip: rect(0, 0, 0, 0);
      overflow: hidden;
    `}
`,ne=t.div`
  display: flex;
  align-items: center;
  gap: 14px;
  border-bottom: 1px solid ${e=>e.$isFocused?"var(--Blue-01)":"var(--C-Dark-04)"}; // focus 조건부 스타일
  ${e=>e.$error&&_`
      border-bottom: 1px solid var(--Red-02);
    `}
`,O=t.input`
  display: flex;
  width: 100%;
  height: 38px;
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  color: #333;
  background-color: transparent;
  &::placeholder {
    color: var(--W-Dark-06);
    font-weight: 400;
  }
  &:focus {
    border-color: ${e=>e.$error==="error"?"var(--Red-02)":"var(--Blue-01)"};
    outline: none;
  }
  &:readonly {
    color: var(--W-Dark-07);
    & + .clear-btn {
      display: none;
    }
  }
  &:disabled {
    color: var(--W-Dark-07);
    &:focus {
      border: unset;
    }
    & + .clear-btn {
      display: none;
    }
  }
`,te=t.i`
  display: block;
  flex: 0 0 auto;
  width: 6px;
  height: 1px;
  background: var(--W-Dark-11);
`;Y.__docgenInfo={description:"",methods:[],displayName:"WODualInput"};const re=`import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const WODualInput = ({ label, id, name, readonly, disabled, blind, placeholder, value, type, error }) => {
  const [inputText, setInputText] = useState(value ? value[0] : '');
  const [inputText2, setInputText2] = useState(value ? value[1] : '');
  const [isFocused, setIsFocused] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(false);
  const onChange = (e) => {
    setInputText(e.target.value);
  };
  const onChange2 = (e) => {
    setInputText2(e.target.value);
  };

  // 포커스 관리
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const clearText = () => {
    setInputText(''); // 입력 필드를 비우는 함수
  };

  const clearText2 = () => {
    setInputText2(''); // 두 번째 입력 필드를 비우는 함수
  };

  useEffect(() => {
    setIsReadOnly(readonly);
  }, [readonly]);

  return (
    <Wrap>
      <Label htmlFor={id} $blind={blind}>
        {label}
      </Label>
      <FormWrap $isFocused={isFocused} $disabled={disabled} $readOnly={isReadOnly} $error={error}>
        <InputGroup>
          <Form
            type={type || 'text'}
            id={id}
            name={name}
            readOnly={isReadOnly}
            disabled={disabled}
            placeholder={placeholder}
            onChange={onChange}
            value={inputText}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {inputText && <ClearBtn className='clear-btn' type='button' onClick={clearText} />} {/* 텍스트가 있을 때만 Clear 버튼 표시 */}
        </InputGroup>
        <Seperator />
        <InputGroup>
          <Form
            type={type || 'text'}
            id={\`\${id}-02\`}
            name={name}
            readOnly={isReadOnly}
            disabled={disabled}
            placeholder={placeholder}
            onChange={onChange2}
            value={inputText2}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {inputText2 && <ClearBtn className='clear-btn' type='button' onClick={clearText2} />} {/* 텍스트가 있을 때만 Clear 버튼 표시 */}
        </InputGroup>
      </FormWrap>
    </Wrap>
  );
};

export default WODualInput;

const InputGroup = styled.div\`
  position: relative;
  flex-grow: 1;
\`;

const ClearBtn = styled.button\`
  position: absolute;
  top: 50%;
  right: \${(props) => (props.$rightPadding ? \`\${props.$rightPadding - 16}px\` : '0')}; // rightPadding 값에 따라 right 값을 동적으로 변경
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  background: url(/assets/woori-mobile/icon/input-clear-gray.svg) no-repeat center / cover;
\`;

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
  display: flex;
  align-items: center;
  gap: 14px;
  border-bottom: 1px solid \${(props) => (props.$isFocused ? 'var(--Blue-01)' : 'var(--C-Dark-04)')}; // focus 조건부 스타일
  \${(props) =>
    props.$error &&
    css\`
      border-bottom: 1px solid var(--Red-02);
    \`}
\`;

const Form = styled.input\`
  display: flex;
  width: 100%;
  height: 38px;
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  color: #333;
  background-color: transparent;
  &::placeholder {
    color: var(--W-Dark-06);
    font-weight: 400;
  }
  &:focus {
    border-color: \${(props) => (props.$error === 'error' ? 'var(--Red-02)' : 'var(--Blue-01)')};
    outline: none;
  }
  &:readonly {
    color: var(--W-Dark-07);
    & + .clear-btn {
      display: none;
    }
  }
  &:disabled {
    color: var(--W-Dark-07);
    &:focus {
      border: unset;
    }
    & + .clear-btn {
      display: none;
    }
  }
\`;
const Seperator = styled.i\`
  display: block;
  flex: 0 0 auto;
  width: 6px;
  height: 1px;
  background: var(--W-Dark-11);
\`;
`,ie={title:"WooriMobile/Form/WODualInput",component:Y,parameters:{layout:"centered",storySource:{source:re}},tags:["autodocs"],argTypes:{name:{control:"text",description:"Input Name 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}},id:{control:"text",description:"Input Id 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}},label:{control:"text",description:"Input Label 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!1}},placeholder:{control:"text",description:"Input placeholder 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!1}},readonly:{control:"boolean",description:"Input readonly 상태입니다.",defaultValue:{summary:void 0},type:{summary:"boolean",required:!1}},disabled:{control:"boolean",description:"Input disabled 상태입니다.",defaultValue:{summary:void 0},type:{summary:"boolean",required:!1}},blind:{control:"boolean",description:"label 화면에 보이지 않는 상태입니다.",defaultValue:{summary:void 0},type:{summary:"boolean",required:!1}},value:{control:"array",description:"Input value 입니다.",defaultValue:{summary:void 0},type:{summary:"array",required:!1}},error:{control:"boolean",description:"error 여부 입니다."}}},o={args:{name:"input01",id:"input01-01",label:"label",placeholder:"text"}},l={args:{name:"input04",id:"input04-04",label:"label",blind:!0,placeholder:"text"}},s={args:{name:"input06",id:"input06-06",label:"label",blind:!1,placeholder:"text",disabled:!0,value:["123","123123"]}},i={args:{name:"input06",id:"input06-06",blind:!1,placeholder:"text",value:["123","123123"],readonly:!0}},d={args:{name:"input06",id:"input06-06",placeholder:"text",error:!0}};var T,C,D;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    name: 'input01',
    id: 'input01-01',
    label: 'label',
    placeholder: 'text'
  }
}`,...(D=(C=o.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var S,B,R;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    name: 'input04',
    id: 'input04-04',
    label: 'label',
    blind: true,
    placeholder: 'text'
  }
}`,...(R=(B=l.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var j,q,E;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    name: 'input06',
    id: 'input06-06',
    label: 'label',
    blind: false,
    placeholder: 'text',
    disabled: true,
    value: ['123', '123123']
  }
}`,...(E=(q=s.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var V,G,N;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    name: 'input06',
    id: 'input06-06',
    blind: false,
    placeholder: 'text',
    value: ['123', '123123'],
    readonly: true
  }
}`,...(N=(G=i.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var P,L,z;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    name: 'input06',
    id: 'input06-06',
    placeholder: 'text',
    error: true
  }
}`,...(z=(L=d.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};const de=["Default","Blind","Disabled","ReadOnly","Error"];export{l as Blind,o as Default,s as Disabled,d as Error,i as ReadOnly,de as __namedExportsOrder,ie as default};
