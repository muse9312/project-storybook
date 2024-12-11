import{W as r}from"./WOValidationCheck-32215072.js";import"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-aa768a49.js";import"./WOIcon-d41c31b7.js";const s=`import React from 'react';
import styled from 'styled-components';
import WOIcon from './WOIcon';

const WOValidationCheck = ({ itemList }) => {
  return (
    <Wrap className='validation-check'>
      {itemList.map((item) => (
        <TextBox key={item.id}>
          <WOIcon icon={(!item.isCheck && 'check') || (item.isCheck === 'pass' ? 'check_blue' : 'check_red')} width={12} height={12} />
          <TextArea $vailCheck={item.isCheck}>{item.title}</TextArea>
        </TextBox>
      ))}
    </Wrap>
  );
};

export default WOValidationCheck;

const Wrap = styled.div\`
  display: flex;
  gap: 0 12px;
\`;

const TextBox = styled.div\`
  display: flex;
  gap: 0 4px;
  align-items: center;
\`;

const TextArea = styled.div\`
  color: \${(props) => {
    switch (props.$vailCheck) {
      case 'pass':
        return 'var(--Blue-02)';
      case 'error':
        return 'var(--Red-02)';
      default:
        return 'var(--W-Dark-06)';
    }
  }};
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
\`;
`,m={title:"WooriMobile/Common/WOValidationCheck",component:r,parameters:{layout:"centered",storySource:{source:s}},tags:["autodocs"],argTypes:{itemList:{control:"text",description:"list 입니다.",defaultValue:{summary:"white"},type:{summary:"text",required:!0}}}},e={args:{itemList:[{id:"1",title:"소문자"},{id:"2",title:"특수문자",isCheck:"error"},{id:"3",title:"숫자",isCheck:"pass"},{id:"4",title:"6자 이상",isCheck:"pass"}]}};var t,n,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    itemList: [{
      id: '1',
      title: '소문자'
    }, {
      id: '2',
      title: '특수문자',
      isCheck: 'error'
    }, {
      id: '3',
      title: '숫자',
      isCheck: 'pass'
    }, {
      id: '4',
      title: '6자 이상',
      isCheck: 'pass'
    }]
  }
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const u=["Default"];export{e as Default,u as __namedExportsOrder,m as default};
