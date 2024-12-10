import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

// FDS선택
export const FdsOpenButton = styled(Link)`
  position: absolute;
  top: 44px;
  right: 0;
  width: 77px;
  height: 88px;
  background: url(/assets/woori-mobile/icon/fds-default.svg) no-repeat center / cover;
`;

// 업무선택
export const WorkingSelectOpenButton = styled(Link)`
  width: 89px;
  height: 88px;
  background: url(/assets/woori-mobile/icon/fds-active.svg) no-repeat left center / cover;
`;

export const ContentWrap = styled.div`
  height: 100%;
  padding-top: 44px;
`;

export const ContentInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px 0;
  height: 100%;
`;

export const TopContent = styled.div`
  flex: 0 0 auto;
  padding: 74px 20px 0;
  background-color: #fff;
`;

export const SearchArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 74px;
  background-color: #fff;
  .notice {
    position: relative;
    color: var(--C-Dark-08, #566479);
    font-size: 13px;
    font-weight: 400;
    text-align: center;
    white-space: pre-wrap;
    &::before {
      content: '';
      position: absolute;
      top: 2px;
      left: -20px;
      display: block;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: url(/assets/woori-mobile/icon/main-notice.svg) no-repeat center/ cover;
    }
  }
`;
export const Content = styled.div`
  height: 100%;
  background-color: #fff;
`;

export const ContentTitle = styled.div`
  margin-bottom: 20px;
  color: var(--C-Dark-12, #0e213f);
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;
export const SelectWorkTitle = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 20px;
  border-bottom: 1px solid #efefef;
  .tit {
    color: var(--C-Dark-12, #0e213f);
    font-size: 14px;
    font-weight: 700;
  }
`;
export const AgencyWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  padding: 0 20px;
  border-bottom: 1px solid #efefef;
  .tit {
    color: var(--C-Dark-09, #3c4b63);
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.56px;
  }
  .btn-wrap {
    display: flex;
    align-items: center;
    gap: 0 12px;
    .agency {
      color: var(--C-Dark-12, #0e213f);
      font-size: 14px;
      font-weight: 700;
      letter-spacing: -0.56px;
    }
  }
  ${(props) =>
    props.$isFixed &&
    css`
      position: fixed;
      top: 52px;
      left: 0;
      width: 100%;
      &::before {
        content: '';
        position: absolute;
        top: -8px;
        left: 0px;
        width: 100%;
        height: 8px;
        background: var(--C-Dark-01, #f5f6fa);
      }
    `}
`;
export const SelectDetail = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100dvh - 168px);
  padding-bottom: 30px;
  border-radius: 16px;
  border: 1px solid #efefef;
  background: #f6f6fa;
  .title {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    height: 50px;
    padding: 0 16px;
    color: var(--C-Dark-10, #263752);
    font-size: 16px;
    font-weight: 700;
    background-color: #fff;
    border-radius: 16px 16px 0 0;
  }
`;
export const WorkSelectWrap = styled.div`
  padding: 0 20px 10px;
  background-color: #fff;
  ${(props) =>
    props.$heightType === 'type-01' &&
    css`
      padding: 0 20px 68px;
      ${SelectDetail} {
        height: calc(100dvh - 226px);
      }
    `}
  ${(props) =>
    props.$heightType === 'type-02' &&
    css`
      padding: 0 20px 126px;
      ${SelectDetail} {
        height: calc(100dvh - 284px);
      }
    `}
  ${(props) =>
    props.$heightType === 'type-03' &&
    css`
      padding: 0 20px 126px;
      ${SelectDetail} {
        height: calc(100dvh - 226px);
      }
    `}
  ${(props) =>
    props.$heightType === 'type-04' &&
    css`
      padding: 0 20px 10px;
      ${SelectDetail} {
        height: calc(100dvh - 112px);
      }
    `}
`;

export const SelectTopic = styled.div`
  padding: 10px 0 40px;
  height: 261px;
  .title-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    .tit {
      color: var(--C-Dark-10, #263752);
      font-size: 16px;
      font-weight: 700;
    }
  }
`;

export const SelectDetailList = styled.div`
  height: 100%;
  overflow-y: auto;
`;
