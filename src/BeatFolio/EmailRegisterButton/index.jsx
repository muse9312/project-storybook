import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const EmailRegisterButton = ({ type, onClick }) => {
  return (
    <>
      {type === 'user' && (
        <Btn onClick={onClick}>
          <TextWrap>
            <div className='icon'>🙋‍♀️</div>
            <div className='text'>
              <div className='tit'>개인으로 가입</div>
              <div className='txt'>개인으로 경기를 참여하고 싶다면!</div>
            </div>
          </TextWrap>
        </Btn>
      )}
      {type === 'company' && (
        <Btn to='/CompanyRegister' onClick={onClick}>
          <TextWrap>
            <div className='icon'>🪐</div>
            <div className='text'>
              <div className='tit'>기업으로 가입</div>
              <div className='txt'>사업 목적으로 경기를 개최하고 싶다면!</div>
            </div>
          </TextWrap>
        </Btn>
      )}
    </>
  );
};

export default EmailRegisterButton;

const Btn = styled(Link)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 69px;
  padding: 0 16px 0 20px;
  border-radius: 12px;
  background-color: #f4f6f8;
  border: 1px solid transparent;

  & + & {
    margin-top: 12px;
  }
  &:focus {
    border: 1px solid #7974ff;
    background-color: #f3f3ff;
    box-shadow: 0 4px 6px 0 rgba(121, 116, 255, 0.1);
  }
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background: url(./assets/BeatFolio/icon-arrow-right.png) no-repeat center / cover;
  }
`;

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  .icon {
    margin-right: 21px;
    font-size: 24px;
    line-height: 32px;
  }
  .text {
    .tit {
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      color: #000;
      text-align: left;
    }
    .txt {
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      color: #777;
    }
  }
`;
