import{j as e}from"./jsx-runtime-ffb262ed.js";import{u as o}from"./styled-components.browser.esm-aa768a49.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const p=({itemText:t,counter:r,maxCount:s,success:i,error:a})=>{r="0",s="0";const d=i===!0?"#599CFF":a===!0?"#FC8686":"#AAAAAA";return e.jsx(e.Fragment,{children:e.jsxs(m,{$success:i,$error:a,children:[e.jsxs(x,{children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"8",viewBox:"0 0 10 8",fill:"none",children:e.jsx("path",{d:"M0.0250977 3.3249L0.750098 2.6249C0.800098 2.5749 0.875098 2.5749 0.925098 2.6249L4.0001 5.6999L9.0751 0.624902C9.1251 0.574902 9.2001 0.574902 9.2501 0.624902L9.9501 1.3249C10.0001 1.3749 10.0001 1.4499 9.9501 1.4999L4.0751 7.3749C4.0251 7.4249 3.9501 7.4249 3.9001 7.3749L0.0250977 3.4999C9.76566e-05 3.4499 9.76566e-05 3.3749 0.0250977 3.3249Z",fill:d})}),t]}),e.jsxs(f,{children:[r,"/",s]})]})})},m=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 16px;
  padding: 2px 0;
  font-size: 12px;
  font-weight: 400;
  color: ${t=>t.$success?"var(--Blue-02)":t.$error?"var(--Red-02)":"var(--W-Dark-06)"};
`,x=o.span`
  display: flex;
  align-items: center;
  gap: 4px;
  line-height: 16px;
  > svg {
    margin: 2px 1px;
  }
`,f=o.span`
  display: inline-block;
  line-height: 16px;
`;p.__docgenInfo={description:"",methods:[],displayName:"WOFieldDescription"};const g=`import styled from 'styled-components';

const WOFieldDescription = ({ itemText, counter, maxCount, success, error }) => {
  counter = counter === null || 'undefined' ? '0' : counter;
  maxCount = maxCount === null || 'undefined' ? '0' : maxCount;
  const status = success === true ? '#599CFF' : error === true ? '#FC8686' : '#AAAAAA';

  return (
    <>
      <Wrap $success={success} $error={error}>
        <ItemLeft>
          <svg xmlns='http://www.w3.org/2000/svg' width='10' height='8' viewBox='0 0 10 8' fill='none'>
            <path
              d='M0.0250977 3.3249L0.750098 2.6249C0.800098 2.5749 0.875098 2.5749 0.925098 2.6249L4.0001 5.6999L9.0751 0.624902C9.1251 0.574902 9.2001 0.574902 9.2501 0.624902L9.9501 1.3249C10.0001 1.3749 10.0001 1.4499 9.9501 1.4999L4.0751 7.3749C4.0251 7.4249 3.9501 7.4249 3.9001 7.3749L0.0250977 3.4999C9.76566e-05 3.4499 9.76566e-05 3.3749 0.0250977 3.3249Z'
              fill={status}
            />
          </svg>
          {itemText}
        </ItemLeft>
        <ItemRight>
          {counter}/{maxCount}
        </ItemRight>
      </Wrap>
    </>
  );
};

export default WOFieldDescription;
const Wrap = styled.div\`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 16px;
  padding: 2px 0;
  font-size: 12px;
  font-weight: 400;
  color: \${(props) => (props.$success ? 'var(--Blue-02)' : props.$error ? 'var(--Red-02)' : 'var(--W-Dark-06)')};
\`;

const ItemLeft = styled.span\`
  display: flex;
  align-items: center;
  gap: 4px;
  line-height: 16px;
  > svg {
    margin: 2px 1px;
  }
\`;

const ItemRight = styled.span\`
  display: inline-block;
  line-height: 16px;
\`;
`,w={title:"WooriMobile/Form/WOFieldDescription",component:p,parameters:{layout:"centered",storySource:{source:g}},decorators:[t=>e.jsx("div",{style:{width:"320px"},children:e.jsx(t,{})})],tags:["autodocs"],argTypes:{itemText:{control:"text",description:"설명 텍스트입니다.",defaultValue:{summary:void 0},type:{summary:"text",required:!0}},counter:{control:"text",description:"현재까지 타이핑된 글자수입니다.",defaultValue:{summary:"0"},type:{summary:"text",required:!1}},maxCount:{control:"text",description:"최대 글자수 입니다.",defaultValue:{summary:"0"},type:{summary:"text",required:!1}},success:{control:"boolean",description:"성공 여부입니다.",defaultValue:{summary:!1},type:{summary:"boolean",required:!1}},error:{control:"boolean",description:"실패 혹은 에러 여부입니다.",defaultValue:{summary:!1},type:{summary:"boolean",required:!1}}}},n={args:{itemText:"텍스트",counter:"10",maxCount:"100"}};var l,u,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    itemText: '텍스트',
    counter: '10',
    maxCount: '100'
  }
}`,...(c=(u=n.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const L=["Default"];export{n as Default,L as __namedExportsOrder,w as default};
