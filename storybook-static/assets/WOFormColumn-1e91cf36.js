import{j as o}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import{u as p,a as t}from"./styled-components.browser.esm-aa768a49.js";const s=({col:i,width:d,noWidth:e,children:l,gridType:r,isAlignCenter:$,isAlignStart:n,direction:a,gap:h})=>o.jsx(m,{className:"form-column",$gridType:r,$col:i||1,$isAlignCenter:$,$isAlignStart:n,$width:d,$noWidth:e,$direction:a,$gap:h,children:l}),m=p.div`
  display: flex;
  align-items: ${i=>`${i.$isAlignCenter?"center":"end"}`};
  gap: ${i=>`${i.$gap??4}px`};
  /* width: 230px; */
  width: ${i=>i.$noWidth?"100%":`${i.$width||`${i.$col*230+(i.$col-1)*36}`}px`};
  ${i=>i.$direction==="column"&&t`
      flex-direction: column;
      align-items: flex-start;
    `}

  ${i=>i.$isAlignStart&&t`
      align-items: flex-start;
    `}
  ${i=>i.$gridType==="modal"&&t`
      width: ${d=>`${d.$width||`${d.$col*230+(d.$col-1)*14}`}px`};
    `}
  ${i=>i.$gridType==="type01"&&t`
      > * {
        &:first-child {
          min-width: 113px;
          width: 113px;
        }
        &:last-child {
          width: 100%;
        }
      }
    `}
  ${i=>i.$gridType==="type02"&&t`
      align-items: center;
      > * {
        &:first-child {
          min-width: 60px;
          width: 60px;
        }
        &:last-child {
          width: 100%;
        }
      }
      .line {
        width: 1px;
        height: 16px;
        margin: 0 12px;
        background-color: var(--C-Dark-05);
      }
    `}

    

    ${i=>i.$gridType==="login"&&t`
      align-items: center;
      > * {
        &:first-child {
          min-width: 60px;
          width: 60px;
        }
        &:last-child {
          width: 100%;
        }
      }
    `}

    /* email input 스타일 */
    ${i=>i.$gridType==="type04"&&t`
      > * {
        &:first-child {
          min-width: 113px;
          width: 113px;
        }
        &:last-child {
          width: 100%;
        }
      }
    `}
    
    /* email input 스타일 */
    ${i=>i.$gridType==="type03"&&t`
      > * {
        &:first-child {
          min-width: 210px;
          width: 210px;
        }
        &:last-child {
          width: 100%;
        }
      }
    `}
    
    ${i=>i.$gridType==="full"&&t`
      width: 100%;
    `}

    ${i=>i.$gridType==="email"&&t`
      border-radius: 4px;
      border: 1px solid var(--Cool-Dark-02, #ededf3);
    `}
`;s.__docgenInfo={description:"",methods:[],displayName:"WOFormColumn"};export{s as W};
