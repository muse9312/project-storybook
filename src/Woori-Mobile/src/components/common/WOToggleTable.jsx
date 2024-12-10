import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import WOIconButton from './WOIconButton';

const WOToggleTable = ({ title, tableData }) => {
  const [tableOpen, setTableOpen] = useState(false);

  return (
    <Wrapper $tableOpen={tableOpen}>
      <ToggleHeader $tableOpen={tableOpen}>
        {title}
        <WOIconButton
          icon='arr-toggle-white-14'
          width={14}
          height={14}
          onClick={() => {
            setTableOpen(!tableOpen);
          }}
        />
      </ToggleHeader>
      <ToggleBody>
        <ToggleTable>
          {tableData.map((item) => (
            <ToggleTableItem key={item.id}>
              <div className='title'>{item.title}</div>
              <div className='text-wrap'>
                <div className={`text ${item.state === 'return' && 'return'}`}>{item.state === 'return' ? '반려' : '승인'}</div>
                <div className='text'>{item.name}</div>
                <div className='text'>{item.date}</div>
              </div>
            </ToggleTableItem>
          ))}
        </ToggleTable>
      </ToggleBody>
    </Wrapper>
  );
};

export default WOToggleTable;

const Wrapper = styled.div`
  flex: 0 0 auto;
  background: var(--White, #fff);
  ${(props) =>
    props.$tableOpen &&
    css`
      height: 40px;
      overflow: hidden;
    `};
`;

const ToggleHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 0 20px;
  background: var(--C-Dark-08, #566479);
  color: var(--White, #fff);
  font-size: 13px;
  font-weight: 700;
  .icon-btn {
    transform: rotate(-180deg);
  }
  ${(props) =>
    props.$tableOpen &&
    css`
      .icon-btn {
        transform: rotate(0deg);
      }
    `}
`;

const ToggleBody = styled.div`
  padding: 12px;
`;

const ToggleTable = styled.div`
  border-top: 1px solid var(--C-Dark-02, #ededf3);
  border-bottom: 1px solid var(--C-Dark-02, #ededf3);
`;

const ToggleTableItem = styled.div`
  display: flex;
  width: 100%;
  height: 26px;
  .title {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 92px;
    height: 100%;
    color: var(--C-Dark-12, #0e213f);
    font-size: 12px;
    font-weight: 400;
    background: #f5f6fa;
  }
  .text-wrap {
    flex: 2.6;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    .text {
      text-align: center;
      min-width: 92px;
      padding: 0 8px;
      font-size: 12px;
      font-weight: 400;
      color: var(--W-Dark-12, #111);
      &:first-child {
        min-width: 60px;
        color: var(--C-Dark-12, #0e213f);
        font-weight: 700;
        &.return {
          color: var(--Red-01, #ff5d5d);
        }
      }
    }
  }
`;
