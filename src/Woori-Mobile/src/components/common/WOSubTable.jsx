import React from 'react';
import styled, { css } from 'styled-components';

const WOSubTable = ({ tableData, type, title }) => {
  return (
    <Wrapper $type={type} $title={title} className='sub-table'>
      {title && <TableTitle>{title}</TableTitle>}
      {tableData.map((item) => (
        <TableItem key={item.id} $type={type}>
          <Title $type={type}>{item.title}</Title>
          <Text className={item.isNum ? 'num-text' : ''} $type={type}>
            {item.text}
          </Text>
        </TableItem>
      ))}
    </Wrapper>
  );
};

export default WOSubTable;

const Wrapper = styled.div`
  flex: 0 0 auto;
  width: 100%;
  padding: 20px;
  background: var(--C-Dark-01, #f5f6fa);
  & + & {
    margin-top: 8px;
  }
  & + .toggle-sub-table {
    margin-top: 8px;
  }
  ${(props) =>
    props.$type === 'type-01' &&
    css`
      padding: 0 20px 14px 20px;
      background: #fff;
      ${(props) =>
        props.$title
          ? ''
          : css`
              padding: 14px 20px;
            `}
    `}
  ${(props) =>
    props.$type === 'type-02' &&
    css`
      padding: 12px 20px;
      background: var(--C-Dark-02, #ededf3);
      & + .table {
        margin-top: 8px;
      }
    `}
`;

const TableTitle = styled.div`
  margin-bottom: 14px;
  padding: 20px 0 12px;
  color: #000;
  font-size: 16px;
  font-weight: 700;
  border-bottom: 1px solid var(--C-Dark-02);
`;

const TableItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 12px;
  padding: 6px 0px;
  ${(props) =>
    props.$type === 'type-01' &&
    css`
      padding: 4px 0px;
      & + & {
        margin-top: 6px;
      }
    `}
  ${(props) =>
    props.$type === 'type-02' &&
    css`
      padding: 4px 0px;
    `}
`;

const Title = styled.div`
  flex: 0 0 auto;
  width: 120px;
  color: var(--C-Dark-10, #263752);
  font-size: 12px;
  font-weight: 700;
  ${(props) =>
    props.$type === 'type-01' &&
    css`
      color: var(--C-Dark-10, #263752);
      font-size: 13px;
    `}
  ${(props) =>
    props.$type === 'type-02' &&
    css`
      position: relative;
      padding-left: 7px;
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background-color: var(--C-Dark-10);
      }
    `}
`;

const Text = styled.div`
  width: 180px;
  color: var(--C-Dark-08);
  font-size: 12px;
  font-weight: 400;
  &.num-text {
    text-align: right;
  }
  ${(props) =>
    props.$type === 'type-01' &&
    css`
      font-size: 13px;
    `}
  ${(props) =>
    (props.$type === 'type-02' || props.$type === 'type-01') &&
    css`
      text-align: right;
    `}
`;
