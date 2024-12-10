import Input from './index';

import sourceCode from './index.jsx?raw';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'BeatFolio/Input/Input',
    component: Input,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'padded',
        storySource: {
            source: sourceCode, // ADD SOURCE CODE
        },
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        name: {
            control: 'text',
            description: 'Input name 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: true },
        },
        id: {
            control: 'text',
            description: 'Input id 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: true },
        },
        placeholder: {
            control: 'text',
            description: 'Input placeholder 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: false },
        },
        value: {
            control: 'text',
            description: 'Input value 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: false },
        },
        bg: {
            control: 'select',
            options: ['white', 'black', 'sky'],
            description: 'Input bg 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: true },
        },
        noneClear: {
            control: 'boolean',
            description: 'Input Clear Button 없애는 props 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'boolean', required: false },
        },
        search: {
            control: 'boolean',
            description: 'Input Search Input 일 경우 border 없는 props 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'boolean', required: false },
        },
        disabled: {
            control: 'boolean',
            description: 'Input disabled 상태 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'boolean', required: false },
        },
        rightText: {
            control: 'text',
            description: 'Input Right Text 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: false },
        },
        time: {
            control: 'text',
            description: 'Input 내부 Timer 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: false },
        },
        error: {
            control: 'boolean',
            description: 'Input error Case 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'boolean', required: false },
        },
        errorMsg: {
            control: 'text',
            description: 'Input error Case 메시지 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: false },
        },
        completeMsg: {
            control: 'text',
            description: 'Input complete 메시지 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: false },
        },
        defaultMsg: {
            control: 'text',
            description: 'Input default 메시지 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: false },
        },
    },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const WhitePlaceholder = {
    args: {
        name: 'input01',
        id: 'input01-01',
        placeholder: 'placeholder',
        value: '',
        bg: 'white',
        noneClear: undefined,
        search: undefined,
        disabled: undefined,
        rightText: undefined,
        time: undefined,
        error: undefined,
        errorMsg: undefined,
        completeMsg: undefined,
        defaultMsg: undefined,
    },
};
export const WhiteValue = {
    args: {
        name: 'input01',
        id: 'input01-01',
        placeholder: 'placeholder',
        value: '임시 텍스트',
        bg: 'white',
        noneClear: undefined,
        search: undefined,
        disabled: undefined,
        rightText: undefined,
        time: undefined,
        error: undefined,
        errorMsg: undefined,
        completeMsg: undefined,
        defaultMsg: undefined,
    },
};
export const WhiteRightText = {
    args: {
        name: 'input01',
        id: 'input01-01',
        placeholder: 'placeholder',
        value: '임시 텍스트',
        bg: 'white',
        noneClear: undefined,
        search: undefined,
        disabled: undefined,
        rightText: '명',
        time: undefined,
        error: undefined,
        errorMsg: undefined,
        completeMsg: undefined,
        defaultMsg: undefined,
    },
};

export const WhiteDisabled = {
    args: {
        name: 'input01',
        id: 'input01-01',
        placeholder: 'placeholder',
        value: '임시 텍스트',
        bg: 'white',
        noneClear: undefined,
        search: undefined,
        disabled: true,
        rightText: undefined,
        time: undefined,
        error: undefined,
        errorMsg: undefined,
        completeMsg: undefined,
        defaultMsg: undefined,
    },
};

export const WhiteSearch = {
    args: {
        name: 'input01',
        id: 'input01-01',
        placeholder: 'placeholder',
        value: '임시 텍스트',
        bg: 'white',
        noneClear: undefined,
        search: true,
        disabled: undefined,
        rightText: undefined,
        time: undefined,
        error: undefined,
        errorMsg: undefined,
        completeMsg: undefined,
        defaultMsg: undefined,
    },
};
export const WhiteTime = {
    args: {
        name: 'input01',
        id: 'input01-01',
        placeholder: 'placeholder',
        value: '임시 텍스트',
        bg: 'white',
        noneClear: undefined,
        search: undefined,
        disabled: undefined,
        rightText: undefined,
        time: '04:02',
        error: undefined,
        errorMsg: undefined,
        completeMsg: undefined,
        defaultMsg: undefined,
    },
};
export const WhiteNoneClear = {
    args: {
        name: 'input01',
        id: 'input01-01',
        placeholder: 'placeholder',
        value: '임시 텍스트',
        bg: 'white',
        noneClear: true,
        search: undefined,
        disabled: undefined,
        rightText: undefined,
        time: undefined,
        error: undefined,
        errorMsg: undefined,
        completeMsg: undefined,
        defaultMsg: undefined,
    },
};
export const WhiteError = {
    args: {
        name: 'input01',
        id: 'input01-01',
        placeholder: 'placeholder',
        value: '임시 텍스트',
        bg: 'white',
        noneClear: undefined,
        search: undefined,
        disabled: undefined,
        rightText: undefined,
        time: undefined,
        error: true,
        errorMsg: undefined,
        completeMsg: undefined,
        defaultMsg: undefined,
    },
};
export const WhiteErrorMsg = {
    args: {
        name: 'input01',
        id: 'input01-01',
        placeholder: 'placeholder',
        value: '임시 텍스트',
        bg: 'white',
        noneClear: undefined,
        search: undefined,
        disabled: undefined,
        rightText: undefined,
        time: undefined,
        error: true,
        errorMsg: '에러 메시지',
        completeMsg: undefined,
        defaultMsg: undefined,
    },
};
export const WhiteCompleteMsg = {
    args: {
        name: 'input01',
        id: 'input01-01',
        placeholder: 'placeholder',
        value: '임시 텍스트',
        bg: 'white',
        noneClear: undefined,
        search: undefined,
        disabled: undefined,
        rightText: undefined,
        time: undefined,
        error: undefined,
        errorMsg: undefined,
        completeMsg: '완료 메시지',
        defaultMsg: undefined,
    },
};
export const WhiteDefaultMsg = {
    args: {
        name: 'input01',
        id: 'input01-01',
        placeholder: 'placeholder',
        value: '임시 텍스트',
        bg: 'white',
        noneClear: undefined,
        search: undefined,
        disabled: undefined,
        rightText: undefined,
        time: undefined,
        error: undefined,
        errorMsg: undefined,
        completeMsg: undefined,
        defaultMsg: '기본 메시지',
    },
};

