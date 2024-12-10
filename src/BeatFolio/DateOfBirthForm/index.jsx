import React, { useState } from 'react';
import Input from '../Input';

const DateOfBirthForm = () => {
  const [value, setValue] = useState('');

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const lastChar = inputValue[inputValue.length - 1];
    const inputType = e.nativeEvent.inputType;

    if (inputType === 'deleteContentBackward') {
      if (value.endsWith('*')) {
        setValue(inputValue.slice(0, -6)); // Removes last * and preceding digit
      } else if (value.includes('-')) {
        setValue(inputValue.slice(0, -1)); // Removes - and preceding digit
      }
    } else {
      if (inputValue.length === 6 && lastChar !== '-') {
        setValue(inputValue + '-');
      } else if (inputValue.length === 8 && lastChar !== '*') {
        setValue(inputValue + '******');
      } else {
        setValue(inputValue);
      }
    }
  };

  return (
    <Input
      type='text'
      pattern='\d*'
      maxlength={14}
      label='생년월일'
      name='input01'
      bg='white'
      placeholder='생년월일 7자리'
      labelVisible
      value={value}
      onChange={handleInputChange}
    />
  );
};

export default DateOfBirthForm;
