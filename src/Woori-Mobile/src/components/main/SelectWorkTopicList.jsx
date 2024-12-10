import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const SelectWorkTopicList = ({ user, workData, onChange, isFixed }) => {
  const [selectedTab, setSelectedTab] = useState(workData[0].id);

  const handleSelectedTab = (tabId) => {
    setSelectedTab(tabId);
    onChange(tabId);
  };

  return (
    <Wrapper $isFixed={isFixed} $user={user}>
      {workData.map((item) => (
        <Item type='button' key={item.id} $imgName={item.imageName} $active={selectedTab === item.id ? true : false} onClick={() => handleSelectedTab(item.id)}>
          <div className='icon'></div>
          <div className='tit'>{item.title}</div>
        </Item>
      ))}
    </Wrapper>
  );
};

export default SelectWorkTopicList;

const Item = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px 0;
  width: calc((100% - 15px) / 4);
  height: 78px;
  border-radius: 16px;
  background: #f6f6fa;
  .icon {
    width: 28px;
    height: 28px;
    ${(props) =>
      props.$imgName &&
      css`
        background: url(/assets/woori-mobile/menu/${props.$imgName}.svg) no-repeat center / cover;
      `}
  }

  .tit {
    color: var(--C-Dark-11, #1a2c49);
    font-size: 14px;
    font-weight: 400;
  }
  ${(props) =>
    props.$active &&
    css`
      background: var(--Grad-BG-01, linear-gradient(180deg, #ebedff 0%, #ffeaea 100%));
    `}
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 5px;

  ${(props) =>
    props.$isFixed &&
    css`
      flex-wrap: nowrap;
      position: fixed;
      top: 100px;
      left: 0;
      width: 100%;
      height: 56px;
      align-items: center;
      padding: 0 20px;
      overflow-x: auto;
      &::-webkit-scrollbar {
        height: 0;
      }
      ${Item} {
        flex: 0 0 auto;
        flex-direction: row;
        gap: 0 2px;
        width: fit-content;
        height: 36px;
        padding: 0 14px;
        border-radius: 6px;
      }
      ${(props) =>
        props.$user === 1
          ? css`
              top: 100px;
            `
          : css`
              top: 44px;
            `}
    `}
`;
