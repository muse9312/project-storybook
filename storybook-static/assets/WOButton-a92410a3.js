import{j as t}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import{a as o,u as b}from"./styled-components.browser.esm-aa768a49.js";import{d as h,a as u,p as m,s as v,b as y}from"./common.styled-d4908734.js";const w=({type:r,variant:a,size:c,severity:n,disabled:l,isActive:s,startIcon:e,endIcon:p,children:x,onClick:g,color:f,isMargin:$})=>t.jsxs(k,{type:r||"button",className:`btn ${a} ${s?"active":""}`,onClick:g,disabled:!!l,$variant:a||!n&&"primary",$size:c||"sm",$severity:n||"",color:f,$isMargin:$,children:[e&&t.jsx("span",{className:"icon-wrap start",children:e}),x,p&&t.jsx("span",{className:"icon-wrap end",children:p})]}),i=o`
  &:disabled {
    .icon-wrap .icon {
      ${h}
    }
  }
`,d=o`
  .icon-wrap {
    &.start {
      margin-left: -4px;
    }
    &.end {
      margin-right: -4px;
    }
  }
`,k=b.button`
  ${u}

  // default variant
  background-color: #0e213f;
  color: #fff;

  & + .btn {
    margin-left: ${r=>r.$isMargin?"none":"10px"};
  }

  .icon-wrap {
    display: flex;
    align-items: center;
    &.start {
      padding-right: 4px;
      margin-left: -2px; // 4, 4
    }
    &.end {
      padding-left: 4px;
      margin-right: -2px;
    }
  }

  // variant
  ${r=>r.$variant==="primary"&&o`
      ${m}
    `}
  ${r=>r.$variant==="secondary"&&o`
      ${v}
      ${i}
    `}

  ${r=>r.$variant==="outlined"&&o`
      background-color: transparent;
      color: #263752;
      border: 1px solid #d7d7de;

      // color
      ${a=>a.color&&o`
          color: ${a.color};
        `}

      &:hover,
      &.active {
        background-color: #f5f6fa;
      }

      &:disabled {
        background-color: transparent;
        color: #9ea6b2;
      }

      ${i}
    `}

  // size
  ${r=>r.$size==="md"&&o`
      ${y}
      ${d}
    `}
  ${r=>r.$size==="lg"&&o`
      font-size: 16px;
      min-width: 116px;
      height: 40px;
      padding: 8px 16px;
      ${d}
    `}

  // variant (TODO: 디자인 확정후 수정, hover 임시)
  ${r=>r.$variant==="text"&&o`
      background-color: transparent;
    `}
  ${r=>r.$variant==="notice"&&o`
      width: 140px;
      height: 48px;
      padding: 16px 28px 16px 32px;
      font-size: 16px;
      border-radius: 80px;
      background-color: #f6f6fa;
      color: #333;

      &:hover,
      &.active {
        background-color: #f6f6fa;
      }
      .icon-wrap {
        &.end {
          margin-right: 0;
          padding-left: 10px;
        }
      }

      ${i}
    `}
  ${r=>r.$variant==="gradient"&&o`
      height: 32px;
      padding: 4px 16px;
      font-size: 14px;
      background: linear-gradient(343deg, #b0ebcc -1.81%, #99a3ff 46.2%);
      color: #fff;
    `}
  ${r=>r.$variant==="help"&&o`
      min-width: 53px;
      height: 24px;
      padding: 4px 8px;
      font-size: 14px;
      border: 1px solid #3c4b63;
      background-color: transparent;
      color: #86909f;

      &:hover,
      &.active {
        background-color: transparent;
      }
    `}
  ${r=>r.$variant==="fillOutlined"&&o`
      min-width: 87px;
      height: 32px;
      padding: 4px 12px;
      font-size: 12px;
      border: 1px solid #e5e5ed;
      background-color: #f5f6fa;
      color: #3c4b63;

      &:hover,
      &.active {
        background-color: #f5f6fa;
      }
    `}
  ${r=>r.$variant==="box"&&o`
      height: 40px;
      padding: 12px 16px;
      border-radius: 12px;
      box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.08);
      background-color: #fff;

      color: #0e213f;
      font-size: 16px;
      font-weight: 500;

      .icon-wrap {
        &.start {
          padding-right: 6px;
          margin-left: 0;
        }
      }
    `}

  ${r=>r.$variant==="personal"&&o`
      height: 24px;
      padding: 5px 8px;
      color: #fff;
      background-color: #263752;

      font-size: 12px;
      font-weight: 700;
    `}

    // severityType
    ${r=>r.$severity==="error"&&o`
      min-width: 40px;
      width: 40px;
      height: 24px;
      padding: 4px;
      background-color: transparent;
      font-size: 12px;
      font-weight: 600;
      color: #ff5d5d;
      border: 1px solid rgba(14, 33, 63, 0.1);
      border-radius: 12px;
    `}
    
    // color
    ${r=>r.color&&o`
      color: ${r.color};
    `}
`;w.__docgenInfo={description:"",methods:[],displayName:"WOButton"};export{w as W};
