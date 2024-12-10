import CheckBox from './index';

import sourceCode from './index.jsx?raw';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'BeatFolio/CheckBox/CheckBox',
    component: CheckBox,
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
        id: {
            control: 'text',
            description: 'CheckBox Id 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: true },
        },
        label: {
            control: 'text',
            description: 'CheckBox Label 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: true },
        },
        labelVisible: {
            control: 'boolean',
            description: 'CheckBox Label Visible 여부 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'boolean', required: false },
        },
        size: {
            control: 'select',
            options: ['sm', undefined],
            description: 'CheckBox Size 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: false },
        },
        theme: {
            control: 'select',
            options: ['dark', undefined],
            description: 'CheckBox theme 여부 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: false },
        },
        disabled: {
            control: 'boolean',
            description: 'CheckBox disabled 여부 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'boolean', required: false },
        },
        checked: {
            control: 'boolean',
            description: 'CheckBox checked 여부 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'boolean', required: false },
        },
    },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Defualt = {
    args: {
        name: 'id01',
        id: 'id-01',
        label: 'label',
        labelVisible: false,
        size: undefined,
        theme: undefined,
        disabled: false,
        checked: false,
    },
};
export const DefualtChecked = {
    args: {
        name: 'id01',
        id: 'id-02',
        label: 'label',
        labelVisible: false,
        size: undefined,
        theme: undefined,
        disabled: false,
        checked: true,
    },
};
export const DefualtDisabled = {
    args: {
        name: 'id01',
        id: 'id-03',
        label: 'label',
        labelVisible: false,
        size: undefined,
        theme: undefined,
        disabled: true,
    },
};
export const DefualtCheckedDisabled = {
    args: {
        name: 'id01',
        id: 'id-04',
        label: 'label',
        labelVisible: false,
        size: undefined,
        theme: undefined,
        disabled: true,
        checked: true,
    },
};

export const Label = {
    args: {
        name: 'id01',
        id: 'id-05',
        label: 'label',
        labelVisible: true,
        size: undefined,
        theme: undefined,
        disabled: false,
    },
};
export const LabelDisabled = {
    args: {
        name: 'id01',
        id: 'id-06',
        label: 'label',
        labelVisible: true,
        size: undefined,
        theme: undefined,
        disabled: true,
    },
};
export const SizeSm = {
    args: {
        name: 'id01',
        id: 'id-07',
        label: 'label',
        labelVisible: true,
        size: 'sm',
        theme: undefined,
        disabled: false,
    },
};
export const SizeSmChecked = {
    args: {
        name: 'id01',
        id: 'id-08',
        label: 'label',
        labelVisible: true,
        size: 'sm',
        theme: undefined,
        disabled: false,
        checked: true,
    },
};

export const SizeSmDisabled = {
    args: {
        name: 'id01',
        id: 'id-09',
        label: 'label',
        labelVisible: true,
        size: 'sm',
        theme: undefined,
        disabled: true,
    },
};
export const DarkDefualt = {
    args: {
        name: 'id01',
        id: 'id-10',
        label: 'label',
        labelVisible: false,
        size: undefined,
        theme: 'dark',
        disabled: false,
    },
};
export const DarkDefualtChecked = {
    args: {
        name: 'id01',
        id: 'id-11',
        label: 'label',
        labelVisible: false,
        size: undefined,
        theme: 'dark',
        disabled: false,
        checked: true,
    },
};
export const DarkDefualtDisabled = {
    args: {
        name: 'id01',
        id: 'id-12',
        label: 'label',
        labelVisible: false,
        size: undefined,
        theme: 'dark',
        disabled: true,
    },
};

export const DarkDefualtCheckedDisabled = {
    args: {
        name: 'id01',
        id: 'id-13',
        label: 'label',
        labelVisible: false,
        size: undefined,
        theme: 'dark',
        disabled: true,
        checked: true,
    },
};

export const DarkLabel = {
    args: {
        name: 'id01',
        id: 'id-14',
        label: 'label',
        labelVisible: true,
        size: undefined,
        theme: 'dark',
        disabled: false,
    },
};
export const DarkLabelDisabled = {
    args: {
        name: 'id01',
        id: 'id-15',
        label: 'label',
        labelVisible: true,
        size: undefined,
        theme: 'dark',
        disabled: true,
    },
};
export const DarkSizeSm = {
    args: {
        name: 'id01',
        id: 'id-16',
        label: 'label',
        labelVisible: true,
        size: 'sm',
        theme: 'dark',
        disabled: false,
    },
};
export const DarkSizeSmChecked = {
    args: {
        name: 'id01',
        id: 'id-17',
        label: 'label',
        labelVisible: true,
        size: 'sm',
        theme: 'dark',
        disabled: false,
        checked: true,
    },
};

export const DarkSizeSmDisabled = {
    args: {
        name: 'id01',
        id: 'id-18',
        label: 'label',
        labelVisible: true,
        size: 'sm',
        theme: 'dark',
        disabled: true,
    },
};
export const DarkSizeSmDisabledChecked = {
    args: {
        name: 'id01',
        id: 'id-19',
        label: 'label',
        labelVisible: true,
        size: 'sm',
        theme: 'dark',
        disabled: true,
        checked: true,
    },
};
