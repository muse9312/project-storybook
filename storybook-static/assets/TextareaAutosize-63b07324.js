import{_ as S}from"./extends-15b115a7.js";import{_ as F}from"./composeClasses-4118efa7.js";import{r as s}from"./index-76fb7be0.js";import{j as x}from"./jsx-runtime-ffb262ed.js";import{u as M}from"./mergeSlotProps-69f81163.js";import{o as z,u as H}from"./ownerWindow-684f99c0.js";import{d as N}from"./debounce-517eeb3c.js";const j=["onChange","maxRows","minRows","style","value"];function f(o){return parseInt(o,10)||0}const B={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function L(o){return o==null||Object.keys(o).length===0||o.outerHeightStyle===0&&!o.overflowing}const G=s.forwardRef(function(a,C){const{onChange:w,maxRows:m,minRows:c=1,style:y,value:v}=a,E=F(a,j),{current:T}=s.useRef(v!=null),u=s.useRef(null),W=M(C,u),b=s.useRef(null),g=s.useCallback(()=>{const e=u.current,t=z(e).getComputedStyle(e);if(t.width==="0px")return{outerHeightStyle:0,overflowing:!1};const n=b.current;n.style.width=t.width,n.value=e.value||a.placeholder||"x",n.value.slice(-1)===`
`&&(n.value+=" ");const h=t.boxSizing,i=f(t.paddingBottom)+f(t.paddingTop),_=f(t.borderBottomWidth)+f(t.borderTopWidth),R=n.scrollHeight;n.value="x";const p=n.scrollHeight;let r=R;c&&(r=Math.max(Number(c)*p,r)),m&&(r=Math.min(Number(m)*p,r)),r=Math.max(r,p);const k=r+(h==="border-box"?i+_:0),A=Math.abs(r-R)<=1;return{outerHeightStyle:k,overflowing:A}},[m,c,a.placeholder]),d=s.useCallback(()=>{const e=g();if(L(e))return;const l=u.current;l.style.height=`${e.outerHeightStyle}px`,l.style.overflow=e.overflowing?"hidden":""},[g]);H(()=>{const e=()=>{d()};let l;const t=N(e),n=u.current,h=z(n);h.addEventListener("resize",t);let i;return typeof ResizeObserver<"u"&&(i=new ResizeObserver(e),i.observe(n)),()=>{t.clear(),cancelAnimationFrame(l),h.removeEventListener("resize",t),i&&i.disconnect()}},[g,d]),H(()=>{d()});const O=e=>{T||d(),w&&w(e)};return x.jsxs(s.Fragment,{children:[x.jsx("textarea",S({value:v,onChange:O,ref:W,rows:c,style:y},E)),x.jsx("textarea",{"aria-hidden":!0,className:a.className,readOnly:!0,ref:b,tabIndex:-1,style:S({},B.shadow,y,{paddingTop:0,paddingBottom:0})})]})});export{G as T};
