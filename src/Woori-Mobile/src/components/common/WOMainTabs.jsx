import styled, { css } from 'styled-components';
import React, { useEffect, useState } from 'react';

const WOMainTabs = ({ tabs, onChange, activeTabID }) => {
  const [selectedTab, setSelectedTab] = useState(activeTabID || tabs[0].id);

  const handleSelectedTab = (tabId) => {
    setSelectedTab(tabId);
    onChange(tabId);
  };

  useEffect(() => {
    setSelectedTab(activeTabID);
  }, [activeTabID]);

  return (
    <TabList>
      {tabs.map((tab) => (
        <TabItem type='button' key={tab.id} $active={selectedTab === tab.id ? true : false} onClick={() => handleSelectedTab(tab.id)}>
          {tab.name}
        </TabItem>
      ))}
    </TabList>
  );
};

export default WOMainTabs;

const TabList = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 42px;
  padding: 4px;
  border-radius: 30px;
  background: var(--C-Dark-01, #f5f6fa);
`;

const TabItem = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 26px;
  padding: 8px 20px;
  text-align: center;
  color: var(--C-Dark-06, #9ea6b2);
  font-size: 14px;
  font-weight: 700;
  border: 1px solid transparent;
  ${(props) =>
    props.$active &&
    css`
      border: 1px solid var(--C-Dark-11, #1a2c49);
      background: var(--White, #fff);
      color: var(--C-Dark-11, #1a2c49);
    `};
`;
