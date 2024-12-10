import WOIconButton from '../components/common/WOIconButton';

import sourceCode from '../components/common/WOIconButton.jsx?raw';
/**
``
 IconButton 컴포넌트 사용시 Icon Props Icon 파일 명으로 전달
 IconButton 파일명은 ex) plus,arr 같이 아이콘 명만 작성 하고 svg 파일로 통일 
``
 **/
const Icons = {
    title: 'WooriMobile/button/WOIconButton',
    component: WOIconButton,
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
            description: 'IconButton Width 입니다.',
            defaultValue: { summary: 14 },
            type: { summary: 'number', required: false },
        },
        height: {
            control: 'number',
            description: 'IconButton Height 입니다.',
            defaultValue: { summary: 14 },
            type: { summary: 'number', required: false },
        },
        icon: {
            control: 'text',
            description: 'IconButton 명 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: true },
        },
    },
};

export default Icons;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Arr = {
    args: {
        width: 30,
        height: 30,
        icon: 'arr-back-30',
    },
};
export const Star = {
    args: {
        width: 30,
        height: 30,
        icon: 'star-black-30',
    },
};
export const Menu = {
    args: {
        width: 30,
        height: 30,
        icon: 'menu-black-30',
    },
};
