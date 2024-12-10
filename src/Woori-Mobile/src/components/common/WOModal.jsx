import { Drawer } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import WOIconButton from './WOIconButton';

// type size = 'sm' | 'md' | 'lg' | 'xl' (center 타입인 경우)
// type direction = 'center' | 'bottom'
// type bgColor = 'white' | 'gray'

const WOModal = ({ isOpen: isPropOpen, title, onClose, buttons, children, size, buttonGrid }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    onClose();
    setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(isPropOpen);
  }, [isPropOpen]);

  return (
    <>
      <DrawerCustom anchor={'bottom'} $size={size} className={'bottom-layer'} open={isOpen} onClose={(event) => handleClose(event)}>
        <TitleArea>
          <p className='title'>{title || ''}</p>
          <WOIconButton icon={'close-20'} width={20} height={20} onClick={(event) => handleClose(event)} />
        </TitleArea>
        <ModalContentArea>{children}</ModalContentArea>
        {buttons && <ModalButtonArea $buttonGrid={buttonGrid}>{buttons}</ModalButtonArea>}
      </DrawerCustom>
    </>
  );
};

export default WOModal;

const DrawerCustom = styled(Drawer)`
  &.MuiDrawer-root {
    z-index: 2900;
  }
  .MuiDrawer-paperAnchorBottom {
    border-radius: 24px 24px 0px 0px;
    box-shadow: 0px -3px 14px 0px rgba(0, 0, 0, 0.1);
    padding-top: 8px;
    height: calc(100dvh - 48px);
    max-height: calc(100dvh - 48px);
    z-index: 900;
    ${(props) =>
      props.$size === 'fit' &&
      css`
        height: auto;
      `}
  }
`;

const TitleArea = styled.div`
  flex: 0 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  .title {
    color: var(--W-Dark-11, #333);
    font-size: 16px;
    font-weight: 700;
  }
  .icon-btn {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
`;

const ModalContentArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: ${(props) => `${props.$gap ? `${props.$gap}px` : '0'}`};
  overflow-y: auto;
`;
const ModalButtonArea = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  padding: 12px;
  gap: 0 4px;
  border-top: 1px solid var(--C-Dark-02, #ededf3);
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
`;

export const ModalSupportingText = styled.div`
  padding: 0px 20px 8px;
  color: var(--Red-01);
  font-size: 10px;
  font-weight: 400;
`;
