import{j as e}from"./jsx-runtime-ffb262ed.js";import{r}from"./index-76fb7be0.js";import{u as l,a as s}from"./styled-components.browser.esm-aa768a49.js";const c=({theme:n,type:o,initialFollowState:i=!1})=>{const[t,p]=r.useState(i),a=()=>{p(!t)};return e.jsx(d,{theme:n,type:o,isFollowing:t,onClick:a,children:t?"팔로잉":"팔로우"})},d=l.button`
    width: 62px;
    height: 24px;
    border-radius: 13.5px;
    font-size: 14px;
    font-weight: 500;
    line-height: 14px;

    ${n=>n.theme==="white"&&s`
            background-color: ${o=>o.isFollowing?"#fff":"#000"};
            color: ${o=>o.isFollowing?"#000":"#fff"};
            border: ${o=>o.isFollowing?"0.5px solid #000":"0.5px solid transparent"};
        `}
    ${n=>n.theme==="dark"&&s`
            background-color: ${o=>o.isFollowing?"#0d141c":"#fff"};
            color: ${o=>o.isFollowing?"#fff":"#000"};
            border: ${o=>o.isFollowing?"1px solid rgba(255, 255, 255, 0.3)":"1px solid transparent"};
            ${n.type==="noneBorder"&&s`
                border: ${o=>o.isFollowing&&"1px solid transparent"};
                background-color: ${o=>o.isFollowing&&"#000"};
            `}
        `}
`,f=({initialFollowState:n=!1})=>{const[o,i]=r.useState(n),t=()=>{i(!o)};return e.jsx(w,{isActive:o,onClick:t,children:e.jsx(g,{isActive:o})})},w=l.button`
    position: relative;
    width: 44px;
    height: 24px;
    padding: 2px;
    border-radius: 16px;
    background-color: ${n=>n.isActive?"#7974ff":"#dee1e6"};
    transition: background-color 0.4s;
`,g=l.div`
    position: absolute;
    top: 50%;
    left: ${n=>n.isActive?"22px":"2px"};
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    transition: left 0.4s;
`;c.__docgenInfo={description:"",methods:[],displayName:"FollowButton",props:{initialFollowState:{defaultValue:{value:"false",computed:!1},required:!1}}};f.__docgenInfo={description:"",methods:[],displayName:"SwichButton",props:{initialFollowState:{defaultValue:{value:"false",computed:!1},required:!1}}};const F=`import React, { useState } from 'react';
import { css, styled } from 'styled-components';

export const FollowButton = ({ theme, type, initialFollowState = false }) => {
    const [isFollowing, setIsFollowing] = useState(initialFollowState);

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    };

    return (
        <FollowBtn theme={theme} type={type} isFollowing={isFollowing} onClick={handleClick}>
            {isFollowing ? '팔로잉' : '팔로우'}
        </FollowBtn>
    );
};

// 팔로우 토글 버튼
const FollowBtn = styled.button\`
    width: 62px;
    height: 24px;
    border-radius: 13.5px;
    font-size: 14px;
    font-weight: 500;
    line-height: 14px;

    \${(props) =>
        props.theme === 'white' &&
        css\`
            background-color: \${(props) => (props.isFollowing ? '#fff' : '#000')};
            color: \${(props) => (props.isFollowing ? '#000' : '#fff')};
            border: \${(props) => (props.isFollowing ? '0.5px solid #000' : '0.5px solid transparent')};
        \`}
    \${(props) =>
        props.theme === 'dark' &&
        css\`
            background-color: \${(props) => (props.isFollowing ? '#0d141c' : '#fff')};
            color: \${(props) => (props.isFollowing ? '#fff' : '#000')};
            border: \${(props) => (props.isFollowing ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid transparent')};
            \${props.type === 'noneBorder' &&
            css\`
                border: \${(props) => props.isFollowing && '1px solid transparent'};
                background-color: \${(props) => props.isFollowing && '#000'};
            \`}
        \`}
\`;

export const SwichButton = ({ initialFollowState = false }) => {
    const [isActive, setIsActive] = useState(initialFollowState);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <SwichBtn isActive={isActive} onClick={handleClick}>
            <Circle isActive={isActive} />
        </SwichBtn>
    );
};

// 스위치 토글 버튼
const SwichBtn = styled.button\`
    position: relative;
    width: 44px;
    height: 24px;
    padding: 2px;
    border-radius: 16px;
    background-color: \${(props) => (props.isActive ? '#7974ff' : '#dee1e6')};
    transition: background-color 0.4s;
\`;
const Circle = styled.div\`
    position: absolute;
    top: 50%;
    left: \${(props) => (props.isActive ? '22px' : '2px')};
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    transition: left 0.4s;
\`;
`;export{c as F,f as S,F as s};
