import React from 'react';
import { useState } from 'react';
import { css, styled } from 'styled-components';

const ColorCheckBox = (props) => {
  // 로컬 상태 추가
  const [checked, setChecked] = useState(props.checked || false);

  // 체크박스 상태 토글 함수
  const toggleChecked = () => {
    setChecked(!checked);
  };

  return (
    <>
      <CheckBox>
        <InputWrap>
          <Input type='checkbox' name={props.name} id={props.id} theme={props.theme} checked={checked} color={props.color} onClick={toggleChecked} />
          <Label htmlFor={props.id} theme={props.theme}>
            {props.value}
          </Label>
        </InputWrap>
      </CheckBox>
    </>
  );
};

export default ColorCheckBox;

const InputWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
`;
const Label = styled.label`
  position: absolute;
  bottom: -26px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: ${(props) => (props.theme === 'dark' ? '#fff' : '#000')};
  white-space: nowrap;
`;
const Input = styled.input`
  width: 46px;
  height: 46px;
  background: ${(props) => props.color === 'rainbow' && ' url(./assets/BeatFolio/img-colorpicker-allcolor.png) no-repeat center/ cover;'};
  background-color: ${(props) => props.color === 'white' && '#fff'};
  border: ${(props) => props.color === 'white' && '1px solid rgba(255, 255, 255, 0.20)'};
  background-color: ${(props) => props.color === 'black' && '#000'};
  background-color: ${(props) => props.color === 'grey' && '#b9b9b9'};
  background-color: ${(props) => props.color === 'beige' && '#d4b888'};
  background-color: ${(props) => props.color === 'brown' && '#744f15'};
  background-color: ${(props) => props.color === 'pink' && '#ff6bc8'};
  background-color: ${(props) => props.color === 'red' && '#ff0000'};
  background-color: ${(props) => props.color === 'orange' && '#ffa10f'};
  background-color: ${(props) => props.color === 'yellow' && '#ffda00'};
  background-color: ${(props) => props.color === 'green' && '#00a614'};
  background-color: ${(props) => props.color === 'teal' && '#00b1b8'};
  background-color: ${(props) => props.color === 'blue' && '#00a0ff'};
  background-color: ${(props) => props.color === 'indigo' && '#001e64'};
  background-color: ${(props) => props.color === 'purple' && '#7600cc'};
  border-radius: 50%;
  cursor: pointer;
  ${(props) =>
    props.theme === 'dark' &&
    css`
      border: ${(props) => props.color === 'white' && 'unset'};
      border: ${(props) => props.color === 'black' && '1px solid rgba(255, 255, 255, 0.20) '};
    `}
  &:checked {
    width: 32px;
    height: 32px;
    & + ${Label} {
      font-weight: 700;
    }
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 46px;
      height: 46px;

      border-radius: 50%;
      box-sizing: border-box;
      border: ${(props) => props.color === 'rainbow' && '3px solid #000'};
      border: ${(props) => props.color === 'white' && '3px solid #000'};
      border: ${(props) => props.color === 'black' && '3px solid #000'};
      border: ${(props) => props.color === 'grey' && '3px solid #b9b9b9'};
      border: ${(props) => props.color === 'beige' && '3px solid #d4b888'};
      border: ${(props) => props.color === 'brown' && '3px solid #744f15'};
      border: ${(props) => props.color === 'pink' && '3px solid #ff6bc8'};
      border: ${(props) => props.color === 'red' && '3px solid #ff0000'};
      border: ${(props) => props.color === 'orange' && '3px solid #ffa10f'};
      border: ${(props) => props.color === 'yellow' && '3px solid #ffda00'};
      border: ${(props) => props.color === 'green' && '3px solid #00a614'};
      border: ${(props) => props.color === 'teal' && '3px solid #00b1b8'};
      border: ${(props) => props.color === 'blue' && '3px solid #00a0ff'};
      border: ${(props) => props.color === 'indigo' && '3px solid #001e64'};
      border: ${(props) => props.color === 'purple' && '3px solid #7600cc'};
      ${(props) =>
        props.theme === 'dark' &&
        css`
          border: ${(props) => props.color === 'rainbow' && '3px solid #fff'};
          border: ${(props) => props.color === 'white' && '3px solid #fff'};
          border: ${(props) => props.color === 'black' && '3px solid #fff'};
        `}
    }
  }
`;
const CheckBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% / 5);
  margin-bottom: 46px;
  background-color: ${(props) => props.color === 'black' && '#000'};
  input {
  }
  label {
  }
`;
