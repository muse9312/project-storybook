import{j as e}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import{u as g}from"./styled-components.browser.esm-aa768a49.js";import{W as x}from"./WOIcon-b00d259e.js";import"./_commonjsHelpers-de833af9.js";const c=({severity:a,label:d,count:m,styleType:n,onClick:y})=>e.jsxs(f,{type:"button",className:`alarm ${n||"inline"}-type ${a}`,$styleType:n,onClick:y,children:[e.jsx(x,{icon:a}),e.jsxs("div",{className:"txt-box",children:[e.jsx("span",{className:"txt",children:d}),e.jsx("span",{className:"count",children:m})]})]}),f=g.button`
  width: 108px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 8px 10px;
  border-radius: 12px;
  .txt-box {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 700;
    margin-left: 5px;
    .txt {
      /* display: block;
      line-height: 12px; */
      line-height: 12px;

      & + .count {
        margin-left: 20px;
      }
    }
    .count {
      line-height: 12px;
    }
  }

  &.block-type {
    width: 78px;
    padding: 12px 10px;
    .txt-box {
      display: block;
      margin-left: 0;
      text-align: right;
      .txt {
        display: block;
        & + .count {
          margin: 5px 0 0;
        }
      }
      .count {
        display: block;
      }
    }
  }

  & + .alarm {
    margin-left: 4px;
  }

  // severity
  &.warning {
    background: linear-gradient(90deg, #ff5d5d 0.07%, #e26f6f 99.93%);
  }

  &.caution {
    background: linear-gradient(180deg, #ffa985 0%, #fab530 100%);
  }
`;c.__docgenInfo={description:"",methods:[],displayName:"WOAlarm"};const k={title:"WooriPC/Button/WOAlarm",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"label 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}},count:{control:"text",description:"건수 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}},severity:{control:"select",options:["warning","caution"],description:"심각도 타입 입니다.",defaultValue:{summary:void 0},type:{summary:"arstringray",required:!1}},styleType:{control:"select",options:["inline","block"],description:"스타일 타입 입니다.",defaultValue:{summary:"inline"},type:{summary:"arstringray",required:!1}}}},t={args:{severity:"warning",label:"경고",count:"002",styleType:"inline"}},r={args:{severity:"caution",label:"주의",count:"005",styleType:"block"}};var s,o,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  // 컴포넌트에 넘겨줄 props 정리
  args: {
    // props명 : 넘겨줄 props 값
    severity: 'warning',
    label: '경고',
    count: '002',
    styleType: 'inline'
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var l,u,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  // 컴포넌트에 넘겨줄 props 정리
  args: {
    // props명 : 넘겨줄 props 값
    severity: 'caution',
    label: '주의',
    count: '005',
    styleType: 'block'
  }
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const v=["Default","Block"];export{r as Block,t as Default,v as __namedExportsOrder,k as default};
