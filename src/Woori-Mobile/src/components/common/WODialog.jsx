import { Dialog } from '@mui/material';
import React, { useEffect, useState } from 'react';
import WOIconButton from './WOIconButton';
import styled, { css } from 'styled-components';

const WODialog = ({ isOpen: isPropOpen, onClose, bgColor, title, children, buttons, buttonGrid, center, totalCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    onClose();
    setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(isPropOpen);
  }, [isPropOpen]);

  return (
    <CustomDialog fullScreen={center ? false : true} $center={center} $bgColor={bgColor} open={isOpen} onClose={() => handleClose()}>
      <Header $center={center} $totalCount={totalCount}>
        <div className='title'>{title}</div>
        {totalCount && <div className='count'>총 {totalCount}건</div>}
        <WOIconButton icon={'close-20'} width={20} height={20} onClick={() => handleClose()} />
      </Header>
      <ContentWrap $center={center}>{children}</ContentWrap>
      {buttons && (
        <Footer $buttonGrid={buttonGrid} className='dialog-footer' $center={center}>
          {buttons}
        </Footer>
      )}
    </CustomDialog>
  );
};

export default WODialog;

const CustomDialog = styled(Dialog)`
  display: flex;
  flex-direction: column;
  &.MuiDialog-root {
    z-index: 3000;
  }
  ${(props) =>
    props.$bgColor === 'gradient' &&
    css`
      .MuiPaper-root {
        background: var(--Grad-BG-01, linear-gradient(180deg, #ebedff 0%, #ffeaea 100%));
      }
      .dialog-footer {
        border-top: unset;
      }
    `};
  ${(props) =>
    props.$center &&
    css`
      .MuiPaper-root {
        border-radius: 8px;
        margin: 0 20px;
      }
    `}
`;

const Header = styled.div`
  position: relative;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  ${(props) =>
    props.$totalCount &&
    css`
      justify-content: space-between;
      padding: 0 56px 0 20px;
    `}
  .title {
    color: var(--W-Dark-11, #333);
    font-size: 16px;
    font-weight: 700;
  }
  .count {
    color: var(--W-Dark-11, #333);
    font-size: 14px;
    font-weight: 700;
  }
  .icon-btn {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
  ${(props) =>
    props.$center &&
    css`
      justify-content: flex-start;
      padding: 0 20px;
    `}
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  ${(props) =>
    props.$center &&
    css`
      display: flex;
      align-items: center;
      width: 320px;
      padding: 10px 20px;
      .btn + .btn {
        margin-left: 6px;
      }
    `}
`;

const Footer = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 4px;
  height: 70px;
  padding: 0 12px;
  border-top: 1px solid var(--C-Dark-02);
  ${(props) =>
    props.$buttonGrid === 'type-01' &&
    css`
      .btn {
        &:first-child {
          min-width: 113px;
          width: 113px;
        }
      }
    `}
  ${(props) =>
    props.$center &&
    css`
      justify-content: center;
      border-top: unset;
      .btn {
        width: 138px;
      }
    `}
`;
