import{j as e}from"./jsx-runtime-ffb262ed.js";import{W as i}from"./WORadioGroup-0cbf99ac.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-aa768a49.js";const l=`import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const WORadioGroup = ({ title, radioType, size, radioItems, onChange, defaultCheckedValue, readonly, disabled }) => {
  const [value, setValue] = useState('');

  radioType = radioType === null ? 'normal' : radioType;

  const handleChange = (e) => {
    if (readonly) return; // Prevent changes if readonly is true
    const { value } = e.target;
    if (!value) return;
    const checkedItem = radioItems.find((item) => item.value === value);
    setValue(value);
    onChange && onChange(checkedItem);
  };

  useEffect(() => {
    if (defaultCheckedValue) {
      setValue(defaultCheckedValue.value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <RadioBoxWrap>
        {title && <RadioBoxTitle $radioType={radioType}>{title}</RadioBoxTitle>}
        <RadioBoxInner $radioType={radioType}>
          {radioItems &&
            radioItems.map((item) => (
              <Wrap key={item.id} $radioType={radioType} $size={size}>
                {readonly ? (
                  value === item.value && <Label>{item.label}</Label>
                ) : (
                  <>
                    <FormWrap className={radioType === 'button' ? 'button-type' : ''} $size={size}>
                      <Form
                        type='radio'
                        name={item.name}
                        id={item.id}
                        value={item.value}
                        checked={value === item.value}
                        onChange={handleChange}
                        disabled={item.disabled || disabled}
                      />

                      {radioType === 'normal' && <FormRadioCircle className='radio-circle' />}
                      {radioType === 'button' && <Label htmlFor={item.id}>{item.label}</Label>}
                    </FormWrap>
                    {radioType === 'normal' && <Label htmlFor={item.id}>{item.label}</Label>}
                  </>
                )}
              </Wrap>
            ))}
        </RadioBoxInner>
      </RadioBoxWrap>
    </>
  );
};

export default WORadioGroup;

const RadioBoxWrap = styled.div\`
  width: 100%;
\`;
const RadioBoxTitle = styled.div\`
  color: var(--W-Dark-10);
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  margin-bottom: \${(props) => (props.$radioType === 'normal' ? '3' : '10')}px;
\`;

const RadioBoxInner = styled.div\`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: \${(props) => (props.$radioType === 'normal' ? '0 12px' : '4px')};

  > div:first-child:nth-last-child(2),
  div:first-child:nth-last-child(2) ~ div {
    width: calc(50% - \${(props) => (props.$radioType === 'normal' ? '12px' : '4px')} / 2);

    label {
      max-width: none;
    }

    \${(props) =>
      props.$radioType === 'normal' &&
      css\`
        flex-basis: auto;
      \`}
  }

  > div:only-child {
    width: 100%;

    label {
      max-width: none;
    }
  }
\`;

const FormWrap = styled.div\`
  position: relative;

  &.button-type {
    width: 100%;

    input {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;

      &:checked + label {
        background-color: var(--Blue-01);
        border-color: var(--Blue-01);
        color: var(--White);
      }

      &:disabled + label {
        background-color: var(--White);
        border-color: var(--C-Dark-04);
        color: var(--C-Dark-06);
        cursor: default;
      }
    }

    label {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      min-height: 38px;
      padding: 0 8px;
      border-radius: 6px;
      border: 1px solid var(--C-Dark-04);
      font-size: 13px;
      font-weight: 700;
      color: var(--C-Dark-10);
      background-color: var(--White);
      line-height: 1;
    }
    \${(props) =>
      props.$size === 'lg' &&
      css\`
        label {
          height: 46px;
          color: var(--Cool-Dark-10, #263752);
          font-size: 16px;
          font-weight: 700;
          border-radius: 8px;
        }
      \`}
  }
\`;

const FormRadioCircle = styled.div\`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 7px;
  height: 7px;
  border-radius: 100%;
  background-color: var(--W-Dark-11);
\`;
const Wrap = styled.div\`
  display: flex;
  align-items: center;
  width: calc((100% - \${(props) => (props.$radioType === 'normal' ? '18' : '4') * 2}px) / 3);
  height: 38px;
  \${(props) =>
    props.$radioType === 'normal' &&
    css\`
      flex-basis: fit-content;
    \`}

  > label {
    margin-left: 6px;
  }
  \${(props) =>
    props.$size === 'lg' &&
    css\`
      height: 46px;
    \`}
\`;

const Label = styled.label\`
  font-size: 13px;
  font-weight: 700;
  color: var(--W-Dark-11);
  cursor: pointer;
  line-height: 16px;
\`;

const Form = styled.input\`
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid var(--C-Dark-05);
  &:checked {
    & + .radio-circle {
      display: block;
    }
  }
  &:disabled {
    & + .radio-circle {
      background-color: var(--W-Dark-11);
    }
  }
\`;
`,m={title:"WooriMobile/Form/WORadioGroup",component:i,parameters:{layout:"centered",storySource:{source:l}},decorators:[t=>e.jsx("div",{style:{width:"320px",display:"flex",gap:4},children:e.jsx(t,{})})],tags:["autodocs"],argTypes:{title:{control:"text",description:"타이틀입니다.",defaultValue:{summary:void 0},type:{summary:"text",required:!0}},radioType:{control:"select",description:"일반, 버튼모양을 선택할 수 있습니다.",defaultValue:{summary:"normal"},options:["normal","button"],type:{summary:"string",required:!0}},radioItems:{control:"object",description:"id, label(텍스트), name, value, disabled 포함 합니다.",defaultValue:{summary:void 0},type:{summary:"object",required:!0}},onChange:{control:"text",description:"라디오버튼 onChange 함수입니다.",defaultValue:{summary:void 0},type:{summary:"function",required:!0}},checkedValue:{control:"object",description:"초기값으로 체크가 활성화된 상태입니다.",defaultValue:{summary:void 0},type:{summary:"object",required:!1}},readonly:{control:"boolean",description:"readonly 상태입니다.",defaultValue:{summary:void 0},type:{summary:"boolean",required:!1}},disabled:{control:"boolean",description:"disabled 상태입니다. 그룹안에 있는 버튼타입은 모두 disabled 됩니다.",defaultValue:{summary:void 0},type:{summary:"boolean",required:!1}}}},n={args:{title:"label",radioType:"normal",defaultCheckedValue:{id:"rdo2",label:"라디오버튼2",name:"rdoNormal1",value:"라디오버튼2"},radioItems:[{id:"rdo1",label:"라디오버튼1",name:"rdoNormal1",value:"라디오버튼1"},{id:"rdo2",label:"라디오버튼2",name:"rdoNormal1",value:"라디오버튼2"},{id:"rod3",label:"라디오버튼3",name:"rdoNormal1",value:"라디오버튼3"}]}};var a,o,r;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    title: 'label',
    radioType: 'normal',
    defaultCheckedValue: {
      id: 'rdo2',
      label: '라디오버튼2',
      name: 'rdoNormal1',
      value: '라디오버튼2'
    },
    radioItems: [{
      id: 'rdo1',
      label: '라디오버튼1',
      name: 'rdoNormal1',
      value: '라디오버튼1'
    }, {
      id: 'rdo2',
      label: '라디오버튼2',
      name: 'rdoNormal1',
      value: '라디오버튼2'
    }, {
      id: 'rod3',
      label: '라디오버튼3',
      name: 'rdoNormal1',
      value: '라디오버튼3'
    }]
  }
}`,...(r=(o=n.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const y=["DefaultButton"];export{n as DefaultButton,y as __namedExportsOrder,m as default};
