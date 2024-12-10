import WOSelectWorkList from '../components/common/WOSelectWorkList';

import sourceCode from '../components/common/WOSelectWorkList.jsx?raw';
const WOSelectWorkStory = {
    // 좌측 메뉴 depth
    title: 'WooriMobile/List/WOSelectWorkList',
    // 컴포넌트 명
    component: WOSelectWorkList,
    // 스토리북 컴포넌트 뷰 레이아웃
    parameters: {
        layout: 'centered',
        storySource: {
            source: sourceCode, // ADD SOURCE CODE
        },
    },
    argTypes: {
        id: {
            control: 'text',
            description: 'WOSelectWorkList Id 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: true },
        },
        depth1: {
            control: 'text',
            description: 'WOSelectWorkList depth1 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: true },
        },
        depth2: {
            control: 'text',
            description: 'WOSelectWorkList depth2 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: true },
        },
        depth3: {
            control: 'text',
            description: 'WOSelectWorkList depth3 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: true },
        },
        favoriteStatus: {
            control: 'boolean',
            description: 'WOSelectWorkList 즐겨찾기 여부 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'boolean', required: true },
        },
    },
    tags: ['autodocs'],
    // props 속성 docs 정리
};

export default WOSelectWorkStory;

// 죄측 메뉴 컴포넌트 명
export const Default = {
    // 컴포넌트에 넘겨줄 props 정리
    args: {
        id: 1,
        depth1: '일상경비',
        depth2: '조회/보고서',
        depth3: '일상경비계좌 현황',
        favoriteStatus: true,
    },
};
