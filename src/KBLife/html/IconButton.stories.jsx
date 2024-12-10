import '../resource/style/css/common.css';
import '../resource/style/css/button.css';
import '../resource/js/ui_front';
const KBIconButtonStory = {
  // 좌측 메뉴 depth
  title: 'KBLife/Button/IconButton',
  // 컴포넌트 명
  //   component: ,
  // 스토리북 컴포넌트 뷰 레이아웃
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  // props 속성 docs 정리
  argTypes: {},
};

export default KBIconButtonStory;

// 죄측 메뉴 컴포넌트 명
export const Type01Default = () => {
  return <button type='button' class='o-btn btn-refresh-01'></button>;
};

export const Type02Default = () => {
  return <button type='button' class='o-btn btn-refresh-02'></button>;
};

export const Type03Default = () => {
  return <button type='button' class='o-btn btn-arr-down'></button>;
};

export const Type04Default = () => {
  return <button type='button' class='o-btn btn-arr-down on'></button>;
};

export const Type05Default = () => {
  return <button type='button' class='o-btn btn-arr-down-02'></button>;
};

export const Type06Default = () => {
  return <button type='button' class='o-btn btn-sort'></button>;
};

export const Type07Default = () => {
  return <button type='button' class='o-btn btn-close'></button>;
};

export const Type08Default = () => {
  return <button type='button' class='o-btn btn-more'></button>;
};
