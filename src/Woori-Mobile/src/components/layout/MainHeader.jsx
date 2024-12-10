import React, { useState } from 'react';
import styled from 'styled-components';
import WOIconButton from '../common/WOIconButton';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import NotificationDialog from './NotificationDialog';

const MainHeader = ({ type }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotiOpen, setIsNotiOpen] = useState(false);

  return (
    <>
      <MainHeaderWrap className='header' $type={type}>
        <MainHeaderWrapInner>
          {type !== 'login' && (
            <MainHeaderLogo>
              <span className='blind'>메인 로고</span>
            </MainHeaderLogo>
          )}

          <MainHeaderAside>
            <Link to='/' title='제로 비즈로 이동' className='zeropay'></Link>
            {type !== 'login' && (
              <>
                <WOIconButton
                  height={30}
                  icon={type === 'dark' ? 'noti-white-30' : 'noti-black-30'}
                  theme={type === 'dark' ? 'dark' : ''}
                  width={30}
                  onClick={() => {
                    setIsNotiOpen(true);
                  }}
                  newNotice={true}
                />
                <WOIconButton
                  height={30}
                  icon={type === 'dark' ? 'menu-white-30' : 'menu-black-30'}
                  width={30}
                  onClick={() => {
                    setIsMenuOpen(true);
                  }}
                />
              </>
            )}
          </MainHeaderAside>
        </MainHeaderWrapInner>
      </MainHeaderWrap>
      <NotificationDialog isOpen={isNotiOpen} onClose={() => setIsNotiOpen(false)} />
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default MainHeader;

const MainHeaderWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  ${(props) => {
    if (props.$type !== 'dark') {
      return 'background-color: var(--White)';
    } else {
      return 'background-color: var(--C-Dark-11)';
    }
  }};
  z-index: 1000;
`;

const MainHeaderWrapInner = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 7px 16px;
`;

const MainHeaderLogo = styled.div`
  width: 30px;
  height: 30px;
  background: url(/assets/woori-mobile/logo/logo-seoul.svg) no-repeat center / cover;
`;

const MainHeaderAside = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto;
  .zeropay {
    width: 84px;
    height: 24px;
    background: url(/assets/woori-mobile/logo/logo-zeropay.svg) no-repeat center / cover;
  }
`;
