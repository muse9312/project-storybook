import { FollowButton } from './index';

import sourceCode from './index.jsx?raw';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'BeatFolio/Button/FollowButton',
    component: FollowButton,

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
        theme: {
            control: 'select',
            options: ['white', 'dark'],
            description: 'Button theme 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: true },
        },
        type: {
            control: 'select',
            options: ['noneBorder', undefined],
            description: 'Button type 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: false },
        },
        initialFollowState: {
            control: 'boolean',
            description: 'Button 초기 상태 입니다.',
            defaultValue: { summary: false },
            type: { summary: 'boolean', required: false },
        },
    },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const LightFollow = {
    args: {
        theme: 'white',
        type: undefined,
        initialFollowState: false,
    },
};

export const LightFollowOn = {
    args: {
        theme: 'white',
        type: undefined,
        initialFollowState: true,
    },
};
export const DarkFollow = {
    args: {
        theme: 'dark',
        type: undefined,
        initialFollowState: false,
    },
};

export const DarkFollowOn = {
    args: {
        theme: 'dark',
        type: undefined,
        initialFollowState: true,
    },
};
export const DarkFollowType2 = {
    args: {
        theme: 'dark',
        type: 'noneBorder',
        initialFollowState: false,
    },
};
export const DarkFollowType2On = {
    args: {
        theme: 'dark',
        type: 'noneBorder',
        initialFollowState: true,
    },
};
