import React, { useEffect, useState } from 'react';
import WODialog from '../common/WODialog';
import styled from 'styled-components';
import WOButton from '../common/WOButton';
import WOLoginInput from '../common/WOLoginInput';
import WOValidationCheck from '../common/WOValidationCheck';

const PasswordResetDialog = ({ isOpen, onClose }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(isOpen || false);
  const handleClose = () => {
    onClose && onClose();
    setIsPopupOpen(false);
  };

  useEffect(() => {
    setIsPopupOpen(isOpen);
  }, [isOpen]);

  return (
    <WODialog
      title='비밀번호 재설정'
      fullScreen
      isOpen={isPopupOpen}
      onClose={() => handleClose()}
      buttons={
        <>
          <WOButton onClick={() => handleClose()} size='lg' variant='primary-sub'>
            비밀번호 재설정
          </WOButton>
        </>
      }>
      <ContentWrap>
        <Notice>{`* 휴대폰 인증으로 비밀번호를 재설정 하실 수 있습니다.`}</Notice>
        <FormWrap>
          <InputWrap>
            <WOLoginInput id='input02-01' label='이름' name='input02' placeholder='이름을 입력해 주세요.' />
            <WOLoginInput id='input02-02' label='생년월일' name='input02' placeholder='생년월일 6자리를 입력해 주세요.' />
            <WOLoginInput id='input02-03' label='아이디' name='input02' placeholder='아이디를 입력해 주세요.' />
            <WOLoginInput
              id='input02-04'
              label='핸드폰번호'
              name='input02'
              placeholder='핸드폰번호를 입력해주세요.'
              button={
                <AuthBtn type='button' className='auth-btn' onClick={() => {}}>
                  인증번호 전송
                </AuthBtn>
              }
            />
            <WOLoginInput id='input02-05' label='인증번호' name='input02' placeholder='인증번호를 입력해주세요.' time={'04:20'} />
          </InputWrap>
          <InputWrap>
            <WOLoginInput id='input02-06' label='비밀번호' name='input02' type='password' placeholder='새 비밀번호를 입력해주세요.' />
            <WOValidationCheck
              itemList={[
                {
                  id: '1',
                  title: '6자 이상 숫자',
                  isCheck: 'pass',
                },
                {
                  id: '2',
                  title: '영문',
                  isCheck: 'pass',
                },
                {
                  id: '3',
                  title: '특수문자',
                  isCheck: 'error',
                },
              ]}
            />
            <WOLoginInput
              id='input02-07'
              label='새 비밀번호'
              name='input02'
              type='password'
              placeholder='새 비밀번호를 한번 더 입력해주세요.'
              error={true}
              errorText={'비밀번호가 일치하지 않습니다.'}
            />
          </InputWrap>
        </FormWrap>
      </ContentWrap>
    </WODialog>
  );
};

export default PasswordResetDialog;

const ContentWrap = styled.div`
  flex: 1;
  padding: 30px 20px 70px;
  overflow-y: auto;
`;

const Notice = styled.div`
  margin-bottom: 14px;
  color: var(--C-Dark-08, #566479);
  font-size: 12px;
  font-weight: 400;
  white-space: pre-wrap;
`;

const FormWrap = styled.form``;

const InputWrap = styled.div`
  & + & {
    position: relative;
    margin-top: 60px;
    &::before {
      content: '';
      position: absolute;
      top: -30px;
      left: 0;
      width: 100%;
      height: 1px;
      background: var(--C-Dark-03);
    }
  }
  .validation-check {
    margin: 8px 0 20px;
  }
`;

const AuthBtn = styled.button`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 32px;
  padding: 0px 16px;
  color: var(--C-Dark-10);
  font-size: 12px;
  font-weight: 700;
  border-radius: 6px;
  background: var(--C-Dark-03, #e5e5ed);
  &:disabled {
    color: var(--C-Dark-06, #9ea6b2);
  }
`;
