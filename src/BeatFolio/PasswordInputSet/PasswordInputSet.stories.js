import PasswordInputSet from './index';

import sourceCode from './index.jsx?raw';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'BeatFolio/Input/PasswordInputSet',
    component: PasswordInputSet,
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
        case: {
            control: 'text',
            description: 'PasswordInput case 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: true },
        },
    },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Case1 = {
    args: {
        case: '1',
    },
};
export const Case2 = {
    args: {
        case: '2',
    },
};
export const Case3 = {
    args: {
        case: '3',
    },
};
