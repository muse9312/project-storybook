import{j as e}from"./jsx-runtime-ffb262ed.js";import{r as m}from"./index-76fb7be0.js";import{u as l,a as t}from"./styled-components.browser.esm-aa768a49.js";import"./_commonjsHelpers-de833af9.js";const f=o=>{const[r,n]=m.useState(o.checked||!1),h=()=>{n(!r)};return e.jsx(e.Fragment,{children:e.jsx(v,{children:e.jsxs(k,{children:[e.jsx($,{type:"checkbox",name:o.name,id:o.id,theme:o.theme,checked:r,color:o.color,onClick:h}),e.jsx(g,{htmlFor:o.id,theme:o.theme,children:o.value})]})})})},k=l.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
`,g=l.label`
  position: absolute;
  bottom: -26px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: ${o=>o.theme==="dark"?"#fff":"#000"};
  white-space: nowrap;
`,$=l.input`
  width: 46px;
  height: 46px;
  background: ${o=>o.color==="rainbow"&&" url(./assets/BeatFolio/img-colorpicker-allcolor.png) no-repeat center/ cover;"};
  background-color: ${o=>o.color==="white"&&"#fff"};
  border: ${o=>o.color==="white"&&"1px solid rgba(255, 255, 255, 0.20)"};
  background-color: ${o=>o.color==="black"&&"#000"};
  background-color: ${o=>o.color==="grey"&&"#b9b9b9"};
  background-color: ${o=>o.color==="beige"&&"#d4b888"};
  background-color: ${o=>o.color==="brown"&&"#744f15"};
  background-color: ${o=>o.color==="pink"&&"#ff6bc8"};
  background-color: ${o=>o.color==="red"&&"#ff0000"};
  background-color: ${o=>o.color==="orange"&&"#ffa10f"};
  background-color: ${o=>o.color==="yellow"&&"#ffda00"};
  background-color: ${o=>o.color==="green"&&"#00a614"};
  background-color: ${o=>o.color==="teal"&&"#00b1b8"};
  background-color: ${o=>o.color==="blue"&&"#00a0ff"};
  background-color: ${o=>o.color==="indigo"&&"#001e64"};
  background-color: ${o=>o.color==="purple"&&"#7600cc"};
  border-radius: 50%;
  cursor: pointer;
  ${o=>o.theme==="dark"&&t`
      border: ${r=>r.color==="white"&&"unset"};
      border: ${r=>r.color==="black"&&"1px solid rgba(255, 255, 255, 0.20) "};
    `}
  &:checked {
    width: 32px;
    height: 32px;
    & + ${g} {
      font-weight: 700;
    }
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 46px;
      height: 46px;

      border-radius: 50%;
      box-sizing: border-box;
      border: ${o=>o.color==="rainbow"&&"3px solid #000"};
      border: ${o=>o.color==="white"&&"3px solid #000"};
      border: ${o=>o.color==="black"&&"3px solid #000"};
      border: ${o=>o.color==="grey"&&"3px solid #b9b9b9"};
      border: ${o=>o.color==="beige"&&"3px solid #d4b888"};
      border: ${o=>o.color==="brown"&&"3px solid #744f15"};
      border: ${o=>o.color==="pink"&&"3px solid #ff6bc8"};
      border: ${o=>o.color==="red"&&"3px solid #ff0000"};
      border: ${o=>o.color==="orange"&&"3px solid #ffa10f"};
      border: ${o=>o.color==="yellow"&&"3px solid #ffda00"};
      border: ${o=>o.color==="green"&&"3px solid #00a614"};
      border: ${o=>o.color==="teal"&&"3px solid #00b1b8"};
      border: ${o=>o.color==="blue"&&"3px solid #00a0ff"};
      border: ${o=>o.color==="indigo"&&"3px solid #001e64"};
      border: ${o=>o.color==="purple"&&"3px solid #7600cc"};
      ${o=>o.theme==="dark"&&t`
          border: ${r=>r.color==="rainbow"&&"3px solid #fff"};
          border: ${r=>r.color==="white"&&"3px solid #fff"};
          border: ${r=>r.color==="black"&&"3px solid #fff"};
        `}
    }
  }
`,v=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% / 5);
  margin-bottom: 46px;
  background-color: ${o=>o.color==="black"&&"#000"};
  input {
  }
  label {
  }
`;f.__docgenInfo={description:"",methods:[],displayName:"ColorCheckBox"};const w=[{color:"rainbow",value:"자유"},{color:"white",value:"흰색"},{color:"black",value:"검정"},{color:"grey",value:"회색"},{color:"beige",value:"베이지"},{color:"brown",value:"브라운"},{color:"pink",value:"분홍"},{color:"red",value:"빨강"},{color:"orange",value:"주황"},{color:"yellow",value:"노랑"},{color:"green",value:"초록"},{color:"teal",value:"청록"},{color:"blue",value:"파랑"},{color:"indigo",value:"남색"},{color:"purple",value:"보라"}],x=o=>e.jsx(C,{children:w.map((r,n)=>e.jsx(f,{theme:o.theme,name:n,id:`color-${n}`,value:r.value,color:r.color},r.color))}),y=x,C=l.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: -20px;
`;x.__docgenInfo={description:"",methods:[],displayName:"ColorList"};const L=`import React from 'react';
import { styled } from 'styled-components';
import ColorCheckBox from './ColorCheckBox';

const colors = [
  {
    color: 'rainbow',
    value: '자유',
  },
  {
    color: 'white',
    value: '흰색',
  },
  {
    color: 'black',
    value: '검정',
  },
  {
    color: 'grey',
    value: '회색',
  },
  {
    color: 'beige',
    value: '베이지',
  },
  {
    color: 'brown',
    value: '브라운',
  },
  {
    color: 'pink',
    value: '분홍',
  },
  {
    color: 'red',
    value: '빨강',
  },
  {
    color: 'orange',
    value: '주황',
  },
  {
    color: 'yellow',
    value: '노랑',
  },
  {
    color: 'green',
    value: '초록',
  },
  {
    color: 'teal',
    value: '청록',
  },
  {
    color: 'blue',
    value: '파랑',
  },
  {
    color: 'indigo',
    value: '남색',
  },
  {
    color: 'purple',
    value: '보라',
  },
];

const ColorList = (props) => {
  return (
    <ListWrap>
      {colors.map((colorInfo, index) => (
        <ColorCheckBox key={colorInfo.color} theme={props.theme} name={index} id={\`color-\${index}\`} value={colorInfo.value} color={colorInfo.color} />
      ))}
    </ListWrap>
  );
};

export default ColorList;

const ListWrap = styled.div\`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: -20px;
\`;
`,W={title:"BeatFolio/CheckBox/ColorList",component:y,parameters:{layout:"padded",storySource:{source:L}},tags:["autodocs"],argTypes:{}},c={args:{theme:void 0}},a={args:{color:"black"}};var i,d,s;c.parameters={...c.parameters,docs:{...(i=c.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    theme: undefined
  }
}`,...(s=(d=c.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};var b,p,u;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    color: 'black'
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const F=["Light","Dark"];export{a as Dark,c as Light,F as __namedExportsOrder,W as default};
