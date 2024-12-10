import WOFilterSearchButton from '../components/common/WOFilterSearchButton';

import sourceCode from '../components/common/WOFilterSearchButton.jsx?raw';
const WOFilterSearchButtonStory = {
    title: 'WooriMobile/button/WOFilterSearchButton',
    component: WOFilterSearchButton,
    parameters: {
        layout: 'centered',
        storySource: {
            source: sourceCode, // ADD SOURCE CODE
        },
    },
    decorators: [
        (Story) => (
            <div style={{ width: '360px' }}>
                <Story />
            </div>
        ),
    ],
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: 'text',
            description: 'WOFilterSearchButton title 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: true },
        },
        selectValue: {
            control: 'text',
            description: 'WOFilterSearchButton selectValue 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: true },
        },
        type: {
            control: 'text',
            description: 'WOFilterSearchButton type 입니다.',
            defaultValue: { summary: 'type-01' },
            type: { summary: 'string', required: false },
        },
        onClick: {
            control: 'text',
            description: '버튼 클릭 메소드 입니다.',
            action: 'onClick',
            type: { summary: 'function', required: true },
        },
    },
};

export default WOFilterSearchButtonStory;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default = {
    args: {
        title: 'title',
        selectValue: 'value',
    },
};

export const SinglePopup = {
    args: {
        title: 'title',
        selectValue: 'value',
        type: 'type-02',
    },
};
