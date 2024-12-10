import styled from 'styled-components';

const WOFieldDescription = ({ itemText, counter, maxCount, success, error }) => {
  counter = counter === null || 'undefined' ? '0' : counter;
  maxCount = maxCount === null || 'undefined' ? '0' : maxCount;
  const status = success === true ? '#599CFF' : error === true ? '#FC8686' : '#AAAAAA';

  return (
    <>
      <Wrap $success={success} $error={error}>
        <ItemLeft>
          <svg xmlns='http://www.w3.org/2000/svg' width='10' height='8' viewBox='0 0 10 8' fill='none'>
            <path
              d='M0.0250977 3.3249L0.750098 2.6249C0.800098 2.5749 0.875098 2.5749 0.925098 2.6249L4.0001 5.6999L9.0751 0.624902C9.1251 0.574902 9.2001 0.574902 9.2501 0.624902L9.9501 1.3249C10.0001 1.3749 10.0001 1.4499 9.9501 1.4999L4.0751 7.3749C4.0251 7.4249 3.9501 7.4249 3.9001 7.3749L0.0250977 3.4999C9.76566e-05 3.4499 9.76566e-05 3.3749 0.0250977 3.3249Z'
              fill={status}
            />
          </svg>
          {itemText}
        </ItemLeft>
        <ItemRight>
          {counter}/{maxCount}
        </ItemRight>
      </Wrap>
    </>
  );
};

export default WOFieldDescription;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 16px;
  padding: 2px 0;
  font-size: 12px;
  font-weight: 400;
  color: ${(props) => (props.$success ? 'var(--Blue-02)' : props.$error ? 'var(--Red-02)' : 'var(--W-Dark-06)')};
`;

const ItemLeft = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  line-height: 16px;
  > svg {
    margin: 2px 1px;
  }
`;

const ItemRight = styled.span`
  display: inline-block;
  line-height: 16px;
`;
