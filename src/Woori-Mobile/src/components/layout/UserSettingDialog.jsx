import React, { useEffect, useState } from 'react';
import WODialog from '../common/WODialog';
import styled, { css } from 'styled-components';
import WOButton from '../common/WOButton';
import PasswordResetDialog from './PasswordResetDialog';

const userSettingData = [
  {
    id: 1,
    title: '아이디',
    text: 'KIMWOORI',
  },
  {
    id: 2,
    title: '성명',
    text: '김우리',
  },
  {
    id: 3,
    title: '생년월일',
    text: '1999-01-01',
  },
  {
    id: 4,
    title: '휴대폰 번호',
    text: '010-2345-9876',
  },
];

const userAuthData = [
  {
    id: 1,
    title: '소속구청/ 부서',
    text: '우리은행\n기관공금고객부',
  },
  {
    id: 2,
    title: '법인카드 권한',
    text: 'Y',
  },
];

const UserSettingDialog = ({ isOpen, onClose }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(isOpen || false);
  const [passwordResetOpen, setPasswordResetOpen] = useState(false);

  const handleClose = () => {
    onClose && onClose();
    setIsPopupOpen(false);
  };

  useEffect(() => {
    setIsPopupOpen(isOpen);
  }, [isOpen]);

  return (
    <>
      <WODialog
        title='사용자 설정'
        fullScreen
        isOpen={isPopupOpen}
        onClose={() => handleClose()}
        buttons={
          <>
            <WOButton onClick={() => handleClose()} size='lg' variant='primary-sub'>
              확인
            </WOButton>
          </>
        }>
        <Wrapper>
          <Content>
            <Title>사용자 정보</Title>
            <ContentTable>
              {userSettingData.map((item) => (
                <ContentItem>
                  <div className='title'>{item.title}</div>
                  <div className='text'>{item.text}</div>
                </ContentItem>
              ))}
            </ContentTable>
          </Content>
          <Content>
            <ContentTable>
              <ContentItem $alignCenter={true}>
                <div className='title'>비밀번호</div>
                <WOButton
                  onClick={() => {
                    setPasswordResetOpen(true);
                  }}
                  size='sm'
                  variant='primary-sub'>
                  재설정
                </WOButton>
              </ContentItem>
            </ContentTable>
          </Content>
          <Content>
            <Title>사용자 소속/ 권한</Title>
            <ContentTable>
              {userAuthData.map((item) => (
                <ContentItem>
                  <div className='title'>{item.title}</div>
                  <div className='text'>{item.text}</div>
                </ContentItem>
              ))}
            </ContentTable>
          </Content>
          <Notice>* 소속(부서), 권한변경은  PC에서변경해주세요.</Notice>
        </Wrapper>
      </WODialog>
      <PasswordResetDialog isOpen={passwordResetOpen} onClose={() => setPasswordResetOpen(false)} />
    </>
  );
};

export default UserSettingDialog;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  gap: 8px 0;
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div`
  padding: 20px 20px 8px 6px;
  color: var(--Black, #000);
  font-size: 14px;
  font-weight: 700;
`;

const ContentTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px 0;
  padding: 20px;
  border-radius: 12px;
  background: #f5f6fa;
`;

const ContentItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px 0;
  font-size: 13px;
  .title {
    color: var(--C-Dark-10, #263752);
    font-weight: 700;
  }
  .text {
    color: var(--C-Dark-08, #566479);
    font-weight: 400;
    white-space: pre-wrap;
    text-align: right;
  }
  ${(props) =>
    props.$alignCenter &&
    css`
      align-items: center;
    `}
`;

const Notice = styled.div`
  padding: 0 12px;
  color: var(--C-Dark-08, #566479);
  font-size: 12px;
  font-weight: 400;
`;
