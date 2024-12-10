import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import styled, { css } from 'styled-components';

const WOEditWorkTopicItem = ({ id, text, index, moveList }) => {
  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: 'list',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveList(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: 'list',
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drag(drop(ref));
  return (
    <ListItem ref={ref} $isDragging={isDragging} data-handler-id={handlerId}>
      <Wrap>
        <Title>{text}</Title>
        <DragBtn />
      </Wrap>
    </ListItem>
  );
};

export default WOEditWorkTopicItem;
const ListItem = styled.li`
  width: 100%;
  padding: 0px 20px;
  user-select: none;
  touch-action: none;
  cursor: grab;

  & > * {
    pointer-events: none;
  }
  ${(props) =>
    props.$isDragging
      ? css`
          transform: translate(0, -10px);
          opacity: 0.6;
        `
      : css`
          transform: translate(0, 0px);
        `}
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 12px;
  border-bottom: 1px solid var(--C-Dark-02, #ededf3);
`;

const Title = styled.div`
  color: var(--W-Dark-11, #333);
  font-size: 16px;
  font-weight: 400;
`;

const DragBtn = styled.button`
  display: block;
  width: 18px;
  height: 18px;
  background: url(/assets/woori-mobile/icon/drag-btn-black-18.svg) no-repeat center / cover;
`;
