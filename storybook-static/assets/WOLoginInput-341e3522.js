import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as p}from"./index-76fb7be0.js";import{u as o,a}from"./styled-components.browser.esm-aa768a49.js";import{T as $}from"./TextField-8918e36b.js";const w=({id:t,name:h,label:f,type:x,placeholder:g,value:v,button:r,error:l,errorText:d,time:n})=>{const[u,s]=p.useState(v||""),[m,i]=p.useState(!1),b=k=>{s(k.target.value)},I=()=>{i(!0)},M=()=>{u===""&&i(!1)},O=()=>{s(""),i(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(R,{children:[e.jsx(W,{type:x||"text",id:t,name:h,label:m?f:g,value:u,onChange:b,onFocus:I,onBlur:M,error:l,$hasButton:r,$hasTime:n,fullWidth:!0}),r&&r,n&&e.jsx(B,{children:n}),u!==""&&i!==!1?e.jsx(c,{$hasButton:r,$hasTime:n,onClick:O}):""]}),l&&d?e.jsx(C,{children:d}):""]})},c=o.button`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  display: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: url(/assets/woori-mobile/icon/clear-grey-18.svg) no-repeat center / cover;
  ${t=>t.$hasButton&&a`
      right: 116px;
    `}
  ${t=>t.$hasTime&&a`
      right: 65px;
    `}
`,R=o.div`
  position: relative;
  & + & {
    margin-top: 16px;
  }
  .auth-btn {
    position: absolute;
    right: 7px;
    top: 50%;
    transform: translateY(-50%);
  }
  &:focus-within {
    ${c} {
      display: block;
    }
  }
`,W=o($)`
  .MuiFormLabel-root {
    color: var(--C-Dark-06, #9ea6b2);
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 400;
    line-height: 100%;
    top: -1px;
    &.Mui-error {
      color: var(--Red-02, #fc8686);
    }
  }
  .MuiFormLabel-root[data-shrink='true'] {
    top: 3px;
    left: 2px;
    color: var(--W-Dark-06);
    &.Mui-error {
      color: var(--Red-02, #fc8686);
    }
    &.Mui-focused {
      color: var(--W-Dark-11, #333);
      &.Mui-error {
        color: var(--Red-02, #fc8686);
      }
    }
  }

  .MuiInputBase-root {
    line-height: 100%;
    &.MuiOutlinedInput-root {
      border-radius: 8px;
      .MuiOutlinedInput-notchedOutline {
        border-width: 1px;
        border-color: var(--C-Dark-03, #e5e5ed);
      }
      &:hover {
        .MuiOutlinedInput-notchedOutline {
          border-color: var(--C-Dark-03, #e5e5ed);
        }
      }
    }
    &.MuiOutlinedInput-root {
      &.Mui-focused {
        .MuiOutlinedInput-notchedOutline {
          border-width: 1px;
          border-color: var(--W-Dark-11, #333);
          &:hover {
            .MuiOutlinedInput-notchedOutline {
              border-color: var(--W-Dark-11, #333);
            }
          }
        }
      }
    }
    .MuiInputBase-input {
      padding: 13px 14px;
      padding-right: 42px;
      color: var(--W-Dark-11, #333);
      font-family: Pretendard;
      font-size: 14px;
      font-weight: 700;
      line-height: 130%; /* 18.2px */
      text-overflow: ellipsis;
      ${t=>t.$hasButton&&a`
          padding-right: 146px;
        `}
      ${t=>t.$hasTime&&a`
          padding-right: 95px;
        `}
    }
    &.Mui-error {
      .MuiOutlinedInput-notchedOutline {
        border-color: var(--Red-02, #fc8686);
      }
      &:hover {
        .MuiOutlinedInput-notchedOutline {
          border-color: var(--Red-02, #fc8686);
        }
      }
      &.MuiOutlinedInput-root {
        &.Mui-focused {
          .MuiOutlinedInput-notchedOutline {
            border-color: var(--Red-02, #fc8686);
            &:hover {
              .MuiOutlinedInput-notchedOutline {
                border-color: var(--Red-02, #fc8686);
              }
            }
          }
        }
      }
    }
  }
`,B=o.div`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  color: var(--Red-01, #ff5d5d);
  font-size: 14px;
  font-weight: 700;
`,C=o.div`
  margin-top: 8px;
  color: var(--Red-02, #fc8686);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`;w.__docgenInfo={description:"",methods:[],displayName:"WOLoginInput"};export{w as W};
