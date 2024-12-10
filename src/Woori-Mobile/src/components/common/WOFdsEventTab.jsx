import styled, { css } from 'styled-components';
import React, { useState } from 'react';

const WOFdsEventTab = ({ tabs, onChange, activeTabID }) => {
  const [selectedTab, setSelectedTab] = useState(activeTabID || tabs[0].id);

  const handleSelectedTab = (tabId) => {
    setSelectedTab(tabId);
    onChange(tabId);
  };

  return (
    <Wrap className='tab'>
      {tabs.map((tab) => (
        <TabItem type='button' key={tab.id} className={`tab-item`} $active={selectedTab === tab.id ? true : false} onClick={() => handleSelectedTab(tab.id)}>
          {tab.name}
        </TabItem>
      ))}
    </Wrap>
  );
};

export default WOFdsEventTab;

const Wrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0 6px;
  width: 100%;
  margin-bottom: 12px;
`;

const TabItem = styled.button`
  width: 100%;
  height: 32px;
  border-radius: 100px;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  color: var(--C-Dark-05);
  border: 1px solid var(--C-Dark-09, #3c4b63);
  z-index: 1;
  // 활성 상태 스타일
  ${(props) =>
    props.$active &&
    css`
      color: var(--White);
      font-weight: 700;
      background: var(--Violet-01);
    `}
`;
