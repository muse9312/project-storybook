import WOTag from '../components/common/WOTag';

import sourceCode from '../components/common/WOTag.jsx?raw';
const WOTagStory = {
    // 좌측 메뉴 depth
    title: 'WooriMobile/Tag/WOTag',
    // 컴포넌트 명
    component: WOTag,
    // 스토리북 컴포넌트 뷰 레이아웃
    parameters: {
        layout: 'centered',
        storySource: {
            source: sourceCode, // ADD SOURCE CODE
        },
    },

    tags: ['autodocs'],
    // props 속성 docs 정리
    argTypes: {
        // props 명
        label: {
            control: 'text',
            description: 'Taglabel 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: true },
        },
        text: {
            control: 'text',
            description: 'Tag text 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: true },
        },
    },
};

export default WOTagStory;

// 죄측 메뉴 컴포넌트 명
export const Default = {
    // 컴포넌트에 넘겨줄 props 정리
    args: {
        label: 'label',
        text: 'text',
    },
};
