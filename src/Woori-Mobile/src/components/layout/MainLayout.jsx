import React from 'react';
import { Outlet } from 'react-router';
import styled, { css } from 'styled-components';
import MainHeader from '../../components/layout/MainHeader';

const MainLayout = ({ type }) => {
  return (
    <>
      <MainLayoutWrap>
        <Main $type={type}>
          <MainHeader type={type} />
          <Outlet />
        </Main>
      </MainLayoutWrap>
    </>
  );
};

export default MainLayout;

const MainLayoutWrap = styled.div`
  height: 100%;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  ${(props) =>
    props.$type === 'dark' &&
    css`
      background: linear-gradient(360deg, #3a3d64 0%, #1d2e4b 100%);
    `}
`;
