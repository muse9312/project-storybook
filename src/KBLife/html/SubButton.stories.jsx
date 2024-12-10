import '../resource/style/css/common.css';
import '../resource/style/css/button.css';
import '../resource/js/ui_front';
const KBSubButtonStory = {
  // 좌측 메뉴 depth
  title: 'KBLife/Button/SubButton',
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

export default KBSubButtonStory;

// 죄측 메뉴 컴포넌트 명
export const Type01Default = () => {
  return (
    <button type='button' class='o-btn ty-sub clr-ylw'>
      검색
    </button>
  );
};
export const Type01Disabled = () => {
  return (
    <button type='button' class='o-btn ty-sub clr-ylw' disabled=''>
      검색
    </button>
  );
};
export const Type02Default = () => {
  return (
    <button type='button' class='o-btn ty-sub clr-grey'>
      조회
    </button>
  );
};
export const Type02Disabled = () => {
  return (
    <button type='button' class='o-btn ty-sub clr-grey' disabled=''>
      조회
    </button>
  );
};
export const Type03Default = () => {
  return (
    <button type='button' class='o-btn ty-sub-02 clr-grey'>
      조회
    </button>
  );
};
export const Type03Disabled = () => {
  return (
    <button type='button' class='o-btn ty-sub-02 clr-grey' disabled=''>
      조회
    </button>
  );
};
export const Type04Default = () => {
  return (
    <button type='button' class='o-btn btn-reset'>
      초기화
    </button>
  );
};

export const Type05Default = () => {
  return (
    <button type='button' class='o-btn btn-setting'>
      항목 설정
    </button>
  );
};

export const Type06Default = () => {
  return (
    <button type='button' class='o-btn ty-table'>
      입력
    </button>
  );
};

export const Type07Default = () => {
  return (
    <button type='button' class='o-btn ty-table'>
      일괄계좌입력
    </button>
  );
};

export const Type08Default = () => {
  return (
    <button type='button' class='o-btn ty-table-02'>
      일괄입력
    </button>
  );
};
export const Type09Default = () => {
  return (
    <button type='button' class='o-btn ty-table-02'>
      아이템분할
    </button>
  );
};
export const Type10Default = () => {
  return (
    <button type='button' class='o-btn ty-table-02 clr-dark'>
      추가
    </button>
  );
};
export const Type11Default = () => {
  return (
    <button type='button' class='o-btn ty-table-02 clr-grey'>
      자세히보기
    </button>
  );
};
export const Type12Default = () => {
  return (
    <button type='button' class='o-btn ty-table-02 clr-red'>
      삭제
    </button>
  );
};
export const Type13Default = () => {
  return (
    <>
      <button type='button' class='o-btn btn-sort-line clr-orange'>
        모니터링 대기
      </button>
      <br />
      <button type='button' class='o-btn btn-sort-line clr-violet'>
        청약서 Vail
      </button>
      <br />
      <button type='button' class='o-btn btn-sort-line clr-green'>
        임시저장
      </button>
      <br />
      <button type='button' class='o-btn btn-sort-line clr-yellow'>
        적부
      </button>
      <br />
      <button type='button' class='o-btn btn-sort-line clr-blue'>
        지점미결
      </button>
      <br />
      <button type='button' class='o-btn btn-sort-line clr-pink'>
        TI문의
      </button>
    </>
  );
};
export const Type14Default = () => {
  return (
    <button type='button' class='o-btn ty-sub-02 clr-ylw'>
      요청사항입력
    </button>
  );
};
