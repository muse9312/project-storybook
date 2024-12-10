import WODataTable from '../components/common/WODataTable';

import sourceCode from '../components/common/WODataTable.jsx?raw';
const WODataTableStory = {
    title: 'WooriMobile/table/WODataTable',
    component: WODataTable,
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
    },
};

export default WODataTableStory;

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
                text: 'text',
            },
        ],
    },
};
