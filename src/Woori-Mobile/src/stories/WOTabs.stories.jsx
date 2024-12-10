import WOTabs from '../components/common/WOTabs';

import sourceCode from '../components/common/WOTabs.jsx?raw';
const WOTabsStory = {
    // 좌측 메뉴 depth
    title: 'WooriMobile/Tabs/WOTabs',
    // 컴포넌트 명
    component: WOTabs,
    // 스토리북 컴포넌트 뷰 레이아웃
    parameters: {
        layout: 'centered',
        storySource: {
            source: sourceCode, // ADD SOURCE CODE
        },
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
    argTypes: {
        // props 명
        onChange: {
            control: 'text',
            description: 'Tabs onChange 함수 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'function', required: true },
        },
        tabs: {
            control: 'array',
            description: 'Tabs id,name 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'array', required: true },
        },
        type: {
            control: 'array',
            description: 'Tabs type 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'array', required: false },
        },
    },
};

export default WOTabsStory;

// 죄측 메뉴 컴포넌트 명
export const Default = {
    // 컴포넌트에 넘겨줄 props 정리
    args: {
        // props명 : 넘겨줄 props 값-
        onChange: () => {},
        tabs: [
            {
                id: 1,
                name: 'tab1',
            },
            {
                id: 2,
                name: 'tab2',
            },
        ],
    },
};
export const Fit = {
    // 컴포넌트에 넘겨줄 props 정리
    args: {
        // props명 : 넘겨줄 props 값-
        onChange: () => {},
        type: 'fit',
        tabs: [
            {
                id: 1,
                name: 'tab1',
            },
            {
                id: 2,
                name: 'tab2',
            },
            {
                id: 3,
                name: 'tab3',
            },
            {
                id: 4,
                name: 'tab4',
            },
            {
                id: 5,
                name: 'tab5',
            },
        ],
    },
};
