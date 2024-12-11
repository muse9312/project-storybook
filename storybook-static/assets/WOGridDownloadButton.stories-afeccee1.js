import{j as o}from"./jsx-runtime-ffb262ed.js";import{r as B}from"./index-76fb7be0.js";import{u as h}from"./styled-components.browser.esm-aa768a49.js";import{W as b}from"./WOIcon-b00d259e.js";import{W as y}from"./WOModal-dabd6f59.js";import"./_commonjsHelpers-de833af9.js";import"./WOIconButton-98070c40.js";import"./Drawer-05549b2e.js";import"./composeClasses-4118efa7.js";import"./extends-15b115a7.js";import"./index-de0962f3.js";import"./Modal-9b120e55.js";import"./styled-80c0ceef.js";import"./mergeSlotProps-69f81163.js";import"./inheritsLoose-c82a83d4.js";import"./index-d3ea75b5.js";import"./ownerWindow-684f99c0.js";import"./useSlotProps-f7cb9e67.js";import"./debounce-517eeb3c.js";import"./Dialog-d847e8ea.js";import"./useId-a47493a3.js";const i=({fileFormat:e,imgUrl:r,onClick:w})=>o.jsxs(O,{type:"button",onClick:w,children:[o.jsx("div",{className:"img-wrap",children:o.jsx("img",{src:r,alt:"download-icon-img"})}),o.jsx("span",{className:"title",children:e==="xlsx"?"엑셀 다운로드":e==="cell"?"한셀 다운로드":""}),o.jsx(b,{icon:"download-blue",width:16,height:16})]}),O=h.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 160px;
  border-radius: 16px;
  border: 1px solid #ededf3;
  background: #fff;

  &:hover {
    border: 2px solid #b0ebcc;
    background: rgba(153, 163, 255, 0.08);
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.15);
  }
  .img-wrap {
    margin-bottom: 16px;
  }
  .title {
    margin-bottom: 2px;
    color: #263752;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    line-height: 150%;
  }
`,W=h.div`
  display: flex;
  gap: 0 10px;
  justify-content: center;
`;i.__docgenInfo={description:"",methods:[],displayName:"WOGridDownloadButton"};const T={title:"WooriPC/Button/WOGridDownloadButton",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{imgUrl:{control:null,description:"이미지 경로 입니다",defaultValue:{summary:void 0},type:{summary:"function",required:!1}},fileFormat:{control:null,description:"파일 확장자 명이 xlsx 이면 엑셀 다운로드, cell 이면 한셀 다운로드 텍스트 반환합니다 ",defaultValue:{summary:void 0}},onClick:{control:"text",description:"버튼 클릭 메소드 입니다.",action:"onClick",type:{summary:"function",required:!1}}}},s={args:{fileFormat:"xlsx",imgUrl:"/assets/woori-pc//etc/excel.svg"}},n={args:{fileFormat:"cell",imgUrl:"/assets/woori-pc//etc/hancell.svg"}},t=()=>{const[e,r]=B.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx("button",{type:"button",onClick:()=>r(!0),children:"모달 열기"}),o.jsx(y,{isOpen:e,direction:"center",height:240,title:"다운로드",onClose:()=>r(!1),children:o.jsxs(W,{children:[o.jsx(i,{imgUrl:"assets/woori-pc/etc/excel.svg",fileFormat:"xlsx",onClick:()=>{}}),o.jsx(i,{imgUrl:"assets/woori-pc/etc/hancell.svg",fileFormat:"cell",onClick:()=>{}})]})})]})};t.__docgenInfo={description:"페이지 내 모달 사용시 GridDownloadButtonWrap 감싸서 사용 *",methods:[],displayName:"Modal"};var a,l,c;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    fileFormat: 'xlsx',
    imgUrl: '/assets/woori-pc//etc/excel.svg'
  }
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,d,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    fileFormat: 'cell',
    imgUrl: '/assets/woori-pc//etc/hancell.svg'
  }
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,x,g,f,C;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <>\r
      <button type='button' onClick={() => setIsOpen(true)}>\r
        모달 열기\r
      </button>\r
      <WOModal isOpen={isOpen} direction='center' height={240} title='다운로드' onClose={() => setIsOpen(false)}>\r
        <GridDownLoadButtonWrap>\r
          <WOGridDownloadButton imgUrl={'assets/woori-pc/etc/excel.svg'} fileFormat={'xlsx'} onClick={() => {}} />\r
          <WOGridDownloadButton imgUrl={'assets/woori-pc/etc/hancell.svg'} fileFormat={'cell'} onClick={() => {}} />\r
        </GridDownLoadButtonWrap>\r
      </WOModal>\r
    </>;
}`,...(g=(x=t.parameters)==null?void 0:x.docs)==null?void 0:g.source},description:{story:"페이지 내 모달 사용시 GridDownloadButtonWrap 감싸서 사용 *",...(C=(f=t.parameters)==null?void 0:f.docs)==null?void 0:C.description}}};const J=["Excel","Hancell","Modal"];export{s as Excel,n as Hancell,t as Modal,J as __namedExportsOrder,T as default};
