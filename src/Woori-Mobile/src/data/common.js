import Swal from 'sweetalert2';

export const defaultDateFormat = 'YYYY.MM.DD';
export const dateFormatMonth = 'YYYY.MM';

export const confirm = async (title, text) => {
  try {
    const htmlText = text.replace(/\n/g, '<br>');
    const result = await Swal.fire({
      title,
      html: htmlText,
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonText: '확인',
      cancelButtonText: '취소',
      reverseButtons: true,
      closeButtonHtml: '<img src="/assets/woori-mobile/icon/close.svg" alt="close" />',
    });

    return result.isConfirmed; // true: 확인 클릭시, false: 취소 클릭시
  } catch (error) {
    console.error('다이얼로그 오류:', error);
    return false;
  }
};
export const alert = async (title, text) => {
  try {
    const htmlText = text.replace(/\n/g, '<br>');
    const result = await Swal.fire({
      title,
      html: htmlText,
      showCloseButton: true,
      showCancelButton: false,
      confirmButtonText: '확인',
      reverseButtons: true,
      closeButtonHtml: '<img src="/assets/woori-mobile/icon/close.svg" alt="close" />',
    });

    return result.isConfirmed;
  } catch (error) {
    console.error('다이얼로그 오류:', error);
    return false;
  }
};

export const selectWorkData = [
  {
    id: 1,
    depth1: '일상경비',
    depth2: '조회/보고서',
    depth3: '세출계좌조회',
    area: '강남구청',
    department: '지원팀',
    favoriteStatus: true,
  },
  {
    id: 2,
    depth1: '일상경비',
    depth2: '조회/보고서',
    depth3: '일상경비계좌 현황',
    area: '강남구청',
    department: '지원팀',
    favoriteStatus: true,
  },
  {
    id: 3,
    depth1: '세출업무',
    depth2: '세출계좌',
    depth3: '세출계좌조회',
    area: '강남구청',
    department: '지원팀',
    favoriteStatus: true,
  },
];

export const SearchList = [{ title: '세입계좌현황' }, { title: '세입거래내역장' }, { title: '보조금 교부내역 조회' }, { title: '공금예금 이자 조회' }];

export const SnbList = [
  {
    id: 1,
    title: '세입',
  },
  {
    id: 2,
    title: '세출',
  },
  {
    id: 3,
    title: '일상경비',
  },
  {
    id: 4,
    title: 'e+뱅킹',
  },
  {
    id: 5,
    title: '전자보고서',
  },
  {
    id: 6,
    title: '운용상품',
  },
  {
    id: 7,
    title: '제로페이',
  },
  {
    id: 8,
    title: '법인카드',
  },
];

export const MenuList = [
  {
    id: 1,
    children: [
      {
        id: 1,
        title: '세입계좌현황',
        link: '/ARV0101H01',
        isList: false,
      },
      {
        id: 2,
        title: '보조금 교부내역 조회',
        link: '/ARV0301H01',

        isList: false,
      },
      {
        id: 3,
        title: '공금예금 이자 조회',
        link: '/ARV0601H01',
        isList: false,
      },
    ],
  },
  {
    id: 2,
    children: [
      {
        id: 1,
        title: '세출계좌현황',
        link: '/AXP0101H01',
        isList: false,
      },
      {
        id: 2,
        title: '반납(여입) 거래명세',
        link: '/AXP0301H01',
        isList: false,
      },
      {
        id: 3,
        title: '정부보관금 내역조회',
        link: '/AXP0501H01',
        isList: false,
      },
    ],
  },
  {
    id: 3,
    children: [
      {
        id: 1,
        title: '일상경비 계좌현황',
        link: '/ILS0101H01',
        isList: false,
      },
      {
        id: 2,
        title: '반납금 입금거래명세',
        link: '/ILS0101H04',
        isList: false,
      },
    ],
  },
  {
    id: 4,
    children: [
      {
        id: 1,
        title: '처리결과 조회',
        link: '/EBK0101H01',
        isList: false,
      },
      {
        id: 2,
        title: '이체불능구 내역조회',
        link: '/EBK0101H02',
        isList: false,
      },
      {
        id: 3,
        title: '대체보관구 내역조회',
        link: '/EBK0101H03',
        isList: false,
      },
      {
        id: 4,
        title: '지출명령 반려조회',
        link: '/EBK0101H04',
        isList: false,
      },
      {
        id: 5,
        title: '공금잔액(한도) 및 은행마감시간조회',
        link: '/EBK0201H01',
        isList: false,
      },
    ],
  },
  {
    id: 5,
    children: [
      {
        id: 1,
        title: '세입월계표_보고서',
        link: '/RPT0101H01',
        isList: false,
      },
      {
        id: 2,
        title: '세입세출자금일계표',
        link: '/RPT0201H01',
        isList: false,
      },
      {
        id: 3,
        title: '세입세출외현금 자금일계표',
        link: '/RPT0301H01',
        isList: false,
      },
      {
        id: 4,
        title: '세출 • 일 • 월분기계표 ',
        link: '/RPT0401H01',
        isList: false,
      },
      {
        id: 5,
        title: '전자보고서 일괄승인',
        link: '/RPT0402H01',
        isList: false,
      },
    ],
  },
  {
    id: 6,
    children: [
      {
        id: 1,
        title: '공금성 정기예금',

        isList: true,
        children: [
          {
            tabList: [
              {
                tapTitle: '공금성 정기예금 현황',
                link: '/FXP0101H01',
              },
              {
                tapTitle: '해지예상/ 예상이자 조회',
                link: '/FXP0101H03',
              },
              {
                tapTitle: '전체명세',
                link: '/FXP0101H02',
              },
            ],
          },
        ],
      },
      {
        id: 2,
        title: '보통예금',
        link: '/FXP0201H01',
        isList: false,
      },
    ],
  },
  {
    id: 7,
    children: [
      {
        id: 1,
        title: '승인내역 조회',
        link: '/ZPB0101H01',
        isList: false,
      },
      {
        id: 2,
        title: '집행내역 조회',
        link: '/ZPB0101H02',
        isList: false,
      },
      {
        id: 3,
        title: '결제계좌 거래내역조회',
        link: '/ZPB0103H01',
        isList: false,
      },
    ],
  },
  {
    id: 8,
    children: [
      {
        id: 1,
        title: '카드거래내역 조회',
        isList: true,
        children: [
          {
            tabList: [
              {
                tapTitle: '승인내역',
                link: '/CAD0101H01',
              },
              {
                tapTitle: '매입내역',
                link: '/CAD0101H02',
              },
              {
                tapTitle: '청구내역',
                link: '/CAD0101H03',
              },
              {
                tapTitle: '미청구내역',
                link: '/CAD0101H04',
              },
            ],
          },
        ],
      },
      {
        id: 2,
        title: '결제내역조회',
        link: '/CAD0201H01',
        isList: false,
      },
      {
        id: 3,
        title: '연체내역조회',
        link: '/CAD0201H02',
        isList: false,
      },
      {
        id: 4,
        title: '카드결제계좌 거래내역 조회',
        link: '/CAD0301H01',
        isList: false,
      },
    ],
  },
];
