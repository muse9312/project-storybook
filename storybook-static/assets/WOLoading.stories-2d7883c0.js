import{j as e}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import{u as i,a}from"./styled-components.browser.esm-aa768a49.js";import{W as f}from"./WOSearchArea-6f9ea67e.js";import"./_commonjsHelpers-de833af9.js";import"./WOButton-a92410a3.js";import"./common.styled-d4908734.js";import"./WOIcon-b00d259e.js";import"./index-c4d0dbf5.js";const n=({type:t})=>e.jsx(u,{$type:t,children:e.jsxs(x,{children:[e.jsx("img",{src:"/assets/woori-pc//etc/loading.svg",alt:"loading..."}),e.jsxs(g,{children:[e.jsx("div",{className:"text en",children:"LOADING..."}),e.jsx("div",{className:"text ko",children:"잠시만 기다려주세요."})]})]})}),x=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-bottom: 3px;
  }
`,g=i.div`
  .text {
    text-align: center;

    &.en {
      color: var(--C-Dark-08);
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 8px;
    }

    &.ko {
      color: var(--C-Dark-06);
      font-size: 16px;
      font-weight: 700;
    }
  }
`,u=i.div`
  position: fixed;
  top: 0px;
  left: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100vw - 80px);
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(24px);
  z-index: 1300;
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: -80px;
    width: 80px;
    height: 100%;
  }

  ${t=>t.$type==="content"&&a`
      position: absolute;
      left: 0;
      width: 100%;
      backdrop-filter: blur(2px);
      border-radius: 12px;
      z-index: 740;
      ::before {
        display: none;
      }
      ${x} {
        flex-direction: row;
        gap: 0 30px;
        img {
          margin-bottom: 0;
        }
      }
      ${g} {
        .text {
          &.en {
            margin-bottom: 0;
          }
        }
      }
    `}
  ${t=>t.$type==="table"&&a`
      position: absolute;
      left: 0;
      width: 100%;
      z-index: 740;
      background-color: #fff;
      ::before {
        display: none;
      }
    `}
`;n.__docgenInfo={description:"",methods:[],displayName:"WOLoading"};const k={title:"WooriPC/Loading/WOLoading",component:n,decorators:[t=>e.jsx("div",{style:{position:"relative",width:"500px",height:"500px",padding:"20px"},children:e.jsx(t,{})})],parameters:{layout:"padded"},tags:["autodocs"],argTypes:{type:{control:null,description:"loading 모션이 왼쪽에 배치됩니다.",defaultValue:{summary:void 0},type:{summary:"function",required:!1}}}},o=()=>e.jsx(e.Fragment,{children:e.jsx(n,{})}),r=()=>e.jsx(e.Fragment,{children:e.jsx(f,{children:e.jsx(n,{type:"content"})})});o.__docgenInfo={description:"",methods:[],displayName:"dafalut"};r.__docgenInfo={description:"",methods:[],displayName:"type"};var s,d,p;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return <>\r
      <WOLoading />\r
    </>;
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,l,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <>\r
      <WOSearchArea>\r
        <WOLoading type={'content'} />\r
      </WOSearchArea>\r
    </>;
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const _=["dafalut","type"];export{_ as __namedExportsOrder,o as dafalut,k as default,r as type};
