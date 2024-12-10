import { SwipeableDrawer } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const WOSwipeableModal = ({ user, isOpen, setIsOpen, children, noneFooter, checkedCount, selectArea }) => {
  const [drawerBleeding, setDrawerBleeding] = useState(116);
  const [open, setOpen] = useState(isOpen || false);

  useEffect(() => {
    if (noneFooter) {
      setDrawerBleeding(58);
    } else {
      setDrawerBleeding(116);
    }
  }, [noneFooter]);

  useEffect(() => {
    if (isOpen !== open) {
      setOpen(isOpen);
    }
  }, [isOpen, open]);

  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
    setIsOpen(newOpen);
  };
  const clickDrawerOpen = (newOpen) => {
    if (newOpen && !open) {
      setOpen(newOpen);
      setIsOpen(newOpen);
    } else if (!newOpen && open) {
      setOpen(newOpen);
      setIsOpen(newOpen);
    }
  };

  return (
    <>
      <DrawerCustom
        anchor='bottom'
        open={open}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
        onClick={() => clickDrawerOpen(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        $noneFooter={noneFooter}
        ModalProps={{
          keepMounted: true,
        }}>
        <TopHeader $open={open} $noneFooter={noneFooter}>
          <Arr type='button' onClick={() => clickDrawerOpen(false)} />
          {/* 유저 권한 분기 */}
          {user === 1 ? (
            <>
              {noneFooter ? (
                <TitleWrap $open={open} className={open ? '' : 'center'}>
                  <div className='work-wrap'>
                    선택된 업무
                    <span className='num'> 01</span>건
                  </div>
                </TitleWrap>
              ) : (
                <TitleWrap $open={open}>
                  <div className='area-wrap'>
                    선택된 기관 <span className='area'>{selectArea}</span>
                  </div>
                  <div className='work-wrap'>
                    {open ? '선택된 업무' : '업무'}
                    <span className='num'> {checkedCount < 10 ? `0${checkedCount}` : checkedCount}</span>건
                  </div>
                </TitleWrap>
              )}
            </>
          ) : (
            <TitleWrap $open={open} className={open ? '' : 'center'}>
              <div className='work-wrap'>
                선택된 업무
                <span className='num'> {checkedCount < 10 ? `0${checkedCount}` : checkedCount}</span>건
              </div>
            </TitleWrap>
          )}
        </TopHeader>
        <ContentWrap $noneFooter={noneFooter}>{children}</ContentWrap>
      </DrawerCustom>
    </>
  );
};

export default WOSwipeableModal;

const DrawerCustom = styled(SwipeableDrawer)`
  z-index: 700;
  .MuiPaper-root {
    overflow: visible;
    height: calc(100dvh - 160px);
    background-color: #fff;
    ${(props) =>
      props.$noneFooter &&
      css`
        height: calc(100dvh - 102px);
      `}
  }
`;
const Arr = styled.button`
  width: 35px;
  height: 10px;
  background: url(/assets/woori-mobile/icon/arr-swipeable.svg) no-repeat center / cover;
`;
const TopHeader = styled.div`
  flex: 0 0 auto;
  position: absolute;
  top: -116px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px 0;
  width: 100%;
  height: 117px;
  padding: 8px 0 0;
  border-radius: 24px 24px 0px 0px;
  box-shadow: 0px -3px 14px 0px rgba(0, 0, 0, 0.1);
  background: #fff;
  visibility: visible;
  ${(props) =>
    props.$open &&
    css`
      box-shadow: unset;
      align-items: flex-start;
      ${Arr} {
        margin: 0 auto;
        transform: rotate(180deg);
      }
    `}
  ${(props) =>
    props.$noneFooter &&
    css`
      top: -58px;
      height: 58px;
    `}
`;
const ContentWrap = styled.div`
  position: absolute;
  top: -68px;
  width: 100%;
  height: 100%;
  padding: 10px 0 20px;
  background-color: #fff;
  overflow-y: auto;
  ${(props) =>
    props.$noneFooter &&
    css`
      top: -10px;
    `}
`;

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
  color: var(--W-Dark-11, #333);
  font-size: 14px;
  font-weight: 400;
  &.center {
    justify-content: center;
  }
  .area-wrap {
    color: var(--W-Dark-10, #555);
    font-size: 14px;
    font-weight: 400;
    .area {
      color: var(--C-Dark-11, #1a2c49);
      font-weight: 700;
    }
  }
  .work-wrap {
    color: var(--W-Dark-10, #555);
    font-size: 14px;
    font-weight: 400;
    .num {
      color: var(--Blue-01, #3284ff);
      font-weight: 700;
    }
  }

  ${(props) =>
    props.$open &&
    css`
      justify-content: flex-start;
      .area-wrap {
        display: none;
      }
      .work-wrap {
        font-size: 16px;
        font-weight: 700;
      }
      font-size: 16px;
      font-weight: 700;
      line-height: 21px;
    `}
`;
