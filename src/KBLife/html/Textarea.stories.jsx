import '../resource/style/css/common.css';
import '../resource/style/css/form.css';
import '../resource/js/ui_front';
const KBTextareaStory = {
  // 좌측 메뉴 depth
  title: 'KBLife/Form/Textarea',
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

export default KBTextareaStory;

// 죄측 메뉴 컴포넌트 명
export const Type01Default = () => {
  return (
    <div class='o-textarea'>
      <textarea name='' id='' cols='0' rows='0' placeholder='Text'></textarea>
    </div>
  );
};

export const Type01DefaultDisabled = () => {
  return (
    <div class='o-textarea'>
      <textarea name='' id='' cols='0' rows='0' placeholder='Text' disabled></textarea>
    </div>
  );
};
