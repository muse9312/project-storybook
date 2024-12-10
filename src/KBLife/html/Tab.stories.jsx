import '../resource/style/css/common.css';
import '../resource/style/css/tab.css';
import '../resource/js/ui_front';
const KBTabStory = {
  // 좌측 메뉴 depth
  title: 'KBLife/Tab/Tab',
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

export default KBTabStory;

// 죄측 메뉴 컴포넌트 명
export const Type01Default = () => {
  return (
    <div class='o-tab ty-main'>
      <ul class='tab-btn-box' data-tab='on'>
        <li class='tbb-items on'>
          <button type='button' class='o-btn btn-tab' title='선택됨' data-tabbtn='tabpanel-1'>
            탭 메뉴1
          </button>
        </li>
        <li class='tbb-items'>
          <button type='button' class='o-btn btn-tab' data-tabbtn='tabpanel-2'>
            탭 메뉴2
          </button>
        </li>
        <li class='tbb-items'>
          <button type='button' class='o-btn btn-tab' data-tabbtn='tabpanel-3'>
            탭 메뉴3
          </button>
        </li>
      </ul>
    </div>
  );
};
export const Type01Content = () => {
  return (
    <>
      <div class='o-tab ty-main' style={{ margin: '0 0 20px' }}>
        <ul class='tab-btn-box' data-tab='on'>
          <li class='tbb-items on'>
            <button type='button' class='o-btn btn-tab' title='선택됨' data-tabbtn='tabpanel-1'>
              탭 메뉴1
            </button>
          </li>
          <li class='tbb-items'>
            <button type='button' class='o-btn btn-tab' data-tabbtn='tabpanel-2'>
              탭 메뉴2
            </button>
          </li>
          <li class='tbb-items'>
            <button type='button' class='o-btn btn-tab' data-tabbtn='tabpanel-3'>
              탭 메뉴3
            </button>
          </li>
        </ul>
      </div>

      <div class='tab-panel' data-tabpanel='tabpanel-1'>
        탭 내용1
      </div>
      <div class='tab-panel' data-tabpanel='tabpanel-2' hidden>
        탭 내용2
      </div>
      <div class='tab-panel' data-tabpanel='tabpanel-3' hidden>
        탭 내용3
      </div>
    </>
  );
};
export const Type02Default = () => {
  return (
    <>
      <div class='o-tab  ty-box-row '>
        <ul class='tab-btn-box' data-tab='on'>
          <li class='tbb-items on'>
            <button type='button' class='o-btn btn-tab' title='선택됨' data-tabbtn='tabpanel-4'>
              탭 메뉴1<span class='num'>237</span>
            </button>
          </li>
          <li class='tbb-items'>
            <button type='button' class='o-btn btn-tab' data-tabbtn='tabpanel-5'>
              탭 메뉴2<span class='num'>172</span>
            </button>
          </li>
          <li class='tbb-items'>
            <button type='button' class='o-btn btn-tab' data-tabbtn='tabpanel-6'>
              탭 메뉴3<span class='num'>50</span>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
export const Type03Default = () => {
  return (
    <>
      <div class='o-tab  ty-box-row02'>
        <ul class='tab-btn-box' data-tab='on'>
          <li class='tbb-items on'>
            <button type='button' class='o-btn btn-tab' title='선택됨' data-tabbtn='tabpanel-1'>
              탭 메뉴1<span class='num'>172</span>
            </button>
          </li>
          <li class='tbb-items '>
            <button type='button' class='o-btn btn-tab' title='선택됨' data-tabbtn='tabpanel-2'>
              탭 메뉴2<span class='num'>120</span>
            </button>
          </li>
          <li class='tbb-items '>
            <button type='button' class='o-btn btn-tab' title='선택됨' data-tabbtn='tabpanel-3'>
              탭 메뉴3<span class='num'>30</span>
            </button>
          </li>
          <li class='tbb-items '>
            <button type='button' class='o-btn btn-tab' title='선택됨' data-tabbtn='tabpanel-4'>
              탭 메뉴4<span class='num'>22</span>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
export const Type04Default = () => {
  return (
    <>
      <div class='o-tab  ty-box-icon'>
        <ul class='tab-btn-box' data-tab='on'>
          <li class='tbb-items on'>
            <button type='button' class='o-btn btn-tab' title='선택됨' data-tabbtn='tabpanel-1'>
              <span class='icon'>
                <span class='num'>1</span>
              </span>
              <span class='tit'>탭 메뉴1</span>
            </button>
          </li>
          <li class='tbb-items '>
            <button type='button' class='o-btn btn-tab' title='선택됨' data-tabbtn='tabpanel-1'>
              <span class='icon'>
                <span class='num'>2</span>
              </span>
              <span class='tit'>탭 메뉴2</span>
            </button>
          </li>
          <li class='tbb-items '>
            <button type='button' class='o-btn btn-tab' title='선택됨' data-tabbtn='tabpanel-1'>
              <span class='icon'>
                <span class='num'>4</span>
              </span>
              <span class='tit'>탭 메뉴3</span>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
export const Type04FixSize = () => {
  return (
    <>
      <div class='o-tab  ty-box-icon ty-fit'>
        <ul class='tab-btn-box' data-tab='on'>
          <li class='tbb-items on'>
            <button type='button' class='o-btn btn-tab' title='선택됨' data-tabbtn='tabpanel-1'>
              <span class='icon'>
                <span class='num'>1</span>
              </span>
              <span class='tit'>탭 메뉴1</span>
            </button>
          </li>
          <li class='tbb-items '>
            <button type='button' class='o-btn btn-tab' title='선택됨' data-tabbtn='tabpanel-1'>
              <span class='icon'>
                <span class='num'>1</span>
              </span>
              <span class='tit'>탭 메뉴2</span>
            </button>
          </li>
          <li class='tbb-items '>
            <button type='button' class='o-btn btn-tab' title='선택됨' data-tabbtn='tabpanel-1'>
              <span class='icon'>
                <span class='num'>1</span>
              </span>
              <span class='tit'>탭 메뉴3</span>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
export const Type05Default = () => {
  return (
    <>
      <div class='o-tab  ty-box-row03'>
        <ul class='tab-btn-box' data-tab='on'>
          <li class='tbb-items on'>
            <button type='button' class='o-btn btn-tab' title='선택됨' data-tabbtn='tabpanel-1'>
              탭 메뉴1
            </button>
          </li>
          <li class='tbb-items '>
            <button type='button' class='o-btn btn-tab' title='선택됨' data-tabbtn='tabpanel-1'>
              탭 메뉴2
            </button>
          </li>
          <li class='tbb-items '>
            <button type='button' class='o-btn btn-tab' title='선택됨' data-tabbtn='tabpanel-1'>
              탭 메뉴3
            </button>
          </li>
          <li class='tbb-items '>
            <button type='button' class='o-btn btn-tab' title='선택됨' data-tabbtn='tabpanel-1'>
              탭 메뉴4
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
export const Type06Default = () => {
  return (
    <>
      <div class='o-tab  ty-box-col'>
        <ul class='tab-btn-box' data-tab='on'>
          <li class='tbb-items on'>
            <button type='button' class='o-btn btn-tab' title='선택됨' data-tabbtn='tabpanel-1'>
              탭 메뉴1
            </button>
          </li>
          <li class='tbb-items '>
            <button type='button' class='o-btn btn-tab' title='선택됨' data-tabbtn='tabpanel-1'>
              탭 메뉴2
            </button>
          </li>
          <li class='tbb-items '>
            <button type='button' class='o-btn btn-tab' title='선택됨' data-tabbtn='tabpanel-1'>
              탭 메뉴3
            </button>
          </li>
          <li class='tbb-items '>
            <button type='button' class='o-btn btn-tab' title='선택됨' data-tabbtn='tabpanel-1'>
              탭 메뉴4
            </button>
          </li>
          <li class='tbb-items '>
            <button type='button' class='o-btn btn-tab' title='선택됨' data-tabbtn='tabpanel-1'>
              탭 메뉴5
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
