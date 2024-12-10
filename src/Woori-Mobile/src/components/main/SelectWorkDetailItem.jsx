import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import WOCheckbox from '../common/WOCheckBox';
import WOToggleButton from '../common/WOToggleButton';
import WOIcon from '../common/WOIcon';

const SelectWorkDetailItem = ({ title, children, depth3, onCheckboxChange }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleCheckboxChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onCheckboxChange) {
      onCheckboxChange(newValue);
    }
  };

  return (
    <Wrapper $depth3={depth3}>
      <TitleWrap $depth3={depth3} onClick={toggleOpen}>
        <LeftWrap>
          {depth3 ? (
            ''
          ) : children ? (
            <WOIcon icon={isOpen ? 'folder-open' : 'folder-close'} width={18} height={18} />
          ) : (
            <WOIcon icon={'folder-default'} width={18} height={18} />
          )}
          <div className='tit'>{title}</div>
        </LeftWrap>
        <RightWrap>
          {depth3 ? (
            <>
              <Line />
            </>
          ) : (
            <>
              <WOCheckbox
                blind
                item={{
                  name: 'input01-01',
                  id: 'input01-02',
                  label: '',
                }}
                onChange={(checked) => {
                  handleCheckboxChange(checked);
                }}
              />
            </>
          )}
        </RightWrap>
      </TitleWrap>
      {children && <Depth3Wrap $isOpen={isOpen}>{children}</Depth3Wrap>}
    </Wrapper>
  );
};

export default SelectWorkDetailItem;

const Wrapper = styled.div`
  width: 100%;
`;
const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  height: 48px;

  ${(props) =>
    props.$depth3 &&
    css`
      height: 32px;
      padding: 10px 16px 10px 40px;
    `}
`;
const LeftWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0 6px;
  .tit {
    color: var(--C-Dark-10, #263752);
    font-size: 14px;
    font-weight: 500;
  }
`;
const RightWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0 12px;
`;
const Line = styled.div`
  position: relative;
  width: 18px;
  height: 18px;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1px;
    height: 32px;
    background: var(--C-Dark-04, #d7d7de);
  }
`;

const Depth3Wrap = styled.div`
  ${(props) =>
    props.$isOpen
      ? css``
      : css`
          height: 0px;
          overflow: hidden;
        `}
`;
