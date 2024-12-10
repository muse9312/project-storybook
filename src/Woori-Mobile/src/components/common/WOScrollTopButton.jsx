import React from 'react';
import { styled, css } from 'styled-components';
import WOIconButton from './WOIconButton';

const WOScrollTopButton = ({ type, onClick, customClass, drawerOpen }) => {
  return (
    <Wrap $type={type} className={customClass} $drawerOpen={drawerOpen}>
      <WOIconButton icon={type === 'fds' ? 'scroll-top-white' : 'scroll-top'} width={14} height={20} onClick={onClick} />
    </Wrap>
  );
};

export default WOScrollTopButton;

const Wrap = styled.div`
  position: fixed;
  right: 10px;
  bottom: 10px;
  width: 46px;
  height: 46px;
  padding: 14px 16px;
  border: 1px solid #ededf3;
  border-radius: 100px;
  background: rgba(255, 255, 255, 056);
  z-index: 999;

  ${(props) =>
    props.$type === 'fds' &&
    css`
      border: 1px solid rgba(189, 215, 255, 0.12);
      background: rgba(189, 215, 255, 0.12);
    `}
  ${(props) =>
    props.$drawerOpen &&
    css`
      bottom: 126px;
    `}
`;
