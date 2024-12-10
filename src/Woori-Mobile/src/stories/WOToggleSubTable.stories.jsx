import WOToggleSubTable from '../components/common/WOToggleSubTable';

import sourceCode from '../components/common/WOToggleSubTable.jsx?raw';
const WOToggleSubTableStory = {
    title: 'WooriMobile/table/WOToggleSubTable',
    component: WOToggleSubTable,
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
        tableData: {
            control: 'array',
            description: 'Table tableData 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'array', required: true },
        },
        type: {
            control: 'array',
            description: 'title type 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'array', required: true },
        },
        title: {
            control: 'text',
            description: 'table title 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: true },
        },
    },
};

export default WOToggleSubTableStory;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default = {
    args: {
        title: 'Title',
        tableData: [
            {
                id: '1',
                title: 'Title',
                text: 'text',
            },
            {
                id: '2',
                title: 'Title',
                text: 'text',
            },
            {
                id: '3',
                title: 'Title',
                text: 'text',
            },
            {
                id: '4',
                title: 'Title',
                text: 'text',
            },
            {
                id: '5',
                title: 'Total',
                text: 'text',
                totalData: true,
            },
        ],
    },
};

export const Type = {
    args: {
        type: 'type01',
        title: 'Title',
        tableData: [
            {
                id: '1',
                title: 'Title',
                text: 'text',
            },
            {
                id: '2',
                title: 'Title',
                text: 'text',
            },
            {
                id: '3',
                title: 'Title',
                text: 'text',
            },
            {
                id: '4',
                title: 'Title',
                text: 'text',
            },
            {
                id: '5',
                title: 'Total',
                text: 'text',
                totalData: true,
            },
        ],
    },
};
