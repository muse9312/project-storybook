import WOSearchInput from '../components/common/WOSearchInput';

import sourceCode from '../components/common/WOSearchInput.jsx?raw';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const WOSearchInputStory = {
    title: 'WooriMobile/Form/WOSearchInput',
    component: WOSearchInput,
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
        tableData: {
            control: 'object',
            description: 'tableData 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'object', required: true },
        },
        placeholder: {
            control: 'object',
            description: 'placeholder 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'object', required: true },
        },
        onchange: {
            control: 'object',
            description: '메뉴 선택시 실행되는 메소드로 선택된 value를 넘겨줍니다',
            defaultValue: { summary: undefined },
            type: { summary: 'object', required: true },
        },
    },
};

export default WOSearchInputStory;

export const Default = {
    args: {
        placeholder: '업무 키워드를 검색하세요.',
        tableData: [{ title: '세입계좌현황' }, { title: '세입거래내역장' }, { title: 'Woori_Mobile/세입거래명세' }],
    },
};
