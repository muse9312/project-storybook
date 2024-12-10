import Button from './index';
import sourceCode from './index.jsx?raw';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'BeatFolio/Button/MainButton',
    component: Button,

    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
        storySource: {
            source: sourceCode, // ADD SOURCE CODE
        },
    },
    decorators: [
        (Story) => (
            <div style={{ width: '320px' }}>
                <Story />
            </div>
        ),
    ],
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        theme: {
            control: 'select',
            options: ['white', 'dark'],
            description: 'Button Theme 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: true },
        },
        text: { control: 'text', description: 'Button text 입니다.', defaultValue: { summary: undefined }, type: { summary: 'string', required: true } },
        size: {
            control: 'select',
            options: ['md', undefined],
            description: 'Button size 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: false },
        },
        disabled: {
            control: 'boolean',
            description: 'Button disabled 상태 입니다.',
            defaultValue: { summary: false },
            type: { summary: 'boolean', required: false },
        },
        bg: {
            control: 'select',
            options: ['purple', 'red', undefined],
            description: 'Button bg 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: false },
        },
        type: {
            control: 'select',
            options: ['line', undefined],
            description: 'Button type 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: false },
        },
        num: { control: 'number', description: 'Button num 입니다.', defaultValue: { summary: undefined }, type: { summary: 'number', required: false } },
    },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Light = {
    args: {
        theme: 'white',
        text: '임시 텍스트',
    },
};

export const LightDisabled = {
    args: {
        theme: 'white',
        text: '임시 텍스트',
        disabled: true,
    },
};

export const LightLine = {
    args: {
        theme: 'white',
        text: '임시 텍스트',
        type: 'line',
    },
};
export const LightLineDisabled = {
    args: {
        theme: 'white',
        text: '임시 텍스트',
        disabled: true,
        type: 'line',
    },
};
export const LightPurple = {
    args: {
        theme: 'white',
        text: '임시 텍스트',
        bg: 'purple',
    },
};
export const LightLinePurple = {
    args: {
        theme: 'white',
        text: '임시 텍스트',
        bg: 'purple',
        type: 'line',
    },
};
export const LightLineRed = {
    args: {
        theme: 'white',
        text: '임시 텍스트',
        bg: 'red',
        type: 'line',
    },
};

export const Dark = {
    args: {
        theme: 'dark',
        text: '임시 텍스트',
    },
};

export const DarkDisabled = {
    args: {
        theme: 'dark',
        text: '임시 텍스트',
        disabled: true,
    },
};

export const DarkLine = {
    args: {
        theme: 'dark',
        text: '임시 텍스트',
        type: 'line',
    },
};
export const DarkLineDisabled = {
    args: {
        theme: 'dark',
        text: '임시 텍스트',
        disabled: true,
        type: 'line',
    },
};
export const DarkPurple = {
    args: {
        theme: 'dark',
        text: '임시 텍스트',
        disabled: undefined,
        bg: 'purple',
    },
};

export const DarkWhite = {
    args: {
        theme: 'dark',
        text: '임시 텍스트',
        bg: 'white',
    },
};
