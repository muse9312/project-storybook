import{j as o}from"./jsx-runtime-ffb262ed.js";import{r as u}from"./index-76fb7be0.js";import{u as f,a as n}from"./styled-components.browser.esm-aa768a49.js";import{d as m,L as w,A as j,D as v}from"./DatePicker-8b752de9.js";import{d as W}from"./common-85643e36.js";import{W as B}from"./WOLabel-293b1256.js";import{l as P,d as Y,c as E,e as O}from"./common.styled-d4908734.js";const C=({label:e,labelColor:x,value:t,dateFormat:a,readonly:s,disabled:y,isError:h,onChange:l,noneFocus:g,hidePlaceholder:b})=>{const[d,p]=u.useState(""),k=c=>{const{$y:M,$M:D,$D:r}=c,i=D+1,I=`${M}-${i>=10?i:`0${i}`}-${r>=10?r:`0${r}`}`;p(c),l&&l(I)};u.useEffect(()=>{p(t?m(t):m(""))},[t]);const $=()=>o.jsx("img",{src:"/assets/woori-pc//icon/calendar.svg",alt:"Date picker opening icon",width:14});return o.jsx(S,{className:"date-picker-wrap",children:o.jsxs(w,{dateAdapter:j,children:[e&&o.jsx(B,{label:e,color:x}),o.jsx(A,{className:`date-picker ${s?"readonly":""}`,label:"",openTo:a==="YYYY.MM"?"month":"day",views:a==="YYYY.MM"?["year","month"]:["day"],format:a||W,slots:{openPickerIcon:$},value:d||null,readOnly:s,disabled:y,$isError:h,onChange:k,$noneFocus:g,hidePlaceholder:b})]})})},S=f.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px 0;
  .input-wrap {
    position: absolute;
    top: 26px;
    left: 4px;
  }
`,A=f(v)`
  &.date-picker {
    display: flex;
    flex-direction: column;
    gap: 4px 0;
  }

  .MuiInputBase-root:focus-within {
  }

  .MuiInputBase-input {
    ${e=>e.hidePlaceholder&&n`
        color: #ffff;
      `};
  }

  // label
  .MuiFormLabel-root {
    ${P}
  }

  // datePicker
  .MuiInputBase-root {
    width: 100%;
    height: 32px;
    padding-right: 0;

    display: flex;
    border-radius: 4px;
    border: 1px solid #ededf3;
    background: var(--White);
    justify-content: space-between;
    align-items: center;

    font-family: 'Pretendard', sans-serif;
    color: #333;
    font-size: 12px;
    font-weight: 400;
    ${e=>e.$noneFocus!==!0&&n`
        &.Mui-focused {
          border-radius: 4px;
          border: 1px solid var(--Cool-Dark-06, #9ea6b2);
        }
      `}

    legend {
      display: none;
    }

    &.Mui-disabled {
      background-color: var(--C-Dark-02);
      color: var(--W-Dark-07);
      /* .MuiInputBase-input {
        -webkit-text-fill-color: var(--W-Dark-07);
      } */
      .MuiIconButton-root {
        img {
          ${Y}
        }
      }
    }

    // calendar 아이콘
    .MuiInputAdornment-root {
      margin: 0 2px 0 0;
      .MuiIconButton-root {
        padding: 8px;
        display: block;
        margin-right: 0;
      }
    }

    // input
    .MuiInputBase-input {
      display: flex;
      height: 100%;
      box-sizing: border-box;
      padding: 6px 0 6px 10px;
      -webkit-text-fill-color: initial;
      text-transform: lowercase;
      &::placeholder {
        opacity: 1;

        color: var(--W-Dark-06);
      }
    }
  }

  &.readonly {
    .MuiInputBase-root {
      ${E}
    }
  }

  ${e=>e.$isError&&n`
      .MuiInputBase-root {
        ${O}
      }
    `}

  .MuiOutlinedInput-notchedOutline {
    display: none;
  }
`;C.__docgenInfo={description:"",methods:[],displayName:"WODatePicker"};export{C as W};
