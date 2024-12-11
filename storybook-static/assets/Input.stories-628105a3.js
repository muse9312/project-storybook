import{I as Te}from"./index-263a97c4.js";import"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-aa768a49.js";const De=`import React, { useEffect, useRef, useState } from 'react';
import { css, styled } from 'styled-components';

const Input = React.forwardRef((props, ref) => {
  const [inputText, setInputText] = useState('');
  const [rightTextWidth, setRightTextWidth] = useState(0);
  const [timeWidth, setTimeWidth] = useState(0);
  const rightTextRef = useRef(null);
  const timeRef = useRef(null);

  useEffect(() => {
    setInputText(props.value || '');
  }, [props.value]);

  useEffect(() => {
    if (rightTextRef.current) {
      setRightTextWidth(rightTextRef.current.offsetWidth);
    }
    if (timeRef.current) {
      setTimeWidth(timeRef.current.offsetWidth);
    }
  }, [props.button, props.rightText, props.time]);

  const onChangeInput = (e) => {
    setInputText(e.target.value);
    props.onChange && props.onChange(e);
  };

  const onReset = (e) => {
    e.preventDefault();
    setInputText('');
  };

  return (
    <InputBox>
      <Label bg={props.bg} labelVisible={props.labelVisible}>
        {props.label}
      </Label>
      <InputBtnWrap>
        <InputComponent
          as={props.as}
          ref={ref}
          name={props.name}
          id={props.id}
          placeholder={props.placeholder}
          value={inputText}
          bg={props.bg}
          search={props.search}
          noneClear={props.noneClear}
          onChange={onChangeInput}
          disabled={props.disabled}
          rightText={props.rightText}
          rightTextWidth={rightTextWidth}
          time={props.time}
          timeWidth={timeWidth}
          error={props.error}
          errorMsg={props.errorMsg}
          autoComplete='off'
          maxlength={props.maxlength}
          pattern={props.pattern}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
        />
        {inputText !== '' && (
          <InputClear
            noneClear={props.noneClear}
            bg={props.bg}
            onMouseDown={onReset}
            right={Math.max(rightTextWidth, timeWidth) + 24}
            rightText={props.rightText}
            time={props.time}
          />
        )}
        {props.time && (
          <Time ref={timeRef} button={props.button}>
            {props.time}
          </Time>
        )}
        {props.rightText && <InputRightText ref={rightTextRef}>{props.rightText}</InputRightText>}
      </InputBtnWrap>
      {props.errorMsg && (
        <InputError>
          {props.errorMsg.split('\\n').map((msg) => (
            <>
              {msg}
              <br />
            </>
          ))}
        </InputError>
      )}
      {props.completeMsg && <InputComplete>{props.completeMsg}</InputComplete>}
      {props.defaultMsg && <InputDefault>{props.defaultMsg}</InputDefault>}
    </InputBox>
  );
});

export default Input;

const InputBox = styled.div\`
  position: relative;
  width: 100%;
\`;
const InputBtnWrap = styled.div\`
  position: relative;
\`;

const InputClear = styled.button\`
  display: none;
  position: absolute;
  top: 12px;
  right: \${(props) => (props.rightText || props.time ? \`\${props.right}px\` : '12px')};
  width: 16px;
  height: 16px;
  background: \${(props) =>
    (props.bg = 'black'
      ? 'url("./assets/BeatFolio/input-clear-dark.png") no-repeat center / cover'
      : 'url("./assets/BeatFolio/input-clear-black.png") no-repeat center / cover')};
  \${(props) =>
    props.noneClear &&
    \`
        opacity:0;
    \`}
\`;

const InputComponent = styled.input\`
  width: 100%;
  height: 40px;
  padding: \${(props) => (props.rightText ? \`10px \${props.rightTextWidth + 50}px 9px 12px\` : '10px 40px 9px 12px')};
  padding: \${(props) => (props.time ? \`10px \${props.timeWidth + 50}px 9px 12px\` : '10px 40px 9px 12px')};
  border-radius: 10px;
  position: relative;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  border: 1px solid transparent;
  &::placeholder {
    color: #999;
  }
  &:focus-visible {
    outline: none;
  }

  \${(props) =>
    props.bg === 'sky' &&
    css\`
      background-color: #f4f6f8;
      color: #000;
      &:focus {
        border: 1px solid #000;
        & + \${InputClear} {
          display: block;
        }
      }
      &:disabled {
        color: #c8cfd4;
        &::placeholder {
          color: #c8cfd4;
        }
      }
    \`}
  \${(props) =>
    props.bg === 'white' &&
    css\`
      background-color: #fff;
      color: #000;
      &:focus {
        border: 1px solid #000;
        & + \${InputClear} {
          display: block;
        }
      }
      &:disabled {
        color: #aaa;
        &::placeholder {
          color: #aaa;
        }
      }
    \`}
    \${(props) =>
    props.bg === 'black' &&
    css\`
      background-color: #181e26;
      color: #fff;
      &:focus {
        border: 1px solid #494870;
        & + \${InputClear} {
          display: block;
        }
      }
      &:disabled {
        color: #999;
        &::placeholder {
          color: #999;
        }
      }
    \`}

    \${(props) =>
    props.search &&
    css\`
      &:focus {
        border: 1px solid transparent;
        & + \${InputClear} {
          display: block;
        }
      }
    \`}
    \${(props) =>
    props.errorMsg &&
    css\`
      border: 1px solid red;
      &:focus {
        border: 1px solid red;
      }
    \`}
    \${(props) =>
    props.error &&
    css\`
      border: 1px solid red;
      &:focus {
        border: 1px solid red;
      }
    \`}
\`;
const Label = styled.label\`
  \${(props) =>
    props.labelVisible
      ? css\`
          font-size: 14px;
          font-weight: 700;
          line-height: 21px;
          color: \${props.bg === 'black' ? '#fff' : '#000'};
          & + \${InputBtnWrap} {
            margin-top: 12px;
          }
        \`
      : css\`
          font-style: normal !important;
          font-variant-ligatures: normal !important;
          font-variant-caps: normal !important;
          line-height: 0 !important;
          color: transparent !important;
          text-shadow: none !important;
          background-color: transparent !important;
          border: 0 !important;
          z-index: -1;
          border: 0;
          width: 1px;
          height: 1px;
          clip: rect(1px, 1px, 1px, 1px);
          clip-path: inset(50%);
          overflow: hidden;
          white-space: nowrap;
          display: inline-block;
          position: absolute;
        \`}
\`;

const InputRightText = styled.span\`
  display: block;
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  font-size: 14px;
  font-weight: 500;
  color: #999;
\`;

const InputError = styled.span\`
  display: block;
  padding: 8px 6px 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #f53e50;
\`;
const InputComplete = styled.span\`
  display: block;
  padding: 8px 6px 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #72aeff;
\`;
const InputDefault = styled.span\`
  display: block;
  padding: 8px 6px 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #555;
\`;

// 임시 타임

const Time = styled.div\`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #777;
\`;
`,we={title:"BeatFolio/Input/Input",component:Te,parameters:{layout:"padded",storySource:{source:De}},tags:["autodocs"],argTypes:{name:{control:"text",description:"Input name 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}},id:{control:"text",description:"Input id 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}},placeholder:{control:"text",description:"Input placeholder 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!1}},value:{control:"text",description:"Input value 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!1}},bg:{control:"select",options:["white","black","sky"],description:"Input bg 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}},noneClear:{control:"boolean",description:"Input Clear Button 없애는 props 입니다.",defaultValue:{summary:void 0},type:{summary:"boolean",required:!1}},search:{control:"boolean",description:"Input Search Input 일 경우 border 없는 props 입니다.",defaultValue:{summary:void 0},type:{summary:"boolean",required:!1}},disabled:{control:"boolean",description:"Input disabled 상태 입니다.",defaultValue:{summary:void 0},type:{summary:"boolean",required:!1}},rightText:{control:"text",description:"Input Right Text 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!1}},time:{control:"text",description:"Input 내부 Timer 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!1}},error:{control:"boolean",description:"Input error Case 입니다.",defaultValue:{summary:void 0},type:{summary:"boolean",required:!1}},errorMsg:{control:"text",description:"Input error Case 메시지 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!1}},completeMsg:{control:"text",description:"Input complete 메시지 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!1}},defaultMsg:{control:"text",description:"Input default 메시지 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!1}}}},e={args:{name:"input01",id:"input01-01",placeholder:"placeholder",value:"",bg:"white",noneClear:void 0,search:void 0,disabled:void 0,rightText:void 0,time:void 0,error:void 0,errorMsg:void 0,completeMsg:void 0,defaultMsg:void 0}},n={args:{name:"input01",id:"input01-01",placeholder:"placeholder",value:"임시 텍스트",bg:"white",noneClear:void 0,search:void 0,disabled:void 0,rightText:void 0,time:void 0,error:void 0,errorMsg:void 0,completeMsg:void 0,defaultMsg:void 0}},r={args:{name:"input01",id:"input01-01",placeholder:"placeholder",value:"임시 텍스트",bg:"white",noneClear:void 0,search:void 0,disabled:void 0,rightText:"명",time:void 0,error:void 0,errorMsg:void 0,completeMsg:void 0,defaultMsg:void 0}},d={args:{name:"input01",id:"input01-01",placeholder:"placeholder",value:"임시 텍스트",bg:"white",noneClear:void 0,search:void 0,disabled:!0,rightText:void 0,time:void 0,error:void 0,errorMsg:void 0,completeMsg:void 0,defaultMsg:void 0}},i={args:{name:"input01",id:"input01-01",placeholder:"placeholder",value:"임시 텍스트",bg:"white",noneClear:void 0,search:!0,disabled:void 0,rightText:void 0,time:void 0,error:void 0,errorMsg:void 0,completeMsg:void 0,defaultMsg:void 0}},t={args:{name:"input01",id:"input01-01",placeholder:"placeholder",value:"임시 텍스트",bg:"white",noneClear:void 0,search:void 0,disabled:void 0,rightText:void 0,time:"04:02",error:void 0,errorMsg:void 0,completeMsg:void 0,defaultMsg:void 0}},u={args:{name:"input01",id:"input01-01",placeholder:"placeholder",value:"임시 텍스트",bg:"white",noneClear:!0,search:void 0,disabled:void 0,rightText:void 0,time:void 0,error:void 0,errorMsg:void 0,completeMsg:void 0,defaultMsg:void 0}},a={args:{name:"input01",id:"input01-01",placeholder:"placeholder",value:"임시 텍스트",bg:"white",noneClear:void 0,search:void 0,disabled:void 0,rightText:void 0,time:void 0,error:!0,errorMsg:void 0,completeMsg:void 0,defaultMsg:void 0}},o={args:{name:"input01",id:"input01-01",placeholder:"placeholder",value:"임시 텍스트",bg:"white",noneClear:void 0,search:void 0,disabled:void 0,rightText:void 0,time:void 0,error:!0,errorMsg:"에러 메시지",completeMsg:void 0,defaultMsg:void 0}},s={args:{name:"input01",id:"input01-01",placeholder:"placeholder",value:"임시 텍스트",bg:"white",noneClear:void 0,search:void 0,disabled:void 0,rightText:void 0,time:void 0,error:void 0,errorMsg:void 0,completeMsg:"완료 메시지",defaultMsg:void 0}},p={args:{name:"input01",id:"input01-01",placeholder:"placeholder",value:"임시 텍스트",bg:"white",noneClear:void 0,search:void 0,disabled:void 0,rightText:void 0,time:void 0,error:void 0,errorMsg:void 0,completeMsg:void 0,defaultMsg:"기본 메시지"}},l={args:{name:"input01",id:"input01-01",placeholder:"placeholder",value:"",bg:"black",noneClear:void 0,search:void 0,disabled:void 0,rightText:void 0,time:void 0,error:void 0,errorMsg:void 0,completeMsg:void 0,defaultMsg:void 0}},f={args:{name:"input01",id:"input01-01",placeholder:"placeholder",value:"임시 텍스트",bg:"black",noneClear:void 0,search:void 0,disabled:void 0,rightText:void 0,time:void 0,error:void 0,errorMsg:void 0,completeMsg:void 0,defaultMsg:void 0}},c={args:{name:"input01",id:"input01-01",placeholder:"placeholder",value:"임시 텍스트",bg:"black",noneClear:void 0,search:void 0,disabled:void 0,rightText:"명",time:void 0,error:void 0,errorMsg:void 0,completeMsg:void 0,defaultMsg:void 0}},g={args:{name:"input01",id:"input01-01",placeholder:"placeholder",value:"임시 텍스트",bg:"black",noneClear:void 0,search:void 0,disabled:!0,rightText:void 0,time:void 0,error:void 0,errorMsg:void 0,completeMsg:void 0,defaultMsg:void 0}},m={args:{name:"input01",id:"input01-01",placeholder:"placeholder",value:"",bg:"sky",noneClear:void 0,search:void 0,disabled:void 0,rightText:void 0,time:void 0,error:void 0,errorMsg:void 0,completeMsg:void 0,defaultMsg:void 0}},h={args:{name:"input01",id:"input01-01",placeholder:"placeholder",value:"임시 텍스트",bg:"sky",noneClear:void 0,search:void 0,disabled:void 0,rightText:void 0,time:void 0,error:void 0,errorMsg:void 0,completeMsg:void 0,defaultMsg:void 0}},b={args:{name:"input01",id:"input01-01",placeholder:"placeholder",value:"임시 텍스트",bg:"sky",noneClear:void 0,search:void 0,disabled:void 0,rightText:"명",time:void 0,error:void 0,errorMsg:void 0,completeMsg:void 0,defaultMsg:void 0}},x={args:{name:"input01",id:"input01-01",placeholder:"placeholder",value:"임시 텍스트",bg:"sky",noneClear:void 0,search:void 0,disabled:!0,rightText:void 0,time:void 0,error:void 0,errorMsg:void 0,completeMsg:void 0,defaultMsg:void 0}};var C,M,y;e.parameters={...e.parameters,docs:{...(C=e.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    name: 'input01',
    id: 'input01-01',
    placeholder: 'placeholder',
    value: '',
    bg: 'white',
    noneClear: undefined,
    search: undefined,
    disabled: undefined,
    rightText: undefined,
    time: undefined,
    error: undefined,
    errorMsg: undefined,
    completeMsg: undefined,
    defaultMsg: undefined
  }
}`,...(y=(M=e.parameters)==null?void 0:M.docs)==null?void 0:y.source}}};var T,D,v;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    name: 'input01',
    id: 'input01-01',
    placeholder: 'placeholder',
    value: '임시 텍스트',
    bg: 'white',
    noneClear: undefined,
    search: undefined,
    disabled: undefined,
    rightText: undefined,
    time: undefined,
    error: undefined,
    errorMsg: undefined,
    completeMsg: undefined,
    defaultMsg: undefined
  }
}`,...(v=(D=n.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var I,k,B;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    name: 'input01',
    id: 'input01-01',
    placeholder: 'placeholder',
    value: '임시 텍스트',
    bg: 'white',
    noneClear: undefined,
    search: undefined,
    disabled: undefined,
    rightText: '명',
    time: undefined,
    error: undefined,
    errorMsg: undefined,
    completeMsg: undefined,
    defaultMsg: undefined
  }
}`,...(B=(k=r.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var W,w,S;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    name: 'input01',
    id: 'input01-01',
    placeholder: 'placeholder',
    value: '임시 텍스트',
    bg: 'white',
    noneClear: undefined,
    search: undefined,
    disabled: true,
    rightText: undefined,
    time: undefined,
    error: undefined,
    errorMsg: undefined,
    completeMsg: undefined,
    defaultMsg: undefined
  }
}`,...(S=(w=d.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var R,A,V;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    name: 'input01',
    id: 'input01-01',
    placeholder: 'placeholder',
    value: '임시 텍스트',
    bg: 'white',
    noneClear: undefined,
    search: true,
    disabled: undefined,
    rightText: undefined,
    time: undefined,
    error: undefined,
    errorMsg: undefined,
    completeMsg: undefined,
    defaultMsg: undefined
  }
}`,...(V=(A=i.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var $,q,E;t.parameters={...t.parameters,docs:{...($=t.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    name: 'input01',
    id: 'input01-01',
    placeholder: 'placeholder',
    value: '임시 텍스트',
    bg: 'white',
    noneClear: undefined,
    search: undefined,
    disabled: undefined,
    rightText: undefined,
    time: '04:02',
    error: undefined,
    errorMsg: undefined,
    completeMsg: undefined,
    defaultMsg: undefined
  }
}`,...(E=(q=t.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var z,F,P;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    name: 'input01',
    id: 'input01-01',
    placeholder: 'placeholder',
    value: '임시 텍스트',
    bg: 'white',
    noneClear: true,
    search: undefined,
    disabled: undefined,
    rightText: undefined,
    time: undefined,
    error: undefined,
    errorMsg: undefined,
    completeMsg: undefined,
    defaultMsg: undefined
  }
}`,...(P=(F=u.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var L,_,N;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    name: 'input01',
    id: 'input01-01',
    placeholder: 'placeholder',
    value: '임시 텍스트',
    bg: 'white',
    noneClear: undefined,
    search: undefined,
    disabled: undefined,
    rightText: undefined,
    time: undefined,
    error: true,
    errorMsg: undefined,
    completeMsg: undefined,
    defaultMsg: undefined
  }
}`,...(N=(_=a.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var Y,O,j;o.parameters={...o.parameters,docs:{...(Y=o.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    name: 'input01',
    id: 'input01-01',
    placeholder: 'placeholder',
    value: '임시 텍스트',
    bg: 'white',
    noneClear: undefined,
    search: undefined,
    disabled: undefined,
    rightText: undefined,
    time: undefined,
    error: true,
    errorMsg: '에러 메시지',
    completeMsg: undefined,
    defaultMsg: undefined
  }
}`,...(j=(O=o.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var G,H,J;s.parameters={...s.parameters,docs:{...(G=s.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    name: 'input01',
    id: 'input01-01',
    placeholder: 'placeholder',
    value: '임시 텍스트',
    bg: 'white',
    noneClear: undefined,
    search: undefined,
    disabled: undefined,
    rightText: undefined,
    time: undefined,
    error: undefined,
    errorMsg: undefined,
    completeMsg: '완료 메시지',
    defaultMsg: undefined
  }
}`,...(J=(H=s.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,U;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    name: 'input01',
    id: 'input01-01',
    placeholder: 'placeholder',
    value: '임시 텍스트',
    bg: 'white',
    noneClear: undefined,
    search: undefined,
    disabled: undefined,
    rightText: undefined,
    time: undefined,
    error: undefined,
    errorMsg: undefined,
    completeMsg: undefined,
    defaultMsg: '기본 메시지'
  }
}`,...(U=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Z,ee;l.parameters={...l.parameters,docs:{...(X=l.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    name: 'input01',
    id: 'input01-01',
    placeholder: 'placeholder',
    value: '',
    bg: 'black',
    noneClear: undefined,
    search: undefined,
    disabled: undefined,
    rightText: undefined,
    time: undefined,
    error: undefined,
    errorMsg: undefined,
    completeMsg: undefined,
    defaultMsg: undefined
  }
}`,...(ee=(Z=l.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,re,de;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    name: 'input01',
    id: 'input01-01',
    placeholder: 'placeholder',
    value: '임시 텍스트',
    bg: 'black',
    noneClear: undefined,
    search: undefined,
    disabled: undefined,
    rightText: undefined,
    time: undefined,
    error: undefined,
    errorMsg: undefined,
    completeMsg: undefined,
    defaultMsg: undefined
  }
}`,...(de=(re=f.parameters)==null?void 0:re.docs)==null?void 0:de.source}}};var ie,te,ue;c.parameters={...c.parameters,docs:{...(ie=c.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    name: 'input01',
    id: 'input01-01',
    placeholder: 'placeholder',
    value: '임시 텍스트',
    bg: 'black',
    noneClear: undefined,
    search: undefined,
    disabled: undefined,
    rightText: '명',
    time: undefined,
    error: undefined,
    errorMsg: undefined,
    completeMsg: undefined,
    defaultMsg: undefined
  }
}`,...(ue=(te=c.parameters)==null?void 0:te.docs)==null?void 0:ue.source}}};var ae,oe,se;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    name: 'input01',
    id: 'input01-01',
    placeholder: 'placeholder',
    value: '임시 텍스트',
    bg: 'black',
    noneClear: undefined,
    search: undefined,
    disabled: true,
    rightText: undefined,
    time: undefined,
    error: undefined,
    errorMsg: undefined,
    completeMsg: undefined,
    defaultMsg: undefined
  }
}`,...(se=(oe=g.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var pe,le,fe;m.parameters={...m.parameters,docs:{...(pe=m.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    name: 'input01',
    id: 'input01-01',
    placeholder: 'placeholder',
    value: '',
    bg: 'sky',
    noneClear: undefined,
    search: undefined,
    disabled: undefined,
    rightText: undefined,
    time: undefined,
    error: undefined,
    errorMsg: undefined,
    completeMsg: undefined,
    defaultMsg: undefined
  }
}`,...(fe=(le=m.parameters)==null?void 0:le.docs)==null?void 0:fe.source}}};var ce,ge,me;h.parameters={...h.parameters,docs:{...(ce=h.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    name: 'input01',
    id: 'input01-01',
    placeholder: 'placeholder',
    value: '임시 텍스트',
    bg: 'sky',
    noneClear: undefined,
    search: undefined,
    disabled: undefined,
    rightText: undefined,
    time: undefined,
    error: undefined,
    errorMsg: undefined,
    completeMsg: undefined,
    defaultMsg: undefined
  }
}`,...(me=(ge=h.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};var he,be,xe;b.parameters={...b.parameters,docs:{...(he=b.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    name: 'input01',
    id: 'input01-01',
    placeholder: 'placeholder',
    value: '임시 텍스트',
    bg: 'sky',
    noneClear: undefined,
    search: undefined,
    disabled: undefined,
    rightText: '명',
    time: undefined,
    error: undefined,
    errorMsg: undefined,
    completeMsg: undefined,
    defaultMsg: undefined
  }
}`,...(xe=(be=b.parameters)==null?void 0:be.docs)==null?void 0:xe.source}}};var Ce,Me,ye;x.parameters={...x.parameters,docs:{...(Ce=x.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    name: 'input01',
    id: 'input01-01',
    placeholder: 'placeholder',
    value: '임시 텍스트',
    bg: 'sky',
    noneClear: undefined,
    search: undefined,
    disabled: true,
    rightText: undefined,
    time: undefined,
    error: undefined,
    errorMsg: undefined,
    completeMsg: undefined,
    defaultMsg: undefined
  }
}`,...(ye=(Me=x.parameters)==null?void 0:Me.docs)==null?void 0:ye.source}}};const Se=["WhitePlaceholder","WhiteValue","WhiteRightText","WhiteDisabled","WhiteSearch","WhiteTime","WhiteNoneClear","WhiteError","WhiteErrorMsg","WhiteCompleteMsg","WhiteDefaultMsg","BlackPlaceholder","BlackValue","BlackText","BlackDisabled","SkyPlaceholder","SkyValue","SkyText","SkyDisabled"];export{g as BlackDisabled,l as BlackPlaceholder,c as BlackText,f as BlackValue,x as SkyDisabled,m as SkyPlaceholder,b as SkyText,h as SkyValue,s as WhiteCompleteMsg,p as WhiteDefaultMsg,d as WhiteDisabled,a as WhiteError,o as WhiteErrorMsg,u as WhiteNoneClear,e as WhitePlaceholder,r as WhiteRightText,i as WhiteSearch,t as WhiteTime,n as WhiteValue,Se as __namedExportsOrder,we as default};
