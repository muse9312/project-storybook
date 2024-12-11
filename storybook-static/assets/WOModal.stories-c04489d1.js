import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as o}from"./index-76fb7be0.js";import{W as s,M as P,B as J}from"./WOModal-dabd6f59.js";import{W as r}from"./WOButton-a92410a3.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-aa768a49.js";import"./WOIconButton-98070c40.js";import"./Drawer-05549b2e.js";import"./composeClasses-4118efa7.js";import"./extends-15b115a7.js";import"./index-de0962f3.js";import"./Modal-9b120e55.js";import"./styled-80c0ceef.js";import"./mergeSlotProps-69f81163.js";import"./inheritsLoose-c82a83d4.js";import"./index-d3ea75b5.js";import"./ownerWindow-684f99c0.js";import"./useSlotProps-f7cb9e67.js";import"./debounce-517eeb3c.js";import"./Dialog-d847e8ea.js";import"./useId-a47493a3.js";import"./common.styled-d4908734.js";const Ce={title:"WooriPC/Modal/WOModal",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{isOpen:{control:"boolean",description:"modal 오픈상태 입니다.",defaultValue:{summary:!1},type:{summary:"boolean",required:!0}},direction:{control:"select",description:"modal 열리는 방향 입니다.",options:["center","bottom"],defaultValue:{summary:"center"},type:{summary:"string",required:!1}},size:{control:"select",description:"modal 사이즈 입니다.",options:["sm","md","lg","xl"],defaultValue:{summary:"sm"},type:{summary:"string",required:!1}},bgColor:{control:"select",description:"modal 콘텐츠 배경색상 입니다.",options:["white","gray"],defaultValue:{summary:"white"},type:{summary:"string",required:!1}},height:{control:"select",description:`modal 높이 사이즈 입니다. 
 따로 height 값을 설정하지 않은경우 modal 사이즈의 높이가 기본값입니다`,defaultValue:{summary:void 0},type:{summary:"string",required:!0}},title:{control:"text",description:"modal 타이틀명 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}},children:{description:`modal 콘텐츠 및 버튼영역 입니다. 
 direction="center" 인 경우 콘텐츠는 하나의 태그로 묶고, 버튼영역 있는 경우 ModalButtonArea컴포넌트로 묶어줍니다.`},onClose:{control:"text",description:"modal 닫힐때 실행되는 메소드 입니다.",action:"onClick",type:{summary:"function",required:!1}}}},i=()=>{const[t,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"secondary",size:"lg",onClick:()=>n(!0),children:"Open"}),e.jsx(s,{isOpen:t,direction:"center",title:"Title",onClose:()=>n(!1),children:e.jsx("div",{children:"모달 콘텐츠"})})]})},a=()=>{const[t,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"secondary",size:"lg",onClick:()=>n(!0),children:"Open"}),e.jsx(s,{isOpen:t,direction:"center",size:"sm",title:"Title",onClose:()=>n(!1),children:e.jsx("div",{children:"모달 콘텐츠"})})]})},l=()=>{const[t,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"secondary",size:"lg",onClick:()=>n(!0),children:"Open"}),e.jsx(s,{isOpen:t,direction:"center",size:"md",title:"Title",onClose:()=>n(!1),children:e.jsx("div",{children:"모달 콘텐츠"})})]})},d=()=>{const[t,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"secondary",size:"lg",onClick:()=>n(!0),children:"Open"}),e.jsx(s,{isOpen:t,direction:"center",size:"lg",title:"Title",onClose:()=>n(!1),children:e.jsx("div",{children:"모달 콘텐츠"})})]})},c=()=>{const[t,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"secondary",size:"lg",onClick:()=>n(!0),children:"Open"}),e.jsx(s,{isOpen:t,direction:"center",size:"xl",title:"Title",onClose:()=>n(!1),children:e.jsx("div",{children:"모달 콘텐츠"})})]})},u=()=>{const[t,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"secondary",size:"lg",onClick:()=>n(!0),children:"Open"}),e.jsx(s,{isOpen:t,direction:"center",size:"md",bgColor:"gray",title:"Title",onClose:()=>n(!1),children:e.jsx("div",{children:"모달 콘텐츠"})})]})},p=()=>{const[t,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"secondary",size:"lg",onClick:()=>n(!0),children:"Open"}),e.jsx(s,{isOpen:t,direction:"center",size:"md",bgColor:"gray",height:150,title:"Title",onClose:()=>n(!1),children:e.jsx("div",{children:"모달 콘텐츠"})})]})},m=()=>{const[t,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"secondary",size:"lg",onClick:()=>n(!0),children:"Open"}),e.jsxs(s,{isOpen:t,direction:"center",size:"md",bgColor:"gray",title:"Title",onClose:()=>n(!1),children:[e.jsx("div",{children:"모달 콘텐츠"}),e.jsx(P,{children:e.jsx(r,{variant:"outlined",size:"md",children:"다운로드"})})]})]})},O=()=>{const[t,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"secondary",size:"lg",onClick:()=>n(!0),children:"Open"}),e.jsxs(s,{isOpen:t,direction:"center",size:"md",bgColor:"gray",title:"Title",onClose:()=>n(!1),children:[e.jsx("div",{children:"모달 콘텐츠"}),e.jsxs(P,{children:[e.jsx(r,{variant:"outlined",size:"md",children:"다운로드"}),e.jsxs(J,{children:[e.jsx(r,{variant:"secondary",size:"md",children:"삭제"}),e.jsx(r,{variant:"primary",size:"md",children:"저장"})]})]})]})]})},g=()=>{const[t,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"secondary",size:"lg",onClick:()=>n(!0),children:"Bottom Open"}),e.jsx(s,{isOpen:t,direction:"bottom",title:"Title",onClose:()=>n(!1),children:e.jsx("div",{children:"모달 콘텐츠"})})]})};i.__docgenInfo={description:"",methods:[],displayName:"Center"};a.__docgenInfo={description:"",methods:[],displayName:"Small"};l.__docgenInfo={description:"",methods:[],displayName:"Medium"};d.__docgenInfo={description:"",methods:[],displayName:"Large"};c.__docgenInfo={description:"",methods:[],displayName:"XLarge"};u.__docgenInfo={description:"",methods:[],displayName:"BgGray"};p.__docgenInfo={description:"",methods:[],displayName:"Height"};m.__docgenInfo={description:"",methods:[],displayName:"Button"};O.__docgenInfo={description:"",methods:[],displayName:"ButtonRight"};g.__docgenInfo={description:"",methods:[],displayName:"BottomLayer"};var C,B,h;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <>\r
      <WOButton variant='secondary' size='lg' onClick={() => setIsOpen(true)}>\r
        Open\r
      </WOButton>\r
      <WOModal isOpen={isOpen} direction='center' title='Title' onClose={() => setIsOpen(false)}>\r
        <div>모달 콘텐츠</div>\r
      </WOModal>\r
    </>;
}`,...(h=(B=i.parameters)==null?void 0:B.docs)==null?void 0:h.source}}};var y,f,v;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <>\r
      <WOButton variant='secondary' size='lg' onClick={() => setIsOpen(true)}>\r
        Open\r
      </WOButton>\r
      <WOModal isOpen={isOpen} direction='center' size='sm' title='Title' onClose={() => setIsOpen(false)}>\r
        <div>모달 콘텐츠</div>\r
      </WOModal>\r
    </>;
}`,...(v=(f=a.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var x,W,I;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <>\r
      <WOButton variant='secondary' size='lg' onClick={() => setIsOpen(true)}>\r
        Open\r
      </WOButton>\r
      <WOModal isOpen={isOpen} direction='center' size='md' title='Title' onClose={() => setIsOpen(false)}>\r
        <div>모달 콘텐츠</div>\r
      </WOModal>\r
    </>;
}`,...(I=(W=l.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var j,z,M;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <>\r
      <WOButton variant='secondary' size='lg' onClick={() => setIsOpen(true)}>\r
        Open\r
      </WOButton>\r
      <WOModal isOpen={isOpen} direction='center' size='lg' title='Title' onClose={() => setIsOpen(false)}>\r
        <div>모달 콘텐츠</div>\r
      </WOModal>\r
    </>;
}`,...(M=(z=d.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var S,A,E;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <>\r
      <WOButton variant='secondary' size='lg' onClick={() => setIsOpen(true)}>\r
        Open\r
      </WOButton>\r
      <WOModal isOpen={isOpen} direction='center' size='xl' title='Title' onClose={() => setIsOpen(false)}>\r
        <div>모달 콘텐츠</div>\r
      </WOModal>\r
    </>;
}`,...(E=(A=c.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var _,k,T;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <>\r
      <WOButton variant='secondary' size='lg' onClick={() => setIsOpen(true)}>\r
        Open\r
      </WOButton>\r
      <WOModal isOpen={isOpen} direction='center' size='md' bgColor='gray' title='Title' onClose={() => setIsOpen(false)}>\r
        <div>모달 콘텐츠</div>\r
      </WOModal>\r
    </>;
}`,...(T=(k=u.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var F,b,D;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <>\r
      <WOButton variant='secondary' size='lg' onClick={() => setIsOpen(true)}>\r
        Open\r
      </WOButton>\r
      <WOModal isOpen={isOpen} direction='center' size='md' bgColor='gray' height={150} title='Title' onClose={() => setIsOpen(false)}>\r
        <div>모달 콘텐츠</div>\r
      </WOModal>\r
    </>;
}`,...(D=(b=p.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var N,L,q;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <>\r
      <WOButton variant='secondary' size='lg' onClick={() => setIsOpen(true)}>\r
        Open\r
      </WOButton>\r
      <WOModal isOpen={isOpen} direction='center' size='md' bgColor='gray' title='Title' onClose={() => setIsOpen(false)}>\r
        <div>모달 콘텐츠</div>\r
        <ModalButtonArea>\r
          <WOButton variant={'outlined'} size={'md'}>\r
            다운로드\r
          </WOButton>\r
        </ModalButtonArea>\r
      </WOModal>\r
    </>;
}`,...(q=(L=m.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var R,V,G;O.parameters={...O.parameters,docs:{...(R=O.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <>\r
      <WOButton variant='secondary' size='lg' onClick={() => setIsOpen(true)}>\r
        Open\r
      </WOButton>\r
      <WOModal isOpen={isOpen} direction='center' size='md' bgColor='gray' title='Title' onClose={() => setIsOpen(false)}>\r
        <div>모달 콘텐츠</div>\r
        <ModalButtonArea>\r
          <WOButton variant={'outlined'} size={'md'}>\r
            다운로드\r
          </WOButton>\r
          <ButtonRightArea>\r
            <WOButton variant={'secondary'} size={'md'}>\r
              삭제\r
            </WOButton>\r
            <WOButton variant={'primary'} size={'md'}>\r
              저장\r
            </WOButton>\r
          </ButtonRightArea>\r
        </ModalButtonArea>\r
      </WOModal>\r
    </>;
}`,...(G=(V=O.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var H,X,w;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <>\r
      <WOButton variant='secondary' size='lg' onClick={() => setIsOpen(true)}>\r
        Bottom Open\r
      </WOButton>\r
      <WOModal isOpen={isOpen} direction='bottom' title='Title' onClose={() => setIsOpen(false)}>\r
        <div>모달 콘텐츠</div>\r
      </WOModal>\r
    </>;
}`,...(w=(X=g.parameters)==null?void 0:X.docs)==null?void 0:w.source}}};const Be=["Center","Small","Medium","Large","XLarge","BgGray","Height","Button","ButtonRight","BottomLayer"];export{u as BgGray,g as BottomLayer,m as Button,O as ButtonRight,i as Center,p as Height,d as Large,l as Medium,a as Small,c as XLarge,Be as __namedExportsOrder,Ce as default};
