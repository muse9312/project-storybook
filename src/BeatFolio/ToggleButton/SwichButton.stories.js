import { SwichButton } from './index';

import sourceCode from './index.jsx?raw';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'BeatFolio/Button/SwichButton',
    component: SwichButton,

    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
        storySource: {
            source: sourceCode, // ADD SOURCE CODE
        },
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        initialFollowState: {
            control: 'boolean',
            description: 'Button 초기 상태 입니다.',
            defaultValue: { summary: false },
            type: { summary: 'boolean', required: false },
        },
    },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Swich = {
    args: {
        initialFollowState: false,
    },
};
export const SwichOn = {
    args: {
        initialFollowState: true,
    },
};
