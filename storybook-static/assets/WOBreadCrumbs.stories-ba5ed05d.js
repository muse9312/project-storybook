import{j as e}from"./jsx-runtime-ffb262ed.js";import{L as f,B as y}from"./index-b81b1b23.js";import"./index-76fb7be0.js";import{u as l,a as B}from"./styled-components.browser.esm-aa768a49.js";import{a as m}from"./response-51863d76.js";import"./index-d3ea75b5.js";import"./_commonjsHelpers-de833af9.js";import"./index-c4d0dbf5.js";const d=({list:r,color:C})=>e.jsx(h,{className:"bread",children:r.map((a,g)=>e.jsx(x,{color:C,children:e.jsx(f,{to:a.path,children:a.title})},g))}),h=l.ol`
  display: flex;
  align-items: center;
`,x=l.li`
  font-size: 14px;
  color: #fff;
  font-weight: 400;
  display: inline-flex;
  align-items: center;
  a {
    font-size: 14px;
    color: #fff;
    font-weight: 400;
    line-height: 20px;
    white-space: nowrap;
  }
  & ~ & {
    &::before {
      content: '';
      display: block;
      width: 20px;
      height: 20px;
      background: url(/assets/woori-pc//icon/arrow-bread-gray200.svg) no-repeat center / cover;
    }
  }

  ${r=>r.color==="gray"&&B`
      color: #555;
      a {
        color: #555;
      }

      & ~ & {
        &::before {
          content: '';
          display: block;
          width: 20px;
          height: 20px;
          background: url(/assets/woori-pc//icon/arrow-bread-gray.svg) no-repeat center / cover;
        }
      }
    `}
`;d.__docgenInfo={description:"",methods:[],displayName:"WOBreadCrumbs"};const O={title:"WooriPC/Button/WOBreadCrumbs",component:d,parameters:{layout:"centered"},decorators:[r=>e.jsx(y,{children:e.jsx(r,{})})],tags:["autodocs"],argTypes:{list:{control:"array",description:"데이터 리스트 입니다.",defaultValue:{summary:[]},type:{summary:"array",required:!0}},color:{control:"select",description:"텍스트 및 아이콘 색상 입니다.",options:["white","gray"],defaultValue:{summary:"white"},type:{summary:"string",required:!1}}}},o={args:{list:m}},s={args:{list:m,color:"gray"}};var t,u,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  // 컴포넌트에 넘겨줄 props 정리
  args: {
    // props명 : 넘겨줄 props 값
    list: sampleBreadCrumbList
  }
}`,...(i=(u=o.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var n,p,c;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  // 컴포넌트에 넘겨줄 props 정리
  args: {
    // props명 : 넘겨줄 props 값
    list: sampleBreadCrumbList,
    color: 'gray'
  }
}`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const W=["Default","Gray"];export{o as Default,s as Gray,W as __namedExportsOrder,O as default};
