import React, { useState } from 'react';
import styled from 'styled-components';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
const WOSearchInput = ({ tableData, onChange, placeholder }) => {
  const [val, setVal] = useState('');

  const handleAutoSelectChange = (_, newValue) => {
    setVal(newValue);
    onChange && onChange(newValue);
  };

  return (
    <Wrap>
      <SearchInputCustom
        id='highlights-demo'
        value={val}
        onChange={handleAutoSelectChange}
        options={tableData}
        getOptionLabel={(option) => option.title || ''}
        renderInput={(params) => <TextField {...params} placeholder={placeholder} />}
        renderOption={(props, option, { inputValue }) => {
          const matches = match(option.title, inputValue, { insideWords: true });
          const parts = parse(option.title, matches);
          return (
            <li {...props}>
              <div>
                {parts.map((part, index) => (
                  <span
                    key={index}
                    style={{
                      color: part.highlight ? 'var(--Blue-01)' : 'var(--C-Dark-08)',
                    }}>
                    {part.text}
                  </span>
                ))}
              </div>
            </li>
          );
        }}
      />
    </Wrap>
  );
};

export default WOSearchInput;

const Wrap = styled.div`
  width: 100%;
`;

const SearchInputCustom = styled(Autocomplete)`
  &.MuiAutocomplete-root {
    .MuiInputBase-root {
      width: 100%;
      height: 42px;
      padding: 0 16px;
      background-color: transparent;
      display: flex;

      border-radius: 12px;
      border: 1px solid var(--C-Dark-02);
      background: #fff;
      justify-content: space-between;
      align-items: center;

      color: var(--C-Dark-12);
      font-size: 14px;
      font-weight: 400;
      line-height: 18;

      &.Mui-focused {
        border: 1px solid var(--Blue-01);
      }
    }

    legend {
      display: none;
    }

    .MuiOutlinedInput-root {
      .MuiAutocomplete-input {
        padding: 0 12px 0 0;
      }

      .MuiAutocomplete-endAdornment {
        right: 0;
      }
    }
    .MuiAutocomplete-endAdornment {
      top: unset;
    }

    &::placeholder {
      color: var(--C-Dark-06);
      font-size: 14px;
      font-weight: 400;
      line-height: 18px;
    }

    .MuiAutocomplete-clearIndicator {
      margin-right: 14px;
    }

    // searchIcon
    .MuiAutocomplete-endAdornment {
      .MuiAutocomplete-popupIndicator {
        width: 20px;
        height: 20px;
        right: 16px;
        background: url(/assets/woori-mobile/icon/search-blue.svg) no-repeat center;
        transform: none;
        .MuiSvgIcon-root {
          display: none;
        }
      }
    }

    // claseIcon
    .MuiAutocomplete-clearIndicator {
      width: 18px;
      height: 18px;
      margin: none;
      margin-right: 30px;
      background: url(/assets/woori-mobile/icon/search-close.svg) no-repeat center;
      transform: none;
      .MuiSvgIcon-root {
        display: none;
      }
    }
    .MuiOutlinedInput-notchedOutline {
      display: none;
    }
  }
`;
