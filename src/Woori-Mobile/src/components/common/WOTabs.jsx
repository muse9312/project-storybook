import styled, { css } from 'styled-components';
import React, { useState } from 'react';

const WOTabs = ({ tabs, type, onChange, activeTabID }) => {
  const [selectedTab, setSelectedTab] = useState(activeTabID || tabs[0].id);

  const handleSelectedTab = (tabId) => {
    setSelectedTab(tabId);
    onChange(tabId);
  };

  return (
    <TabList className='tab' $type={type}>
      {tabs.map((tab) => (
        <TabItem
          type='button'
          key={tab.id}
          className={`tab-item`}
          $active={selectedTab === tab.id ? true : false}
          onClick={() => handleSelectedTab(tab.id)}
          $type={type}>
          {tab.name}
        </TabItem>
      ))}
    </TabList>
  );
};

export default WOTabs;

const TabItem = styled.button`
  // 기본 스타일
  width: 100%;
  height: 40px;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  color: var(--C-Dark-05, #c9c9d0);
  border-bottom: 3px solid transparent;
  z-index: 1;
  // 활성 상태 스타일
  ${(props) =>
    props.$active &&
    css`
      color: var(--Blue-01, #3284ff);
      border-bottom: 3px solid var(--Blue-01, #3284ff);
    `}
  ${(props) =>
    props.$type === 'fit' &&
    css`
      flex: 0 0 auto;
    `}
`;

const TabList = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  ${(props) =>
    props.$type === 'fit' &&
    css`
      min-width: 100%;
      width: fit-content;
      gap: 0 20px;
      padding: 0 20px;
      ${TabItem} {
        width: fit-content;
      }
      &::after {
        content: '';
        flex: 0 0 auto;
        display: block;
        width: 20px;
        height: 40px;
      }
    `}
`;
