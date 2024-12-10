import WOBadge from '../components/common/WOBadge.jsx';

import sourceCode from '../components/common/WOBadge.jsx?raw';
const WOBadgeStory = {
    title: 'WooriMobile/Common/WOBadge',
    component: WOBadge,
    parameters: {
        layout: 'centered',
        storySource: {
            source: sourceCode, // ADD SOURCE CODE
        },
    },
    tags: ['autodocs'],
    argTypes: {
        count: {
            control: 'text',
            description: '누적 알림 입니다.',
            defaultValue: { summary: 0 },
            type: { summary: 'text', required: true },
        },
        borderColorType: {
            control: 'text',
            description: '보더 색상 입니다.',
            defaultValue: { summary: 'white' },
            type: { summary: 'text', required: true },
        },
    },
};

export default WOBadgeStory;

export const TypeA = {
    args: {
        count: '3',
        borderColorType: 'white',
    },
};

export const TypeB = {
    args: {
        count: '0',
        borderColorType: 'dark',
    },
};
