import WOFieldDescription from '../components/common/WOFieldDescription';

import sourceCode from '../components/common/WOFieldDescription.jsx?raw';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const WOFieldDescriptionStory = {
    title: 'WooriMobile/Form/WOFieldDescription',
    component: WOFieldDescription,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
        storySource: {
            source: sourceCode, // ADD SOURCE CODE
        },
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    decorators: [
        (Story) => (
            <div style={{ width: '320px' }}>
                <Story />
            </div>
        ),
    ],
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        itemText: {
            control: 'text',
            description: '설명 텍스트입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'text', required: true },
        },
        counter: {
            control: 'text',
            description: '현재까지 타이핑된 글자수입니다.',
            defaultValue: { summary: '0' },
            type: { summary: 'text', required: false },
        },
        maxCount: {
            control: 'text',
            description: '최대 글자수 입니다.',
            defaultValue: { summary: '0' },
            type: { summary: 'text', required: false },
        },
        success: {
            control: 'boolean',
            description: '성공 여부입니다.',
            defaultValue: { summary: false },
            type: { summary: 'boolean', required: false },
        },
        error: {
            control: 'boolean',
            description: '실패 혹은 에러 여부입니다.',
            defaultValue: { summary: false },
            type: { summary: 'boolean', required: false },
        },
    },
};

export default WOFieldDescriptionStory;

export const Default = {
    args: {
        itemText: '텍스트',
        counter: '10',
        maxCount: '100',
    },
};
