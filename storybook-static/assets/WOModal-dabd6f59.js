import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as g}from"./index-76fb7be0.js";import{u as a,a as n}from"./styled-components.browser.esm-aa768a49.js";import{W as c}from"./WOIconButton-98070c40.js";import{D as b}from"./Drawer-05549b2e.js";import{D as y}from"./Dialog-d847e8ea.js";const j=({isOpen:t,direction:i,size:m,bgColor:f,title:d,height:u,onClose:$,children:s,type:w})=>{const[x,h]=g.useState(!1),r=o=>{o&&o.type==="keydown"&&(o.key==="Tab"||o.key==="Shift")||($(),h(!1))};return g.useEffect(()=>{h(t)},[t]),e.jsx(e.Fragment,{children:i==="bottom"?e.jsx(M,{anchor:"bottom",className:"bottom-layer",open:x,onClose:o=>r(o),children:e.jsxs(v,{children:[e.jsxs(l,{children:[e.jsx("p",{className:"title",children:d||""}),e.jsx(c,{icon:"close",width:24,height:24,onClick:o=>r(o)})]}),s instanceof Array?e.jsxs(e.Fragment,{children:[e.jsx(p,{className:"bottom",children:s[0]})," ",s[1]]}):e.jsx(p,{className:"bottom",children:s})]})}):e.jsxs(C,{$type:w||"",$size:m||"sm",$bgColor:f||"white",open:x,height:u,"aria-labelledby":"title","aria-describedby":"description",onClose:r,children:[e.jsxs(l,{children:[e.jsx("p",{className:"title",children:d||""}),e.jsx(c,{icon:"close",width:24,height:24,onClick:o=>r(o)})]}),s instanceof Array?e.jsxs(e.Fragment,{children:[e.jsx(p,{children:s[0]})," ",s[1]]}):e.jsx(p,{children:s})]})})},v=a.div`
  position: relative;
  padding: 0 48px 30px;
`,l=a.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  .title {
    color: #333;
    font-size: 18px;
    line-height: 21px;
    font-weight: 700;
  }
`,p=a.div`
  overflow: hidden;
  overflow-y: auto;
  &.bottom {
    overflow-x: auto;
  }
`,M=a(b)`
  &.MuiModal-root {
    // modalWrap
    z-index: 840;
    left: 80px;
    bottom: 70px;
  }
  .MuiBackdrop-root {
    // modalBackdrop
    left: 80px;
    bottom: 70px;
  }
  .MuiDrawer-paperAnchorBottom {
    // modalContentWrap
    border-radius: 24px 24px 0px 0px;
    left: 80px;
    bottom: 70px;
  }
`,C=a(y)`
  .MuiDialog-paper {
    width: 400px;
    height: ${t=>t.height?t.height:400}px;
    max-width: unset;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    overflow: hidden;
    ${t=>t.$type==="main"&&n`
        overflow: visible;
      `}
  }

  ${l} {
    padding: 20px;
  }

  ${p} {
    height: calc(100% - 60px);
    position: relative;
    overflow: inherit;
  }

  // size
  ${t=>t.$size==="md"&&n`
      .MuiDialog-paper {
        width: 600px;
        /* height: 600px; */
        height: ${i=>i.height?i.height:600}px;
      }
    `}
  ${t=>t.$size==="lg"&&n`
      .MuiDialog-paper {
        width: 753px;
        /* height: 600px; */
        height: ${i=>i.height?i.height:600}px;
      }
    `}
  ${t=>t.$size==="xl"&&n`
      .MuiDialog-paper {
        width: 1080px;
        height: ${i=>i.height?i.height:693}px;
        ${i=>i.$type==="guide"&&n`
            height: auto;
          `}/* height: 693px; */
      }
    `}

  ${t=>t.$bgColor==="gray"&&n`
      ${p} {
        background-color: #ededf3;
      }
    `}
`;a.div`
  display: flex;
  flex-direction: column;
  gap: ${t=>`${t.$gap?`${t.$gap}px`:"20px"}`};
  padding: 0 20px 20px;
  height: 100%;
  overflow-y: auto;
  .modal__view-area {
    padding: 0;
  }
  > div:not(.bottom-sheet) {
    height: fit-content;
  }
`;a.div`
  display: flex;
  flex-direction: column;
  .img-wrap {
    &.tab1 {
      padding: 0 0;
      img {
        width: 100%;
        height: auto;
      }
    }
    &.tab2 {
      padding: 12px 20px 20px;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
`;const N=a.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 10px 20px;
  box-shadow: 0px -8px 8px 0px rgba(0, 0, 0, 0.04);
  ${t=>t.$nonBoxShadow&&n`
      box-shadow: none;
    `}
  margin-top: auto;
  z-index: 749;
`,O=a.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;j.__docgenInfo={description:"",methods:[],displayName:"WOModal"};export{O as B,N as M,j as W};
