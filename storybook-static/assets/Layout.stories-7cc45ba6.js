import{j as e}from"./jsx-runtime-ffb262ed.js";import{W as n}from"./WOButton-ab404921.js";import{W as y}from"./WOIcon-d41c31b7.js";import{r as i}from"./index-76fb7be0.js";import{u as r,a as M}from"./styled-components.browser.esm-aa768a49.js";import{W as h}from"./WOIconButton-4118cf05.js";import{W as Ae}from"./WOSearchInput-88444089.js";import{M as z,S as Le,b as q,s as Ie}from"./common-e2496f61.js";import{L as E,B as Me}from"./index-b81b1b23.js";import{W as $}from"./WODialog-1b07d360.js";import{W as j}from"./WOLoginInput-341e3522.js";import{W as ze}from"./WOValidationCheck-32215072.js";import{a as Ne}from"./index-c4d0dbf5.js";import{D as _e}from"./Dialog-d847e8ea.js";import{W as Pe}from"./WOSelectWorkList-c8499a59.js";import{W as t}from"./WOTag-f360050e.js";import{W as H}from"./WOTabs-7578990d.js";import"./_commonjsHelpers-de833af9.js";import"./TextField-8918e36b.js";import"./extends-15b115a7.js";import"./composeClasses-4118efa7.js";import"./styled-80c0ceef.js";import"./InputLabel-7ccef553.js";import"./useId-a47493a3.js";import"./index-de0962f3.js";import"./Modal-9b120e55.js";import"./mergeSlotProps-69f81163.js";import"./inheritsLoose-c82a83d4.js";import"./index-d3ea75b5.js";import"./ownerWindow-684f99c0.js";import"./useSlotProps-f7cb9e67.js";import"./debounce-517eeb3c.js";import"./TextareaAutosize-63b07324.js";import"./Autocomplete-fbfec46a.js";import"./index-08d2ae59.js";import"./Chip-9a81eb61.js";import"./assertThisInitialized-081f9914.js";import"./sweetalert2.all-b9842f3b.js";const me=({isOpen:l,onClose:o})=>{const[b,x]=i.useState(l||!1),u=()=>{o&&o(),x(!1)};return i.useEffect(()=>{x(l)},[l]),e.jsx($,{title:"비밀번호 재설정",fullScreen:!0,isOpen:b,onClose:()=>u(),buttons:e.jsx(e.Fragment,{children:e.jsx(n,{onClick:()=>u(),size:"lg",variant:"primary-sub",children:"비밀번호 재설정"})}),children:e.jsxs(Ee,{children:[e.jsx($e,{children:"* 휴대폰 인증으로 비밀번호를 재설정 하실 수 있습니다."}),e.jsxs(He,{children:[e.jsxs(J,{children:[e.jsx(j,{id:"input02-01",label:"이름",name:"input02",placeholder:"이름을 입력해 주세요."}),e.jsx(j,{id:"input02-02",label:"생년월일",name:"input02",placeholder:"생년월일 6자리를 입력해 주세요."}),e.jsx(j,{id:"input02-03",label:"아이디",name:"input02",placeholder:"아이디를 입력해 주세요."}),e.jsx(j,{id:"input02-04",label:"핸드폰번호",name:"input02",placeholder:"핸드폰번호를 입력해주세요.",button:e.jsx(Re,{type:"button",className:"auth-btn",onClick:()=>{},children:"인증번호 전송"})}),e.jsx(j,{id:"input02-05",label:"인증번호",name:"input02",placeholder:"인증번호를 입력해주세요.",time:"04:20"})]}),e.jsxs(J,{children:[e.jsx(j,{id:"input02-06",label:"비밀번호",name:"input02",type:"password",placeholder:"새 비밀번호를 입력해주세요."}),e.jsx(ze,{itemList:[{id:"1",title:"6자 이상 숫자",isCheck:"pass"},{id:"2",title:"영문",isCheck:"pass"},{id:"3",title:"특수문자",isCheck:"error"}]}),e.jsx(j,{id:"input02-07",label:"새 비밀번호",name:"input02",type:"password",placeholder:"새 비밀번호를 한번 더 입력해주세요.",error:!0,errorText:"비밀번호가 일치하지 않습니다."})]})]})]})})},Ee=r.div`
  flex: 1;
  padding: 30px 20px 70px;
  overflow-y: auto;
`,$e=r.div`
  margin-bottom: 14px;
  color: var(--C-Dark-08, #566479);
  font-size: 12px;
  font-weight: 400;
  white-space: pre-wrap;
`,He=r.form``,J=r.div`
  & + & {
    position: relative;
    margin-top: 60px;
    &::before {
      content: '';
      position: absolute;
      top: -30px;
      left: 0;
      width: 100%;
      height: 1px;
      background: var(--C-Dark-03);
    }
  }
  .validation-check {
    margin: 8px 0 20px;
  }
`,Re=r.button`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 32px;
  padding: 0px 16px;
  color: var(--C-Dark-10);
  font-size: 12px;
  font-weight: 700;
  border-radius: 6px;
  background: var(--C-Dark-03, #e5e5ed);
  &:disabled {
    color: var(--C-Dark-06, #9ea6b2);
  }
`;me.__docgenInfo={description:"",methods:[],displayName:"PasswordResetDialog"};const Ge=[{id:1,title:"아이디",text:"KIMWOORI"},{id:2,title:"성명",text:"김우리"},{id:3,title:"생년월일",text:"1999-01-01"},{id:4,title:"휴대폰 번호",text:"010-2345-9876"}],Ue=[{id:1,title:"소속구청/ 부서",text:`우리은행
기관공금고객부`},{id:2,title:"법인카드 권한",text:"Y"}],fe=({isOpen:l,onClose:o})=>{const[b,x]=i.useState(l||!1),[u,c]=i.useState(!1),A=()=>{o&&o(),x(!1)};return i.useEffect(()=>{x(l)},[l]),e.jsxs(e.Fragment,{children:[e.jsx($,{title:"사용자 설정",fullScreen:!0,isOpen:b,onClose:()=>A(),buttons:e.jsx(e.Fragment,{children:e.jsx(n,{onClick:()=>A(),size:"lg",variant:"primary-sub",children:"확인"})}),children:e.jsxs(Ve,{children:[e.jsxs(N,{children:[e.jsx(Q,{children:"사용자 정보"}),e.jsx(_,{children:Ge.map(g=>e.jsxs(P,{children:[e.jsx("div",{className:"title",children:g.title}),e.jsx("div",{className:"text",children:g.text})]}))})]}),e.jsx(N,{children:e.jsx(_,{children:e.jsxs(P,{$alignCenter:!0,children:[e.jsx("div",{className:"title",children:"비밀번호"}),e.jsx(n,{onClick:()=>{c(!0)},size:"sm",variant:"primary-sub",children:"재설정"})]})})}),e.jsxs(N,{children:[e.jsx(Q,{children:"사용자 소속/ 권한"}),e.jsx(_,{children:Ue.map(g=>e.jsxs(P,{children:[e.jsx("div",{className:"title",children:g.title}),e.jsx("div",{className:"text",children:g.text})]}))})]}),e.jsx(Ke,{children:"* 소속(부서), 권한변경은  PC에서변경해주세요."})]})}),e.jsx(me,{isOpen:u,onClose:()=>c(!1)})]})},Ve=r.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  gap: 8px 0;
`,N=r.div`
  flex: 1;
