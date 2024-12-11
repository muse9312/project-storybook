import{j as t}from"./jsx-runtime-ffb262ed.js";import{r as s}from"./index-76fb7be0.js";import{u as i,a as n}from"./styled-components.browser.esm-aa768a49.js";import{W as I}from"./WOButton-a92410a3.js";const O=({label:e,id:o,name:g,flex:p,height:f,size:u,readonly:$,disabled:b,blind:m,placeholder:v,value:w,rightText:a,type:y,styleType:j,placeholderStyle:k,rightButton:d,rightTimeText:l,onClick:z,RtBtnDisable:C,vailCheck:P})=>{const[h,x]=s.useState(w||""),r=s.useRef(null),[c,R]=s.useState(32);s.useEffect(()=>{r.current&&R(r.current.offsetWidth+32)},[a,d]);const W=D=>{x(D.target.value)},T=()=>{x("")};return t.jsxs(E,{$flex:p,$size:u,className:"input",children:[e&&t.jsx(F,{htmlFor:o,$blind:m,$flex:p,children:e}),t.jsxs(N,{children:[t.jsx(_,{type:y||"text",id:o,name:g,readOnly:$,disabled:b,placeholder:v,onChange:W,value:h,placeholderStyle:k,$styleType:j,$height:f,$rightPadding:c,$vailCheck:P}),h&&t.jsx(S,{className:"clear-btn",type:"button",onClick:T,$rightPadding:c})," "]}),a&&t.jsx(B,{ref:r,children:a}),d&&t.jsx(Y,{ref:r,children:t.jsx(I,{variant:"secondary",size:"md",onClick:z,disabled:C,children:d})}),l&&t.jsx(L,{ref:r,children:l})]})},E=i.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px 0px;
  width: 100%;
  ${e=>e.$flex==="row"&&n`
      flex-direction: row;
      align-items: center;
      gap: 0px 2px;
    `}
`,F=i.label`
  width: 100%;
  color: #333;
  font-size: 13px;
  font-weight: 700;
  line-height: 18px;
  ${e=>e.$blind===!0&&n`
      position: absolute;
      width: 1px;
      height: 1px;
      clip: rect(0, 0, 0, 0);
      overflow: hidden;
    `}
  ${e=>e.$flex==="row"&&n`
      width: 60px;
      font-weight: 700;
    `}
`,N=i.div`
  position: relative;
`,S=i.button`
  position: absolute;
  top: 50%;
  right: ${e=>e.$rightPadding?`${e.$rightPadding-16}px`:"10px"}; // rightPadding 값에 따라 right 값을 동적으로 변경
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  background: url(/assets/woori-pc//icon/input-clear-gray.svg) no-repeat center / cover;
`,_=i.input`
  display: flex;
  width: 100%;
  height: ${e=>e.$height?`${e.$height}px`:"32px"};
  padding: 7px ${e=>e.$rightPadding}px 7px 10px; // 오른쪽 패딩 동적 적용
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  border-radius: 4px;
  border: ${e=>e.$styleType==="email"?"none":"1px solid #ededf3"};

  ${e=>e.$styleType==="login"&&n`
      height: 48px;
      padding: 16px ${o=>o.$rightPadding}px 16px 16px; // 오른쪽 패딩 동적 적용
      border-radius: 4px;

      ${o=>o.$vailCheck==="error"?"border: 1px solid #fc8686;":"border: 1px solid var(--C-Dark-03);"}

      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
      &::placeholder {
        color: var(--C-Dark-06);
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
      }
    `}

  background: #fff;
  color: #333;
  &::placeholder {
    color: #aaa;
    ${e=>e.placeholderStyle&&n`
        color: var(--Red-01, #ff5d5d);
        font-size: 12px;
        font-weight: 700;
        line-height: 18px;
      `}
  }

  &:focus {
    border: 1px solid var(--C-Dark-06);
    outline: none;
  }
  &:read-only {
    border: unset;
    padding: 0 0;
    &:focus {
      border: unset;
    }
    & + .clear-btn {
      display: none;
    }
  }
  &:disabled {
    background: var(--C-Dark-02);
    border: unset;
    color: var(--W-Dark-07);
    padding: 10px;
    &:focus {
      border: unset;
    }
    & + .clear-btn {
      display: none;
    }
  }
`,B=i.div`
  position: absolute;
  right: 10px;
  bottom: 7px;
  color: #333;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`,L=i.div`
  position: absolute;
  right: 10px;
  bottom: 30%;
  color: var(--Red-01);
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
`,Y=i.button`
  position: absolute;
  right: 10px;
  bottom: 7px;
`;O.__docgenInfo={description:"",methods:[],displayName:"WOInput"};export{O as W};
