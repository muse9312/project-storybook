import{j as o}from"./jsx-runtime-ffb262ed.js";import{r as l}from"./index-76fb7be0.js";import{u as H,a as R}from"./styled-components.browser.esm-aa768a49.js";import{_ as W}from"./extends-15b115a7.js";import{_ as ae,d as De,b as ve,u as $e}from"./composeClasses-4118efa7.js";import{r as ue}from"./index-d3ea75b5.js";import{i as C,D as Pe,g as _}from"./Drawer-05549b2e.js";import{u as We,g as Me,b as ne}from"./Modal-9b120e55.js";import{s as Oe,r as je}from"./styled-80c0ceef.js";import{u as Ce}from"./mergeSlotProps-69f81163.js";import{u as we,a as X,o as V}from"./ownerWindow-684f99c0.js";import"./_commonjsHelpers-de833af9.js";import"./index-de0962f3.js";import"./debounce-517eeb3c.js";import"./inheritsLoose-c82a83d4.js";import"./useSlotProps-f7cb9e67.js";function Ne(n){const{children:r,defer:a=!1,fallback:c=null}=n,[s,f]=l.useState(!1);return we(()=>{a||f(!0)},[a]),l.useEffect(()=>{a&&f(!0)},[a]),o.jsx(l.Fragment,{children:s?r:c})}const Ae=["anchor","classes","className","width","style"],Fe=Oe("div",{shouldForwardProp:je})(({theme:n,ownerState:r})=>W({position:"fixed",top:0,left:0,bottom:0,zIndex:n.zIndex.drawer-1},r.anchor==="left"&&{right:"auto"},r.anchor==="right"&&{left:"auto",right:0},r.anchor==="top"&&{bottom:"auto",right:0},r.anchor==="bottom"&&{top:"auto",bottom:0,right:0})),Re=l.forwardRef(function(r,a){const{anchor:c,classes:s={},className:f,width:i,style:D}=r,S=ae(r,Ae),p=r;return o.jsx(Fe,W({className:De("PrivateSwipeArea-root",s.root,s[`anchor${ve(c)}`],f),ref:a,style:W({[C(c)?"width":"height"]:i},D),ownerState:p},S))}),He=Re,ze=["BackdropProps"],Be=["anchor","disableBackdropTransition","disableDiscovery","disableSwipeToOpen","hideBackdrop","hysteresis","allowSwipeInChildren","minFlingVelocity","ModalProps","onClose","onOpen","open","PaperProps","SwipeAreaProps","swipeAreaWidth","transitionDuration","variant"],I=3,te=20;let P=null;function re(n,r,a){return n==="right"?a.body.offsetWidth-r[0].pageX:r[0].pageX}function oe(n,r,a){return n==="bottom"?a.innerHeight-r[0].clientY:r[0].clientY}function A(n,r){return n?r.clientWidth:r.clientHeight}function de(n,r,a,c){return Math.min(Math.max(a?r-n:c+r-n,0),c)}function Le(n,r){const a=[];for(;n&&n!==r.parentElement;){const c=V(r).getComputedStyle(n);c.getPropertyValue("position")==="absolute"||c.getPropertyValue("overflow-x")==="hidden"||(n.clientWidth>0&&n.scrollWidth>n.clientWidth||n.clientHeight>0&&n.scrollHeight>n.clientHeight)&&a.push(n),n=n.parentElement}return a}function Ye({domTreeShapes:n,start:r,current:a,anchor:c}){const s={scrollPosition:{x:"scrollLeft",y:"scrollTop"},scrollLength:{x:"scrollWidth",y:"scrollHeight"},clientLength:{x:"clientWidth",y:"clientHeight"}};return n.some(f=>{let i=a>=r;(c==="top"||c==="left")&&(i=!i);const D=c==="left"||c==="right"?"x":"y",S=Math.round(f[s.scrollPosition[D]]),p=S>0,T=S+f[s.clientLength[D]]<f[s.scrollLength[D]];return!!(i&&T||!i&&p)})}const _e=typeof navigator<"u"&&/iPad|iPhone|iPod/.test(navigator.userAgent),Xe=l.forwardRef(function(r,a){const c=$e({name:"MuiSwipeableDrawer",props:r}),s=We(),f={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{anchor:i="left",disableBackdropTransition:D=!1,disableDiscovery:S=!1,disableSwipeToOpen:p=_e,hideBackdrop:T,hysteresis:N=.52,allowSwipeInChildren:M=!1,minFlingVelocity:x=450,ModalProps:{BackdropProps:xe}={},onClose:ce,onOpen:ye,open:d=!1,PaperProps:E={},SwipeAreaProps:be,swipeAreaWidth:q=20,transitionDuration:G=f,variant:O="temporary"}=c,Se=ae(c.ModalProps,ze),Te=ae(c,Be),[le,U]=l.useState(!1),e=l.useRef({isSwiping:null}),J=l.useRef(),K=l.useRef(),m=l.useRef(),ke=Ce(E.ref,m),z=l.useRef(!1),Q=l.useRef();we(()=>{Q.current=null},[d]);const B=l.useCallback((t,b={})=>{const{mode:u=null,changeTransition:h=!0}=b,w=_(s,i),g=["right","bottom"].indexOf(w)!==-1?1:-1,v=C(i),k=v?`translate(${g*t}px, 0)`:`translate(0, ${g*t}px)`,j=m.current.style;j.webkitTransform=k,j.transform=k;let y="";if(u&&(y=s.transitions.create("all",Me({easing:void 0,style:void 0,timeout:G},{mode:u}))),h&&(j.webkitTransition=y,j.transition=y),!D&&!T){const $=K.current.style;$.opacity=1-t/A(v,m.current),h&&($.webkitTransition=y,$.transition=y)}},[i,D,T,s,G]),L=ne(t=>{if(!z.current)return;if(P=null,z.current=!1,ue.flushSync(()=>{U(!1)}),!e.current.isSwiping){e.current.isSwiping=null;return}e.current.isSwiping=null;const b=_(s,i),u=C(i);let h;u?h=re(b,t.changedTouches,X(t.currentTarget)):h=oe(b,t.changedTouches,V(t.currentTarget));const w=u?e.current.startX:e.current.startY,g=A(u,m.current),v=de(h,w,d,g),k=v/g;if(Math.abs(e.current.velocity)>x&&(Q.current=Math.abs((g-v)/e.current.velocity)*1e3),d){e.current.velocity>x||k>N?ce():B(0,{mode:"exit"});return}e.current.velocity<-x||1-k>N?ye():B(A(u,m.current),{mode:"enter"})}),pe=(t=!1)=>{if(!le){(t||!(S&&M))&&ue.flushSync(()=>{U(!0)});const b=C(i);!d&&m.current&&B(A(b,m.current)+(S?15:-te),{changeTransition:!1}),e.current.velocity=0,e.current.lastTime=null,e.current.lastTranslate=null,e.current.paperHit=!1,z.current=!0}},Z=ne(t=>{if(!m.current||!z.current||P!==null&&P!==e.current)return;pe(!0);const b=_(s,i),u=C(i),h=re(b,t.touches,X(t.currentTarget)),w=oe(b,t.touches,V(t.currentTarget));if(d&&m.current.contains(t.target)&&P===null){const y=Le(t.target,m.current);if(Ye({domTreeShapes:y,start:u?e.current.startX:e.current.startY,current:u?h:w,anchor:i})){P=!0;return}P=e.current}if(e.current.isSwiping==null){const y=Math.abs(h-e.current.startX),$=Math.abs(w-e.current.startY),Y=u?y>$&&y>I:$>y&&$>I;if(Y&&t.cancelable&&t.preventDefault(),Y===!0||(u?$>I:y>I)){if(e.current.isSwiping=Y,!Y){L(t);return}e.current.startX=h,e.current.startY=w,!S&&!d&&(u?e.current.startX-=te:e.current.startY-=te)}}if(!e.current.isSwiping)return;const g=A(u,m.current);let v=u?e.current.startX:e.current.startY;d&&!e.current.paperHit&&(v=Math.min(v,g));const k=de(u?h:w,v,d,g);if(d)if(e.current.paperHit)k===0&&(e.current.startX=h,e.current.startY=w);else if(u?h<g:w<g)e.current.paperHit=!0,e.current.startX=h,e.current.startY=w;else return;e.current.lastTranslate===null&&(e.current.lastTranslate=k,e.current.lastTime=performance.now()+1);const j=(k-e.current.lastTranslate)/(performance.now()-e.current.lastTime)*1e3;e.current.velocity=e.current.velocity*.4+j*.6,e.current.lastTranslate=k,e.current.lastTime=performance.now(),t.cancelable&&t.preventDefault(),B(k)}),ee=ne(t=>{if(t.defaultPrevented||t.defaultMuiPrevented||d&&(T||!K.current.contains(t.target))&&!m.current.contains(t.target))return;const b=_(s,i),u=C(i),h=re(b,t.touches,X(t.currentTarget)),w=oe(b,t.touches,V(t.currentTarget));if(!d){var g;if(p||!(t.target===J.current||(g=m.current)!=null&&g.contains(t.target)&&(typeof M=="function"?M(t,J.current,m.current):M)))return;if(u){if(h>q)return}else if(w>q)return}t.defaultMuiPrevented=!0,P=null,e.current.startX=h,e.current.startY=w,pe()});return l.useEffect(()=>{if(O==="temporary"){const t=X(m.current);return t.addEventListener("touchstart",ee),t.addEventListener("touchmove",Z,{passive:!d}),t.addEventListener("touchend",L),()=>{t.removeEventListener("touchstart",ee),t.removeEventListener("touchmove",Z,{passive:!d}),t.removeEventListener("touchend",L)}}},[O,d,ee,Z,L]),l.useEffect(()=>()=>{P===e.current&&(P=null)},[]),l.useEffect(()=>{d||U(!1)},[d]),o.jsxs(l.Fragment,{children:[o.jsx(Pe,W({open:O==="temporary"&&le?!0:d,variant:O,ModalProps:W({BackdropProps:W({},xe,{ref:K})},O==="temporary"&&{keepMounted:!0},Se),hideBackdrop:T,PaperProps:W({},E,{style:W({pointerEvents:O==="temporary"&&!d&&!M?"none":""},E.style),ref:ke}),anchor:i,transitionDuration:Q.current||G,onClose:ce,ref:a},Te)),!p&&O==="temporary"&&o.jsx(Ne,{children:o.jsx(He,W({anchor:i,ref:J,width:q},be))})]})}),Ie=Xe,ie=({user:n,isOpen:r,setIsOpen:a,children:c,noneFooter:s,checkedCount:f,selectArea:i})=>{const[D,S]=l.useState(116),[p,T]=l.useState(r||!1);l.useEffect(()=>{S(s?58:116)},[s]),l.useEffect(()=>{r!==p&&T(r)},[r,p]);const N=x=>{T(x),a(x)},M=x=>{(x&&!p||!x&&p)&&(T(x),a(x))};return o.jsx(o.Fragment,{children:o.jsxs(Ve,{anchor:"bottom",open:p,onClose:()=>N(!1),onOpen:()=>N(!0),onClick:()=>M(!0),swipeAreaWidth:D,disableSwipeToOpen:!1,$noneFooter:s,ModalProps:{keepMounted:!0},children:[o.jsxs(Ee,{$open:p,$noneFooter:s,children:[o.jsx(ge,{type:"button",onClick:()=>M(!1)}),n===1?o.jsx(o.Fragment,{children:s?o.jsx(se,{$open:p,className:p?"":"center",children:o.jsxs("div",{className:"work-wrap",children:["선택된 업무",o.jsx("span",{className:"num",children:" 01"}),"건"]})}):o.jsxs(se,{$open:p,children:[o.jsxs("div",{className:"area-wrap",children:["선택된 기관 ",o.jsx("span",{className:"area",children:i})]}),o.jsxs("div",{className:"work-wrap",children:[p?"선택된 업무":"업무",o.jsxs("span",{className:"num",children:[" ",f<10?`0${f}`:f]}),"건"]})]})}):o.jsx(se,{$open:p,className:p?"":"center",children:o.jsxs("div",{className:"work-wrap",children:["선택된 업무",o.jsxs("span",{className:"num",children:[" ",f<10?`0${f}`:f]}),"건"]})})]}),o.jsx(qe,{$noneFooter:s,children:c})]})})},Ve=H(Ie)`
  z-index: 700;
  .MuiPaper-root {
    overflow: visible;
    height: calc(100dvh - 160px);
    background-color: #fff;
    ${n=>n.$noneFooter&&R`
        height: calc(100dvh - 102px);
      `}
  }
`,ge=H.button`
  width: 35px;
  height: 10px;
  background: url(/assets/woori-mobile/icon/arr-swipeable.svg) no-repeat center / cover;
`,Ee=H.div`
  flex: 0 0 auto;
  position: absolute;
  top: -116px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px 0;
  width: 100%;
  height: 117px;
  padding: 8px 0 0;
  border-radius: 24px 24px 0px 0px;
  box-shadow: 0px -3px 14px 0px rgba(0, 0, 0, 0.1);
  background: #fff;
  visibility: visible;
  ${n=>n.$open&&R`
      box-shadow: unset;
      align-items: flex-start;
      ${ge} {
        margin: 0 auto;
        transform: rotate(180deg);
      }
    `}
  ${n=>n.$noneFooter&&R`
      top: -58px;
      height: 58px;
    `}
`,qe=H.div`
  position: absolute;
  top: -68px;
  width: 100%;
  height: 100%;
  padding: 10px 0 20px;
  background-color: #fff;
  overflow-y: auto;
  ${n=>n.$noneFooter&&R`
      top: -10px;
    `}
`,se=H.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
  color: var(--W-Dark-11, #333);
  font-size: 14px;
  font-weight: 400;
  &.center {
    justify-content: center;
  }
  .area-wrap {
    color: var(--W-Dark-10, #555);
    font-size: 14px;
    font-weight: 400;
    .area {
      color: var(--C-Dark-11, #1a2c49);
      font-weight: 700;
    }
  }
  .work-wrap {
    color: var(--W-Dark-10, #555);
    font-size: 14px;
    font-weight: 400;
    .num {
      color: var(--Blue-01, #3284ff);
      font-weight: 700;
    }
  }

  ${n=>n.$open&&R`
      justify-content: flex-start;
      .area-wrap {
        display: none;
      }
      .work-wrap {
        font-size: 16px;
        font-weight: 700;
      }
      font-size: 16px;
      font-weight: 700;
      line-height: 21px;
    `}
`;ie.__docgenInfo={description:"",methods:[],displayName:"WOSwipeableModal"};const Ge=`import { SwipeableDrawer } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const WOSwipeableModal = ({ user, isOpen, setIsOpen, children, noneFooter, checkedCount, selectArea }) => {
  const [drawerBleeding, setDrawerBleeding] = useState(116);
  const [open, setOpen] = useState(isOpen || false);

  useEffect(() => {
    if (noneFooter) {
      setDrawerBleeding(58);
    } else {
      setDrawerBleeding(116);
    }
  }, [noneFooter]);

  useEffect(() => {
    if (isOpen !== open) {
      setOpen(isOpen);
    }
  }, [isOpen, open]);

  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
    setIsOpen(newOpen);
  };
  const clickDrawerOpen = (newOpen) => {
    if (newOpen && !open) {
      setOpen(newOpen);
      setIsOpen(newOpen);
    } else if (!newOpen && open) {
      setOpen(newOpen);
      setIsOpen(newOpen);
    }
  };

  return (
    <>
      <DrawerCustom
        anchor='bottom'
        open={open}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
        onClick={() => clickDrawerOpen(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        $noneFooter={noneFooter}
        ModalProps={{
          keepMounted: true,
        }}>
        <TopHeader $open={open} $noneFooter={noneFooter}>
          <Arr type='button' onClick={() => clickDrawerOpen(false)} />
          {/* 유저 권한 분기 */}
          {user === 1 ? (
            <>
              {noneFooter ? (
                <TitleWrap $open={open} className={open ? '' : 'center'}>
                  <div className='work-wrap'>
                    선택된 업무
                    <span className='num'> 01</span>건
                  </div>
                </TitleWrap>
              ) : (
                <TitleWrap $open={open}>
                  <div className='area-wrap'>
                    선택된 기관 <span className='area'>{selectArea}</span>
                  </div>
                  <div className='work-wrap'>
                    {open ? '선택된 업무' : '업무'}
                    <span className='num'> {checkedCount < 10 ? \`0\${checkedCount}\` : checkedCount}</span>건
                  </div>
                </TitleWrap>
              )}
            </>
          ) : (
            <TitleWrap $open={open} className={open ? '' : 'center'}>
              <div className='work-wrap'>
                선택된 업무
                <span className='num'> {checkedCount < 10 ? \`0\${checkedCount}\` : checkedCount}</span>건
              </div>
            </TitleWrap>
          )}
        </TopHeader>
        <ContentWrap $noneFooter={noneFooter}>{children}</ContentWrap>
      </DrawerCustom>
    </>
  );
};

export default WOSwipeableModal;

const DrawerCustom = styled(SwipeableDrawer)\`
  z-index: 700;
  .MuiPaper-root {
    overflow: visible;
    height: calc(100dvh - 160px);
    background-color: #fff;
    \${(props) =>
      props.$noneFooter &&
      css\`
        height: calc(100dvh - 102px);
      \`}
  }
\`;
const Arr = styled.button\`
  width: 35px;
  height: 10px;
  background: url(/assets/woori-mobile/icon/arr-swipeable.svg) no-repeat center / cover;
\`;
const TopHeader = styled.div\`
  flex: 0 0 auto;
  position: absolute;
  top: -116px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px 0;
  width: 100%;
  height: 117px;
  padding: 8px 0 0;
  border-radius: 24px 24px 0px 0px;
  box-shadow: 0px -3px 14px 0px rgba(0, 0, 0, 0.1);
  background: #fff;
  visibility: visible;
  \${(props) =>
    props.$open &&
    css\`
      box-shadow: unset;
      align-items: flex-start;
      \${Arr} {
        margin: 0 auto;
        transform: rotate(180deg);
      }
    \`}
  \${(props) =>
    props.$noneFooter &&
    css\`
      top: -58px;
      height: 58px;
    \`}
\`;
const ContentWrap = styled.div\`
  position: absolute;
  top: -68px;
  width: 100%;
  height: 100%;
  padding: 10px 0 20px;
  background-color: #fff;
  overflow-y: auto;
  \${(props) =>
    props.$noneFooter &&
    css\`
      top: -10px;
    \`}
\`;

const TitleWrap = styled.div\`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
  color: var(--W-Dark-11, #333);
  font-size: 14px;
  font-weight: 400;
  &.center {
    justify-content: center;
  }
  .area-wrap {
    color: var(--W-Dark-10, #555);
    font-size: 14px;
    font-weight: 400;
    .area {
      color: var(--C-Dark-11, #1a2c49);
      font-weight: 700;
    }
  }
  .work-wrap {
    color: var(--W-Dark-10, #555);
    font-size: 14px;
    font-weight: 400;
    .num {
      color: var(--Blue-01, #3284ff);
      font-weight: 700;
    }
  }

  \${(props) =>
    props.$open &&
    css\`
      justify-content: flex-start;
      .area-wrap {
        display: none;
      }
      .work-wrap {
        font-size: 16px;
        font-weight: 700;
      }
      font-size: 16px;
      font-weight: 700;
      line-height: 21px;
    \`}
\`;
`,dn={title:"WooriMobile/Modal/WOSwipeableModal",component:ie,decorators:[n=>o.jsx("div",{style:{width:"360px",height:"700px",backgroundColor:"#fff"},children:o.jsx(n,{})})],parameters:{layout:"centered",storySource:{source:Ge}},tags:["autodocs"],argTypes:{isOpen:{control:"boolean",description:"modal 오픈상태 입니다.",defaultValue:{summary:!1},type:{summary:"boolean",required:!0}},title:{control:"text",description:"modal 타이틀명 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}},buttons:{description:"modal footer 버튼 입니다. 컴포넌트를 전달하면 됩니다."},children:{description:"modal 콘텐츠 및 버튼영역 입니다."},onClose:{control:"text",description:"modal 닫힐때 실행되는 메소드 입니다.",action:"onClick",type:{summary:"function",required:!1}},size:{control:"select",description:"modal 사이즈 입니다.",options:["fit",void 0],defaultValue:{summary:"sm"},type:{summary:"string",required:!1}},buttonGrid:{control:"text",description:"modal buttonGrid 입니다.",action:"onClick",type:{summary:"string",required:!1}}}},F=()=>o.jsx(o.Fragment,{children:o.jsx(ie,{})});F.__docgenInfo={description:"",methods:[],displayName:"Default"};var fe,he,me;F.parameters={...F.parameters,docs:{...(fe=F.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  return <>\r
            <WOSwipeableModal></WOSwipeableModal>\r
        </>;
}`,...(me=(he=F.parameters)==null?void 0:he.docs)==null?void 0:me.source}}};const fn=["Default"];export{F as Default,fn as __namedExportsOrder,dn as default};
