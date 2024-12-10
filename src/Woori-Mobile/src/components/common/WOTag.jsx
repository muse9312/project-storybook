import React from 'react';
import styled from 'styled-components';

const WOTag = ({ label, text }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default WOTag;

const Wrapper = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 0 8px;
  width: fit-content;
  height: 32px;
  padding: 0px 14px;
  border-radius: 100px;
  background: var(--C-Dark-01, #f5f6fa);
  white-space: nowrap;
  & + & {
    margin-left: 6px;
  }
`;

const Label = styled.div`
  color: var(--Blue-01, #3284ff);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`;
const Text = styled.div`
  color: var(--C-Dark-12, #0e213f);
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
`;
