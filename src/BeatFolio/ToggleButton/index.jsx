import React, { useState } from 'react';
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
const FollowBtn = styled.button`
    width: 62px;
    height: 24px;
    border-radius: 13.5px;
    font-size: 14px;
    font-weight: 500;
    line-height: 14px;

    ${(props) =>
        props.theme === 'white' &&
        css`
            background-color: ${(props) => (props.isFollowing ? '#fff' : '#000')};
            color: ${(props) => (props.isFollowing ? '#000' : '#fff')};
            border: ${(props) => (props.isFollowing ? '0.5px solid #000' : '0.5px solid transparent')};
        `}
    ${(props) =>
        props.theme === 'dark' &&
        css`
            background-color: ${(props) => (props.isFollowing ? '#0d141c' : '#fff')};
            color: ${(props) => (props.isFollowing ? '#fff' : '#000')};
            border: ${(props) => (props.isFollowing ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid transparent')};
            ${props.type === 'noneBorder' &&
            css`
                border: ${(props) => props.isFollowing && '1px solid transparent'};
                background-color: ${(props) => props.isFollowing && '#000'};
            `}
        `}
`;

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
const SwichBtn = styled.button`
    position: relative;
    width: 44px;
    height: 24px;
    padding: 2px;
    border-radius: 16px;
    background-color: ${(props) => (props.isActive ? '#7974ff' : '#dee1e6')};
    transition: background-color 0.4s;
`;
const Circle = styled.div`
    position: absolute;
    top: 50%;
    left: ${(props) => (props.isActive ? '22px' : '2px')};
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    transition: left 0.4s;
`;
