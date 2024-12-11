import{W as o}from"./WOSelectWorkList-c8499a59.js";import"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-aa768a49.js";import"./WOIconButton-4118cf05.js";const a=`import React from 'react';
import styled from 'styled-components';
import WOToggleButton from './WOToggleButton';
import WOIconButton from './WOIconButton';

const WOSelectWorkList = ({ depth1, depth2, depth3, area, department, type, favoriteStatus }) => {
  return (
    <Wrapper $type={type}>
      <WOToggleButton
        icon='star'
        onClick={(isActive) => {
          console.log(isActive);
        }}
        initialState={favoriteStatus}
      />
      <ListWrap>
        <DepthList>
          {depth1 && depth1} &gt; {depth2 && depth2} &gt; {depth3 && depth3}
        </DepthList>
        {area || department ? (
          <Area>
            {area && <span>{area}</span>}
            {department && <span>{department}</span>}
          </Area>
        ) : (
          ''
        )}
      </ListWrap>
    </Wrapper>
  );
};

export default WOSelectWorkList;

const Wrapper = styled.div\`
  display: flex;
  align-items: center;
  gap: 0 14px;
  padding: \${(props) => (props.$type === 'main' ? '14px 20px' : '16px 20px')};
\`;
const ListWrap = styled.div\`
  display: flex;
  flex-direction: column;
  gap: 4px 0;
\`;

const DepthList = styled.div\`
  display: flex;
  align-items: center;
  flex: 1;
  color: var(--C-Dark-11, #1a2c49);
  font-size: 14px;
  font-weight: 400;
\`;

const Area = styled.div\`
  display: flex;
  align-items: center;
  gap: 0 13px;
  span {
    color: var(--C-Dark-06, #9ea6b2);
    font-size: 12px;
    font-weight: 400;
    & + span {
      position: relative;
      &::before {
        content: '';
        position: absolute;
        left: -7px;
        top: 50%;
        transform: translateY(-50%);
        width: 1px;
        height: 9px;
        background-color: var(--C-Dark-06, #9ea6b2);
      }
    }
  }
\`;
`,c={title:"WooriMobile/List/WOSelectWorkList",component:o,parameters:{layout:"centered",storySource:{source:a}},argTypes:{id:{control:"text",description:"WOSelectWorkList Id 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}},depth1:{control:"text",description:"WOSelectWorkList depth1 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}},depth2:{control:"text",description:"WOSelectWorkList depth2 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}},depth3:{control:"text",description:"WOSelectWorkList depth3 입니다.",defaultValue:{summary:void 0},type:{summary:"string",required:!0}},favoriteStatus:{control:"boolean",description:"WOSelectWorkList 즐겨찾기 여부 입니다.",defaultValue:{summary:void 0},type:{summary:"boolean",required:!0}}},tags:["autodocs"]},t={args:{id:1,depth1:"일상경비",depth2:"조회/보고서",depth3:"일상경비계좌 현황",favoriteStatus:!0}};var e,n,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  // 컴포넌트에 넘겨줄 props 정리
  args: {
    id: 1,
    depth1: '일상경비',
    depth2: '조회/보고서',
    depth3: '일상경비계좌 현황',
    favoriteStatus: true
  }
}`,...(r=(n=t.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const m=["Default"];export{t as Default,m as __namedExportsOrder,c as default};
