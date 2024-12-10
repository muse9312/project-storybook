import React from 'react';
import { styled } from 'styled-components';

const SocialRegisterButton = ({ social, onClick }) => {
  return (
    <>
      {social === 'kakao' && (
        <Btn social={social} onClick={onClick}>
          <Icon social={social} />
          카카오로 시작하기
        </Btn>
      )}
      {social === 'naver' && (
        <Btn social={social} onClick={onClick}>
          <Icon social={social} />
          네이버로 시작하기
        </Btn>
      )}
      {social === 'facebook' && (
        <Btn social={social} onClick={onClick}>
          <Icon social={social} />
          페이스북으로 시작하기
        </Btn>
      )}
      {social === 'google' && (
        <Btn social={social} onClick={onClick}>
          <Icon social={social} />
          구글메일로 시작하기
        </Btn>
      )}
      {social === 'email' && (
        <Btn social={social} onClick={onClick}>
          <Icon social={social} />
          이메일 가입
        </Btn>
      )}
    </>
  );
};

export default SocialRegisterButton;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: #fff;
  ${(props) =>
    props.social === 'kakao' &&
    `
        background-color:#ffcd00;
        color:#000;
    `}
  ${(props) =>
    props.social === 'naver' &&
    `
        background-color:#06c759;
    `}
    ${(props) =>
    props.social === 'facebook' &&
    `
        background-color:#4268b3;
    `}
    ${(props) =>
    props.social === 'google' &&
    `
        background: #F4F6F8;
        color:#000;
    `}
    ${(props) =>
    props.social === 'email' &&
    `
        background-color:#24282e;
    `}
    & +& {
    margin-top: 10px;
  }
`;

const Icon = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  margin-right: 6px;
  ${(props) =>
    props.social === 'kakao' &&
    `
        background:url(./assets/BeatFolio/icon-loginlogo-kakao-black-16-px@2x.png) no-repeat center / cover;
    `}
  ${(props) =>
    props.social === 'naver' &&
    `
        background:url(./assets/BeatFolio/icon-loginlogo-naver-naver-16-px@2x.png) no-repeat center / cover;
    `}
    ${(props) =>
    props.social === 'facebook' &&
    `
        background:url(./assets/BeatFolio/icon-loginlogo-facebook-16-px@2x.png) no-repeat center / cover;
    `}
    ${(props) =>
    props.social === 'google' &&
    `
        background:url(./assets/BeatFolio/icon-loginlogo-google-16-px@2x.png) no-repeat center / cover;
    `}
    ${(props) =>
    props.social === 'email' &&
    `
        background:url(./assets/BeatFolio/icon-loginlogo-email-16-px@2x.png) no-repeat center / cover;
    `}
`;
