import{j as e}from"./jsx-runtime-ffb262ed.js";import{S as f}from"./sweetalert2.all-b9842f3b.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const h=async(n,u)=>{try{const t=u.replace(/\n/g,"<br>");return(await f.fire({title:n,html:t,showCloseButton:!0,showCancelButton:!0,confirmButtonText:"변경",cancelButtonText:"취소",reverseButtons:!0,closeButtonHtml:'<img src="/assets/woori-mobile/icon/close-20.svg" alt="close" />'})).isConfirmed}catch(t){return console.error("다이얼로그 오류:",t),!1}},p=async(n,u)=>{try{const t=u.replace(/\n/g,"<br>");return(await f.fire({title:n,html:t,showCloseButton:!0,showCancelButton:!1,confirmButtonText:"확인",reverseButtons:!0,closeButtonHtml:'<img src="/assets/woori-mobile/icon/close-20.svg" alt="close" />'})).isAlerted}catch(t){return console.error("다이얼로그 오류:",t),!1}},g={title:"WooriMobile/Modal/WOAlert",parameters:{layout:"centered",docs:{description:{component:`\`\`\`jsx\r
페이지 사용시 함수\r

- confirm\r

const handleConfirm = async (title, text) => {\r
const confirmed = await confirm(title, text);\r
if (confirmed) {\r
// 확인 버튼 클릭 시의 로직\r
return;\r
}\r
// 취소 버튼 클릭 시의 로직\r
};\r

- alert\r

const handleAlert = async (title, text) => {\r
const alerted = await alert(title, text);\r
if (alerted) {\r
// 확인 버튼 클릭 시의 로직\r
return;\r
}\r
// 취소 버튼 클릭 시의 로직\r
};\r


- button\r

<button type='button' onClick={() => handleAlert('title','text')}>\r
열기\r
</button>\r

\`\`\`\r
\``}}},tags:["autodocs"],argTypes:{}},r=()=>{const n=async u=>{await h(u,`${u} 하시겠습니까?`)};return e.jsx(e.Fragment,{children:e.jsx("button",{type:"button",onClick:()=>n("승인"),children:"열기"})})},C=()=>{const n=async(u,t)=>{await p(u,t)};return e.jsx(e.Fragment,{children:e.jsx("button",{type:"button",onClick:()=>n("조회 오류","조회 가능한 계좌번호가 없습니다."),children:"열기"})})},o=()=>{const n=async(u,t)=>{await p(u,t)};return e.jsx(e.Fragment,{children:e.jsx("button",{type:"button",onClick:()=>n("보고서 조회 관리(일괄승인)",`일괄 초기화하시겠습니까?
기관 결재 내역까지 모두 초기화됩니다.
(아니시라면 "취소"를 누르세요)`),children:"열기"})})};r.__docgenInfo={description:"",methods:[],displayName:"Confirm"};C.__docgenInfo={description:"",methods:[],displayName:"Alert"};o.__docgenInfo={description:"",methods:[],displayName:"LongText"};var a,c,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const handleConfirm = async title => {
    const confirmed = await confirm(title, \`\${title} 하시겠습니까?\`);
    if (confirmed) {
      // 확인 버튼 클릭 시의 로직
      return;
    }
    // 취소 버튼 클릭 시의 로직
  };
  return <>\r
      <button type='button' onClick={() => handleConfirm('승인')}>\r
        열기\r
      </button>\r
    </>;
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var i,B,D;C.parameters={...C.parameters,docs:{...(i=C.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const handleAlert = async (title, text) => {
    const alerted = await alert(title, text);
    if (alerted) {
      // 확인 버튼 클릭 시의 로직
      return;
    }
    // 취소 버튼 클릭 시의 로직
  };
  return <>\r
      <button type='button' onClick={() => handleAlert('조회 오류', '조회 가능한 계좌번호가 없습니다.')}>\r
        열기\r
      </button>\r
    </>;
}`,...(D=(B=C.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var d,m,A;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const handleAlert = async (title, text) => {
    const alerted = await alert(title, text);
    if (alerted) {
      // 확인 버튼 클릭 시의 로직
      return;
    }
    // 취소 버튼 클릭 시의 로직
  };
  return <>\r
      <button type='button' onClick={() => handleAlert('보고서 조회 관리(일괄승인)', '일괄 초기화하시겠습니까?\\n기관 결재 내역까지 모두 초기화됩니다.\\n(아니시라면 "취소"를 누르세요)')}>\r
        열기\r
      </button>\r
    </>;
}`,...(A=(m=o.parameters)==null?void 0:m.docs)==null?void 0:A.source}}};const w=["Confirm","Alert","LongText"];export{C as Alert,r as Confirm,o as LongText,w as __namedExportsOrder,g as default};
