import React from 'react';
import styled, { css } from 'styled-components';

const WOIconButton = ({ icon, width, height, onClick, newNotice, theme }) => {
  return (
    <IconComponents
      type='button'
      className='icon-btn'
      $icon={icon}
      $width={width ? width : 18}
      $height={height ? height : 18}
      $newNotice={newNotice}
      $theme={theme}
      onClick={onClick}></IconComponents>
  );
};

export default WOIconButton;
const IconBaseStyle = styled.button`
  display: block;
  width: ${(props) => props.$width && `${props.$width}px`};
  height: ${(props) => props.$height && `${props.$height}px`};
`;

const IconComponents = styled(IconBaseStyle)`
  flex: 0 0 auto;
  ${(props) =>
    props.$icon &&
    `
        background:url('/assets/woori-mobile/icon/${props.$icon}.svg') no-repeat center / cover;
  `}
  ${(props) =>
    props.$newNotice &&
    css`
      position: relative;
      &::after {
        content: '';
        position: absolute;
        top: 3px;
        left: 15px;
        display: block;
        width: 10px;
        height: 10px;
        border: 2px solid #fff;
        background-color: var(--Red-02);
        border-radius: 50%;
        box-sizing: border-box;
      }
      ${(props) =>
        props.$theme === 'dark' &&
        css`
          &::after {
            content: '';
            border-color: var(--C-Dark-11);
          }
        `}
    `}
`;