export const BlackPlaceholder = {
    args: {
        name: 'input01',
        id: 'input01-01',
        placeholder: 'placeholder',
        value: '',
        bg: 'black',
        noneClear: undefined,
        search: undefined,
        disabled: undefined,
        rightText: undefined,
        time: undefined,
        error: undefined,
        errorMsg: undefined,
        completeMsg: undefined,
        defaultMsg: undefined,
    },
};
export const BlackValue = {
    args: {
        name: 'input01',
        id: 'input01-01',
        placeholder: 'placeholder',
        value: '임시 텍스트',
        bg: 'black',
        noneClear: undefined,
        search: undefined,
        disabled: undefined,
        rightText: undefined,
        time: undefined,
        error: undefined,
        errorMsg: undefined,
        completeMsg: undefined,
        defaultMsg: undefined,
    },
};
export const BlackText = {
    args: {
        name: 'input01',
        id: 'input01-01',
        placeholder: 'placeholder',
        value: '임시 텍스트',
        bg: 'black',
        noneClear: undefined,
        search: undefined,
        disabled: undefined,
        rightText: '명',
        time: undefined,
        error: undefined,
        errorMsg: undefined,
        completeMsg: undefined,
        defaultMsg: undefined,
    },
};

export const BlackDisabled = {
    args: {
        name: 'input01',
        id: 'input01-01',
        placeholder: 'placeholder',
        value: '임시 텍스트',
        bg: 'black',
        noneClear: undefined,
        search: undefined,
        disabled: true,
        rightText: undefined,
        time: undefined,
        error: undefined,
        errorMsg: undefined,
        completeMsg: undefined,
        defaultMsg: undefined,
    },
};
export const SkyPlaceholder = {
    args: {
        name: 'input01',
        id: 'input01-01',
        placeholder: 'placeholder',
        value: '',
        bg: 'sky',
        noneClear: undefined,
        search: undefined,
        disabled: undefined,
        rightText: undefined,
        time: undefined,
        error: undefined,
        errorMsg: undefined,
        completeMsg: undefined,
        defaultMsg: undefined,
    },
};
export const SkyValue = {
    args: {
        name: 'input01',
        id: 'input01-01',
        placeholder: 'placeholder',
        value: '임시 텍스트',
        bg: 'sky',
        noneClear: undefined,
        search: undefined,
        disabled: undefined,
        rightText: undefined,
        time: undefined,
        error: undefined,
        errorMsg: undefined,
        completeMsg: undefined,
        defaultMsg: undefined,
    },
};
export const SkyText = {
    args: {
        name: 'input01',
        id: 'input01-01',
        placeholder: 'placeholder',
        value: '임시 텍스트',
        bg: 'sky',
        noneClear: undefined,
        search: undefined,
        disabled: undefined,
        rightText: '명',
        time: undefined,
        error: undefined,
        errorMsg: undefined,
        completeMsg: undefined,
        defaultMsg: undefined,
    },
};

export const SkyDisabled = {
    args: {
        name: 'input01',
        id: 'input01-01',
        placeholder: 'placeholder',
        value: '임시 텍스트',
        bg: 'sky',
        noneClear: undefined,
        search: undefined,
        disabled: true,
        rightText: undefined,
        time: undefined,
        error: undefined,
        errorMsg: undefined,
        completeMsg: undefined,
        defaultMsg: undefined,
    },
};
