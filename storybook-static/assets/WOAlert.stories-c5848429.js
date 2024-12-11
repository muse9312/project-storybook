import{j as u}from"./jsx-runtime-ffb262ed.js";import{c as A,a as f}from"./common-85643e36.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./sweetalert2.all-b9842f3b.js";const g={title:"WooriPC/Modal/WOAlert",parameters:{layout:"centered",docs:{description:{component:`\`\`\`jsx\r
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
const confirmed = await alert(title, text);\r
if (confirmed) {\r
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
\``}}},tags:["autodocs"],argTypes:{}},t=()=>{const C=async n=>{await A(n,`${n} 하시겠습니까?`)};return u.jsx(u.Fragment,{children:u.jsx("button",{type:"button",onClick:()=>C("승인"),children:"열기"})})},r=()=>{const C=async n=>{await f(n,`${n} 되었습니다.`)};return u.jsx(u.Fragment,{children:u.jsx("button",{type:"button",onClick:()=>C("승인"),children:"열기"})})},e=()=>{const C=async(n,o)=>{await A(n,o)};return u.jsx(u.Fragment,{children:u.jsx("button",{type:"button",onClick:()=>C("보고서 조회 관리(일괄승인)",`일괄 초기화하시겠습니까?
기관 결재 내역까지 모두 초기화됩니다.
(아니시라면 "취소"를 누르세요)`),children:"열기"})})};t.__docgenInfo={description:"",methods:[],displayName:"Confirm"};r.__docgenInfo={description:"",methods:[],displayName:"Alert"};e.__docgenInfo={description:"",methods:[],displayName:"LongText"};var i,c,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(a=(c=t.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};var s,D,B;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const handleAlert = async title => {
    const confirmed = await alert(title, \`\${title} 되었습니다.\`);
    if (confirmed) {
      // 확인 버튼 클릭 시의 로직
      return;
    }
    // 취소 버튼 클릭 시의 로직
  };
  return <>\r
      <button type='button' onClick={() => handleAlert('승인')}>\r
        열기\r
      </button>\r
    </>;
}`,...(B=(D=r.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var d,m,l;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const handleConfirm = async (title, text) => {
    const confirmed = await confirm(title, text);
    if (confirmed) {
      // 확인 버튼 클릭 시의 로직
      return;
    }
    // 취소 버튼 클릭 시의 로직
  };
  return <>\r
      <button type='button' onClick={() => handleConfirm('보고서 조회 관리(일괄승인)', '일괄 초기화하시겠습니까?\\n기관 결재 내역까지 모두 초기화됩니다.\\n(아니시라면 "취소"를 누르세요)')}>\r
        열기\r
      </button>\r
    </>;
}`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const j=["Confirm","Alert","LongText"];export{r as Alert,t as Confirm,e as LongText,j as __namedExportsOrder,g as default};
