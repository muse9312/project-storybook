import WOToggleTable from '../components/common/WOToggleTable';

import sourceCode from '../components/common/WOToggleTable.jsx?raw';
const WOToggleTableStory = {
    title: 'WooriMobile/table/WOToggleTable',
    component: WOToggleTable,
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
            description: 'Table title 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: true },
        },
        tableData: {
            control: 'array',
            description: 'Table tableData 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'array', required: true },
        },
    },
};

export default WOToggleTableStory;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default = {
    args: {
        title: 'Title',
        tableData: [
            {
                id: '1',
                title: 'Title',
                state: 'approval',
                name: 'text',
                date: 'text',
            },
            {
                id: '2',
                title: 'Title',
                state: 'approval',
                name: 'text',
                date: 'text',
            },
            {
                id: '3',
                title: 'Title',
                state: 'approval',
                name: 'text',
                date: 'text',
            },
            {
                id: '4',
                title: 'Title',
                state: 'return',
                name: 'text',
                date: 'text',
            },
        ],
    },
};
