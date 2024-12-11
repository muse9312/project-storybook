import{W as i}from"./WOIcon-d41c31b7.js";import"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-aa768a49.js";const a=`import React from 'react';
import styled from 'styled-components';

const WOIcon = ({ icon, width, height }) => {
  return <IconComponents className='icon' $icon={icon} $width={width ? width : 14} $height={height ? height : 14}></IconComponents>;
};

export default WOIcon;
const IconBaseStyle = styled.span\`
  display: block;
  width: \${(props) => props.$width && \`\${props.$width}px\`};
  height: \${(props) => props.$height && \`\${props.$height}px\`};
\`;

const IconComponents = styled(IconBaseStyle)\`
  flex: 0 0 auto;
  \${(props) =>
    props.$icon &&
    \`
        background:url('/assets/woori-mobile/icon/\${props.$icon}.svg') no-repeat center / cover;
  \`}
\`;
`,h={title:"WooriMobile/Icons/WOIcon",component:i,parameters:{layout:"centered",storySource:{source:a},docs:{description:{component:"``\r\nIcon 컴포넌트 사용시 Icon Props Icon 파일 명으로 전달\r\nIcon 파일명은 ex) plus,arr 같이 아이콘 명만 작성 하고 svg 파일로 통일 \r\n``"}}},tags:["autodocs"],argTypes:{width:{control:"number",description:"Icon Width 입니다.",defaultValue:{summary:14},type:{summary:"number",required:!1}},height:{control:"number",description:"Icon Height 입니다.",defaultValue:{summary:14},type:{summary:"number",required:!1}},icon:{control:"text",description:"Icon 명 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}}}},o={args:{width:14,height:14,icon:"plus-blue-14"}},e={args:{width:14,height:14,icon:"filter-blue-14"}};var n,r,t;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    width: 14,
    height: 14,
    icon: 'plus-blue-14'
  }
}`,...(t=(r=o.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};var s,u,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    width: 14,
    height: 14,
    icon: 'filter-blue-14'
  }
}`,...(c=(u=e.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const g=["Plus","Filter"];export{e as Filter,o as Plus,g as __namedExportsOrder,h as default};
