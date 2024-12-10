// 세출 - 세출계좌현황

export const TD_AXP0101H01 = {
  fields: [
    { fieldName: 'column01' },
    { fieldName: 'column02' },
    { fieldName: 'column03' },
    { fieldName: 'column04' },
    { fieldName: 'column05' },
    { fieldName: 'column06' },
    { fieldName: 'column07' },
    { fieldName: 'column08' },
    { fieldName: 'column09' },
    { fieldName: 'column10' },
    { fieldName: 'column11' },
  ],
  columns: [
    { fieldName: 'column01', width: 80, fillWidth: 0, header: '시구청명' },
    { fieldName: 'column02', width: 160, fillWidth: 0, header: '계좌번호' },
    { fieldName: 'column03', width: 120, fillWidth: 0, header: '회계명' },
    { fieldName: 'column04', width: 80, fillWidth: 0, header: '기관명', styleName: 'text-left' },
    { fieldName: 'column05', width: 100, fillWidth: 0, header: '시구세 구분' },
    { fieldName: 'column06', width: 100, fillWidth: 0, header: '대행계좌 구분' },
    { fieldName: 'column07', width: 90, fillWidth: 0, header: '통합계좌 여부' },
    { fieldName: 'column08', width: 160, fillWidth: 0, header: '이자 입금 계좌번호' },
    { fieldName: 'column09', width: 180, fillWidth: 0, header: '관리모점' },
    { fieldName: 'column10', width: 190, fillWidth: 1, header: '지급점', styleName: 'text-left' },
    { fieldName: 'column11', width: 110, fillWidth: 0, header: '계좌상태' },
  ],
  rows: [
    // {
    //   column01: '강동구청',
    //   column02: '0000-00000-000-0',
    //   column03: '일반회계(시비)',
    //   column04: '강동',
    //   column05: '시세',
    //   column06: '자계좌',
    //   column07: 'Y',
    //   column08: '0000-00000-000-0',
    //   column09: '[000000] 서울시청금융센터',
    //   column10: '[000000] 강동구청지점',
    //   column11: '정상(활동계좌)',
    // },
    // {
    //   column01: '강동구청',
    //   column02: '0000-00000-000-0',
    //   column03: '일반회계(시비)',
    //   column04: '강동',
    //   column05: '시세',
    //   column06: '자계좌',
    //   column07: 'Y',
    //   column08: '0000-00000-000-0',
    //   column09: '[000000] 서울시청금융센터',
    //   column10: '[000000] 강동구청지점',
    //   column11: '정상(활동계좌)',
    // },
    // {
    //   column01: '강동구청',
    //   column02: '0000-00000-000-0',
    //   column03: '일반회계(시비)',
    //   column04: '강동',
    //   column05: '시세',
    //   column06: '자계좌',
    //   column07: 'Y',
    //   column08: '0000-00000-000-0',
    //   column09: '[000000] 서울시청금융센터',
    //   column10: '[000000] 강동구청지점',
    //   column11: '정상(활동계좌)',
    // },
  ],
};

export const TD_AXP0101H01_Sub01 = [
  {
    id: '1',
    title: '공금예금계좌구분',
    text: '세출',
  },
  {
    id: '2',
    title: '시/구세 구분',
    text: '시세',
  },
  {
    id: '3',
    title: '회계번호',
    text: '12345-일반회계(사비)',
  },
  {
    id: '4',
    title: '회계연도',
    text: 'YYYY',
  },
  {
    id: '5',
    title: '계좌상태',
    text: '정상(활동계좌)',
  },
  {
    id: '6',
    title: '기관번호',
    text: '000-강동',
  },
  {
    id: '7',
    title: '관리모점코드',
    text: '123456-서울시청금융센터',
  },
  {
    id: '8',
    title: '신규일',
    text: 'YYYY.MM.DD',
  },
  {
    id: '9',
    title: '해지일',
    text: '-',
  },

  {
    id: '10',
    title: '최종일련번호',
    text: '000',
  },
  {
    id: '11',
    title: '최종거래일',
    text: 'YYYY.MM.DD',
  },
];
export const TD_AXP0101H01_Sub02 = [
  {
    id: '1',
    title: '세출계좌구분',
    text: '일반회계',
  },
  {
    id: '2',
    title: '대행계좌구분',
    text: '자계좌',
  },
  {
    id: '3',
    title: '세입계좌수',
    text: '0',
  },
  {
    id: '4',
    title: '자금배정받을 계좌번호',
    text: '0000-00000-000-0',
  },
  {
    id: '5',
    title: '이자입금계좌번호',
    text: '0000-00000-000-0',
  },
  {
    id: '6',
    title: '지급점 코드',
    text: '000000-강동구청지점',
  },
  {
    id: '7',
    title: '통합계좌구분',
    text: '한도관리 통합계좌',
  },
  {
    id: '8',
    title: '자금지출모계좌번호 (통합계좌번호)',
    text: '0000-00000-000-0',
  },
  {
    id: '9',
    title: '대학회계여부',
    text: 'N',
  },
  {
    id: '10',
    title: '잔액',
    text: '0',
    isNum: true,
  },
  {
    id: '11',
    title: '한도잔액',
    text: '0',
    isNum: true,
  },
];

