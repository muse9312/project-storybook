import React from 'react';
import styled from 'styled-components';

const WOAbnormalityCard = ({ title, count, severity, dataList, type }) => {
  // logic
  // view
  return (
    <Wrap className='abnornality-card' $type={type}>
      {title && (
        <Title className='abnornality-card-title'>
          {title} <span className={severity}>{count >= 10 ? count : `0${count}`}</span>건
        </Title>
      )}
      <List>
        {dataList.map((item) => (
          <Item key={item.id}>
            <dl>
              <dt>기관</dt>
              <dd>{item.location}</dd>
              <dt>계좌</dt>
              <dd>{item.account}</dd>
            </dl>
            <dl>
              <dt>금액</dt>
              <dd>{item.amount}</dd>
              <dt>발생일자</dt>
              <dd>{item.date}</dd>
            </dl>
            <dl>
              <dt>내용</dt>
              <dd>{item.briefs}</dd>
            </dl>
          </Item>
        ))}
      </List>
    </Wrap>
  );
};

export default WOAbnormalityCard;

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 16px;
`;
const Title = styled.div`
  color: var(--White);
  font-size: 14px;
  font-weight: 700;
  line-height: 32px;
  position: absolute;
  top: 16px;
  .advisory {
    color: #ff8f5f;
  }
  .caution {
    color: #fab530;
  }
  .warning {
    color: #ff5d5d;
  }
`;

const List = styled.ul`
  max-height: 216px;
  overflow: hidden;
`;

const Item = styled.li`
  display: flex;
  flex-wrap: wrap;
  padding: 6px 0;

  dl {
    color: var(--C-Dark-06);
    font-size: 12px;
    font-weight: 400;
    display: flex;
    align-items: center;
    padding: 1px 0;
    min-height: 20px;
    dt {
      font-size: 12px;
      font-weight: 700;
      color: var(--C-Dark-04);
    }

    & dd + dt {
      position: relative;
      margin-left: 8px;
      padding-left: 9px;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 1px;
        height: 12px;
        background: var(--C-Dark-08);
      }
    }
    &:last-child {
      &::before {
        display: none;
      }
    }
    dd {
      font-weight: 400;
      padding-left: 8px;
    }
  }
`;
