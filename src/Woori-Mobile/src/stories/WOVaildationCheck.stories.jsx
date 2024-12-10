import WOValidationCheck from '../components/common/WOValidationCheck.jsx';

import sourceCode from '../components/common/WOValidationCheck.jsx?raw';
const WOValidationCheckStory = {
    title: 'WooriMobile/Common/WOValidationCheck',
    component: WOValidationCheck,
    parameters: {
        layout: 'centered',
        storySource: {
            source: sourceCode, // ADD SOURCE CODE
        },
    },
    tags: ['autodocs'],
    argTypes: {
        itemList: {
            control: 'text',
            description: 'list 입니다.',
            defaultValue: { summary: 'white' },
            type: { summary: 'text', required: true },
        },
    },
};

export default WOValidationCheckStory;

export const Default = {
    args: {
        itemList: [
            {
                id: '1',
                title: '소문자',
            },
            {
                id: '2',
                title: '특수문자',
                isCheck: 'error',
            },
            {
                id: '3',
                title: '숫자',
                isCheck: 'pass',
            },
            {
                id: '4',
                title: '6자 이상',
                isCheck: 'pass',
            },
        ],
    },
};
