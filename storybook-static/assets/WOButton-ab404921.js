import{j as s}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import{u as p,a}from"./styled-components.browser.esm-aa768a49.js";const c=({variant:r,size:o,children:i,disabled:e,icon:t,onClick:d,type:n})=>s.jsxs(f,{type:n||"button",className:"btn",$variant:r,$size:o,disabled:e,onClick:d,children:[t&&t," ",i]}),f=p.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: 700;

  // size
  ${r=>r.$size==="sm"&&a`
      height: 24px;
      font-size: 12px;
      width: fit-content;
      padding: 0 8px;
      border-radius: 4px;
    `}
  ${r=>r.$size==="md"&&a`
      height: 38px;
      font-size: 13px;
      width: fit-content;
      padding: 0 16px;
      border-radius: 6px;
    `}
  ${r=>r.$size==="lg"&&a`
      height: 46px;
      font-size: 16px;
      padding: 0 16px;
      border-radius: 8px;
    `}


  // variant
  ${r=>r.$variant==="primary"&&a`
      color: var(--White, #fff);
      background: var(--Grad-BG-02, linear-gradient(343deg, #b0ebcc -1.81%, #99a3ff 46.2%));
      &:disabled {
        color: var(--Blue-04, #bdd7ff);
      }
    `}
  ${r=>r.$variant==="primary-sub"&&a`
      color: var(--White, #fff);
      background: var(--C-Dark-12, #0e213f);
      ${o=>o.$size==="sm"&&a`
          background: var(--C-Dark-10);
        `}
      ${o=>o.$size==="md"&&a`
          background: var(--C-Dark-10);
        `}
      &:disabled {
        color: var(--C-Dark-07, #86909f);
        background: var(--C-Dark-09, #3c4b63);
      }
    `}
  ${r=>r.$variant==="secondary"&&a`
      color: var(--C-Dark-10, #263752);
      background: var(--C-Dark-03, #e5e5ed);
      &:disabled {
        color: var(--C-Dark-06, #9ea6b2);
      }
    `}
  ${r=>r.$variant==="outline"&&a`
      color: var(--C-Dark-10, #263752);
      background-color: var(--White, #fff);
      border: 1px solid var(--C-Dark-04, #d7d7de);
      &:disabled {
        color: var(--C-Dark-06, #9ea6b2);
      }
    `}
  ${r=>r.$variant==="outline-sub01"&&a`
      color: var(--C-Dark-10, #263752);
      background-color: var(--White, #fff);
      border: 1px solid var(--C-Dark-09, #3c4b63);
      &:disabled {
        color: var(--C-Dark-06, #9ea6b2);
      }
    `}
  // size 예외

  ${r=>r.$variant==="outline-sub02"&&a`
      width: fit-content;
      height: 26px;
      padding: 0 10px;
      color: var(--C-Dark-08, #566479);
      background-color: var(--White, #fff);
      border: 1px solid #efefef;
      border-radius: 100px;
      font-size: 12px;
      font-weight: 700;
    `}

    ${r=>r.$variant==="outline-sub03"&&a`
      width: fit-content;
      height: 24px;
      padding: 0 10px;
      color: var(--C-Dark-011);
      background-color: var(--C-Dark-01);
      border-radius: 100px;
      font-size: 12px;
      font-weight: 400;
    `}
    
    ${r=>r.$variant==="text-icon"&&a`
      gap: 0 2px;
      width: fit-content;
      height: 24px;
      padding: 0 6px;
      color: var(--Blue-01, #3284ff);
      font-size: 13px;
      font-weight: 700;
      line-height: 24px;
    `}
`;c.__docgenInfo={description:"",methods:[],displayName:"WOButton"};export{c as W};
