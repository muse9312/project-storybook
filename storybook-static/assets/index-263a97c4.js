import{j as e}from"./jsx-runtime-ffb262ed.js";import{R as k,r as i}from"./index-76fb7be0.js";import{u as o,a as n}from"./styled-components.browser.esm-aa768a49.js";const g=k.forwardRef((t,u)=>{const[d,l]=i.useState(""),[x,b]=i.useState(0),[h,p]=i.useState(0),c=i.useRef(null),s=i.useRef(null);i.useEffect(()=>{l(t.value||"")},[t.value]),i.useEffect(()=>{c.current&&b(c.current.offsetWidth),s.current&&p(s.current.offsetWidth)},[t.button,t.rightText,t.time]);const m=r=>{l(r.target.value),t.onChange&&t.onChange(r)},$=r=>{r.preventDefault(),l("")};return e.jsxs(w,{children:[e.jsx(v,{bg:t.bg,labelVisible:t.labelVisible,children:t.label}),e.jsxs(f,{children:[e.jsx(T,{as:t.as,ref:u,name:t.name,id:t.id,placeholder:t.placeholder,value:d,bg:t.bg,search:t.search,noneClear:t.noneClear,onChange:m,disabled:t.disabled,rightText:t.rightText,rightTextWidth:x,time:t.time,timeWidth:h,error:t.error,errorMsg:t.errorMsg,autoComplete:"off",maxlength:t.maxlength,pattern:t.pattern,onFocus:t.onFocus,onBlur:t.onBlur}),d!==""&&e.jsx(a,{noneClear:t.noneClear,bg:t.bg,onMouseDown:$,right:Math.max(x,h)+24,rightText:t.rightText,time:t.time}),t.time&&e.jsx(M,{ref:s,button:t.button,children:t.time}),t.rightText&&e.jsx(I,{ref:c,children:t.rightText})]}),t.errorMsg&&e.jsx(j,{children:t.errorMsg.split(`
`).map(r=>e.jsxs(e.Fragment,{children:[r,e.jsx("br",{})]}))}),t.completeMsg&&e.jsx(y,{children:t.completeMsg}),t.defaultMsg&&e.jsx(C,{children:t.defaultMsg})]})}),B=g,w=o.div`
  position: relative;
  width: 100%;
`,f=o.div`
  position: relative;
`,a=o.button`
  display: none;
  position: absolute;
  top: 12px;
  right: ${t=>t.rightText||t.time?`${t.right}px`:"12px"};
  width: 16px;
  height: 16px;
  background: ${t=>t.bg='url("./assets/BeatFolio/input-clear-dark.png") no-repeat center / cover'};
  ${t=>t.noneClear&&`
        opacity:0;
    `}
`,T=o.input`
  width: 100%;
  height: 40px;
  padding: ${t=>t.rightText?`10px ${t.rightTextWidth+50}px 9px 12px`:"10px 40px 9px 12px"};
  padding: ${t=>t.time?`10px ${t.timeWidth+50}px 9px 12px`:"10px 40px 9px 12px"};
  border-radius: 10px;
  position: relative;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  border: 1px solid transparent;
  &::placeholder {
    color: #999;
  }
  &:focus-visible {
    outline: none;
  }

  ${t=>t.bg==="sky"&&n`
      background-color: #f4f6f8;
      color: #000;
      &:focus {
        border: 1px solid #000;
        & + ${a} {
          display: block;
        }
      }
      &:disabled {
        color: #c8cfd4;
        &::placeholder {
          color: #c8cfd4;
        }
      }
    `}
  ${t=>t.bg==="white"&&n`
      background-color: #fff;
      color: #000;
      &:focus {
        border: 1px solid #000;
        & + ${a} {
          display: block;
        }
      }
      &:disabled {
        color: #aaa;
        &::placeholder {
          color: #aaa;
        }
      }
    `}
    ${t=>t.bg==="black"&&n`
      background-color: #181e26;
      color: #fff;
      &:focus {
        border: 1px solid #494870;
        & + ${a} {
          display: block;
        }
      }
      &:disabled {
        color: #999;
        &::placeholder {
          color: #999;
        }
      }
    `}

    ${t=>t.search&&n`
      &:focus {
        border: 1px solid transparent;
        & + ${a} {
          display: block;
        }
      }
    `}
    ${t=>t.errorMsg&&n`
      border: 1px solid red;
      &:focus {
        border: 1px solid red;
      }
    `}
    ${t=>t.error&&n`
      border: 1px solid red;
      &:focus {
        border: 1px solid red;
      }
    `}
`,v=o.label`
  ${t=>t.labelVisible?n`
          font-size: 14px;
          font-weight: 700;
          line-height: 21px;
          color: ${t.bg==="black"?"#fff":"#000"};
          & + ${f} {
            margin-top: 12px;
          }
        `:n`
          font-style: normal !important;
          font-variant-ligatures: normal !important;
          font-variant-caps: normal !important;
          line-height: 0 !important;
          color: transparent !important;
          text-shadow: none !important;
          background-color: transparent !important;
          border: 0 !important;
          z-index: -1;
          border: 0;
          width: 1px;
          height: 1px;
          clip: rect(1px, 1px, 1px, 1px);
          clip-path: inset(50%);
          overflow: hidden;
          white-space: nowrap;
          display: inline-block;
          position: absolute;
        `}
`,I=o.span`
  display: block;
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  font-size: 14px;
  font-weight: 500;
  color: #999;
`,j=o.span`
  display: block;
  padding: 8px 6px 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #f53e50;
`,y=o.span`
  display: block;
  padding: 8px 6px 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #72aeff;
`,C=o.span`
  display: block;
  padding: 8px 6px 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #555;
`,M=o.div`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #777;
`;g.__docgenInfo={description:"",methods:[],displayName:"Input"};export{B as I};
