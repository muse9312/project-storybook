import TagCheckBox from './index';

import sourceCode from './index.jsx?raw';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'BeatFolio/CheckBox/TagCheckBox',
    component: TagCheckBox,
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
            description: 'CheckBox name 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: true },
        },
        id: {
            control: 'text',
            description: 'CheckBox id 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: true },
        },
        label: {
            control: 'text',
            description: 'CheckBox label 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: true },
        },
        checked: {
            control: 'boolean',
            options: ['dark', undefined],
            description: 'CheckBox checked 상태 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'boolean', required: true },
        },
    },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Dark = {
    args: {
        name: 'check-01',
        id: 'check-01-01',
        label: 'Label',
        checked: false,
    },
};
export const DarkCheckced = {
    args: {
        name: 'check-01',
        id: 'check-01-02',
        label: 'Label',
        checked: true,
    },
};
