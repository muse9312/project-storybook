import React from 'react';
import { styled } from 'styled-components';
import Input from '../Input';

const PasswordInputSet = (props) => {
  return (
    <>
      {props.case === '1' && (
        <>
          <Wrap>
            <Input type='password' label={props.label} name='password01' id='password01' bg='white' placeholder='비밀번호 입력' labelVisible />
            <ValidateBox>
              <Validate>영문포함</Validate>
              <Validate>숫자포함</Validate>
              <Validate>8-20자 이내</Validate>
              <Validate>특수문자</Validate>
            </ValidateBox>
          </Wrap>
          <Wrap>
            <Input type='password' label={props.label} name='password01' id='password02' bg='white' placeholder='비밀번호 확인' />
            <ValidateBox>
              <Validate>비밀번호 일치</Validate>
            </ValidateBox>
          </Wrap>
        </>
      )}
      {props.case === '2' && (
        <>
          <Wrap>
            <Input type='password' label={props.label} name='password01' id='password01' bg='white' value='123123' placeholder='비밀번호 입력' labelVisible />
            <ValidateBox>
              <Validate className='on'>영문포함</Validate>
              <Validate className='on'>숫자포함</Validate>
              <Validate className='error'>8-20자 이내</Validate>
              <Validate className='error'>특수문자</Validate>
            </ValidateBox>
          </Wrap>
          <Wrap>
            <Input type='password' label={props.label} name='password01' id='password02' bg='white' value='123123' placeholder='비밀번호 확인' />
            <ValidateBox>
              <Validate>비밀번호 일치</Validate>
            </ValidateBox>
          </Wrap>
        </>
      )}
      {props.case === '3' && (
        <>
          <Wrap>
            <Input
              type='password'
              label={props.label}
              name='password01'
              id='password01'
              bg='white'
              value='123123123'
              placeholder='비밀번호 입력'
              labelVisible
            />
            <ValidateBox>
              <Validate className='on'>영문포함</Validate>
              <Validate className='on'>숫자포함</Validate>
              <Validate className='on'>8-20자 이내</Validate>
              <Validate className='on'>특수문자</Validate>
            </ValidateBox>
          </Wrap>
          <Wrap>
            <Input type='password' label={props.label} name='password01' id='password02' bg='white' value='123123123' placeholder='비밀번호 확인' />
            <ValidateBox>
              <Validate className='on'>비밀번호 일치</Validate>
            </ValidateBox>
          </Wrap>
        </>
      )}
    </>
  );
};

export default PasswordInputSet;

const Wrap = styled.div`
  & + & {
    margin-top: 10px;
  }
`;

const ValidateBox = styled.div`
  display: flex;
  margin-top: 8px;
  padding-left: 6px;
`;
const Validate = styled.span`
  position: relative;
  display: block;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #999;
  &::after {
    content: '';
    position: absolute;
    right: -18px;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    width: 16px;
    height: 16px;
    background: url(./assets/BeatFolio/icon-sub-chk-unchecked.png) no-repeat center / cover;
  }
  & + & {
    margin-left: 28px;
  }
  &.on {
    color: #7974ff;
    &::after {
      background: url(./assets/BeatFolio/icon-sub-chk-checked.png) no-repeat center / cover;
    }
  }
  &.error {
    color: #f53e50;
    &::after {
      background: url(./assets/BeatFolio/icon-sub-chk-checked-ex.png) no-repeat center / cover;
    }
  }
`;
