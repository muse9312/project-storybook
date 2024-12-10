import React from 'react';
import styled from 'styled-components';

const WOLoading = () => {
  return (
    <LoadingWrap>
      <Content>
        <img src='/assets/woori-mobile/etc/loading.svg' alt='loading...' />
        <TextBox>
          <div className='text en'>LOADING...</div>
          <div className='text ko'>잠시만 기다려주세요.</div>
        </TextBox>
      </Content>
    </LoadingWrap>
  );
};

export default WOLoading;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-bottom: -5px;
  }
`;

const TextBox = styled.div`
  .text {
    text-align: center;

    &.en {
      margin-bottom: 4px;
      color: var(--C-Dark-08, #566479);
      font-size: 16px;
      font-weight: 700;
    }

    &.ko {
      color: var(--Cool-Dark-06, #9ea6b2);
      font-size: 16px;
      font-weight: 700;
    }
  }
`;

const LoadingWrap = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(24px);
  z-index: 1100;
`;

// content