export const FD_AXP0101H01 = [
  {
    id: 1,
    title: '회계연도',
    text: 'YYYY',
  },
  {
    id: 2,
    title: '계좌상태',
    text: '정상(활동계좌)',
  },
  {
    id: 3,
    title: '시세/구세',
    text: '전체',
  },
  {
    id: 4,
    title: '세출계좌구분',
    text: '전체',
  },
  {
    id: 5,
    title: '대행계좌구분',
    text: '전체',
  },
  {
    id: 6,
    title: '기관명',
    text: '서울시청',
    type: 'type02',
  },
  {
    id: 7,
    title: '부서명',
    text: '전체',
    type: 'type02',
  },
];

// 세출 - 정부보관금 내역조회

export const TD_AXP0501H01 = {
  fields: [
    { fieldName: 'column01' },
    { fieldName: 'column02' },
    { fieldName: 'column03' },
    { fieldName: 'column04' },
    { fieldName: 'column05' },
    { fieldName: 'column06' },
    { fieldName: 'column07' },
    { fieldName: 'column08' },
    { fieldName: 'column09' },
  ],
  columns: [
    { fieldName: 'column01', width: 160, fillWidth: 0, header: '세입세출현금계좌', footer: { text: '합계', styleName: 'text-right' } },
    { fieldName: 'column02', width: 160, fillWidth: 0, header: '별단계좌번호' },
    { fieldName: 'column03', width: 110, fillWidth: 0, header: '입금일자' },
    { fieldName: 'column04', width: 120, fillWidth: 0, header: '입금일련번호' },
    { fieldName: 'column05', width: 140, fillWidth: 0, header: '입금금액', styleName: 'text-right', footer: { text: '900,770,504', styleName: 'text-right' } },
    { fieldName: 'column06', width: 240, fillWidth: 1, header: '적요', styleName: 'text-left' },
    { fieldName: 'column07', width: 140, fillWidth: 0, header: '주민사업자번호', styleName: 'text-left' },
    { fieldName: 'column08', width: 120, fillWidth: 0, header: '지급일자' },
    { fieldName: 'column09', width: 120, fillWidth: 0, header: '최초지급일자' },
  ],
  rows: [
    {
      column01: '0000-00000-000-0',
      column02: '0000-000-000000',
      column03: 'YYYY.MM.DD',
      column04: '00000',
      column05: '86,010,000.00',
      column06: '한국공항공사 서울지역본부 (화곡1동)',
      column07: '109******6',
      column08: 'YYYY.MM.DD',
      column09: 'YYYY.MM.DD',
    },
    {
      column01: '0000-00000-000-0',
      column02: '0000-000-000000',
      column03: 'YYYY.MM.DD',
      column04: '00000',
      column05: '86,010,000.00',
      column06: '한국공항공사 서울지역본부 (화곡1동)',
      column07: '109******6',
      column08: 'YYYY.MM.DD',
      column09: 'YYYY.MM.DD',
    },
    {
      column01: '0000-00000-000-0',
      column02: '0000-000-000000',
      column03: 'YYYY.MM.DD',
      column04: '00000',
      column05: '86,010,000.00',
      column06: '한국공항공사 서울지역본부 (화곡1동)',
      column07: '109******6',
      column08: 'YYYY.MM.DD',
      column09: 'YYYY.MM.DD',
    },
  ],
  layout: [
    {
      name: 'ft_group',
      header: { visible: false },
      direction: 'horizontal',
      items: [{ column: 'column01', footerUserSpans: [{ colspan: 4 }] }],
    },
    'column02',
    'column03',
    'column04',
    'column05',
    'column06',
    'column07',
    'column08',
    'column09',
  ],
};

export const FD_AXP0501H01 = [
  {
    id: 1,
    title: '세입세출 현금계좌',
    text: '0000-00000-000-0 [일반회계(시비)]',
  },
  {
    id: 2,
    title: '기준일자',
    text: 'YYYY.MM.DD',
  },
  {
    id: 3,
    title: '주민사업자번호',
    text: '-',
  },
  {
    id: 4,
    title: '조회일자',
    text: 'YYYY.MM.DD - YYYY.MM.DD',
  },
  {
    id: 5,
    title: '정리/미정리',
    text: '전체',
  },
  {
    id: 6,
    title: '기관명',
    text: '서울시청',
    type: 'type02',
  },
];
