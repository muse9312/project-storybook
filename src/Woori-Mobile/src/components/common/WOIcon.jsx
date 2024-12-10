import React from 'react';
import styled from 'styled-components';

const WOIcon = ({ icon, width, height }) => {
  return <IconComponents className='icon' $icon={icon} $width={width ? width : 14} $height={height ? height : 14}></IconComponents>;
};

export default WOIcon;
const IconBaseStyle = styled.span`
  display: block;
  width: ${(props) => props.$width && `${props.$width}px`};
  height: ${(props) => props.$height && `${props.$height}px`};
`;

const IconComponents = styled(IconBaseStyle)`
  flex: 0 0 auto;
  ${(props) =>
    props.$icon &&
    `
        background:url('/assets/woori-mobile/icon/${props.$icon}.svg') no-repeat center / cover;
  `}
`;
