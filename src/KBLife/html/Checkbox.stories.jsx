import '../resource/style/css/common.css';
import '../resource/style/css/check.css';
import '../resource/js/ui_front';
const KBCheckboxStory = {
  // 좌측 메뉴 depth
  title: 'KBLife/form/Checkbox',
  // 컴포넌트 명
  //   component: ,
  // 스토리북 컴포넌트 뷰 레이아웃
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '540px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  // props 속성 docs 정리
  argTypes: {},
};

export default KBCheckboxStory;

// 죄측 메뉴 컴포넌트 명
export const Type01Default = () => {
  return (
    <div class='o-chk ty-blue'>
      <input type='checkbox' name='' id='mcb-check-01' class='form-field' />
      <label class='form-title' htmlFor='mcb-check-01'>
        <span class='img'></span>
        <div class='tit'>메인 타입의 체크박스</div>
      </label>
    </div>
  );
};
export const Type01Checked = () => {
  return (
    <div class='o-chk ty-blue'>
      <input type='checkbox' name='' id='mcb-check-02' class='form-field' checked />
      <label class='form-title' htmlFor='mcb-check-02'>
        <span class='img'></span>
        <div class='tit'>메인 타입의 체크박스</div>
      </label>
    </div>
  );
};
export const Type02Default = () => {
  return (
    <div class='o-chk ty-yellow'>
      <input type='checkbox' name='' id='mcb-check-03' class='form-field' />
      <label class='form-title' htmlFor='mcb-check-03'>
        <span class='img'></span>
        <div class='tit'>서브 타입의 체크박스</div>
      </label>
    </div>
  );
};
export const Type02Checked = () => {
  return (
    <div class='o-chk ty-yellow'>
      <input type='checkbox' name='' id='mcb-check-04' class='form-field' checked />
      <label class='form-title' htmlFor='mcb-check-04'>
        <span class='img'></span>
        <div class='tit'>서브 타입의 체크박스</div>
      </label>
    </div>
  );
};
export const Type03Default = () => {
  return (
    <div class='o-chk ty-con'>
      <input type='checkbox' name='f-list-05' id='f-list-item-05-01' class='form-field' />
      <label class='form-title' htmlFor='f-list-item-05-01'>
        <span class='check-img'></span>
        <span class='sub-txt'>컨텐츠 내부 체크박스</span>
      </label>
    </div>
  );
};
export const Type03Checked = () => {
  return (
    <div class='o-chk ty-con'>
      <input type='checkbox' name='f-list-05' id='f-list-item-05-02' class='form-field' checked />
      <label class='form-title' htmlFor='f-list-item-05-02'>
        <span class='check-img'></span>
        <span class='sub-txt'>컨텐츠 내부 체크박스</span>
      </label>
    </div>
  );
};
