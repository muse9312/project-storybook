import WOLoginInput from '../components/common/WOLoginInput';

import sourceCode from '../components/common/WOLoginInput.jsx?raw';
const WOLoginInputStory = {
    title: 'WooriMobile/Form/WOLoginInput',
    component: WOLoginInput,
    parameters: {
        layout: 'centered',
        storySource: {
            source: sourceCode, // ADD SOURCE CODE
        },
    },
    tags: ['autodocs'],
    argTypes: {
        name: {
            control: 'text',
            description: 'Input Name 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: true },
        },
        id: {
            control: 'text',
            description: 'Input Id 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: true },
        },
        label: {
            control: 'text',
            description: 'Input Label 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: true },
        },
        readonly: {
            control: 'boolean',
            description: 'Input readonly 상태입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'boolean', required: false },
        },
        disabled: {
            control: 'boolean',
            description: 'Input disabled 상태입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'boolean', required: false },
        },
        blind: {
            control: 'boolean',
            description: 'label 화면에 보이지 않는 상태입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'boolean', required: false },
        },
        rightText: {
            control: 'text',
            description: 'Input rightText 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: false },
        },
    },
};

export default WOLoginInputStory;

export const Default = {
    args: {
        name: 'input01',
        id: 'input01-01',
        label: '아이디',
        placeholder: '아이디를 입력해 주세요.',
    },
};

export const Error = {
    args: {
        name: 'input01',
        id: 'input01-01',
        label: '아이디',
        placeholder: '아이디를 입력해 주세요.',
        error: true,
    },
};
