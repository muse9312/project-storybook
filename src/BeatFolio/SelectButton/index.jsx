import React from 'react';
import { styled } from 'styled-components';

const SelectButton = ({ text, theme }) => {
  return <Btn theme={theme}>{text}</Btn>;
};

export default SelectButton;

const Btn = styled.button`
  position: relative;
  width: 100%;
  height: 40px;
  padding: 0 12px;
  background-color: ${(props) => (props.theme === 'dark' ? '#181E26' : '#fff')};
  background-color: ${(props) => props.theme === 'grey' && '#F4F6F8'};
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: ${(props) => (props.theme === 'dark' ? '#999' : '#000')};
  text-align: left;
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background: ${(props) =>
        props.theme === 'dark' || props.theme === 'grey' ? 'url(./assets/BeatFolio/input-arrow-down-grey.png)' : 'url(./assets/BeatFolio/icon-arrow-down.png)'}
      no-repeat center / cover;
  }
`;
