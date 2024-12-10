import '../resource/style/css/common.css';
import '../resource/style/css/form.css';
import '../resource/js/ui_front';
const KBSelectStory = {
  // 좌측 메뉴 depth
  title: 'KBLife/Form/Select',
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

export default KBSelectStory;

// 죄측 메뉴 컴포넌트 명
export const Type01Default = () => {
  return (
    <div class='o-select'>
      <select required name='' id=''>
        <option value='' hidden>
          Text
        </option>
        <option value=''>Text</option>
        <option value=''>Text</option>
      </select>
    </div>
  );
};

export const Type01DefaultDisabled = () => {
  return (
    <div class='o-select'>
      <select required name='' id='' disabled>
        <option value='' hidden>
          Text
        </option>
        <option value=''>Text</option>
        <option value=''>Text</option>
      </select>
    </div>
  );
};

export const Type02Default = () => {
  return (
    <div class='o-select sz-s'>
      <select required name='' id=''>
        <option value='' hidden>
          Text
        </option>
        <option value=''>Text</option>
        <option value=''>Text</option>
      </select>
    </div>
  );
};

export const Type02DefaultDisabled = () => {
  return (
    <div class='o-select sz-s'>
      <select required name='' id='' disabled>
        <option value='' hidden>
          Text
        </option>
        <option value=''>Text</option>
        <option value=''>Text</option>
      </select>
    </div>
  );
};
