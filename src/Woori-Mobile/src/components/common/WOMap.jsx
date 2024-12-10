import React from 'react';
import styled from 'styled-components';
import { districtDatas } from '../../data/map';
import WOAlarm from './WOAlarm';
import { alarmList } from '../../data/data';

function WOMap() {
  return (
    <Wrap className='map-wrap'>
      <WarningArea>
        <AlarmWrap className='alarm-wrap'>
          {alarmList.map((alarm) => (
            <WOAlarm key={alarm.id} severity={alarm.severity} label={alarm.label} count={alarm.count} styleType='block' />
          ))}
        </AlarmWrap>
      </WarningArea>
      <MapSvg>
        <svg width={300} height={236} viewBox='0 0 300 236' fill='none' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'>
          <g clipPath='url(#clip0_194_32673)'>
            {districtDatas.map((data, index) => (
              <path key={index} id={data.id} d={data.d} fill={'#BDD7FF'} fillOpacity={'0.2'} />
            ))}
          </g>
          <defs>
            <path id='clip0_194_32673'>
              <rect width='300' height='235' fill='white' />
            </path>
          </defs>
        </svg>
      </MapSvg>
      <MapInfo>
        <div className='notice'>* FDS 현황을 조회할 지역을 선택하실 수 있습니다.</div>
        <div className='total'>
          <span className='total__title'>이상감지</span>
          <span className='total__text'>총 144건</span>
        </div>
        <div className='ranking'>
          <p className='ranking__title'>Top 3</p>
          <ul className='ranking-list'>
            <li className='ranking-item'>
              <span className='ranking-item__left'>스마트 · 인터넷 뱅킹 신청</span>
              <span className='ranking-item__right'>10건</span>
            </li>
            <li className='ranking-item'>
              <span className='ranking-item__left'>제사고(입출금제한)거래</span>
              <span className='ranking-item__right'>5건</span>
            </li>
            <li className='ranking-item'>
              <span className='ranking-item__left'>비정상/기타 거래</span>
              <span className='ranking-item__right'>3건</span>
            </li>
          </ul>
        </div>
      </MapInfo>
    </Wrap>
  );
}

export default WOMap;

const Wrap = styled.div`
  position: relative;
  border-radius: 16px;
  background: #0e213f;
  padding: 20px 16px;
`;

const WarningArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AlarmWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;

  > .alarm {
    flex-grow: 1;
  }
`;

const MapSvg = styled.div`
  padding: 16px 0 10px;
  svg {
    width: 100%;
    height: 100%;
  }
  text-align: center;
  path {
    cursor: pointer;
  }
`;

const MapInfo = styled.div`
  .notice {
    display: flex;
    align-items: flex-start;
    min-height: 22px;
    font-size: 12px;
    font-weight: 400;
    color: var(--C-Dark-06);
    text-align: left;

    & + .total {
      margin-top: 20px;
    }
  }
  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__title {
      color: #fff;
      font-size: 14px;
      font-weight: 400;
    }
    &__text {
      color: #fc8686;
      font-size: 20px;
      font-weight: 700;
    }
  }

  .ranking__title {
    font-size: 13px;
    font-weight: 700;
    line-height: 27px;
    color: #fff;
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px solid var(--C-Dark-09);
  }

  .ranking-item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 26px;
    padding-left: 10px;

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 4px;
      height: 4px;
      border-radius: 100%;
      background-color: #249a9a;
    }

    &:nth-child(2):before {
      background-color: #a964a6;
    }

    &:nth-child(3):before {
      background-color: #5c80db;
    }
  }

  .ranking-item__left {
    font-size: 13px;
    font-weight: 400;
    color: var(--C-Dark-04);
  }

  .ranking-item__right {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
  }
`;