`,Q=r.div`
  padding: 20px 20px 8px 6px;
  color: var(--Black, #000);
  font-size: 14px;
  font-weight: 700;
`,_=r.div`
  display: flex;
  flex-direction: column;
  gap: 2px 0;
  padding: 20px;
  border-radius: 12px;
  background: #f5f6fa;
`,P=r.div`
  display: flex;
  justify-content: space-between;
  padding: 4px 0;
  font-size: 13px;
  .title {
    color: var(--C-Dark-10, #263752);
    font-weight: 700;
  }
  .text {
    color: var(--C-Dark-08, #566479);
    font-weight: 400;
    white-space: pre-wrap;
    text-align: right;
  }
  ${l=>l.$alignCenter&&M`
      align-items: center;
    `}
`,Ke=r.div`
  padding: 0 12px;
  color: var(--C-Dark-08, #566479);
  font-size: 12px;
  font-weight: 400;
`;fe.__docgenInfo={description:"",methods:[],displayName:"UserSettingDialog"};const We=({isOpen:l,onClose:o})=>{const[b,x]=i.useState(l||!1),[u,c]=i.useState(!1),[A,g]=i.useState({}),De=Ne(),U=()=>{o(),x(!1)};i.useEffect(()=>{x(l)},[l]);const[V,Oe]=i.useState({[z[0].children[0].id]:!1}),[Be,ve]=i.useState(z[0]),[ke,ye]=i.useState([]),K=a=>{var L;ve(a);const s=((L=z.find(I=>I.id===a.id))==null?void 0:L.children)||[];ye(s)},Y=a=>{Oe(s=>({...s,[a]:!s[a]})),g(s=>({...s,[a]:!s[a]}))};i.useEffect(()=>{K(q[0])},[]);const we=()=>{De("/")};return e.jsxs(e.Fragment,{children:[e.jsx(Ye,{fullScreen:!0,open:b,onClose:()=>U(),children:e.jsxs(qe,{children:[e.jsxs(Je,{children:[e.jsxs(Qe,{children:[e.jsxs(Xe,{children:["김우리님",e.jsx(n,{onClick:()=>{},variant:"outline-sub03",children:e.jsxs("p",{children:["결재 ",e.jsx("span",{children:"01"}),"건"]})})]}),e.jsxs(Ze,{children:[e.jsx(h,{icon:"home-30",width:30,height:30,onClick:()=>we()}),e.jsx(h,{icon:"setting-30",width:30,height:30,onClick:()=>c(!0)}),e.jsx(h,{icon:"close-30",width:30,height:30,onClick:()=>U()})]})]}),e.jsx(et,{children:e.jsx(Ae,{tableData:Le,onChange:()=>{},placeholder:"업무 키워드를 검색하세요."})})]}),e.jsxs(tt,{children:[e.jsxs(rt,{children:[e.jsx(lt,{children:q.map(a=>e.jsx(at,{checked:Be.id===a.id,onClick:()=>{K(a)},children:e.jsx("span",{children:a.title})},a.id))}),e.jsx(nt,{children:e.jsx("span",{children:"로그아웃"})})]}),e.jsx(it,{children:e.jsx(st,{children:ke.map(a=>e.jsxs(xt,{as:a.isList?"div":E,to:a.link,dropdownVisible:A[a.id],children:[e.jsxs("button",{type:"button",className:"content",onClick:()=>{a.isList&&a.children&&Y(a.id)},children:[e.jsxs("span",{children:[" ",a.title]}),a.isList&&a.children&&a.children.some(s=>s.tabList)&&e.jsx(ot,{rotate:V[a.id],children:e.jsx(h,{icon:"table-dropdown-black-18",width:14,height:14,onClick:s=>{s.stopPropagation(),Y(a.id)}})})]}),a.isList&&V[a.id]&&a.children.map((s,L)=>s.tabList&&e.jsx(ut,{children:s.tabList.map((I,Fe)=>e.jsxs(bt,{to:I.link,children:["- ",I.tapTitle]},Fe))},L))]},a.id))})})]})]})}),e.jsx(fe,{isOpen:u})]})},Ye=r(_e)`
  &.MuiDialog-root {
    z-index: 3000;
  }
`,qe=r.div`
  height: 100%;
  background-color: var(--White);
`,Je=r.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  border-bottom: 1px solid var(--C-Dark-02);
`,Qe=r.div`
  display: flex;
  width: 100%;
  align-items: center;
  height: 44px;
  justify-content: space-between;
`,Xe=r.div`
  display: flex;
  align-items: center;

  height: 26px;
  gap: 0 8px;
  color: var(--Black);
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  p {
    color: var(--C-Dark-11);
    font-size: 12px;
    font-weight: 400;
  }

  span {
    color: var(--C-Dark-11);
    font-size: 12px;
    font-weight: 700;
  }
`,Ze=r.div`
  display: flex;
  gap: ${l=>l.$gap||"16"}px;
`,et=r.div`
  margin: 12px 0 20px;
`,tt=r.div`
  display: flex;
  height: calc(100dvh - 119px);
`,rt=r.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  justify-content: space-between;
  height: 100%;
  padding-top: 20px;
  overflow-y: auto;
  background: var(--Grad-BG-01, linear-gradient(180deg, #ebedff 0%, #ffeaea 100%));
`,lt=r.div``,at=r.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: 42px;
  padding: 0 20px;
  ${l=>l.checked&&M`
      background: var(--White);
    `}

  span {
    color: var(--Black);
    font-size: 16px;
    font-weight: 400;

    ${l=>l.checked&&M`
        color: var(--Blue-01);
        font-weight: 500;
      `}
  }
`,nt=r.div`
  display: flex;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.3);

  span {
    color: var(--C-Dark-07);
    font-size: 13px;
    font-weight: 400;
    line-height: 17px;
  }
`;//!! Right =================================================
const it=r.div`
  width: 100%;
  padding: 16px 0;
  overflow-y: auto;
`,st=r.div`
  display: flex;
  flex-direction: column;
`,xt=r(E)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 20px;

  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 20px;
    right: 20px;
    bottom: 0;
    border-bottom: 1px solid #eee;
    ${({dropdownVisible:l})=>l&&M`
        border-bottom: none;
      `}
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;

    span {
      color: var(--W-Dark-12);
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
    }
  }
`,ot=r.div`
  display: inline-block;
  transform: ${({rotate:l})=>l?"rotate(180deg)":"rotate(0deg)"};
`,ut=r.div`
  padding: 10px 12px;
  border-radius: 4px;
  background: var(--C-Dark-01);
`,bt=r(E)`
  display: flex;
  align-items: center;
  height: 30px;
  color: var(--C-Dark-07);
  font-size: 13px;
  font-weight: 400;
`;We.__docgenInfo={description:"",methods:[],displayName:"Menu"};const Se=({isOpen:l,onClose:o})=>{const[b,x]=i.useState(l||!1),u=()=>{o&&o(),x(!1)};return i.useEffect(()=>{x(l)},[l]),e.jsx($,{title:"선택된 업무",totalCount:4,bgColor:"gradient",fullScreen:!0,isOpen:b,onClose:()=>u(),buttons:e.jsx(e.Fragment,{children:e.jsx(n,{onClick:()=>{},size:"lg",variant:"primary",children:"조회"})}),children:Ie.map(c=>e.jsx(Pe,{favoriteStatus:c.favoriteStatus,depth1:c.depth1,depth2:c.depth2,depth3:c.depth3},c.id))})};Se.__docgenInfo={description:"",methods:[],displayName:"SelectedWorkDialog"};const d=({title:l})=>{const[o,b]=i.useState(!1),[x,u]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(ct,{className:"header",children:[e.jsxs(dt,{children:[e.jsx(h,{icon:"arr-back-30",width:30,height:30}),e.jsx(pt,{children:l})]}),e.jsxs(Ct,{children:[e.jsx(h,{icon:"star-black-30",width:30,height:30,onClick:()=>{u(!0)}}),e.jsx(h,{icon:"menu-black-30",width:30,height:30,onClick:()=>{b(!0)}})]})]}),e.jsx(Se,{isOpen:x,onClose:()=>u(!1)}),e.jsx(We,{isOpen:o,onClose:()=>b(!1)})]})},ct=r.div`
  flex: 0 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  padding: 0 16px;
  background-color: var(--White);
`,dt=r.div`
  display: flex;
  align-items: center;
  gap: 0 2px;
`,pt=r.h1`
  font-size: 16px;
  font-weight: 700;
  color: var(--Black);
`,Ct=r.div`
  display: flex;
  align-items: center;
  gap: 0 12px;
`;d.__docgenInfo={description:"",methods:[],displayName:"SubHeader"};const f=r.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
`,p=r.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
`,W=r.div`
  & + ${p} {
    margin-top: 8px;
  }
`,gt=r.div`
  padding: 12px 12px 0;
`,Te=r.div`
  font-size: 12px;
  font-weight: 400;
  color: var(--Red-01);
  padding-left: ${l=>l.$pdLf?l.$pdLf:""}px;
  padding-bottom: 12px;
  white-space: pre-wrap;
  &.blue-color {
    color: var(--Blue-01);
  }
  & + & {
    margin-top: -19px;
  }
`,R=r.div`
  height: 40px;
  background-color: var(--White);
  overflow-x: auto;
  overflow-y: hidden;
  padding-right: 20px;
  border-bottom: 1px solid var(--C-Dark-02, #c9c9d0);

  &::-webkit-scrollbar {
    height: 0;
  }
`,w=r.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px 0;
  min-height: 48px;
  padding: 8px 0 8px 20px;
  background-color: var(--White);
  border-bottom: 1px solid var(--C-Dark-02);
`,m=r.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: fit-content;
  overflow-x: auto;
  padding-right: 80px;
  &::-webkit-scrollbar {
    height: 0px;
  }
`,G=r.div`
  display: flex;
  flex-direction: column;
  gap: 8px 0;
  padding: 8px 20px 0;
`;r.div`
  padding: 8px 0px 8px;
`;const F=r.div`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  width: fit-content;
  height: 47px;
  padding: 0 16px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.26) 2.24%,
    rgba(255, 255, 255, 0.57) 4.71%,
    rgba(255, 255, 255, 0.71) 6.55%,
    rgba(255, 255, 255, 0.81) 8.77%,
    rgba(255, 255, 255, 0.92) 11.32%,
    #fff 15.33%
  );
`;r.div`
  width: calc(100% + 40px);
  margin: 0 -20px;
`;r.div`
  display: flex;
  flex-direction: column;
  background: var(--White);
  height: 100%;
  .img-wrap {
    border-bottom: 1px solid var(--C-Dark-03, #e5e5ed);
    height: 41px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .content {
    &-wrap {
      padding: 12px 12px;
      background: var(--C-Dark-03);
      height: 100%;
      overflow-y: auto;
    }
    &-area {
      height: 800px;
      background: var(--White);
    }
  }
`;r.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0 6px;
  background-color: #fff;
  padding: 8px 16px;
`;r.div`
  overflow-y: auto;
`;const C=({children:l})=>e.jsx(jt,{className:"footer",children:l}),jt=r.div`
  flex: 0 0 auto;
  border-top: 1px solid var(--C-Dark-02);
  padding: 12px;
  background-color: var(--White);
  z-index: 800;
`;C.__docgenInfo={description:"",methods:[],displayName:"SubFooter"};const rr={title:"WooriMobile/Layout/Layout",component:n,parameters:{layout:"centered"},decorators:[l=>e.jsx(Me,{children:e.jsx("div",{style:{width:"360px",height:"800px"},children:e.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:e.jsx(l,{})})})})],tags:["autodocs"],argTypes:{}},S=()=>e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Title"}),e.jsx(f,{children:e.jsx(p,{children:"안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요."})}),e.jsx(C,{children:e.jsx(n,{onClick:()=>{},size:"lg",variant:"primary-sub",children:"계좌현황 상세내역"})})]}),T=()=>e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Title"}),e.jsxs(f,{children:[e.jsx(W,{children:e.jsx(R,{children:e.jsx(H,{onChange:()=>{},tabs:[{id:1,name:"tab1"},{id:2,name:"tab2"}]})})}),e.jsx(p,{children:"안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요."})]}),e.jsx(C,{children:e.jsx(n,{onClick:()=>{},size:"lg",variant:"primary-sub",children:"계좌현황 상세내역"})})]}),D=()=>e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Title"}),e.jsxs(f,{children:[e.jsx(W,{children:e.jsxs(w,{children:[e.jsxs(m,{children:[e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"})]}),e.jsx(F,{children:e.jsx(n,{icon:e.jsx(y,{icon:"filter-blue-14"}),onClick:()=>{},variant:"text-icon",children:"필터"})})]})}),e.jsx(p,{children:"안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요."})]}),e.jsx(C,{children:e.jsx(n,{onClick:()=>{},size:"lg",variant:"primary-sub",children:"계좌현황 상세내역"})})]}),O=()=>e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Title"}),e.jsxs(f,{children:[e.jsx(W,{children:e.jsxs(w,{children:[e.jsxs(m,{children:[e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"})]}),e.jsxs(m,{children:[e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"})]}),e.jsx(F,{children:e.jsx(n,{icon:e.jsx(y,{icon:"filter-blue-14"}),onClick:()=>{},variant:"text-icon",children:"필터"})})]})}),e.jsx(p,{children:"안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요."})]}),e.jsx(C,{children:e.jsx(n,{onClick:()=>{},size:"lg",variant:"primary-sub",children:"계좌현황 상세내역"})})]}),B=()=>e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Title"}),e.jsxs(f,{children:[e.jsx(W,{children:e.jsxs(w,{children:[e.jsxs(m,{children:[e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"})]}),e.jsxs(m,{children:[e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"})]}),e.jsx(F,{children:e.jsx(n,{icon:e.jsx(y,{icon:"filter-blue-14"}),onClick:()=>{},variant:"text-icon",children:"필터"})})]})}),e.jsx(G,{children:e.jsx(gt,{className:"supporting-data",children:"데이터 영역이에요"})}),e.jsx(p,{children:"안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요."})]}),e.jsx(C,{children:e.jsx(n,{onClick:()=>{},size:"lg",variant:"primary-sub",children:"계좌현황 상세내역"})})]}),v=()=>e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Title"}),e.jsxs(f,{children:[e.jsxs(W,{children:[e.jsx(R,{children:e.jsx(H,{onChange:()=>{},tabs:[{id:1,name:"tab1"},{id:2,name:"tab2"}]})}),e.jsxs(w,{children:[e.jsxs(m,{children:[e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"})]}),e.jsx(F,{children:e.jsx(n,{icon:e.jsx(y,{icon:"filter-blue-14"}),onClick:()=>{},variant:"text-icon",children:"필터"})})]})]}),e.jsx(G,{children:e.jsx(Te,{className:"supporting-text",children:"*Supoorting text"})}),e.jsx(p,{children:"안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요."})]}),e.jsx(C,{children:e.jsx(n,{onClick:()=>{},size:"lg",variant:"primary-sub",children:"계좌현황 상세내역"})})]}),k=()=>e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Title"}),e.jsxs(f,{children:[e.jsxs(W,{children:[e.jsx(R,{children:e.jsx(H,{onChange:()=>{},tabs:[{id:1,name:"tab1"},{id:2,name:"tab2"}]})}),e.jsxs(w,{children:[e.jsxs(m,{children:[e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"}),e.jsx(t,{label:"label",text:"text"})]}),e.jsx(F,{children:e.jsx(n,{icon:e.jsx(y,{icon:"filter-blue-14"}),onClick:()=>{},variant:"text-icon",children:"필터"})})]})]}),e.jsx(G,{children:e.jsx(Te,{className:"supporting-text",children:"*Supoorting text"})}),e.jsxs(p,{children:["안녕하세요.",e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),"안녕하세요.",e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),"안녕하세요.",e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),"안녕하세요.",e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),"안녕하세요.",e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),"안녕하세요.",e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),"안녕하세요.",e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),"안녕하세요.",e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),"안녕하세요.",e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),"안녕하세요.",e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{})]})]}),e.jsx(C,{children:e.jsx(n,{onClick:()=>{},size:"lg",variant:"primary-sub",children:"계좌현황 상세내역"})})]});S.__docgenInfo={description:"",methods:[],displayName:"SubPage"};T.__docgenInfo={description:"",methods:[],displayName:"Tabs"};D.__docgenInfo={description:"",methods:[],displayName:"Filters"};O.__docgenInfo={description:"",methods:[],displayName:"Filters2"};B.__docgenInfo={description:"",methods:[],displayName:"Data"};v.__docgenInfo={description:"",methods:[],displayName:"SupportingText"};k.__docgenInfo={description:"",methods:[],displayName:"Scroll"};var X,Z,ee;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <>\r
            <SubHeader title={'Title'} />\r
            <S.Main>\r
                <S.ContentWrap>안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.</S.ContentWrap>\r
            </S.Main>\r
            <SubFooter>\r
                <WOButton onClick={() => {}} size="lg" variant="primary-sub">\r
                    계좌현황 상세내역\r
                </WOButton>\r
            </SubFooter>\r
        </>;
}`,...(ee=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,re,le;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  return <>\r
            <SubHeader title={'Title'} />\r
            <S.Main>\r
                <S.TopArea>\r
                    <S.TopAreaTab>\r
                        <WOTabs onChange={() => {}} tabs={[{
            id: 1,
            name: 'tab1'
          }, {
            id: 2,
            name: 'tab2'
          }]} />\r
                    </S.TopAreaTab>\r
                </S.TopArea>\r
                <S.ContentWrap>안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.</S.ContentWrap>\r
            </S.Main>\r
\r
            <SubFooter>\r
                <WOButton onClick={() => {}} size="lg" variant="primary-sub">\r
                    계좌현황 상세내역\r
                </WOButton>\r
            </SubFooter>\r
        </>;
}`,...(le=(re=T.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var ae,ne,ie;D.parameters={...D.parameters,docs:{...(ae=D.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <>\r
            <SubHeader title={'Title'} />\r
            <S.Main>\r
                <S.TopArea>\r
                    <S.TopAreaFilter>\r
                        <S.FilterListWrap>\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                        </S.FilterListWrap>\r
                        <S.FilterBtnWrap>\r
                            <WOButton icon={<WOIcon icon="filter-blue-14" />} onClick={() => {}} variant="text-icon">\r
                                필터\r
                            </WOButton>\r
                        </S.FilterBtnWrap>\r
                    </S.TopAreaFilter>\r
                </S.TopArea>\r
                <S.ContentWrap>안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.</S.ContentWrap>\r
            </S.Main>\r
\r
            <SubFooter>\r
                <WOButton onClick={() => {}} size="lg" variant="primary-sub">\r
                    계좌현황 상세내역\r
                </WOButton>\r
            </SubFooter>\r
        </>;
}`,...(ie=(ne=D.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var se,xe,oe;O.parameters={...O.parameters,docs:{...(se=O.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <>\r
            <SubHeader title={'Title'} />\r
            <S.Main>\r
                <S.TopArea>\r
                    <S.TopAreaFilter>\r
                        <S.FilterListWrap>\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                        </S.FilterListWrap>\r
                        <S.FilterListWrap>\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                        </S.FilterListWrap>\r
                        <S.FilterBtnWrap>\r
                            <WOButton icon={<WOIcon icon="filter-blue-14" />} onClick={() => {}} variant="text-icon">\r
                                필터\r
                            </WOButton>\r
                        </S.FilterBtnWrap>\r
                    </S.TopAreaFilter>\r
                </S.TopArea>\r
                <S.ContentWrap>안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.</S.ContentWrap>\r
            </S.Main>\r
\r
            <SubFooter>\r
                <WOButton onClick={() => {}} size="lg" variant="primary-sub">\r
                    계좌현황 상세내역\r
                </WOButton>\r
            </SubFooter>\r
        </>;
}`,...(oe=(xe=O.parameters)==null?void 0:xe.docs)==null?void 0:oe.source}}};var ue,be,ce;B.parameters={...B.parameters,docs:{...(ue=B.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  return <>\r
            <SubHeader title={'Title'} />\r
            <S.Main>\r
                <S.TopArea>\r
                    <S.TopAreaFilter>\r
                        <S.FilterListWrap>\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                        </S.FilterListWrap>\r
                        <S.FilterListWrap>\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                        </S.FilterListWrap>\r
                        <S.FilterBtnWrap>\r
                            <WOButton icon={<WOIcon icon="filter-blue-14" />} onClick={() => {}} variant="text-icon">\r
                                필터\r
                            </WOButton>\r
                        </S.FilterBtnWrap>\r
                    </S.TopAreaFilter>\r
                </S.TopArea>\r
                <S.MiddleArea>\r
                    <S.SupportingData className="supporting-data">데이터 영역이에요</S.SupportingData>\r
                </S.MiddleArea>\r
                <S.ContentWrap>안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.</S.ContentWrap>\r
            </S.Main>\r
\r
            <SubFooter>\r
                <WOButton onClick={() => {}} size="lg" variant="primary-sub">\r
                    계좌현황 상세내역\r
                </WOButton>\r
            </SubFooter>\r
        </>;
}`,...(ce=(be=B.parameters)==null?void 0:be.docs)==null?void 0:ce.source}}};var de,pe,Ce;v.parameters={...v.parameters,docs:{...(de=v.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  return <>\r
            <SubHeader title={'Title'} />\r
            <S.Main>\r
                <S.TopArea>\r
                    <S.TopAreaTab>\r
                        <WOTabs onChange={() => {}} tabs={[{
            id: 1,
            name: 'tab1'
          }, {
            id: 2,
            name: 'tab2'
          }]} />\r
                    </S.TopAreaTab>\r
                    <S.TopAreaFilter>\r
                        <S.FilterListWrap>\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                        </S.FilterListWrap>\r
                        <S.FilterBtnWrap>\r
                            <WOButton icon={<WOIcon icon="filter-blue-14" />} onClick={() => {}} variant="text-icon">\r
                                필터\r
                            </WOButton>\r
                        </S.FilterBtnWrap>\r
                    </S.TopAreaFilter>\r
                </S.TopArea>\r
                <S.MiddleArea>\r
                    <S.SupportingText className="supporting-text">*Supoorting text</S.SupportingText>\r
                </S.MiddleArea>\r
                <S.ContentWrap>안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.안녕하세요.</S.ContentWrap>\r
            </S.Main>\r
\r
            <SubFooter>\r
                <WOButton onClick={() => {}} size="lg" variant="primary-sub">\r
                    계좌현황 상세내역\r
                </WOButton>\r
            </SubFooter>\r
        </>;
}`,...(Ce=(pe=v.parameters)==null?void 0:pe.docs)==null?void 0:Ce.source}}};var ge,je,he;k.parameters={...k.parameters,docs:{...(ge=k.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  return <>\r
            <SubHeader title={'Title'} />\r
            <S.Main>\r
                <S.TopArea>\r
                    <S.TopAreaTab>\r
                        <WOTabs onChange={() => {}} tabs={[{
            id: 1,
            name: 'tab1'
          }, {
            id: 2,
            name: 'tab2'
          }]} />\r
                    </S.TopAreaTab>\r
                    <S.TopAreaFilter>\r
                        <S.FilterListWrap>\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                            <WOTag label="label" text="text" />\r
                        </S.FilterListWrap>\r
                        <S.FilterBtnWrap>\r
                            <WOButton icon={<WOIcon icon="filter-blue-14" />} onClick={() => {}} variant="text-icon">\r
                                필터\r
                            </WOButton>\r
                        </S.FilterBtnWrap>\r
                    </S.TopAreaFilter>\r
                </S.TopArea>\r
                <S.MiddleArea>\r
                    <S.SupportingText className="supporting-text">*Supoorting text</S.SupportingText>\r
                </S.MiddleArea>\r
                <S.ContentWrap>\r
                    안녕하세요.\r
                    <br />\r
                    <br />\r
                    <br />\r
                    <br />\r
                    <br />\r
                    <br />\r
                    안녕하세요.\r
                    <br />\r
                    <br />\r
                    <br />\r
                    <br />\r
                    <br />\r
                    <br />\r
                    안녕하세요.\r
                    <br />\r
                    <br />\r
                    <br />\r
                    <br />\r
                    <br />\r
                    <br />\r
                    안녕하세요.\r
                    <br />\r
                    <br />\r
                    <br />\r
                    <br />\r
                    <br />\r
                    <br />\r
                    안녕하세요.\r
                    <br />\r
                    <br />\r
                    <br />\r
                    <br />\r
                    <br />\r
                    <br />\r
                    안녕하세요.\r
                    <br />\r
                    <br />\r
                    <br />\r
                    <br />\r
                    <br />\r
                    <br />\r
                    안녕하세요.\r
                    <br />\r
                    <br />\r
                    <br />\r
                    <br />\r
                    <br />\r
                    <br />\r
                    안녕하세요.\r
                    <br />\r
                    <br />\r
                    <br />\r
                    <br />\r
                    <br />\r
                    <br />\r
                    안녕하세요.\r
                    <br />\r
                    <br />\r
                    <br />\r
                    <br />\r
                    <br />\r
                    <br />\r
                    안녕하세요.\r
                    <br />\r
                    <br />\r
                    <br />\r
                    <br />\r
                    <br />\r
                    <br />\r
                </S.ContentWrap>\r
            </S.Main>\r
\r
            <SubFooter>\r
                <WOButton onClick={() => {}} size="lg" variant="primary-sub">\r
                    계좌현황 상세내역\r
                </WOButton>\r
            </SubFooter>\r
        </>;
}`,...(he=(je=k.parameters)==null?void 0:je.docs)==null?void 0:he.source}}};const lr=["SubPage","Tabs","Filters","Filters2","Data","SupportingText","Scroll"];export{B as Data,D as Filters,O as Filters2,k as Scroll,S as SubPage,v as SupportingText,T as Tabs,lr as __namedExportsOrder,rr as default};
