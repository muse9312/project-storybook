import React from 'react';
import { styled } from 'styled-components';
import ColorCheckBox from './ColorCheckBox';

const colors = [
  {
    color: 'rainbow',
    value: '자유',
  },
  {
    color: 'white',
    value: '흰색',
  },
  {
    color: 'black',
    value: '검정',
  },
  {
    color: 'grey',
    value: '회색',
  },
  {
    color: 'beige',
    value: '베이지',
  },
  {
    color: 'brown',
    value: '브라운',
  },
  {
    color: 'pink',
    value: '분홍',
  },
  {
    color: 'red',
    value: '빨강',
  },
  {
    color: 'orange',
    value: '주황',
  },
  {
    color: 'yellow',
    value: '노랑',
  },
  {
    color: 'green',
    value: '초록',
  },
  {
    color: 'teal',
    value: '청록',
  },
  {
    color: 'blue',
    value: '파랑',
  },
  {
    color: 'indigo',
    value: '남색',
  },
  {
    color: 'purple',
    value: '보라',
  },
];

const ColorList = (props) => {
  return (
    <ListWrap>
      {colors.map((colorInfo, index) => (
        <ColorCheckBox key={colorInfo.color} theme={props.theme} name={index} id={`color-${index}`} value={colorInfo.value} color={colorInfo.color} />
      ))}
    </ListWrap>
  );
};

export default ColorList;

const ListWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: -20px;
`;
