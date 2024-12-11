import{W as x}from"./WOCheckBox-22829e02.js";import"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-aa768a49.js";const C=`import styled, { css } from 'styled-components';
import { useState } from 'react';

const WOCheckbox = ({ item, blind, isChecked, flex, onChange, titleArea, type, round, fontWght }) => {
  // 로컬 상태 추가
  const [checked, setChecked] = useState(!!isChecked || false);

  // 체크박스 상태 토글 함수
  const toggleChecked = () => {
    setChecked(!checked);
    if (onChange) {
      onChange(item, !checked);
    }
  };

  return (
    <Wrapper $titleArea={titleArea} $type={type}>
      <Inner $flex={flex} $round={round} $type={type}>
        <Form type='checkbox' name={item.name} id={item.id} checked={checked} onChange={toggleChecked} $round={round} />

        <Label htmlFor={item.id} $blind={blind} $type={type} $fontWght={fontWght}>
          {item.label}
        </Label>
      </Inner>
    </Wrapper>
  );
};
export default WOCheckbox;

const Wrapper = styled.div\`
  \${(props) =>
    props.$titleArea &&
    css\`
      display: flex;
      align-items: flex-end;
      height: 54px;
    \`}
  \${(props) =>
    props.$type === 'table' &&
    css\`
      width: fit-content;
      margin: 0 auto;
    \`}
\`;

const Inner = styled.div\`
  display: flex;
  align-items: center;
  height: auto;
  \${(props) =>
    props.$round &&
    css\`
      height: auto;
    \`}

  gap: 0 4px;
  \${(props) =>
    props.$type === 'table' &&
    css\`
      height: auto;
    \`}
\`;
const Label = styled.label\`
  padding-right: 10px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: var(--W-Dark-11);
  cursor: pointer;
  \${(props) =>
    props.$blind === true &&
    css\`
      position: absolute;
      width: 1px;
      height: 1px;
      clip: rect(0, 0, 0, 0);
      overflow: hidden;
    \`}
  \${(props) =>
    props.$type === 'fit' &&
    css\`
      min-width: auto;
      padding-right: 0;
    \`}

    \${(props) =>
    props.$fontWght &&
    css\`
      font-weight: 700;
    \`}
\`;
const Form = styled.input\`
  display: block;
  width: 16px;
  height: 16px;
  background: url(/assets/woori-mobile/icon/checkbox-default.svg) no-repeat center / cover;
  cursor: pointer;
  &:checked {
    background: url(/assets/woori-mobile/icon/checkbox-checked.svg) no-repeat center / cover;
  }

  \${(props) =>
    props.$round &&
    css\`
      background: url(/assets/woori-mobile/icon/checkbox-circle-default.svg) no-repeat center / cover;
      cursor: pointer;
      &:checked {
        background: url(/assets/woori-mobile/icon/checkbox-circle-checked.svg) no-repeat center / cover;
      }
    \`}
\`;
`,A={title:"WooriMobile/Form/WOCheckBox",component:x,parameters:{layout:"centered",storySource:{source:C}},tags:["autodocs"],argTypes:{item:{control:"object",description:"CheckBox Name,id,label 입니다.",defaultValue:{summary:void 0},type:{summary:"object",required:!0}},blind:{control:"boolean",description:"CheckBox Label blind 여부 입니다.",defaultValue:{summary:void 0},type:{summary:"boolean",required:!1}},isChecked:{control:"boolean",description:"CheckBox checked 여부 입니다.",defaultValue:{summary:void 0},type:{summary:"boolean",required:!1}},flex:{control:"select",options:["column",void 0],description:"CheckBox 정렬 방식 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!1}},titleArea:{control:"boolean",description:"CheckBox SearchArea 내부 사용시 적용 props 입니다.",defaultValue:{summary:void 0},type:{summary:"boolean",required:!1}},round:{control:"boolean",description:"circle 모양의 체크박스입니다.",defaultValue:{summary:void 0},typeL:{summary:"boolean",required:!1}}}},e={args:{item:{name:"input01-01",id:"input01-02",label:"Label"},blind:!0,disabled:void 0,isChecked:void 0,flex:void 0}},n={args:{item:{name:"input01-01",id:"input01-03",label:"Label"},blind:!0,disabled:void 0,isChecked:!0,flex:void 0}},r={args:{item:{name:"input01-01",id:"input01-07",label:"Label"}}},t={args:{item:{name:"input01-01",id:"input01-10",label:"Label"},titleArea:!0}},o={args:{item:{name:"input01-01",id:"input01-12",label:"Label"},round:!0}};var a,i,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    item: {
      name: 'input01-01',
      id: 'input01-02',
      label: 'Label'
    },
    blind: true,
    disabled: undefined,
    isChecked: undefined,
    flex: undefined
  }
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var c,l,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    item: {
      name: 'input01-01',
      id: 'input01-03',
      label: 'Label'
    },
    blind: true,
    disabled: undefined,
    isChecked: true,
    flex: undefined
  }
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,u,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    item: {
      name: 'input01-01',
      id: 'input01-07',
      label: 'Label'
    }
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var b,h,g;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    item: {
      name: 'input01-01',
      id: 'input01-10',
      label: 'Label'
    },
    titleArea: true
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,k,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    item: {
      name: 'input01-01',
      id: 'input01-12',
      label: 'Label'
    },
    round: true
  }
}`,...(y=(k=o.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};const S=["Default","Checked","Label","TitleArea","Circle"];export{n as Checked,o as Circle,e as Default,r as Label,t as TitleArea,S as __namedExportsOrder,A as default};
