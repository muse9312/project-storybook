import '../resource/style/css/common.css';
import '../resource/style/css/button.css';
import '../resource/js/ui_front';
const KBButtonStory = {
  // 좌측 메뉴 depth
  title: 'KBLife/Button/MainButton',
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

export default KBButtonStory;

// 죄측 메뉴 컴포넌트 명
export const Type01Default = () => {
  return (
    <button type='button' class='o-btn ty-main clr-blue-01'>
      이관
    </button>
  );
};
export const Type01Disabled = () => {
  return (
    <button type='button' class='o-btn ty-main clr-blue-01' disabled>
      이관
    </button>
  );
};
export const Type02Default = () => {
  return (
    <button type='button' class='o-btn ty-main clr-blue-02'>
      반송
    </button>
  );
};
export const Type02Disabled = () => {
  return (
    <button type='button' class='o-btn ty-main clr-blue-02' disabled>
      반송
    </button>
  );
};
export const Type03Default = () => {
  return (
    <button type='button' class='o-btn ty-main-slt clr-blue-01'>
      추후보완
    </button>
  );
};
export const Type03Disabled = () => {
  return (
    <button type='button' class='o-btn ty-main-slt clr-blue-01' disabled>
      추후보완
    </button>
  );
};
export const Type04Default = () => {
  return (
    <button type='button' class='o-btn ty-main clr-fff'>
      신용정보원조회
    </button>
  );
};
export const Type04Disabled = () => {
  return (
    <button type='button' class='o-btn ty-main clr-fff' disabled=''>
      신용정보원조회
    </button>
  );
};
export const Type05Default = () => {
  return (
    <button type='button' class='o-btn ty-main clr-fff-02'>
      보완확인
    </button>
  );
};
export const Type05Disabled = () => {
  return (
    <button type='button' class='o-btn ty-main clr-fff-02' disabled=''>
      보완확인
    </button>
  );
};
export const Type06Default = () => {
  return (
    <button type='button' class='o-btn ty-main-slt clr-fff'>
      연관업무
    </button>
  );
};
export const Type06Disabled = () => {
  return (
    <button type='button' class='o-btn ty-main-slt clr-fff' disabled=''>
      연관업무
    </button>
  );
};
export const Type07Default = () => {
  return (
    <button type='button' class='o-btn ty-main clr-fff'>
      초기화 <span class='o-icon icon-refresh'></span>
    </button>
  );
};
export const Type07Disabled = () => {
  return (
    <button type='button' class='o-btn ty-main clr-fff' disabled=''>
      초기화 <span class='o-icon icon-refresh'></span>
    </button>
  );
};
export const Type08Default = () => {
  return (
    <button type='button' class='o-btn ty-main clr-red'>
      <span class='o-icon icon-check-red'></span>압류일시해제
    </button>
  );
};
