import{j as o}from"./jsx-runtime-ffb262ed.js";import{u as s}from"./styled-components.browser.esm-aa768a49.js";import{W as a}from"./WOComboBox-dd50b7bf.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./WOLabel-9cebf678.js";import"./InputLabel-7ccef553.js";import"./composeClasses-4118efa7.js";import"./extends-15b115a7.js";import"./styled-80c0ceef.js";import"./TextField-8918e36b.js";import"./useId-a47493a3.js";import"./index-de0962f3.js";import"./Modal-9b120e55.js";import"./mergeSlotProps-69f81163.js";import"./inheritsLoose-c82a83d4.js";import"./index-d3ea75b5.js";import"./ownerWindow-684f99c0.js";import"./useSlotProps-f7cb9e67.js";import"./debounce-517eeb3c.js";import"./TextareaAutosize-63b07324.js";import"./MenuItem-cd9f00c5.js";import"./Chip-9a81eb61.js";import"./assertThisInitialized-081f9914.js";import"./Autocomplete-fbfec46a.js";import"./index-08d2ae59.js";const e=({children:t})=>o.jsx(o.Fragment,{children:o.jsxs(d,{className:"dual-combobox-wrap",children:[t[0],o.jsx(m,{}),t[1]]})}),d=s.div`
  display: flex;
  align-items: flex-end;
`,m=s.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 38px;
  border-bottom: 1px solid var(--C-Dark-04);
  flex: 0 0 auto;

  &:before {
    content: '';
    width: 6px;
    height: 1px;
    background-color: var(--W-Dark-11);
  }
`;e.__docgenInfo={description:"",methods:[],displayName:"WODualComboBox"};const p=`import styled from 'styled-components';

const WODualComboBox = ({ children }) => {
  return (
    <>
      <Wrap className='dual-combobox-wrap'>
        {children[0]}
        <Dash />
        {children[1]}
      </Wrap>
    </>
  );
};

export default WODualComboBox;

const Wrap = styled.div\`
  display: flex;
  align-items: flex-end;
\`;

const Dash = styled.div\`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 38px;
  border-bottom: 1px solid var(--C-Dark-04);
  flex: 0 0 auto;

  &:before {
    content: '';
    width: 6px;
    height: 1px;
    background-color: var(--W-Dark-11);
  }
\`;
`,T={title:"WooriMobile/Form/WODualComboBox",component:e,parameters:{layout:"centered",storySource:{source:p}},decorators:[t=>o.jsx("div",{style:{width:"320px"},children:o.jsx(t,{})})],tags:["autodocs"],argTypes:{}},n=()=>o.jsx(o.Fragment,{children:o.jsxs(e,{children:[o.jsx(a,{label:"label",onChange:()=>{},optionList:[{id:1,label:"data1"},{id:2,label:"data2"},{id:3,label:"data3"}]}),o.jsx(a,{onChange:()=>{},optionList:[{id:1,label:"data1"},{id:2,label:"data2"},{id:3,label:"data3"}]})]})});n.__docgenInfo={description:"",methods:[],displayName:"Combo"};var r,i,l;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  return <>\r
            <WODualComboBox>\r
                <WOComboBox label="label" onChange={() => {}} optionList={[{
        id: 1,
        label: 'data1'
      }, {
        id: 2,
        label: 'data2'
      }, {
        id: 3,
        label: 'data3'
      }]} />\r
                <WOComboBox onChange={() => {}} optionList={[{
        id: 1,
        label: 'data1'
      }, {
        id: 2,
        label: 'data2'
      }, {
        id: 3,
        label: 'data3'
      }]} />\r
            </WODualComboBox>\r
        </>;
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const q=["Combo"];export{n as Combo,q as __namedExportsOrder,T as default};
