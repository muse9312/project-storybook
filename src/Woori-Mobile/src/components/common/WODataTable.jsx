import React from 'react';
import styled from 'styled-components';

const WODataTable = ({ tableData }) => {
  return (
    <Wrapper>
      {tableData.map((item) => (
        <TableItem key={item.id}>
          <Title>{item.title}</Title>
          <Text>{item.text}</Text>
        </TableItem>
      ))}
    </Wrapper>
  );
};

export default WODataTable;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0 28px;
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  background: var(--C-Dark-09, #3c4b63);
`;
const TableItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0 10px;
  width: calc((100% - 28px) / 2);
  height: 20px;
`;

const Title = styled.div`
  position: relative;
  flex: 0 0 auto;
  width: fit-content;
  padding-left: 7px;
  color: var(--White, #fff);
  font-size: 12px;
  font-weight: 400;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: #fff;
  }
`;

const Text = styled.div`
  flex: 1;
  width: 100%;
  color: var(--C-Dark-06, #9ea6b2);
  font-size: 12px;
  font-weight: 400;
  text-align: right;
`;
