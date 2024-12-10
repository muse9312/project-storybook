import React, { useEffect, useState } from 'react';
import WODialog from '../common/WODialog';
import styled, { css } from 'styled-components';
import WOMainTabs from '../common/WOMainTabs';

const fdsData = [
  {
    id: 1,
    title: '삼성 스마트폰 오작동 주의 안내',
    department: '강남구 세무과',
    date: '2023.03.20 14:00',
    dayAgo: 1,
  },
  {
    id: 2,
    title: '삼성 스마트폰 오작동 주의 안내',
    date: '2023.03.20',
    dayAgo: 2,
  },
];

const noticeData = [
  {
    id: 1,
    title: '삼성 스마트폰 오작동 주의 안내',
    date: '2023.03.20',
    content: `○ 신규기준 COFIX 금리 (공시일 : 2024. 2. 15) : 3.66% 
(전월대비 -0.18%)
○ 잔액기준 COFIX 금리 (공시일 : 2024. 2. 15): 3.84% 
(전월대비 -0.03%)
○ 다음 신규, 잔액 COFIX 금리공시일 : 2024.3.15
○ 금리적용기간: 2024. 2. 16~ 2024. 3. 15
※ COFIX 공시일자 안내: 매월 15일 15시 (다만, 15일이 
공휴일인 경우 익영업일)
(COFIX 금리는 전국은행연합회홈페이지→ 소비자포털
→ 금융상품정보 → COFIX → COFIX공시에서 확인가능)
업무에 참고하시기 바랍니다.`,
  },
  {
    id: 2,
    title: '삼성 스마트폰 오작동 주의 안내',
    date: '2023.03.20',
    content: `○ 신규기준 COFIX 금리 (공시일 : 2024. 2. 15) : 3.66% 
(전월대비 -0.18%)
○ 잔액기준 COFIX 금리 (공시일 : 2024. 2. 15): 3.84% 
(전월대비 -0.03%)
○ 다음 신규, 잔액 COFIX 금리공시일 : 2024.3.15
○ 금리적용기간: 2024. 2. 16~ 2024. 3. 15
※ COFIX 공시일자 안내: 매월 15일 15시 (다만, 15일이 
공휴일인 경우 익영업일)
(COFIX 금리는 전국은행연합회홈페이지→ 소비자포털
→ 금융상품정보 → COFIX → COFIX공시에서 확인가능)
업무에 참고하시기 바랍니다.`,
  },
];

const NotificationDialog = ({ isOpen, onClose }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(isOpen || false);
  const [activeTabId, setActiveTabId] = useState(1);
  const [toggleOpen, setToggleOpen] = useState(Array(noticeData.length).fill(false));

  const handleClose = () => {
    onClose && onClose();
    setIsPopupOpen(false);
  };

  useEffect(() => {
    setIsPopupOpen(isOpen);
  }, [isOpen]);

  const toggleItem = (index) => {
    const newToggleOpen = [...toggleOpen];
    newToggleOpen[index] = !newToggleOpen[index];
    setToggleOpen(newToggleOpen);
  };

  return (
    <WODialog title='알림함' fullScreen isOpen={isPopupOpen} onClose={() => handleClose()}>
      <Wrapper>
        <TabArea>
          <WOMainTabs
            onChange={(selectedTabID) => setActiveTabId(selectedTabID)}
            activeTabID={activeTabId}
            tabs={[
              {
                id: 1,
                name: 'FDS',
              },
              {
                id: 2,
                name: '공지사항',
              },
            ]}
          />
        </TabArea>
        {activeTabId === 1 ? <Notice>* 최근 15일 간의 알림을 확인하실수 있습니다.</Notice> : <Notice>* 최근 1년 간의 알림을 확인하실수 있습니다.</Notice>}

        {activeTabId === 1 && (
          <ListWrap>
            {fdsData.map((item) => (
              <ListItem key={item.id}>
                <Wrap as='div'>
                  <div className='title-wrap'>
                    <div className='title'>{item.title}</div>
                    <div className='info'>
                      {item.department && <span>{item.department}</span>}
                      {item.date && <span>{item.date}</span>}
                      {item.dayAgo && <span>{item.dayAgo}일전</span>}
                    </div>
                  </div>
                </Wrap>
              </ListItem>
            ))}
          </ListWrap>
        )}
        {activeTabId === 2 && (
          <ListWrap>
            {noticeData.map((item, index) => (
              <ListItem key={item.id} $toggleOpen={toggleOpen[index]}>
                <Wrap type='button' onClick={() => toggleItem(index)}>
                  <div className='title-wrap'>
                    <div className='title'>{item.title}</div>
                    <div className='info'>{item.date && <span>{item.date}</span>}</div>
                  </div>
                  <div className='toggle-arr'></div>
                </Wrap>
                <Content>{item.content}</Content>
              </ListItem>
            ))}
          </ListWrap>
        )}
      </Wrapper>
    </WODialog>
  );
};

export default NotificationDialog;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const TabArea = styled.div`
  flex: 0 0 auto;
  padding: 16px 20px 30px;
`;

const Notice = styled.div`
  position: relative;
  flex: 0 0 auto;
  padding: 0 20px 14px;
  margin-bottom: 8px;
  color: var(--C-Dark-08, #566479);
  font-size: 12px;
  font-weight: 400;
  border-bottom: 1px solid var(--C-Dark-02, #ededf3);
  &::after {
    flex: 0 0 auto;
    content: '';
    position: absolute;
    bottom: -9px;
    left: 0;
    width: 100%;
    height: 8px;
    background: #f5f6fa;
  }
`;
const ListWrap = styled.div`
  height: 100%;
  position: relative;
  margin-top: 8px;
  overflow-y: auto;
  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: 0;
    width: 100%;
    height: 8px;
    background: #f5f6fa;
  }
`;

const ListItem = styled.div`
  width: 100%;
  height: 89px;
  overflow: hidden;
  border-bottom: 1px solid var(--C-Dark-02, #ededf3);
  ${(props) =>
    props.$toggleOpen &&
    css`
      height: auto;
      .toggle-arr {
        transform: rotate(180deg);
      }
    `}
`;

const Wrap = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 24px 32px;

  .title-wrap {
    .title {
      margin-bottom: 4px;
      color: var(--W-Dark-11, #333);
      font-size: 16px;
      font-weight: 400;
      text-align: left;
    }
    .info {
      display: flex;
      align-items: center;
      span {
        position: relative;
        display: block;
        color: var(--W-Dark-09, #777);
        font-size: 12px;
        font-weight: 400;
        & + span {
          margin-left: 13px;
          &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: -7px;
            transform: translateY(-50%);
            width: 1px;
            height: 8px;
            background-color: var(--W-Dark-09, #777);
          }
        }
      }
    }
  }
  .toggle-arr {
    width: 14px;
    height: 14px;
    background: url(/assets/woori-mobile/icon/arrow-dropdown-black.svg) no-repeat center / cover;
  }
`;

const Content = styled.div`
  padding: 24px 32px;
  color: var(--W-Dark-10, #555);
  font-size: 14px;
  font-weight: 400;
  line-height: 150%; /* 21px */
  white-space: pre-wrap;
  border-top: 1px solid var(--C-Dark-02, #ededf3);
`;
