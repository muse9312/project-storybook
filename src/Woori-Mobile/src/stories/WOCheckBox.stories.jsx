import WOCheckBox from '../components/common/WOCheckBox';

import sourceCode from '../components/common/WOCheckBox.jsx?raw';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const WOCheckBoxStory = {
    title: 'WooriMobile/Form/WOCheckBox',
    component: WOCheckBox,
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
        item: {
            control: 'object',
            description: 'CheckBox Name,id,label 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'object', required: true },
        },
        blind: {
            control: 'boolean',
            description: 'CheckBox Label blind 여부 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'boolean', required: false },
        },
        isChecked: {
            control: 'boolean',
            description: 'CheckBox checked 여부 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'boolean', required: false },
        },
        flex: {
            control: 'select',
            options: ['column', undefined],
            description: 'CheckBox 정렬 방식 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: false },
        },
        titleArea: {
            control: 'boolean',
            description: 'CheckBox SearchArea 내부 사용시 적용 props 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'boolean', required: false },
        },
        round: {
            control: 'boolean',
            description: 'circle 모양의 체크박스입니다.',
            defaultValue: { summary: undefined },
            typeL: { summary: 'boolean', required: false },
        },
    },
};

export default WOCheckBoxStory;

export const Default = {
    args: {
        item: {
            name: 'input01-01',
            id: 'input01-02',
            label: 'Label',
        },
        blind: true,
        disabled: undefined,
        isChecked: undefined,
        flex: undefined,
    },
};

export const Checked = {
    args: {
        item: {
            name: 'input01-01',
            id: 'input01-03',
            label: 'Label',
        },
        blind: true,
        disabled: undefined,
        isChecked: true,
        flex: undefined,
    },
};

export const Label = {
    args: {
        item: {
            name: 'input01-01',
            id: 'input01-07',
            label: 'Label',
        },
    },
};
export const TitleArea = {
    args: {
        item: {
            name: 'input01-01',
            id: 'input01-10',
            label: 'Label',
        },
        titleArea: true,
    },
};

export const Circle = {
    args: {
        item: {
            name: 'input01-01',
            id: 'input01-12',
            label: 'Label',
        },
        round: true,
    },
};
