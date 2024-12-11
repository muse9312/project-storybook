import{j as r}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import{a as e,u as n}from"./styled-components.browser.esm-aa768a49.js";import{I as i}from"./InputLabel-7ccef553.js";const a=e`
  filter: brightness(0) saturate(100%) invert(68%) sepia(15%) saturate(222%) hue-rotate(177deg) brightness(95%) contrast(87%);
`,l=e`
  position: static;
  transform: none;
  pointer-events: all;

  display: flex;
  align-items: center;
  color: var(--W-Dark-10);
  font-family: 'Pretendard', sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;

  &.Mui-focused {
    color: var(--W-Dark-10);
  }
  &.Mui-disabled {
    color: var(--W-Dark-10);
  }

  // label color
  ${o=>o.$color==="blue"&&e`
      color: var(--Blue-01);
      &.Mui-focused {
        color: var(--Blue-01);
      }
    `}
  ${o=>o.$color==="red"&&e`
      color: var(--Red-01);
      &.Mui-focused {
        color: var(--Red-01);
      }
    `}
`,s=e`
  border-color: var(--Red-02);
`,p=e`
  border-color: transparent;
  // input
  .MuiInputBase-input {
    padding-left: 0;
  }
  .MuiAutocomplete-endAdornment {
    display: none;
  }

  // datepicker
  // calendar 아이콘
  .MuiInputAdornment-root {
    display: none;
  }
`,b=e`
  width: 100%;
  height: 38px;
  padding: 0 !important;
  background-color: transparent;
  display: flex;
  border-radius: 0;
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

  // error
  &.Mui-error {
    ${s}
  }

  // disabled
  &.Mui-disabled {
    .MuiSelect-icon,
    .MuiAutocomplete-popupIndicator {
      ${a}
    }
    .MuiInputBase-input {
      color: var(--W-Dark-07);
      font-weight: 400;
    }

    border-color: var(--C-Dark-04);
  }
  // input
  .MuiInputBase-input {
    height: 26px;
    line-height: 26px;
    padding: 6px 0;
    padding-right: 32px !important;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  // select
  &.readonly {
    .MuiSelect-icon {
      display: none;
    }
    ${p}
  }

  // clear 아이콘
  .MuiAutocomplete-clearIndicator {
    margin-right: 0;
    svg {
      width: 14px;
      height: 14px;
    }
  }

  // arr 아이콘
  .MuiAutocomplete-endAdornment {
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    .MuiAutocomplete-clearIndicator {
      width: 16px;
      height: 16px;
      background: url(/assets/woori-mobile/icon/input-clear-gray.svg) no-repeat center / cover;
      margin-right: 4px;
      padding: 0;
      .MuiSvgIcon-root {
        display: none;
      }
    }
    .MuiAutocomplete-popupIndicator {
      width: 14px;
      height: 14px;
      background: url(/assets/woori-mobile/icon/arrow-dropdown-black.svg) no-repeat center / cover;
      padding: 0;
      .MuiSvgIcon-root {
        display: none;
      }
    }
  }
  .MuiSelect-icon {
    top: 50%;
    transform: translateY(-50%);
    width: 14px;
    height: 14px;
    background: url(/assets/woori-mobile/icon/arrow-dropdown-black.svg) no-repeat center / cover;
    right: 0;
    &.MuiSelect-iconOpen {
      transform: translateY(-50%) rotate(180deg);
    }
    path {
      display: none;
    }
  }
`,d=({label:o,color:t})=>r.jsx(r.Fragment,{children:r.jsx(c,{id:o,$color:t,children:o})}),c=n(i)`
  &.MuiFormLabel-root {
    ${l}
  }
`;d.__docgenInfo={description:"",methods:[],displayName:"WOLabel"};export{d as W,p as a,s as b,a as d,b as i,l};
