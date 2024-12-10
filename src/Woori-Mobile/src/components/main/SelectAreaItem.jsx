import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import WORadio from '../common/WORadio';
import WOIconButton from '../common/WOIconButton';

const SelectAreaItem = ({ name, id, label, children, type }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <Wrapper>
      <TitleWrap $type={type}>
        {type ? (
          type === 'depth2' ? (
            <>
              {children ? (
                <WOIconButton icon={isOpen ? 'folder-white-open' : 'folder-white-close'} width={18} height={18} onClick={toggleOpen} />
              ) : (
                <WOIconButton icon={'folder-white-default'} width={18} height={18} onClick={toggleOpen} />
              )}
            </>
          ) : (
            ''
          )
        ) : (
          <WOIconButton icon={isOpen ? 'folder-open' : 'folder-close'} width={18} height={18} onClick={toggleOpen} />
        )}
        <WORadio
          item={{
            id: id,
            name: name,
            label: label,
          }}
        />
      </TitleWrap>
      {children && <DepthWrap $isOpen={isOpen}>{children}</DepthWrap>}
    </Wrapper>
  );
};

export default SelectAreaItem;

const Wrapper = styled.div``;

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0 10px;
  padding: 0 20px;
  height: 38px;
  ${(props) =>
    props.$type === 'depth2' &&
    css`
      padding: 0 20px 0 48px;
    `}
  ${(props) =>
    props.$type === 'depth3' &&
    css`
      padding: 0 20px 0 100px;
    `}
`;

const DepthWrap = styled.div`
  height: 0px;
  overflow: hidden;
  ${(props) =>
    props.$isOpen &&
    css`
      height: auto;
    `}
`;
