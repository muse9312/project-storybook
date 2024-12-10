import styled from 'styled-components';

const WODualComboBox = ({ children }) => {
  return (
    <>
      <Wrap className='dual-combobox-wrap'>
        {children[0]}
        <Dash />
        {children[1]}
      </Wrap>
    </>
  );
};

export default WODualComboBox;

const Wrap = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Dash = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 38px;
  border-bottom: 1px solid var(--C-Dark-04);
  flex: 0 0 auto;

  &:before {
    content: '';
    width: 6px;
    height: 1px;
    background-color: var(--W-Dark-11);
  }
`;
