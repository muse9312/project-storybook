import React, { useState } from 'react';
import styled from 'styled-components';
import WOIconButton from '../common/WOIconButton';
import Menu from './Menu';
import SelectedWorkDialog from './SelectedWorkDialog';

const SubHeader = ({ title }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [workDialogOpen, setWorkDialogOpen] = useState(false);

  return (
    <>
      <SubHeaderWrap className='header'>
        <SubHeaderLeft>
          <WOIconButton icon={'arr-back-30'} width={30} height={30} />
          <SubHeaderTitle>{title}</SubHeaderTitle>
        </SubHeaderLeft>
        <SubHeaderAside>
          <WOIconButton
            icon={'star-black-30'}
            width={30}
            height={30}
            onClick={() => {
              setWorkDialogOpen(true);
            }}
          />
          <WOIconButton
            icon={'menu-black-30'}
            width={30}
            height={30}
            onClick={() => {
              setIsMenuOpen(true);
            }}
          />
        </SubHeaderAside>
      </SubHeaderWrap>
      <SelectedWorkDialog isOpen={workDialogOpen} onClose={() => setWorkDialogOpen(false)} />
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default SubHeader;

const SubHeaderWrap = styled.div`
  flex: 0 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  padding: 0 16px;
  background-color: var(--White);
`;

const SubHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0 2px;
`;

const SubHeaderTitle = styled.h1`
  font-size: 16px;
  font-weight: 700;
  color: var(--Black);
`;

const SubHeaderAside = styled.div`
  display: flex;
  align-items: center;
  gap: 0 12px;
`;
