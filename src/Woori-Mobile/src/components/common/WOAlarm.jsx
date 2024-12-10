import React from 'react';
import styled from 'styled-components';
import WOIcon from './WOIcon';

// type severityType = 'warning' | 'caution' | 'advisory' // 상, 중, 하

const WOAlarm = ({ severity, count, onClick }) => {
  return (
    <Alarm type='button' className={`alarm ${severity}`} onClick={onClick}>
      <WOIcon icon={severity} width={24} height={24} />
      <span className='count'>{count}</span>
    </Alarm>
  );
};

export default WOAlarm;

const Alarm = styled.button`
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 0 12px;
  border-radius: 8px;
  .count {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 700;
  }

  // severity
  &.warning {
    background: linear-gradient(180deg, #ff5d5d 0%, #e26f6f 100%);
  }

  &.advisory {
    background: linear-gradient(180deg, #ff814b 0%, #ff8b59 100%);
  }

  &.caution {
    background: #ffc31a;
  }
`;
