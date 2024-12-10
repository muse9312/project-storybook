// 컴포넌트 import
import WORadioGroup from '../components/common/WORadioGroup';

import sourceCode from '../components/common/WORadioGroup.jsx?raw';
const WORadioGroupStory = {
    // 좌측 메뉴 depth
    title: 'WooriMobile/Form/WORadioGroup',
    // 컴포넌트 명
    component: WORadioGroup,
    // 스토리북 컴포넌트 뷰 레이아웃
    parameters: {
        layout: 'centered',
        storySource: {
            source: sourceCode, // ADD SOURCE CODE
        },
    },
    decorators: [
        (Story) => (
            <div style={{ width: '320px', display: 'flex', gap: 4 }}>
                <Story />
            </div>
        ),
    ],
    tags: ['autodocs'],
    // props 속성 docs 정리
    argTypes: {
        // props 명
        title: {
            control: 'text',
            description: '타이틀입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'text', required: true },
        },
        radioType: {
            control: 'select',
            description: '일반, 버튼모양을 선택할 수 있습니다.',
            defaultValue: { summary: 'normal' },
            options: ['normal', 'button'],
            type: { summary: 'string', required: true },
        },
        radioItems: {
            control: 'object',
            description: 'id, label(텍스트), name, value, disabled 포함 합니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'object', required: true },
        },
        onChange: {
            control: 'text',
            description: '라디오버튼 onChange 함수입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'function', required: true },
        },
        checkedValue: {
            control: 'object',
            description: '초기값으로 체크가 활성화된 상태입니다.',

            defaultValue: { summary: undefined },
            type: { summary: 'object', required: false },
        },
        readonly: {
            control: 'boolean',
            description: 'readonly 상태입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'boolean', required: false },
        },
        disabled: {
            control: 'boolean',
            description: 'disabled 상태입니다. 그룹안에 있는 버튼타입은 모두 disabled 됩니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'boolean', required: false },
        },
    },
};

export default WORadioGroupStory;

// 죄측 메뉴 컴포넌트 명

export const DefaultButton = {
    args: {
        title: 'label',
        radioType: 'normal',
        defaultCheckedValue: {
            id: 'rdo2',
            label: '라디오버튼2',
            name: 'rdoNormal1',
            value: '라디오버튼2',
        },
        radioItems: [
            {
                id: 'rdo1',
                label: '라디오버튼1',
                name: 'rdoNormal1',
                value: '라디오버튼1',
            },
            {
                id: 'rdo2',
                label: '라디오버튼2',
                name: 'rdoNormal1',
                value: '라디오버튼2',
            },
            {
                id: 'rod3',
                label: '라디오버튼3',
                name: 'rdoNormal1',
                value: '라디오버튼3',
            },
        ],
    },
};
