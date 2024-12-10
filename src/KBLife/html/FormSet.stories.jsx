import '../resource/style/css/common.css';
import '../resource/style/css/form.css';
import '../resource/js/ui_front';
const KBFormSetStory = {
  // 좌측 메뉴 depth
  title: 'KBLife/form/FormSet',
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

export default KBFormSetStory;

// 죄측 메뉴 컴포넌트 명
export const FormTitleInput = () => {
  return (
    <div class='ex'>
      <div class='form-set'>
        <div class='form-tit'>
          <h3 class='o-h3'>Title</h3>
        </div>
        <div class='o-input'>
          <input type='text' placeholder='Text' title='title' />
        </div>
      </div>
    </div>
  );
};
export const FormTitleSelect = () => {
  return (
    <div class='form-set'>
      <div class='form-tit'>
        <h3 class='o-h3'>Title</h3>
      </div>
      <div class='o-select'>
        <select name='' id=''>
          <option value=''>Text</option>
          <option value=''>Text</option>
          <option value=''>Text</option>
        </select>
      </div>
    </div>
  );
};
export const FormTitleTextarea = () => {
  return (
    <div class='form-set'>
      <div class='form-tit'>
        <h5 class='o-h3'>Title</h5>
      </div>
      <div class='o-textarea'>
        <textarea name='' id='' cols='0' rows='0' placeholder='Text'></textarea>
      </div>
    </div>
  );
};
export const FormTitleRowInput = () => {
  return (
    <div class='form-set ty-flex'>
      <div class='form-tit'>
        <h4 class='o-h4'>Title</h4>
      </div>
      <div class='o-input'>
        <input type='text' placeholder='Text' title='title' value='Text' />
        <div class='input-back'>
          <button type='button' class='o-btn btn-input-search'>
            <span class='text-hide'>검색</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export const FormTitleRowSelect = () => {
  return (
    <div class='form-set ty-flex'>
      <div class='form-tit'>
        <h4 class='o-h4'>Title</h4>
      </div>
      <div class='o-select'>
        <select name='' id=''>
          <option value=''>Text</option>
          <option value=''>Text</option>
          <option value=''>Text</option>
        </select>
      </div>
    </div>
  );
};
export const FormTitleRowTextarea = () => {
  return (
    <div class='form-set ty-flex'>
      <div class='form-tit'>
        <h4 class='o-h4'>Title</h4>
      </div>
      <div class='o-textarea'>
        <textarea name='' id='' cols='0' rows='0' placeholder='Text'>
          Text
        </textarea>
      </div>
    </div>
  );
};
export const FormGridEqual01 = () => {
  return (
    <div class='form-grid'>
      <div class='item'>
        <div class='o-input'>
          <input type='text' placeholder='Text' value='' title='title' />
        </div>
      </div>
      <div class='item'>
        <div class='o-input'>
          <input type='text' placeholder='Text' value='' title='title' />
        </div>
      </div>
    </div>
  );
};
export const FormGridEqual02 = () => {
  return (
    <div class='form-grid'>
      <div class='item'>
        <div class='o-input'>
          <input type='text' placeholder='Text' value='' title='title' />
        </div>
      </div>
      <div class='item'>
        <div class='o-input'>
          <input type='text' placeholder='Text' value='' title='title' />
        </div>
      </div>
      <div class='item'>
        <div class='o-input'>
          <input type='text' placeholder='Text' value='' title='title' />
        </div>
      </div>
    </div>
  );
};
export const FormGridEqual03 = () => {
  return (
    <div class='form-grid'>
      <div class='item'>
        <div class='o-input'>
          <input type='text' placeholder='Text' value='' title='title' />
        </div>
      </div>
      <div class='item'>
        <div class='o-input'>
          <input type='text' placeholder='Text' value='' title='title' />
        </div>
      </div>
      <div class='item'>
        <div class='o-input'>
          <input type='text' placeholder='Text' value='' title='title' />
        </div>
      </div>
      <div class='item'>
        <div class='o-input'>
          <input type='text' placeholder='Text' value='' title='title' />
        </div>
      </div>
    </div>
  );
};
export const Form10Columns01 = () => {
  return (
    <div class='form-grid'>
      <div class='item item-3'>
        <div class='o-input'>
          <input type='text' placeholder='Text' value='3 col' title='title' />
        </div>
      </div>
      <div class='item item-7'>
        <div class='o-input'>
          <input type='text' placeholder='Text' value='7 col' title='title' />
        </div>
      </div>
    </div>
  );
};
export const Form10Columns02 = () => {
  return (
    <div class='form-grid'>
      <div class='item item-4'>
        <div class='o-input'>
          <input type='text' placeholder='Text' value='4 col' title='title' />
        </div>
      </div>
      <div class='item item-6'>
        <div class='o-input'>
          <input type='text' placeholder='Text' value='6 col' title='title' />
        </div>
      </div>
    </div>
  );
};
export const Form10Columns03 = () => {
  return (
    <div class='form-grid'>
      <div class='item item-5'>
        <div class='o-input'>
          <input type='text' placeholder='Text' value='5 col' title='title' />
        </div>
      </div>
      <div class='item item-5'>
        <div class='o-input'>
          <input type='text' placeholder='Text' value='5 col' title='title' />
        </div>
      </div>
    </div>
  );
};
export const Form10Columns04 = () => {
  return (
    <div class='form-grid'>
      <div class='item item-3'>
        <div class='o-input'>
          <input type='text' placeholder='Text' value='3 col' title='title' />
        </div>
      </div>
      <div class='item item-3'>
        <div class='o-input'>
          <input type='text' placeholder='Text' value='3 col' title='title' />
        </div>
      </div>
      <div class='item item-4'>
        <div class='o-input'>
          <input type='text' placeholder='Text' value='4 col' title='title' />
        </div>
      </div>
    </div>
  );
};
export const FormTitleGrid01 = () => {
  return (
    <div class='form-set'>
      <div class='form-tit'>
        <h3 class='o-h3'>Title</h3>
      </div>
      <div class='form-grid'>
        <div class='item'>
          <div class='o-select'>
            <select name='' id=''>
              <option value=''>Text</option>
              <option value=''>Text</option>
              <option value=''>Text</option>
            </select>
          </div>
        </div>
        <div class='item'>
          <div class='o-input'>
            <input type='text' placeholder='Text' value='' title='title' />
          </div>
        </div>
      </div>
    </div>
  );
};
export const FormTitleGrid02 = () => {
  return (
    <div class='form-set ty-flex'>
      <div class='form-tit'>
        <h4 class='o-h4'>Title</h4>
      </div>
      <div class='form-grid'>
        <div class='item item-4'>
          <div class='o-select'>
            <select name='' id=''>
              <option value=''>Text</option>
              <option value=''>Text</option>
              <option value=''>Text</option>
            </select>
          </div>
        </div>
        <div class='item item-6'>
          <div class='o-input'>
            <input type='text' placeholder='Text' title='title' value='Text' />
            <div class='input-back'>
              <button type='button' class='o-btn btn-input-search'>
                <span class='text-hide'>검색</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const FormTitleGrid03 = () => {
  return (
    <div class='form-set ty-flex'>
      <div class='form-tit'>
        <h4 class='o-h4'>Title</h4>
      </div>
      <div class='form-grid'>
        <div class='item'>
          <div class='o-input'>
            <input type='text' placeholder='Text' value='' title='title' />
          </div>
        </div>
        <div class='sign'>@</div>
        <div class='item'>
          <div class='o-input'>
            <input type='text' placeholder='Text' value='' title='title' />
          </div>
        </div>
        <div class='item'>
          <div class='o-select'>
            <select name='' id=''>
              <option value=''>Text</option>
              <option value=''>Text</option>
              <option value=''>Text</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
