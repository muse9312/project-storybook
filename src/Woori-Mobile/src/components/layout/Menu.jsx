import React, { useEffect, useState } from 'react';
import { styled, css } from 'styled-components';
import WOButton from '../common/WOButton';
import WOIconButton from '../common/WOIconButton';
import WOSearchInput from '../common/WOSearchInput';
import { MenuList, SearchList, SnbList } from '../../data/common';
import { Dialog } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import UserSettingDialog from './UserSettingDialog';

const Menu = ({ isOpen, onClose }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(isOpen || false);
  const [isSettingPopupOpen, setIsSettingPopupOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});
  const navigate = useNavigate();
  const handleClose = () => {
    onClose();
    setIsPopupOpen(false);
  };

  useEffect(() => {
    setIsPopupOpen(isOpen);
  }, [isOpen]);

  const [tableOpen, setTableOpen] = useState({ [MenuList[0].children[0].id]: false });
  const [checked, setChecked] = useState(MenuList[0]);

  const [activeMenu, setActiveMenu] = useState([]);

  const handleItemCheck = (item) => {
    setChecked(item);
    const activeChildren = MenuList.find((menu) => menu.id === item.id)?.children || [];
    setActiveMenu(activeChildren);
  };

  const toggleTableOpen = (id) => {
    setTableOpen((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    setDropdownOpen((prev) => ({
      // Toggle visibility state
      ...prev,
      [id]: !prev[id],
    }));
  };
  useEffect(() => {
    handleItemCheck(SnbList[0]);
  }, []);

  const navigateMain = () => {
    navigate('/');
  };

  return (
    <>
      <DialogCustom fullScreen open={isPopupOpen} onClose={() => handleClose()}>
        <Wrap>
          {/* App 바 */}
          <MenuTopArea>
            {/* Appbar */}
            <MenuProfileContent>
              <MenuProfileItem>
                김우리님
                <WOButton onClick={() => {}} variant='outline-sub03'>
                  <p>
                    결재&nbsp;<span>01</span>건
                  </p>
                </WOButton>
              </MenuProfileItem>
              <MenuIconButton>
                <WOIconButton icon={'home-30'} width={30} height={30} onClick={() => navigateMain()} />
                <WOIconButton icon={'setting-30'} width={30} height={30} onClick={() => setIsSettingPopupOpen(true)} />
                <WOIconButton icon={'close-30'} width={30} height={30} onClick={() => handleClose()} />
              </MenuIconButton>
            </MenuProfileContent>

            <SearchArea>
              <WOSearchInput tableData={SearchList} onChange={() => {}} placeholder={'업무 키워드를 검색하세요.'} />
            </SearchArea>
          </MenuTopArea>

          {/* 메뉴 바 */}
          <MenuBottomArea>
            {/* lnb */}
            <LeftContent>
              <LeftItemBox>
                {SnbList.map((item) => (
                  <LeftItem
                    key={item.id}
                    checked={checked.id === item.id}
                    onClick={() => {
                      handleItemCheck(item);
                    }}>
                    <span>{item.title}</span>
                  </LeftItem>
                ))}
              </LeftItemBox>
              <LogoutBtn>
                <span>로그아웃</span>
              </LogoutBtn>
            </LeftContent>

            <RightContent>
              <ListWrap>
                {activeMenu.map((item) => (
                  <ListItem key={item.id} as={item.isList ? 'div' : Link} to={item.link} dropdownVisible={dropdownOpen[item.id]}>
                    <button
                      type='button'
                      className='content'
                      onClick={() => {
                        if (item.isList && item.children) {
                          toggleTableOpen(item.id);
                        }
                      }}>
                      <span> {item.title}</span>

                      {item.isList && item.children && item.children.some((child) => child.tabList) && (
                        <RotateIconButtonWrapper rotate={tableOpen[item.id]}>
                          <WOIconButton
                            icon={'table-dropdown-black-18'}
                            width={14}
                            height={14}
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleTableOpen(item.id);
                            }}
                          />
                        </RotateIconButtonWrapper>
                      )}
                    </button>

                    {/* 하위 메뉴 */}
                    {item.isList &&
                      tableOpen[item.id] &&
                      item.children.map((child, index) => {
                        return (
                          child.tabList && (
                            <TabListBox key={index}>
                              {child.tabList.map((tabItem, tabIndex) => (
                                <TabItem key={tabIndex} to={tabItem.link}>
                                  - {tabItem.tapTitle}
                                </TabItem>
                              ))}
                            </TabListBox>
                          )
                        );
                      })}
                  </ListItem>
                ))}
              </ListWrap>
            </RightContent>
          </MenuBottomArea>
        </Wrap>
      </DialogCustom>
      <UserSettingDialog isOpen={isSettingPopupOpen} />
    </>
  );
};

export default Menu;

const DialogCustom = styled(Dialog)`
  &.MuiDialog-root {
    z-index: 3000;
  }
`;

const Wrap = styled.div`
  height: 100%;
  background-color: var(--White);
`;

const MenuTopArea = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  border-bottom: 1px solid var(--C-Dark-02);
`;

const MenuProfileContent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  height: 44px;
  justify-content: space-between;
`;

const MenuProfileItem = styled.div`
  display: flex;
  align-items: center;

  height: 26px;
  gap: 0 8px;
  color: var(--Black);
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  p {
    color: var(--C-Dark-11);
    font-size: 12px;
    font-weight: 400;
  }

  span {
    color: var(--C-Dark-11);
    font-size: 12px;
    font-weight: 700;
  }
`;

const MenuIconButton = styled.div`
  display: flex;
  gap: ${(props) => props.$gap || '16'}px;
`;

const SearchArea = styled.div`
  margin: 12px 0 20px;
`;

const MenuBottomArea = styled.div`
  display: flex;
  height: calc(100dvh - 119px);
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  justify-content: space-between;
  height: 100%;
  padding-top: 20px;
  overflow-y: auto;
  background: var(--Grad-BG-01, linear-gradient(180deg, #ebedff 0%, #ffeaea 100%));
`;

const LeftItemBox = styled.div``;
const LeftItem = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: 42px;
  padding: 0 20px;
  ${(props) =>
    props.checked &&
    css`
      background: var(--White);
    `}

  span {
    color: var(--Black);
    font-size: 16px;
    font-weight: 400;

    ${(props) =>
      props.checked &&
      css`
        color: var(--Blue-01);
        font-weight: 500;
      `}
  }
`;

const LogoutBtn = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.3);

  span {
    color: var(--C-Dark-07);
    font-size: 13px;
    font-weight: 400;
    line-height: 17px;
  }
`;

//!! Right =================================================

const RightContent = styled.div`
  width: 100%;
  padding: 16px 0;
  overflow-y: auto;
`;

const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListItem = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 20px;

  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 20px;
    right: 20px;
    bottom: 0;
    border-bottom: 1px solid #eee;
    ${({ dropdownVisible }) =>
      dropdownVisible &&
      css`
        border-bottom: none;
      `}
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;

    span {
      color: var(--W-Dark-12);
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
    }
  }
`;

const RotateIconButtonWrapper = styled.div`
  display: inline-block;
  transform: ${({ rotate }) => (rotate ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

const TabListBox = styled.div`
  padding: 10px 12px;
  border-radius: 4px;
  background: var(--C-Dark-01);
`;
const TabItem = styled(Link)`
  display: flex;
  align-items: center;
  height: 30px;
  color: var(--C-Dark-07);
  font-size: 13px;
  font-weight: 400;
`;
