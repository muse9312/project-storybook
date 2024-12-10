import React from 'react';
import { Outlet } from 'react-router';
import styled from 'styled-components';

const SubLayout = () => {
  return (
    <>
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default SubLayout;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
