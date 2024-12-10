import WOCommonWrap from '../components/common/WOCommonWrap';

import sourceCode from '../components/common/WOCommonWrap.jsx?raw';
const WOCommonWrapStory = {
    // 좌측 메뉴 depth
    title: 'WooriMobile/common/WOCommonWrap',
    // 컴포넌트 명
    component: WOCommonWrap,
    // 스토리북 컴포넌트 뷰 레이아웃
    parameters: {
        layout: 'centered',
        storySource: {
            source: sourceCode, // ADD SOURCE CODE
        },
    },
    decorators: [
        (Story) => (
            <div>
                <Story />
            </div>
        ),
    ],
    tags: ['autodocs'],
    // props 속성 docs 정리
    argTypes: {
        // props 명
        wrapType: {
            control: 'select',
            options: ['column', 'row'],
            description: 'column, row를 선택할수있습니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: true },
        },
        wrapRowGap: {
            control: 'text',
            description: 'row gap을 설정합니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'number', required: false },
        },
        wrapColumnGap: {
            control: 'text',
            description: 'column gap을 설정합니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'number', required: false },
        },
    },
};

export default WOCommonWrapStory;

// 죄측 메뉴 컴포넌트 명
export const Column = () => {
    return (
        <WOCommonWrap wrapType="row" wrapColumnGap="10">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
        </WOCommonWrap>
    );
};

export const Row = () => {
    return (
        <WOCommonWrap wrapType="column" wrapRowGap="10">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
        </WOCommonWrap>
    );
};
