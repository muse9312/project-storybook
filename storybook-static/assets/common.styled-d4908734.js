import{a as e}from"./styled-components.browser.esm-aa768a49.js";const o=e`
  filter: brightness(0) saturate(100%) invert(68%) sepia(15%) saturate(222%) hue-rotate(177deg) brightness(95%) contrast(87%);
`,i=e`
  position: static;
  transform: none;
  pointer-events: all;

  display: flex;
  align-items: center;
  color: var(--W-Dark-11);
  font-family: 'Pretendard', sans-serif;
  font-size: 13px;
  font-weight: 700;
  line-height: 18px;

  &.Mui-focused {
    color: var(--W-Dark-11);
  }
  &.Mui-disabled {
    color: var(--W-Dark-11);
  }

  // label color
  ${t=>t.$color==="blue"&&e`
      color: var(--Blue-01);
      &.Mui-focused {
        color: var(--Blue-01);
      }
    `}
  ${t=>t.$color==="red"&&e`
      color: var(--Red-01);
      &.Mui-focused {
        color: var(--Red-01);
      }
    `}
`,r=e`
  border-color: var(--Red-02);
`,a=e`
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
`,s=e`
  width: 100%;

  height: ${t=>`${t.$height||32}px`};

  padding: 0 !important;

  display: flex;
  border-radius: 4px;
  border: 1px solid #ededf3;
  background-color: var(--White);
  justify-content: space-between;
  align-items: center;

  font-family: 'Pretendard', sans-serif;
  color: #333;
  font-size: 12px;
  font-weight: 400;

  legend {
    display: none;
  }

  // error
  &.Mui-error {
    ${r}
  }

  // disabled
  &.Mui-disabled {
    background: var(--C-Dark-02);
    .MuiSelect-icon,
    .MuiAutocomplete-popupIndicator {
      ${o}
    }
    .MuiInputBase-input {
      color: var(--W-Dark-07);
    }
  }
  // input
  .MuiInputBase-input {
    height: auto;
    padding: 6px 0 6px 10px;
    padding-right: 48px !important;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    ${e`
      height: 100%;
      box-sizing: border-box;
    `}
    &:focus {
      border-radius: 4px;

      ${e`
        border: none;
      `}
    }
  }

  // select
  &.readonly {
    .MuiSelect-icon {
      display: none;
    }
    ${a}
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
    right: 10px;
    .MuiAutocomplete-clearIndicator {
      width: 16px;
      height: 16px;
      background: url(/assets/woori-pc//icon/input-clear-gray.svg) no-repeat center / cover;
      margin-right: 4px;
      padding: 0;
      .MuiSvgIcon-root {
        display: none;
      }
    }
    .MuiAutocomplete-popupIndicator {
      width: 16px;
      height: 16px;
      background: url(/assets/woori-pc//icon/arrow-dropdown-black.svg) no-repeat center / cover;
      padding: 0;
      .MuiSvgIcon-root {
        display: none;
      }
    }
  }
  .MuiSelect-icon {
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background: url(/assets/woori-pc//icon/arrow-dropdown-black.svg) no-repeat center / cover;
    right: 10px;
    &.MuiSelect-iconOpen {
      transform: translateY(-50%) rotate(180deg);
    }
    path {
      display: none;
    }
  }
`;e`
  .select-wrap {
    .MuiInputBase-root {
      border-color: rgba(189, 215, 255, 0.2);
      background: transparent;
      .MuiInputBase-input {
        color: #fff;
        font-weight: 700;
      }
      svg {
        filter: brightness(0) invert(1);
        opacity: 0.4;
      }
    }
  }
`;const p=e`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  border-radius: 4px;
  width: fit-content;

  // default size
  font-size: 12px;
  height: 24px;
  padding: 2px 8px;
`,c=e`
  // default variant
  background-color: #0e213f;
  color: #fff;

  &:hover,
  &.active {
    background-color: #263752;
  }

  &:disabled {
    background-color: #3c4b63;
    color: #86909f;
    .icon-wrap .icon {
      filter: brightness(0) saturate(100%) invert(61%) sepia(8%) saturate(527%) hue-rotate(177deg) brightness(91%) contrast(95%);
    }
  }
`,l=e`
  background-color: #e5e5ed;
  color: #263752;

  &:hover,
  &.active {
    background-color: #ededf3;
  }

  &:disabled {
    background-color: #e5e5ed;
    color: #9ea6b2;
  }
`,d=e`
  font-size: 14px;
  min-width: 80px;
  height: 32px;
  padding: 4px 12px;
`;e`
  display: flex;
  align-items: center;
  height: 16px;
  gap: 0 12px;
`;e`
  color: ${t=>{switch(t.$vailCheck){case"pass":return"var(--Blue-02)";case"error":return"var(--Red-02)";default:return"var(--W-Dark-06)"}}};
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.12px;
`;export{p as a,d as b,a as c,o as d,r as e,s as i,i as l,c as p,l as s};
