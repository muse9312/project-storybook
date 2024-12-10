import update from 'immutability-helper';
import { useCallback, useState } from 'react';
import styled from 'styled-components';
import WOEditWorkTopicItem from './WOEditWorkTopicItem';

const WOEditWorkTopic = () => {
  const [lists, setLists] = useState([
    {
      id: 1,
      text: '세출',
    },
    {
      id: 2,
      text: '세입',
    },
    {
      id: 3,
      text: '일상경비',
    },
    {
      id: 4,
      text: 'e+뱅킹',
    },
    {
      id: 5,
      text: '전자보고서',
    },
    {
      id: 6,
      text: '운용상품',
    },
    {
      id: 7,
      text: '제로페이',
    },
    {
      id: 8,
      text: '법인카드',
    },
  ]);
  const moveList = useCallback((dragIndex, hoverIndex) => {
    setLists((prevLists) =>
      update(prevLists, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevLists[dragIndex]],
        ],
      })
    );
  }, []);
  const renderList = useCallback(
    (item, index) => {
      return <WOEditWorkTopicItem key={item.id} index={index} id={item.id} text={item.text} moveList={moveList} />;
    },
    [moveList]
  );
  return (
    <Wrapper>
      <Notice>* 메인화면에 노출되는 순서를 변경하실 수 있습니다.</Notice>
      <ListWrap>{lists.map((item, i) => renderList(item, i))}</ListWrap>
    </Wrapper>
  );
};

export default WOEditWorkTopic;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 30px;
`;

const Notice = styled.div`
  position: relative;
  flex: 0 0 auto;
  padding: 0 20px 14px;
  margin-bottom: 8px;
  color: var(--C-Dark-08, #566479);
  font-size: 12px;
  font-weight: 400;
  border-bottom: 1px solid var(--C-Dark-02, #ededf3);
  &::after {
    flex: 0 0 auto;
    content: '';
    position: absolute;
    bottom: -9px;
    left: 0;
    width: 100%;
    height: 8px;
    background: #f5f6fa;
  }
`;
const ListWrap = styled.ul`
  flex: 1;
  position: relative;
  height: 100%;
  overflow-y: auto;
`;
