import WOSubTable from '../components/common/WOSubTable';

import sourceCode from '../components/common/WOSubTable.jsx?raw';
const WOSubTableStory = {
    title: 'WooriMobile/table/WOSubTable',
    component: WOSubTable,
    parameters: {
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
    tags: ['autodocs'],
    argTypes: {
        tableData: {
            control: 'array',
            description: 'Table tableData 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'array', required: true },
        },
        type: {
            control: 'text',
            description: 'Table type 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: true },
        },
        title: {
            control: 'text',
            description: 'Table type-01 일시 title 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: true },
        },
    },
};

export default WOSubTableStory;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default = {
    args: {
        tableData: [
            {
                id: '1',
                title: 'Label',
                text: 'text',
            },
            {
                id: '2',
                title: 'Label',
                text: 'text',
            },
            {
                id: '3',
                title: 'Label',
                text: 'text',
            },
            {
                id: '4',
                title: 'Label',
                text: '0000',
                isNum: true,
            },
        ],
    },
};
export const Type01 = {
    args: {
        tableData: [
            {
                id: '1',
                title: 'Label',
                text: 'text',
            },
            {
                id: '2',
                title: 'Label',
                text: 'text',
            },
            {
                id: '3',
                title: 'Label',
                text: 'text',
            },
            {
                id: '4',
                title: 'Label',
                text: '0000',
            },
        ],
        type: 'type-01',
    },
};
export const Type01Title = {
    args: {
        tableData: [
            {
                id: '1',
                title: 'Label',
                text: 'text',
            },
            {
                id: '2',
                title: 'Label',
                text: 'text',
            },
            {
                id: '3',
                title: 'Label',
                text: 'text',
            },
            {
                id: '4',
                title: 'Label',
                text: '0000',
            },
        ],
        type: 'type-01',
        title: 'title',
    },
};
export const Type01Total = {
    args: {
        tableData: [
            {
                id: '1',
                title: 'Label',
                text: 'text',
            },
            {
                id: '2',
                title: 'Label',
                text: 'text',
            },
            {
                id: '3',
                title: 'Label',
                text: 'text',
            },
            {
                id: '4',
                title: 'Label',
                text: '0000',
            },
        ],
        type: 'type-01',
        title: 'title',
        totalData: true,
    },
};
export const Type02 = {
    args: {
        tableData: [
            {
                id: '1',
                title: 'Label',
                text: 'text',
            },
            {
                id: '2',
                title: 'Label',
                text: 'text',
            },
            {
                id: '3',
                title: 'Label',
                text: 'text',
            },
            {
                id: '4',
                title: 'Label',
                text: '0000',
            },
        ],
        type: 'type-02',
    },
};
