import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import WODatePicker from './WODatePicker';
import WOLabel from './WOLabel';
import { inputErrorStyle } from '../../styles/common.styled';

const WODateRangePicker = ({ label, labelColor, periodValue, dateFormat, readonly, disabled, isError, onChange }) => {
  // logic
  // periodValue : ['2023-11-11', '2023-11-11']
  const [dateValue, setDateValue] = useState(['', '']);

  const handleChange = (index, newValue) => {
    const result = dateValue.map((item, itemIndex) => (index === itemIndex ? newValue : item));
    setDateValue(result);
    onChange && onChange(result);
  };

  useEffect(() => {
    periodValue && setDateValue(periodValue);
  }, [periodValue]);

  // view
  return (
    <Wrap>
      {label && <WOLabel label={label} color={labelColor} />}
      <DateWrap className={readonly ? 'readonly' : ''} $disabled={disabled} $isError={isError}>
        <WODatePicker
          label={''}
          value={periodValue && periodValue[0]}
          dateFormat={dateFormat}
          readonly={readonly}
          disabled={disabled}
          onChange={(newValue) => handleChange(0, newValue)}
          noneFocus={true}
        />
        <Seperator />
        <WODatePicker
          label={''}
          value={periodValue && periodValue[1]}
          dateFormat={dateFormat}
          readonly={readonly}
          disabled={disabled}
          onChange={(newValue) => handleChange(1, newValue)}
          noneFocus={true}
        />
      </DateWrap>
    </Wrap>
  );
};

export default WODateRangePicker;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px 0;
`;

const DateWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  border-bottom: 1px solid var(--C-Dark-04);

  div.MuiInputBase-root {
    border: none;
    height: 38px;
    border-radius: 0;
    border-bottom: 0;
    // calendar 아이콘
    .MuiInputAdornment-root {
      margin: 0;
      .MuiIconButton-root {
        padding: 0;

        &:hover {
          background: none;
        }
      }
    }
  }

  &.readonly {
    color: var(--W-Dark-07);
    padding: 0;
  }

  ${(props) =>
    props.$isError &&
    css`
      ${inputErrorStyle}
    `}
`;

const Seperator = styled.i`
  display: block;
  flex: 0 0 auto;
  width: 6px;
  height: 1px;
  background-color: var(--C-Dark-11);
`;
