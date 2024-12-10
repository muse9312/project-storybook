import WODualInput from '../components/common/WODualInput';

import sourceCode from '../components/common/WODualInput.jsx?raw';
const WODualInputStory = {
    title: 'WooriMobile/Form/WODualInput',
    component: WODualInput,
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
            type: { summary: 'string', required: false },
        },
        placeholder: {
            control: 'text',
            description: 'Input placeholder 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: false },
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
        value: {
            control: 'array',
            description: 'Input value 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'array', required: false },
        },
        error: {
            control: 'boolean',
            description: 'error 여부 입니다.',
        },
    },
};

export default WODualInputStory;

export const Default = {
    args: {
        name: 'input01',
        id: 'input01-01',
        label: 'label',
        placeholder: 'text',
    },
};

export const Blind = {
    args: {
        name: 'input04',
        id: 'input04-04',
        label: 'label',
        blind: true,
        placeholder: 'text',
    },
};

export const Disabled = {
    args: {
        name: 'input06',
        id: 'input06-06',
        label: 'label',
        blind: false,
        placeholder: 'text',
        disabled: true,
        value: ['123', '123123'],
    },
};

export const ReadOnly = {
    args: {
        name: 'input06',
        id: 'input06-06',
        blind: false,
        placeholder: 'text',
        value: ['123', '123123'],
        readonly: true,
    },
};

export const Error = {
    args: {
        name: 'input06',
        id: 'input06-06',
        placeholder: 'text',
        error: true,
    },
};
