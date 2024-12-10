import WOIcon from '../components/common/WOIcon';

import sourceCode from '../components/common/WOIcon.jsx?raw';
/**
``
 Icon 컴포넌트 사용시 Icon Props Icon 파일 명으로 전달
 Icon 파일명은 ex) plus,arr 같이 아이콘 명만 작성 하고 svg 파일로 통일 
``
 **/
const Icons = {
    title: 'WooriMobile/Icons/WOIcon',
    component: WOIcon,
    parameters: {
        layout: 'centered',
        storySource: {
            source: sourceCode, // ADD SOURCE CODE
        },
    },
    tags: ['autodocs'],
    argTypes: {
        width: {
            control: 'number',
            description: 'Icon Width 입니다.',
            defaultValue: { summary: 14 },
            type: { summary: 'number', required: false },
        },
        height: {
            control: 'number',
            description: 'Icon Height 입니다.',
            defaultValue: { summary: 14 },
            type: { summary: 'number', required: false },
        },
        icon: {
            control: 'text',
            description: 'Icon 명 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: true },
        },
    },
};

export default Icons;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plus = {
    args: {
        width: 14,
        height: 14,
        icon: 'plus-blue-14',
    },
};

export const Filter = {
    args: {
        width: 14,
        height: 14,
        icon: 'filter-blue-14',
    },
};
