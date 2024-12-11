import{j as t}from"./jsx-runtime-ffb262ed.js";import{r as n}from"./index-76fb7be0.js";import{u as o,a as s}from"./styled-components.browser.esm-aa768a49.js";import{W as $}from"./WOButton-a92410a3.js";import{W as c}from"./WOIcon-b00d259e.js";import{f as b}from"./index-c4d0dbf5.js";const v=({children:e,noneToggleBtn:h,noneBtn:f,type:p,btnText:l,hasColumnTitle:g,gap:m})=>{const[d,x]=n.useState(!1),[r,u]=n.useState(!0),{sideOpen:w}=b()??{},a=n.useRef(null);return n.useEffect(()=>{const i=()=>{a.current&&(a.current.clientHeight>54?x(!0):x(!1))};return setTimeout(()=>{i()},300),window.addEventListener("resize",i),i(),()=>{window.removeEventListener("resize",i)}},[w]),t.jsx(j,{$type:p,children:t.jsxs(y,{$isOpen:r,children:[t.jsx(O,{ref:a,$gap:m,$isOpen:r,$moreForm:d,$hasColumnTitle:g,children:e}),t.jsxs(C,{children:[d&&p!=="modal"&&h!==!0&&t.jsx(k,{type:"button",onClick:()=>u(!r),children:r?t.jsxs(t.Fragment,{children:["접기",t.jsx(c,{width:"16",height:"16",icon:"search-close"})]}):t.jsxs(t.Fragment,{children:["상세",t.jsx(c,{width:"16",height:"16",icon:"search-open"})]})}),!f&&t.jsx($,{variant:"gradient",children:l||"조회"})]})]})})},W=o.div`
  flex: 0 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  padding: 4.5px 12px 4.5px 26px;
  color: var(--Cool-Dark-10);
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
    width: 6px;
    height: 6px;
    background-color: #263752;
    border-radius: 50%;
  }
`,I=o.div`
  display: flex;
  padding-right: 36px;
  gap: 16px 36px;
  border-right: 1px solid var(--C-Dark-03);
  flex-wrap: wrap;
  &:last-child {
    padding-right: 0;
    border-right: unset;
  }
  ${e=>e.$type==="sub"&&s`
      gap: 0 4px;
      padding-right: 0;
      border-right: unset;
      ${W} {
        align-items: flex-end;
        &::before {
          top: auto;
          bottom: 12px;
          transform: unset;
        }
      }
    `}
`,j=o.form`
  position: relative;
  width: 100%;
  min-width: ${e=>e.$type==="modal"?"auto":"1256px"};
  border-radius: 12px;
  box-shadow: ${e=>e.$type==="modal"?"unset":"0px 5px 8px 0px rgba(0, 0, 0, 0.05)"};
  background-color: ${e=>e.$type==="modal"?"var(--C-Dark-01)":"#fff"};
`,y=o.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 20px;
  height: 86px;
  clip-path: inset(0px);

  ${e=>e.$isOpen&&`
    height:auto;
    clip-path: none;

  `}
`,O=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 36px;
  height: fit-content;
  width: 100%;
  ${e=>e.$gap&&s`
      gap: ${e.$gap}px;
    `}

  ${e=>e.$hasColumnTitle&&s`
      flex-wrap: nowrap;
    `}
`,C=o.div`
  flex: 0 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0 12px;
  margin-top: auto;
  margin-left: 10px;
  button {
    flex: 0 0 auto;
    width: fit-content;
  }
`,k=o.button`
  display: flex;
  align-items: center;
  gap: 0 4px;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  color: #0e213f;
  white-space: nowrap;
`;v.__docgenInfo={description:"",methods:[],displayName:"WOSearchArea"};export{I as C,v as W,W as a};
