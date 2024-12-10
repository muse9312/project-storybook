import { Autocomplete, FormControl, MenuItem, Select, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { inputStyle, labelStyle, inputReadonlyStyle } from '../../styles/common.styled';
import WOLabel from './WOLabel';

// Type type = 'filter'

const WOComboBox = ({ label, labelColor, optionList, isAutoComplete, defaultValue, disabled, readonly, isError, width, type, isHorizontal, onChange }) => {
  // logic
  // defaultValue: { id: 1, label: 'data1' }

  const [value, setValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleSelectChange = (event) => {
    const { value } = event.target;
    const selectedItem = optionList.find((item) => item.id === value);
    setValue(value);
    onChange && selectedItem && onChange(selectedItem);
  };

  const handleAutoSelectChange = (_, newValue) => {
    setValue(newValue);
    onChange && onChange(newValue);
  };
  const handleAutoSelectInputChange = (_, newInputValue) => {
    setInputValue(newInputValue);
  };

  useEffect(() => {
    if (!!isAutoComplete) {
      setValue(defaultValue ? defaultValue.label : optionList[0].label);
      setInputValue(defaultValue ? defaultValue.label : optionList[0].label);
      return;
    }
    setValue(defaultValue ? defaultValue.id : optionList[0].id);
  }, [defaultValue, isAutoComplete, optionList]);

  // view
  return (
    <>
      {isAutoComplete ? (
        <AutocompleteCustom
          disablePortal
          id='combo-box'
          className={`select-wrap autocomplete ${readonly ? 'readonly' : ''}`}
          width={width}
          options={optionList}
          $isHorizontal={isHorizontal}
          $color={labelColor}
          renderInput={(params) => <TextField error={isError} {...params} label={label} />}
          value={value}
          inputValue={inputValue}
          disabled={disabled}
          readOnly={readonly}
          onChange={handleAutoSelectChange}
          onInputChange={handleAutoSelectInputChange}
          isOptionEqualToValue={(option, value) => option.value === value.value}
        />
      ) : (
        <SelectWrap width={width} className={`select-wrap ${type === 'fds' ? 'type-fds' : ''}`} $type={type} $isHorizontal={isHorizontal}>
          <FormControl disabled={disabled}>
            {label && <WOLabel label={label} color={labelColor} />}

            <SelectCustom
              labelId={label}
              id='select'
              className={`select ${readonly ? 'readonly' : ''}`}
              label={label}
              value={value}
              inputProps={{ readOnly: readonly }}
              error={isError}
              onChange={handleSelectChange}
              // defaultOpen={true}
            >
              {optionList.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.label}
                </MenuItem>
              ))}
            </SelectCustom>
          </FormControl>
        </SelectWrap>
      )}
    </>
  );
};

export default WOComboBox;

const AutocompleteCustom = styled(Autocomplete)`
  width: ${(props) => `${props.width ? `${props.width}px` : '100%'}`};

  &.autocomplete {
    .MuiFormControl-root {
      display: flex;
      flex-direction: column;
      gap: 3px;
    }
    // label
    .MuiFormLabel-root {
      ${labelStyle}
    }

    // inputWrap
    .MuiInputBase-root {
      ${inputStyle}
    }
    &.readonly {
      .MuiInputBase-root {
        ${inputReadonlyStyle}
      }
    }

    // optionBox
    & + .MuiAutocomplete-popper {
      z-index: 999;
      .MuiPaper-root {
        max-height: 250px;
        .MuiAutocomplete-listbox {
          overflow: visible;
        }
      }
      // 각각의 옵션
      .MuiAutocomplete-option {
        font-family: 'Pretendard', sans-serif;
        color: #333;
        font-size: 12px;
        font-weight: 400;
      }
    }
  }

  .MuiOutlinedInput-notchedOutline {
    display: none;
  }

  // Horzontal
  ${(props) =>
    props.$isHorizontal &&
    css`
      &.autocomplete {
        .MuiFormControl-root {
          flex-direction: row;
          gap: 2px;
        }
        .MuiFormLabel-root {
          min-width: 60px;
          width: 60px;
        }
      }
    `}
`;

const SelectWrap = styled.div`
  width: ${(props) => `${props.width ? `${props.width}px` : '100%'}`};

  display: flex;
  flex-direction: column;

  .MuiFormControl-root {
    width: 100%;
    gap: 3px;
  }

  ${(props) =>
    props.$type === 'filter' &&
    css`
      width: fit-content;
      height: fit-content;
      .select.MuiInputBase-root {
        height: 38px;
        .MuiInputBase-input {
          box-sizing: border-box;
          height: 38px;
          padding: 6px 32px 6px 0;
          padding-right: 20px !important;
        }

        .MuiSelect-icon {
          width: 14px;
          height: 14px;
          right: 0;
        }
      }
    `}

  // Horzontal
  ${(props) =>
    props.$isHorizontal &&
    css`
      .MuiFormControl-root {
        flex-direction: row;
        gap: 2px;
      }
      .MuiFormLabel-root {
        min-width: 60px;
        width: 60px;
      }
    `}

    &.type-fds {
    width: auto;
    min-width: 120px;
    .MuiInputBase-root .MuiSelect-icon {
      background-image: url(/assets/woori-mobile/icon/arrow-dropdown-gray.svg);
      right: 10px;
    }
    .select.MuiInputBase-root {
      border: 1px solid rgba(189, 215, 255, 0.2);
      border-radius: 4px;
      height: 32px;
      font-size: 13px;
      font-weight: 400;
      color: #fff;

      .MuiInputBase-input {
        line-height: 32px;
        padding-top: 0;
        padding-bottom: 0;
        padding-left: 10px;
        height: 100%;
      }
    }
  }
`;

const SelectCustom = styled(Select)`
  // inputWrap

  &.MuiInputBase-root {
    ${inputStyle}

    &.Mui-disabled {
      border-color: var(--C-Dark-04);
      color: var(--W-Dark-07);
    }
  }

  .MuiOutlinedInput-notchedOutline {
    display: none;
  }
`;
