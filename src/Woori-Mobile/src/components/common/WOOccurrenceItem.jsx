import styled from 'styled-components';
import React from 'react';

const WOOccurrenceItem = ({ item, isActive, width, onClick }) => {
  const handleClick = () => {
    onClick && onClick(item);
  };

  return (
    <BoxWrap type='button' className={`occurrence-item ${isActive ? 'active' : ''}`} $width={width} key={item.id} onClick={handleClick}>
      <TitleWrap>
        <span className={`count block text-center ${item.severity}`}>{item.count >= 10 ? item.count : `0${item.count}`}건</span>
        <span className='title block text-center'>{item.title}</span>
      </TitleWrap>
      {item.detailList && item.detailList.length && (
        <LocationWrap className='location'>
          {item.detailList.map((detail) => (
            <li className='location__item' key={detail.id}>
              <span className='title'>{detail.location}</span>
              <span className='count'>{detail.count}건</span>
            </li>
          ))}
        </LocationWrap>
      )}
    </BoxWrap>
  );
};

export default WOOccurrenceItem;

const BoxWrap = styled.button`
  display: flex;
  flex-direction: column;
  width: 120px;
  min-width: 120px;
  height: 215px;
  padding: 16px 12px;
  border-radius: 12px;
  &:not(.active) {
    background: rgba(255, 255, 255, 0.05);
  }
  color: #fff;
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  width: 100%;
  .title {
    font-size: 13px;
    font-weight: 400;
    min-height: 34px;
  }
  .count {
    font-size: 18px;
    font-weight: 700;
    &.advisory {
      color: #ff8f5f;
    }
    &.caution {
      color: #fab530;
    }
    &.warning {
      color: #ff5d5d;
    }
  }
`;

const LocationWrap = styled.ul`
  padding-top: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  .location {
    &__item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title,
      .count {
        font-size: 12px;
        font-weight: 400;
        display: block;
      }
      .title {
        padding-right: 10px;
      }
    }
  }
`;
