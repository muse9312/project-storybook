import WOMainTabs from '../components/common/WOMainTabs';

import sourceCode from '../components/common/WOMainTabs.jsx?raw';
const WOMainTabsStory = {
    // 좌측 메뉴 depth
    title: 'WooriMobile/Tabs/WOMainTabs',
    // 컴포넌트 명
    component: WOMainTabs,
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
    },
};

export default WOMainTabsStory;

// 죄측 메뉴 컴포넌트 명
export const Default = {
    // 컴포넌트에 넘겨줄 props 정리
    args: {
        // props명 : 넘겨줄 props 값-
        onChange: () => {},
        tabs: [
            {
                id: 1,
                name: '📂  자주 쓰는 업무',
            },
            {
                id: 2,
                name: '📋  주제별 업무',
            },
        ],
    },
};
