import React from 'react';
import styled from 'styled-components';
import WOIcon from '../common/WOIcon';

// type typeType = 'live' | 'transaction'

const WOEventItem = ({ event, type }) => {
  // logic
  const { title, source, deaprtment, deposit, time, severity, accountType, manager, transactionType, onClick } = event;

  const handlClick = () => {
    onClick && onClick(event);
  };

  // view
  return (
    <Item className={type || 'live'}>
      {type === undefined || type === 'live' ? (
        <Button type='button' onClick={handlClick}>
          <WOIcon icon={`${severity}-fds`} width={24} height={24} />
          <div className='text-area'>
            <span className='title'>{title}</span>
            <div className='sub'>
              <span className='sub__text'>{source}</span>
              <span className='sub__text'>{deaprtment}</span>
              <span className='sub__text'>{deposit}</span>
              <span className='sub__text'>{time}</span>
            </div>
          </div>
        </Button>
      ) : (
        <div className='text-area'>
          <div className='sub'>
            <span className='sub__text'>{accountType}</span>
            <span className='sub__text'>{source}</span>
            <span className='sub__text'>{time}</span>
            <span className='sub__text'>{manager}</span>
          </div>
          <span className='status'>{transactionType}</span>
        </div>
      )}
    </Item>
  );
};

export default WOEventItem;

const Item = styled.li`
  margin-top: 4px;
  padding-bottom: 4px;
  border-bottom: 1px solid var(--C-Dark-09);
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    border: 0;
    padding-bottom: 0;
  }
  .text-area {
    padding-left: 4px;
  }

  .title {
    display: flex;
    align-items: center;
    color: var(--White);
    font-size: 14px;
    font-weight: 400;
    text-align: left;
    min-height: 24px;
  }
  .sub {
    display: flex;
    padding-top: 4px;
    &__text {
      font-size: 12px;
      color: var(--Blue-04);
      font-weight: 400;
      line-height: 12px;
      & ~ .sub__text {
        display: flex;
        align-items: center;
        &::before {
          content: '';
          display: block;
          width: 1px;
          height: 10px;
          margin: 0 6px;
          background: rgba(189, 215, 255, 0.3);
        }
      }
    }
  }

  // transaction
  &.transaction {
    padding: 8px 0;
    .text-area {
      width: 100%;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .sub {
      padding: 0;
      &__text {
        & ~ .sub__text {
          &::before {
            height: 12px;
            margin: 0 4px;
            background: rgba(189, 215, 255, 0.2);
          }
        }
      }
    }
    .status {
      display: block;
      font-size: 16px;
      font-weight: 500;
    }
  }
`;

const Button = styled.button`
  display: flex;
  align-items: flex-start;
  padding: 12px 0;
`;
