import '../resource/style/css/common.css';
import '../resource/style/css/form.css';
import '../resource/js/ui_front';
const KBInputStory = {
  // 좌측 메뉴 depth
  title: 'KBLife/Form/Input',
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

export default KBInputStory;

// 죄측 메뉴 컴포넌트 명
export const Type01Default = () => {
  return (
    <div class='o-input'>
      <input type='text' placeholder='Text' title='title' />
    </div>
  );
};
export const Type01Search = () => {
  return (
    <div class='o-input'>
      <input type='text' placeholder='Text' title='title' />
      <div class='input-back'>
        <button type='button' class='o-btn btn-input-search'>
          <span class='text-hide'>검색</span>
        </button>
      </div>
    </div>
  );
};
export const Type01DefaultDisabled = () => {
  return (
    <div class='o-input'>
      <input type='text' placeholder='Text' title='title' disabled />
    </div>
  );
};
export const Type01SearchDisabled = () => {
  return (
    <div class='o-input'>
      <input type='text' placeholder='Text' title='title' disabled />
      <div class='input-back'>
        <button type='button' class='o-btn btn-input-search'>
          <span class='text-hide'>검색</span>
        </button>
      </div>
    </div>
  );
};
export const Type02Default = () => {
  return (
    <div class='o-input ty-round'>
      <input type='text' placeholder='Text' title='title' />
    </div>
  );
};
export const Type02Search = () => {
  return (
    <div class='o-input ty-round'>
      <input type='text' placeholder='Text' title='title' />
      <div class='input-back'>
        <button type='button' class='o-btn btn-input-search'>
          <span class='text-hide'>검색</span>
        </button>
      </div>
    </div>
  );
};
export const Type02DefaultDisabled = () => {
  return (
    <div class='o-input ty-round'>
      <input type='text' placeholder='Text' title='title' disabled />
    </div>
  );
};
export const Type02SearchDisabled = () => {
  return (
    <div class='o-input ty-round'>
      <input type='text' placeholder='Text' title='title' disabled />
      <div class='input-back'>
        <button type='button' class='o-btn btn-input-search'>
          <span class='text-hide'>검색</span>
        </button>
      </div>
    </div>
  );
};
export const Type03Default = () => {
  return (
    <div class='o-input ty-round sty-wht'>
      <input type='text' placeholder='Text' title='title' />
    </div>
  );
};
export const Type03Search = () => {
  return (
    <div class='o-input ty-round sty-wht'>
      <input type='text' placeholder='Text' title='title' />
      <div class='input-back'>
        <button type='button' class='o-btn btn-input-search'>
          <span class='text-hide'>검색</span>
        </button>
      </div>
    </div>
  );
};
export const Type03DefaultDisabled = () => {
  return (
    <div class='o-input ty-round sty-wht'>
      <input type='text' placeholder='Text' title='title' disabled />
    </div>
  );
};
export const Type03SearchDisabled = () => {
  return (
    <div class='o-input ty-round sty-wht'>
      <input type='text' placeholder='Text' title='title' disabled />
      <div class='input-back'>
        <button type='button' class='o-btn btn-input-search'>
          <span class='text-hide'>검색</span>
        </button>
      </div>
    </div>
  );
};
export const Type04Default = () => {
  return (
    <div class='o-input ty-round sty-grad'>
      <input type='text' placeholder='Text' title='title' />
    </div>
  );
};
export const Type04Search = () => {
  return (
    <div class='o-input ty-round sty-grad'>
      <input type='text' placeholder='Text' title='title' />
      <div class='input-back'>
        <button type='button' class='o-btn btn-input-search'>
          <span class='text-hide'>검색</span>
        </button>
      </div>
    </div>
  );
};
export const Type04DefaultDisabled = () => {
  return (
    <div class='o-input ty-round sty-grad'>
      <input type='text' placeholder='Text' title='title' disabled />
    </div>
  );
};
export const Type04SearchDisabled = () => {
  return (
    <div class='o-input ty-round sty-grad'>
      <input type='text' placeholder='Text' title='title' disabled />
      <div class='input-back'>
        <button type='button' class='o-btn btn-input-search'>
          <span class='text-hide'>검색</span>
        </button>
      </div>
    </div>
  );
};

export const Type05Default = () => {
  return (
    <div class='o-input sz-s'>
      <input type='text' placeholder='Text' title='title' />
    </div>
  );
};
export const Type05DefaultDisabled = () => {
  return (
    <div class='o-input sz-s'>
      <input type='text' placeholder='Text' title='title' disabled />
    </div>
  );
};
export const Type06Default = () => {
  return (
    <div class='o-input sty-wht sz-s'>
      <input type='text' placeholder='Text' title='title' />
    </div>
  );
};
export const Type06DefaultDisabled = () => {
  return (
    <div class='o-input sty-wht sz-s'>
      <input type='text' placeholder='Text' title='title' disabled />
    </div>
  );
};
