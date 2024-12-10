import { styled } from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
`;
export const ContentWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
`;

export const TopArea = styled.div`
  & + ${ContentWrap} {
    margin-top: 8px;
  }
`;

export const SupportingData = styled.div`
  padding: 12px 12px 0;
`;

export const SupportingText = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: var(--Red-01);
  padding-left: ${(props) => (props.$pdLf ? props.$pdLf : '')}px;
  padding-bottom: 12px;
  white-space: pre-wrap;
  &.blue-color {
    color: var(--Blue-01);
  }
  & + & {
    margin-top: -19px;
  }
`;

export const TopAreaTab = styled.div`
  height: 40px;
  background-color: var(--White);
  overflow-x: auto;
  overflow-y: hidden;
  padding-right: 20px;
  border-bottom: 1px solid var(--C-Dark-02, #c9c9d0);

  &::-webkit-scrollbar {
    height: 0;
  }
`;

export const TopAreaFilter = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px 0;
  min-height: 48px;
  padding: 8px 0 8px 20px;
  background-color: var(--White);
  border-bottom: 1px solid var(--C-Dark-02);
`;

export const FilterListWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: fit-content;
  overflow-x: auto;
  padding-right: 80px;
  &::-webkit-scrollbar {
    height: 0px;
  }
`;

export const MiddleArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px 0;
  padding: 8px 20px 0;
`;

export const ToggleTableWrap = styled.div`
  padding: 8px 0px 8px;
`;

export const FilterBtnWrap = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  width: fit-content;
  height: 47px;
  padding: 0 16px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.26) 2.24%,
    rgba(255, 255, 255, 0.57) 4.71%,
    rgba(255, 255, 255, 0.71) 6.55%,
    rgba(255, 255, 255, 0.81) 8.77%,
    rgba(255, 255, 255, 0.92) 11.32%,
    #fff 15.33%
  );
`;

export const EditorToolArea = styled.div`
  width: calc(100% + 40px);
  margin: 0 -20px;
`;

export const EditorArea = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--White);
  height: 100%;
  .img-wrap {
    border-bottom: 1px solid var(--C-Dark-03, #e5e5ed);
    height: 41px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .content {
    &-wrap {
      padding: 12px 12px;
      background: var(--C-Dark-03);
      height: 100%;
      overflow-y: auto;
    }
    &-area {
      height: 800px;
      background: var(--White);
    }
  }
`;
export const TableTopArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0 6px;
  background-color: #fff;
  padding: 8px 16px;
`;

export const DialogSubTableArea = styled.div`
  overflow-y: auto;
`;
