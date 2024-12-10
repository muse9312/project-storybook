import React from 'react';
import { styled, css } from 'styled-components';

const Button = (props) => {
  return (
    <Btn theme={props.theme} type={props.type} size={props.size} bg={props.bg} disabled={props.disabled} onClick={props.onClick}>
      {props.num && <Num>{props.num}</Num>} {props.text}
    </Btn>
  );
};

export default Button;
const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 8px;

  height: ${(props) => (props.size === 'md' ? '42px' : '48px')};
  font-size: ${(props) => (props.size === 'md' ? '14px' : '16px')};
  font-weight: ${(props) => (props.size === 'md' ? '600' : '500')};
  line-height: ${(props) => (props.size === 'md' ? '21px' : '24px')};

  // 메인버튼 화이트 테마 기본 && 라인 && 컬러
  ${(props) =>
    // 화이트 테마 기본
    props.theme === 'white' &&
    css`
      background-color: #000;
      color: #fff;
      &:disabled {
        background-color: #eee;
        color: #888;
      }
      // 화이트 테마 라인
      ${props.type === 'line' &&
      css`
        background-color: #fff;
        color: #000;
        border: 1px solid #888;
        &:disabled {
          background-color: #fff;
          color: #888;
          border: 1px solid #ddd;
        }
        // 화이트 테마 컬러,라인
        ${props.bg === 'purple' &&
        css`
          box-shadow: 0 4px 6px 0 rgba(121, 116, 255, 0.1);
          background-color: #f3f3ff;
          border: 1px solid #7974ff;
          color: #7974ff;
        `}
        ${props.bg === 'red' &&
        css`
          border: 1px solid #ee5246;
          background-color: #fff5f4;
          color: #ee5246;
          box-shadow: 0 4px 6px 0 rgba(245, 62, 80, 0.1);
        `}
      `}
      // 화이트 테마 컬러
            ${props.bg === 'purple' &&
      css`
        background-color: rgba(121, 116, 255, 0.08);
        color: #7974ff;
      `} // 화이트 테마 컬러
    `}

  // 메인버튼 다크 테마 기본 && 라인 && 컬러
    ${(props) =>
    // 다크 테마 기본
    props.theme === 'dark' &&
    css`
      background-image: radial-gradient(ellipse at 50% 50%, #0094ca, #92d9ff 100%);
      color: #fff;
      &:disabled {
        background-image: unset;
        background-color: #333;
        color: #999;
      }
      // 다크 테마 라인
      ${props.type === 'line' &&
      css`
        background-image: unset;
        background-color: #0d141c;
        border: 1px solid #9198a5;
        &:disabled {
          background-color: #0d141c;
          color: #777;
          border: 1px solid #555;
        }
      `}
      // 다크 테마 컬러
            ${props.bg === 'purple' &&
      css`
        background-image: unset;
        background-color: rgba(121, 116, 255, 0.08);
        color: #7974ff;
      `}
            // 다크 테마 컬러
            ${props.bg === 'white' &&
      css`
        background-image: unset;
        background-color: #f4f6f8;
        border: solid 1px #f4f6f8;
        color: #000;
      `}
    `}
`;

const Num = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  color: #fff;
  border-radius: 50%;
  -webkit-backdrop-filter: blur(1px);
  backdrop-filter: blur(1px);
  background-color: rgba(255, 255, 255, 0.15);
`;
