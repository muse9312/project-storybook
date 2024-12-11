import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as d}from"./index-76fb7be0.js";import{W as m}from"./WOIconButton-4118cf05.js";import{u as n,a as o}from"./styled-components.browser.esm-aa768a49.js";import{D as h}from"./Dialog-d847e8ea.js";const $=({isOpen:t,onClose:p,bgColor:c,title:x,children:f,buttons:a,buttonGrid:u,center:i,totalCount:r})=>{const[g,s]=d.useState(!1),l=()=>{p(),s(!1)};return d.useEffect(()=>{s(t)},[t]),e.jsxs(b,{fullScreen:!i,$center:i,$bgColor:c,open:g,onClose:()=>l(),children:[e.jsxs(j,{$center:i,$totalCount:r,children:[e.jsx("div",{className:"title",children:x}),r&&e.jsxs("div",{className:"count",children:["총 ",r,"건"]}),e.jsx(m,{icon:"close-20",width:20,height:20,onClick:()=>l()})]}),e.jsx(y,{$center:i,children:f}),a&&e.jsx(v,{$buttonGrid:u,className:"dialog-footer",$center:i,children:a})]})},b=n(h)`
  display: flex;
  flex-direction: column;
  &.MuiDialog-root {
    z-index: 3000;
  }
  ${t=>t.$bgColor==="gradient"&&o`
      .MuiPaper-root {
        background: var(--Grad-BG-01, linear-gradient(180deg, #ebedff 0%, #ffeaea 100%));
      }
      .dialog-footer {
        border-top: unset;
      }
    `};
  ${t=>t.$center&&o`
      .MuiPaper-root {
        border-radius: 8px;
        margin: 0 20px;
      }
    `}
`,j=n.div`
  position: relative;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  ${t=>t.$totalCount&&o`
      justify-content: space-between;
      padding: 0 56px 0 20px;
    `}
  .title {
    color: var(--W-Dark-11, #333);
    font-size: 16px;
    font-weight: 700;
  }
  .count {
    color: var(--W-Dark-11, #333);
    font-size: 14px;
    font-weight: 700;
  }
  .icon-btn {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
  ${t=>t.$center&&o`
      justify-content: flex-start;
      padding: 0 20px;
    `}
`,y=n.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  ${t=>t.$center&&o`
      display: flex;
      align-items: center;
      width: 320px;
      padding: 10px 20px;
      .btn + .btn {
        margin-left: 6px;
      }
    `}
`,v=n.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 4px;
  height: 70px;
  padding: 0 12px;
  border-top: 1px solid var(--C-Dark-02);
  ${t=>t.$buttonGrid==="type-01"&&o`
      .btn {
        &:first-child {
          min-width: 113px;
          width: 113px;
        }
      }
    `}
  ${t=>t.$center&&o`
      justify-content: center;
      border-top: unset;
      .btn {
        width: 138px;
      }
    `}
`;$.__docgenInfo={description:"",methods:[],displayName:"WODialog"};export{$ as W};
