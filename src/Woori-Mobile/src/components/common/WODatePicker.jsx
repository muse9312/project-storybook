import React, { useEffect, useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import styled, { css } from 'styled-components';
import dayjs from 'dayjs';
import { defaultDateFormat } from '../../data/common';
import WOLabel from './WOLabel';
import { disabledIconStyle, inputErrorStyle, inputReadonlyStyle, labelStyle } from '../../styles/common.styled';
const WODatePicker = ({ label, labelColor, value, dateFormat, readonly, disabled, isError, onChange, noneFocus }) => {
  // logic
  // dateValue : dayjs타입 날짜
  // formattingValue : '2023-11-11'
  const [dateValue, setDateValue] = useState('');

  const handleChange = (newValue) => {
    // calendar icon 클릭으로 데이터 바꾸는 경우

    const { $y: year, $M: mm, $D: day } = newValue;

    const month = mm + 1;
    const formatDate = `${year}-${month >= 10 ? month : `0${month}`}-${day >= 10 ? day : `0${day}`}`; // 2023-11-11
    setDateValue(newValue);
    onChange && onChange(formatDate);
  };

  useEffect(() => {
    setDateValue(value ? dayjs(value) : '');
  }, [value]);

  const CalendarIcon = () => {
    // return '<img src='/assets/woori-mobile/icon/calendar.svg' alt='Date picker opening icon' width={14} />';
  };

  // view
  return (
    <Wrap className='date-picker-wrap'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {label && <WOLabel label={label} color={labelColor} />}
        <DatePickerCustom
          className={`date-picker ${readonly ? 'readonly' : ''}`}
          label={''}
          format={dateFormat || defaultDateFormat}
          slots={{ openPickerIcon: CalendarIcon }}
          value={dateValue ? dateValue : null}
          readOnly={readonly}
          disabled={disabled}
          $isError={isError}
          onChange={handleChange}
          $noneFocus={noneFocus}
        />
      </LocalizationProvider>
    </Wrap>
  );
};

export default WODatePicker;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px 0;
`;

const DatePickerCustom = styled(DatePicker)`
  &.date-picker {
    display: flex;
    flex-direction: column;
    gap: 4px 0;
  }

  .MuiInputBase-root:focus-within {
  }

  // label
  .MuiFormLabel-root {
    ${labelStyle}
  }

  // datePicker
  .MuiInputBase-root {
    width: 100%;
    height: 38px;
    padding-right: 0;
    border-radius: 0;
    display: flex;
    border-bottom: 1px solid var(--C-Dark-04);
    justify-content: space-between;
    align-items: center;

    font-family: 'Pretendard', sans-serif;
    color: var(--W-Dark-11);
    font-size: 14px;
    font-weight: 700;

    legend {
      display: none;
    }

    background: url('/assets/woori-mobile/icon/calendar.svg') no-repeat center right / 18px;

    .MuiButtonBase-root {
      width: 18px;
      height: 18px;
    }

    &.Mui-disabled {
      color: var(--W-Dark-07);
      border-color: var(--C-Dark-04);
      border-radius: 0;
      .MuiIconButton-root {
        img {
          ${disabledIconStyle}
        }
      }
    }

    // calendar 아이콘
    .MuiInputAdornment-root {
      margin: 0 2px 0 0;
      .MuiIconButton-root {
        padding: 0;
        display: block;
        margin-right: 0;

        &:hover {
          background: none;
        }
      }
    }

    // input
    .MuiInputBase-input {
      display: flex;
      height: 100%;
      box-sizing: border-box;
      padding: 0;
      -webkit-text-fill-color: initial;
      &::placeholder {
        opacity: 1;
        font-weight: 400;
        color: var(--W-Dark-06);
      }
    }

    &.readonly {
      .MuiInputBase-root {
        ${inputReadonlyStyle}
      }
    }

    ${(props) =>
      props.$isError &&
      css`
        .MuiInputBase-root {
          ${inputErrorStyle}
        }
      `}

    .MuiOutlinedInput-notchedOutline {
      display: none;
    }
  }
`;
