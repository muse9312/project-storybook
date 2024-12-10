import SelectButton from './index';

import sourceCode from './index.jsx?raw';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'BeatFolio/Button/SelectButton',
    component: SelectButton,
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
        text: { control: 'text', description: 'Button Text 입니다.', defaultValue: { summary: undefined }, type: { summary: 'string', required: true } },
        theme: {
            control: 'select',
            options: ['dark', 'grey', undefined],
            description: 'Button Theme 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: true },
        },
    },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const WhiteSelect = {
    args: {
        text: '임시 텍스트',
        theme: undefined,
    },
};

export const DarkSelect = {
    args: {
        text: '임시 텍스트',
        theme: 'dark',
    },
};
export const GreySelect = {
    args: {
        text: '임시 텍스트',
        theme: 'grey',
    },
};
