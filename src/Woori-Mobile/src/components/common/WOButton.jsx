import React from 'react';
import styled, { css } from 'styled-components';

const WOButton = ({ variant, size, children, disabled, icon, onClick, type }) => {
  return (
    <Wrapper type={type || 'button'} className='btn' $variant={variant} $size={size} disabled={disabled} onClick={onClick}>
      {icon && icon} {children}
    </Wrapper>
  );
};

export default WOButton;

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: 700;

  // size
  ${(props) =>
    props.$size === 'sm' &&
    css`
      height: 24px;
      font-size: 12px;
      width: fit-content;
      padding: 0 8px;
      border-radius: 4px;
    `}
  ${(props) =>
    props.$size === 'md' &&
    css`
      height: 38px;
      font-size: 13px;
      width: fit-content;
      padding: 0 16px;
      border-radius: 6px;
    `}
  ${(props) =>
    props.$size === 'lg' &&
    css`
      height: 46px;
      font-size: 16px;
      padding: 0 16px;
      border-radius: 8px;
    `}


  // variant
  ${(props) =>
    props.$variant === 'primary' &&
    css`
      color: var(--White, #fff);
      background: var(--Grad-BG-02, linear-gradient(343deg, #b0ebcc -1.81%, #99a3ff 46.2%));
      &:disabled {
        color: var(--Blue-04, #bdd7ff);
      }
    `}
  ${(props) =>
    props.$variant === 'primary-sub' &&
    css`
      color: var(--White, #fff);
      background: var(--C-Dark-12, #0e213f);
      ${(props) =>
        props.$size === 'sm' &&
        css`
          background: var(--C-Dark-10);
        `}
      ${(props) =>
        props.$size === 'md' &&
        css`
          background: var(--C-Dark-10);
        `}
      &:disabled {
        color: var(--C-Dark-07, #86909f);
        background: var(--C-Dark-09, #3c4b63);
      }
    `}
  ${(props) =>
    props.$variant === 'secondary' &&
    css`
      color: var(--C-Dark-10, #263752);
      background: var(--C-Dark-03, #e5e5ed);
      &:disabled {
        color: var(--C-Dark-06, #9ea6b2);
      }
    `}
  ${(props) =>
    props.$variant === 'outline' &&
    css`
      color: var(--C-Dark-10, #263752);
      background-color: var(--White, #fff);
      border: 1px solid var(--C-Dark-04, #d7d7de);
      &:disabled {
        color: var(--C-Dark-06, #9ea6b2);
      }
    `}
  ${(props) =>
    props.$variant === 'outline-sub01' &&
    css`
      color: var(--C-Dark-10, #263752);
      background-color: var(--White, #fff);
      border: 1px solid var(--C-Dark-09, #3c4b63);
      &:disabled {
        color: var(--C-Dark-06, #9ea6b2);
      }
    `}
  // size 예외

  ${(props) =>
    props.$variant === 'outline-sub02' &&
    css`
      width: fit-content;
      height: 26px;
      padding: 0 10px;
      color: var(--C-Dark-08, #566479);
      background-color: var(--White, #fff);
      border: 1px solid #efefef;
      border-radius: 100px;
      font-size: 12px;
      font-weight: 700;
    `}

    ${(props) =>
    props.$variant === 'outline-sub03' &&
    css`
      width: fit-content;
      height: 24px;
      padding: 0 10px;
      color: var(--C-Dark-011);
      background-color: var(--C-Dark-01);
      border-radius: 100px;
      font-size: 12px;
      font-weight: 400;
    `}
    
    ${(props) =>
    props.$variant === 'text-icon' &&
    css`
      gap: 0 2px;
      width: fit-content;
      height: 24px;
      padding: 0 6px;
      color: var(--Blue-01, #3284ff);
      font-size: 13px;
      font-weight: 700;
      line-height: 24px;
    `}
`;
