import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import WOIconButton from './WOIconButton';

const WOToggleSubTable = ({ tableData, type }) => {
  const [tableOpen, setTableOpen] = useState(false);

  const totalDataItem = tableData.find((item) => item.totalData);
  return (
    <Wrapper $tableOpen={tableOpen} className='toggle-sub-table' $type={type}>
      <TitleWrap $tableOpen={tableOpen} $type={type}>
        {totalDataItem && (
          <>
            <div className='title'>{totalDataItem.title}</div>
            <div className='text'>{totalDataItem.text}</div>
          </>
        )}
        <WOIconButton
          icon={'table-dropdown-black-18'}
          width={10}
          height={18}
          onClick={() => {
            setTableOpen(!tableOpen);
          }}
        />
      </TitleWrap>
      <BorderLine $type={type} />
      <List $type={type}>
        {tableData
          .filter((item) => !item.totalData)
          .map((item, index) => (
            <Item key={index} $type={type}>
              <div className='title'>{item.title}</div>
              <div className='text'>{item.text}</div>
            </Item>
          ))}
      </List>
    </Wrapper>
  );
};

export default WOToggleSubTable;

const Wrapper = styled.div`
  flex: 0 0 auto;
  background: var(--C-Dark-02);
  ${(props) =>
    props.$type === 'type01' &&
    css`
      background: var(--White);
    `}
  ${(props) =>
    props.$tableOpen &&
    css`
      height: 52px;
      overflow: hidden;
    `}
  & +& {
    margin-top: 8px;
  }
  & + .sub-table {
    margin-top: 8px;
  }
`;

const TitleWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 20px;
  height: 52px;
  padding: 0 50px 0 20px;

  .icon-btn {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%) rotate(180deg);
  }
  ${(props) =>
    props.$tableOpen &&
    css`
      .icon-btn {
        transform: translateY(-50%);
      }
    `}

  .title {
    color: var(--C-Dark-10);
    font-size: 12px;
    font-weight: 700;
    ${(props) =>
      props.$type === 'type01' &&
      css`
        color: var(--Black);
        font-size: 13px;
        font-weight: 700;
      `}
  }
  .text {
    color: var(--C-Dark-08, #566479);
    font-size: 12px;
    font-weight: 700;
    ${(props) =>
      props.$type === 'type01' &&
      css`
        color: var(--Black);
        font-size: 14px;
        font-weight: 700;
      `}
  }
`;

const BorderLine = styled.div`
  border-top: 1px solid var(--C-Dark-05);

  ${(props) =>
    props.$type === 'type01' &&
    css`
      margin: 0 20px;
      width: calc(100% - 40px);
      border-top: 1px solid var(--C-Dark-12);
    `}
`;

const List = styled.div`
  padding: 12px 50px 12px 20px;
  ${(props) =>
    props.$type === 'type01' &&
    css`
      padding: 12px 20px 12px;
    `}
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 20px;
  height: 28px;

  .title {
    color: var(--C-Dark-10);
    font-size: 12px;
    font-weight: 700;
    ${(props) =>
      props.$type === 'type01' &&
      css`
        font-size: 13px;
      `}
  }
  .text {
    color: var(--C-Dark-08, #566479);
    font-size: 12px;
    font-weight: 400;
    ${(props) =>
      props.$type === 'type01' &&
      css`
        font-size: 13px;
      `}
  }
`;
