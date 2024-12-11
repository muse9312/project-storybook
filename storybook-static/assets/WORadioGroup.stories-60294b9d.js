import{j as a}from"./jsx-runtime-ffb262ed.js";import{r as m}from"./index-76fb7be0.js";import{u as t,a as w}from"./styled-components.browser.esm-aa768a49.js";import"./_commonjsHelpers-de833af9.js";const y=({radioItems:r,onChange:s,defaultCheckedValue:l,readonly:c,styleType:N})=>{const[u,p]=m.useState(""),j=e=>{if(c)return;const{value:d}=e.target;if(!d)return;const k=r.find(Y=>Y.value===d);p(d),s&&s(k)};return m.useEffect(()=>{l&&p(l.value)},[]),a.jsx(W,{children:r.map(e=>a.jsx(I,{children:c?u===e.value&&a.jsx(i,{children:e.label}):a.jsxs(a.Fragment,{children:[a.jsx(R,{type:"radio",name:e.name,id:e.id,value:e.value,checked:u===e.value,onChange:j,disabled:e.disabled}),a.jsx(i,{htmlFor:e.id,styleType:N,children:e.label})]})},e.id))})},W=t.div`
  display: flex;
  align-items: center;
  height: 32px;
`,I=t.div`
  display: flex;
  align-items: center;
  gap: 0 8px;
`,i=t.label`
  min-width: 74px;
  padding-right: 10px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #333;
  cursor: pointer;

  ${r=>r.styleType==="type01"&&w`
      font-size: 14px;

      line-height: 21px;
    `}
`,R=t.input`
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: url(/assets/woori-pc//icon/radio-default.svg) no-repeat center / cover;
  cursor: pointer;
  &:checked {
    background: url(/assets/woori-pc//icon/radio-active.svg) no-repeat center / cover;
    & + ${i} {
      /* font-weight: 600; */
    }
  }
  &:disabled {
    background: url(/assets/woori-pc//icon/radio-disabled.svg) no-repeat center / cover;
  }
`;y.__docgenInfo={description:"",methods:[],displayName:"WORadioGroup"};const E={title:"WooriPC/Form/WORadioGroup",component:y,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{radioItems:{control:"object",description:"Radio Name,id,label,disabled,checked 입니다.",defaultValue:{summary:void 0},type:{summary:"object",required:!0}},defaultValue:{control:"object",description:"초기 체크된 아이템 객체입니다.",defaultValue:{summary:void 0},type:{summary:"object",required:!1}}}},o={args:{radioItems:[{name:"radio01",id:1,label:"Y",value:"Y"},{name:"radio01",id:2,label:"N",value:"N"}]}},n={args:{radioItems:[{name:"radio02",id:1,label:"Y",value:"Y"},{name:"radio02",id:2,label:"N",value:"N"}],defaultCheckedValue:{name:"radio02",id:2,label:"N",value:"N"}}};var v,b,g;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    radioItems: [{
      name: 'radio01',
      id: 1,
      label: 'Y',
      value: 'Y'
    }, {
      name: 'radio01',
      id: 2,
      label: 'N',
      value: 'N'
    }]
  }
}`,...(g=(b=o.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,f,x;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    radioItems: [{
      name: 'radio02',
      id: 1,
      label: 'Y',
      value: 'Y'
    }, {
      name: 'radio02',
      id: 2,
      label: 'N',
      value: 'N'
    }],
    defaultCheckedValue: {
      name: 'radio02',
      id: 2,
      label: 'N',
      value: 'N'
    }
  }
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const F=["Default","DefaultChecked"];export{o as Default,n as DefaultChecked,F as __namedExportsOrder,E as default};
