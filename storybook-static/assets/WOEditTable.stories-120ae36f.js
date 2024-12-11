import{j as t}from"./jsx-runtime-ffb262ed.js";import{W as j}from"./WOComboBox-56701d7a.js";import"./index-76fb7be0.js";import{u as C,a as l}from"./styled-components.browser.esm-aa768a49.js";import{W as r}from"./WOInput-a6d9ea77.js";import"./common.styled-d4908734.js";import"./WOLabel-293b1256.js";import"./InputLabel-7ccef553.js";import"./composeClasses-4118efa7.js";import"./extends-15b115a7.js";import"./styled-80c0ceef.js";import"./_commonjsHelpers-de833af9.js";import"./TextField-8918e36b.js";import"./useId-a47493a3.js";import"./index-de0962f3.js";import"./Modal-9b120e55.js";import"./mergeSlotProps-69f81163.js";import"./inheritsLoose-c82a83d4.js";import"./index-d3ea75b5.js";import"./ownerWindow-684f99c0.js";import"./useSlotProps-f7cb9e67.js";import"./debounce-517eeb3c.js";import"./TextareaAutosize-63b07324.js";import"./MenuItem-cd9f00c5.js";import"./Chip-9a81eb61.js";import"./assertThisInitialized-081f9914.js";import"./Autocomplete-fbfec46a.js";import"./index-08d2ae59.js";import"./WOButton-a92410a3.js";const o=({scroll:n,children:D})=>t.jsx(f,{scroll:n,className:"edit-table",children:t.jsx(B,{children:D})}),f=C.div`
  flex: 0 0 auto;
  width: 100%;
  overflow: hidden;
  border-top: 1px solid #ededf3;
  border-bottom: 1px solid #ededf3;
  box-sizing: border-box;
  ${n=>n.scroll==="x"&&l`
      overflow-x: auto;
    `}
  ${n=>n.scroll==="y"&&l`
      height: 100%;
      overflow-y: auto;
    `}
    caption {
    font-style: normal !important;
    font-variant-ligatures: normal !important;
    font-variant-caps: normal !important;
    line-height: 0 !important;
    color: transparent !important;
    text-shadow: none !important;
    background-color: transparent !important;
    border: 0 !important;
    z-index: -1;
    border: 0;
    width: 1px;
    height: 1px;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
    display: inline-block;
    position: absolute;
  }
`,B=C.table`
  width: calc(100% + 2px);
  margin-left: -1px;
  text-align: left;
  border-collapse: collapse;

  th,
  td {
    height: 60px;
    min-height: 60px;
    padding: 14px 20px;
    vertical-align: middle;
    word-break: normal;
  }
  tbody {
    th,
    td {
      border-top: 1px solid #ededf3;
    }
    td {
      background-color: #fff;
      .flex-box {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .input {
          & + .input {
            margin-left: 4px;
          }
        }
      }
      .editor-box {
        width: 100%;
        height: 164px;
      }
    }
    th {
      width: 160px;
      min-width: 160px;
      max-width: 160px;
    }
  }

  th {
    text-align: left;
    background-color: var(--C-Dark-01);
    color: var(--Cool-Dark-11);
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
    &.bg-dark02 {
      background-color: var(--C-Dark-02);
    }
  }
  tbody tr:first-child td,
  tbody tr:first-child th {
    border-top: none;
  }
`;o.__docgenInfo={description:"",methods:[],displayName:"WOEditTable"};const Q={title:"WooriPC/Table/WOEditTable",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{scroll:{control:"select",options:["x","y",void 0],description:"table 스크롤 방향 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!1}}}},e=()=>t.jsx("div",{style:{width:"800px"},children:t.jsxs(o,{children:[t.jsx("caption",{children:"O2UX 퍼블리싱 프로젝트 환경"}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("th",{children:"본인(SMS/카카오톡,UMS) 수신여부 설정"}),t.jsx("td",{children:"내용"})]}),t.jsxs("tr",{children:[t.jsx("th",{children:"항목"}),t.jsx("td",{children:"내용"})]}),t.jsxs("tr",{children:[t.jsx("th",{children:"항목"}),t.jsx("td",{children:"내용"})]})]})]})}),i=()=>t.jsx("div",{style:{width:"800px"},children:t.jsxs(o,{children:[t.jsx("caption",{children:"O2UX 퍼블리싱 프로젝트 환경"}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("th",{children:"항목"}),t.jsx("td",{children:t.jsx(r,{id:"input01",name:"input01",placeholder:"placeholder",blind:!0})})]}),t.jsxs("tr",{children:[t.jsx("th",{children:"항목"}),t.jsx("td",{children:t.jsx(j,{optionList:[{id:1,label:"서울시청"}],isAutoComplete:!0})})]}),t.jsxs("tr",{children:[t.jsx("th",{children:"항목"}),t.jsx("td",{children:t.jsxs("div",{className:"flex-box",children:[t.jsx(r,{id:"input01",name:"input01",placeholder:"placeholder",blind:!0}),t.jsx(r,{id:"input01",name:"input01",placeholder:"placeholder",blind:!0})]})})]})]})]})}),d=()=>t.jsx("div",{style:{width:"800px"},children:t.jsxs(o,{children:[t.jsx("caption",{children:"O2UX 퍼블리싱 프로젝트 환경"}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("th",{children:"항목"}),t.jsx("td",{colSpan:3,children:"항목"})]}),t.jsxs("tr",{children:[t.jsx("th",{children:"항목"}),t.jsx("td",{colSpan:3,children:t.jsx(r,{id:"input01",name:"input01",placeholder:"placeholder",blind:!0})})]}),t.jsxs("tr",{children:[t.jsx("th",{children:"항목"}),t.jsx("td",{colSpan:3,children:t.jsx(j,{optionList:[{id:1,label:"서울시청"}],isAutoComplete:!0})})]}),t.jsxs("tr",{children:[t.jsx("th",{children:"항목"}),t.jsx("td",{children:t.jsxs("div",{className:"flex-box",children:[t.jsx(r,{id:"input01",name:"input01",placeholder:"placeholder",blind:!0}),t.jsx(r,{id:"input01",name:"input01",placeholder:"placeholder",blind:!0})]})}),t.jsx("th",{children:"항목"}),t.jsx("td",{children:t.jsxs("div",{className:"flex-box",children:[t.jsx(r,{id:"input01",name:"input01",placeholder:"placeholder",blind:!0}),t.jsx(r,{id:"input01",name:"input01",placeholder:"placeholder",blind:!0})]})})]})]})]})});e.__docgenInfo={description:"",methods:[],displayName:"Default"};i.__docgenInfo={description:"",methods:[],displayName:"Input"};d.__docgenInfo={description:"",methods:[],displayName:"ColSpan"};var p,a,s;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return <div style={{
    width: '800px'
  }}>\r
      <WOEditTable>\r
        <caption>O2UX 퍼블리싱 프로젝트 환경</caption>\r
        <tbody>\r
          <tr>\r
            <th>본인(SMS/카카오톡,UMS) 수신여부 설정</th>\r
            <td>내용</td>\r
          </tr>\r
          <tr>\r
            <th>항목</th>\r
            <td>내용</td>\r
          </tr>\r
          <tr>\r
            <th>항목</th>\r
            <td>내용</td>\r
          </tr>\r
        </tbody>\r
      </WOEditTable>\r
    </div>;
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var u,c,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <div style={{
    width: '800px'
  }}>\r
      <WOEditTable>\r
        <caption>O2UX 퍼블리싱 프로젝트 환경</caption>\r
        <tbody>\r
          <tr>\r
            <th>항목</th>\r
            <td>\r
              <WOInput id='input01' name='input01' placeholder='placeholder' blind={true}></WOInput>\r
            </td>\r
          </tr>\r
          <tr>\r
            <th>항목</th>\r
            <td>\r
              <WOComboBox optionList={[{
              id: 1,
              label: '서울시청'
            }]} isAutoComplete={true} />\r
            </td>\r
          </tr>\r
          <tr>\r
            <th>항목</th>\r
            <td>\r
              <div className='flex-box'>\r
                <WOInput id='input01' name='input01' placeholder='placeholder' blind={true}></WOInput>\r
                <WOInput id='input01' name='input01' placeholder='placeholder' blind={true}></WOInput>\r
              </div>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </WOEditTable>\r
    </div>;
}`,...(h=(c=i.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var x,m,b;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <div style={{
    width: '800px'
  }}>\r
      <WOEditTable>\r
        <caption>O2UX 퍼블리싱 프로젝트 환경</caption>\r
        <tbody>\r
          <tr>\r
            <th>항목</th>\r
            <td colSpan={3}>항목</td>\r
          </tr>\r
          <tr>\r
            <th>항목</th>\r
            <td colSpan={3}>\r
              <WOInput id='input01' name='input01' placeholder='placeholder' blind={true}></WOInput>\r
            </td>\r
          </tr>\r
          <tr>\r
            <th>항목</th>\r
            <td colSpan={3}>\r
              <WOComboBox optionList={[{
              id: 1,
              label: '서울시청'
            }]} isAutoComplete={true} />\r
            </td>\r
          </tr>\r
          <tr>\r
            <th>항목</th>\r
            <td>\r
              <div className='flex-box'>\r
                <WOInput id='input01' name='input01' placeholder='placeholder' blind={true}></WOInput>\r
                <WOInput id='input01' name='input01' placeholder='placeholder' blind={true}></WOInput>\r
              </div>\r
            </td>\r
            <th>항목</th>\r
            <td>\r
              <div className='flex-box'>\r
                <WOInput id='input01' name='input01' placeholder='placeholder' blind={true}></WOInput>\r
                <WOInput id='input01' name='input01' placeholder='placeholder' blind={true}></WOInput>\r
              </div>\r
            </td>\r
          </tr>\r
        </tbody>\r
      </WOEditTable>\r
    </div>;
}`,...(b=(m=d.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const Y=["Default","Input","ColSpan"];export{d as ColSpan,e as Default,i as Input,Y as __namedExportsOrder,Q as default};
