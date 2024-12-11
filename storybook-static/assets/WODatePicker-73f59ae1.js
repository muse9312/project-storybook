import{j as o}from"./jsx-runtime-ffb262ed.js";import{r as c}from"./index-76fb7be0.js";import{u as p,a as D}from"./styled-components.browser.esm-aa768a49.js";import{d as I,L as M,A as j,D as w}from"./DatePicker-8b752de9.js";import{d as B}from"./common-e2496f61.js";import{l as W,d as v,a as P,b as E,W as O}from"./WOLabel-9cebf678.js";const C=({label:t,labelColor:u,value:e,dateFormat:m,readonly:i,disabled:f,isError:x,onChange:n,noneFocus:g})=>{const[s,d]=c.useState(""),h=l=>{const{$y:b,$M:k,$D:a}=l,r=k+1,$=`${b}-${r>=10?r:`0${r}`}-${a>=10?a:`0${a}`}`;d(l),n&&n($)};c.useEffect(()=>{d(e?I(e):"")},[e]);const y=()=>{};return o.jsx(S,{className:"date-picker-wrap",children:o.jsxs(M,{dateAdapter:j,children:[t&&o.jsx(O,{label:t,color:u}),o.jsx(A,{className:`date-picker ${i?"readonly":""}`,label:"",format:m||B,slots:{openPickerIcon:y},value:s||null,readOnly:i,disabled:f,$isError:x,onChange:h,$noneFocus:g})]})})},S=p.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px 0;
`,A=p(w)`
  &.date-picker {
    display: flex;
    flex-direction: column;
    gap: 4px 0;
  }

  .MuiInputBase-root:focus-within {
  }

  // label
  .MuiFormLabel-root {
    ${W}
  }

  // datePicker
  .MuiInputBase-root {
    width: 100%;
    height: 38px;
    padding-right: 0;
    border-radius: 0;
    display: flex;
    border-bottom: 1px solid var(--C-Dark-04);
    justify-content: space-between;
    align-items: center;

    font-family: 'Pretendard', sans-serif;
    color: var(--W-Dark-11);
    font-size: 14px;
    font-weight: 700;

    legend {
      display: none;
    }

    background: url('/assets/woori-mobile/icon/calendar.svg') no-repeat center right / 18px;

    .MuiButtonBase-root {
      width: 18px;
      height: 18px;
    }

    &.Mui-disabled {
      color: var(--W-Dark-07);
      border-color: var(--C-Dark-04);
      border-radius: 0;
      .MuiIconButton-root {
        img {
          ${v}
        }
      }
    }

    // calendar 아이콘
    .MuiInputAdornment-root {
      margin: 0 2px 0 0;
      .MuiIconButton-root {
        padding: 0;
        display: block;
        margin-right: 0;

        &:hover {
          background: none;
        }
      }
    }

    // input
    .MuiInputBase-input {
      display: flex;
      height: 100%;
      box-sizing: border-box;
      padding: 0;
      -webkit-text-fill-color: initial;
      &::placeholder {
        opacity: 1;
        font-weight: 400;
        color: var(--W-Dark-06);
      }
    }

    &.readonly {
      .MuiInputBase-root {
        ${P}
      }
    }

    ${t=>t.$isError&&D`
        .MuiInputBase-root {
          ${E}
        }
      `}

    .MuiOutlinedInput-notchedOutline {
      display: none;
    }
  }
`;C.__docgenInfo={description:"",methods:[],displayName:"WODatePicker"};export{C as W};
