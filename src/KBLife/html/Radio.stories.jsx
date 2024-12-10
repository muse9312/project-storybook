import '../resource/style/css/common.css';
import '../resource/style/css/check.css';
import '../resource/js/ui_front';
const KBRadioStory = {
  // 좌측 메뉴 depth
  title: 'KBLife/form/Radio',
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

export default KBRadioStory;

// 죄측 메뉴 컴포넌트 명
export const Type01Default = () => {
  return (
    <div class='o-radio ty-yellow'>
      <input type='radio' name='radio01' id='radio01-01' class='form-field' />
      <label class='form-title' htmlFor='radio01-01'>
        <span class='img'></span>
        <span class='tit'>본인</span>
      </label>
    </div>
  );
};
export const Type01Checked = () => {
  return (
    <div class='o-radio ty-yellow'>
      <input type='radio' name='radio02' id='radio02-01' class='form-field' checked />
      <label class='form-title' htmlFor='radio01-01'>
        <span class='img'></span>
        <span class='tit'>본인</span>
      </label>
    </div>
  );
};
export const Type02Default = () => {
  return (
    <div class='o-radio ty-con'>
      <input type='radio' name='f-list-04' id='f-list-item-04-01' class='form-field' />
      <label class='form-title' htmlFor='f-list-item-04-01'>
        <span class='check-img'></span>
        <span class='sub-txt'>컨텐츠 내부 라디오 버튼</span>
      </label>
    </div>
  );
};
export const Type02Checked = () => {
  return (
    <div class='o-radio ty-con'>
      <input type='radio' name='f-list-02' id='f-list-item-02-01' class='form-field' checked />
      <label class='form-title' htmlFor='f-list-item-02-01'>
        <span class='check-img'></span>
        <span class='sub-txt'>컨텐츠 내부 라디오 버튼</span>
      </label>
    </div>
  );
};
