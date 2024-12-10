import WOComboBox from '../components/common/WOComboBox';
import GridSystem from '../components/layout/GridSystem';

import sourceCode from '../components/layout/GridSystem.jsx?raw';
const GridSystemStory = {
    // 좌측 메뉴 depth
    title: 'WooriMobile/Layout/GridSystem',
    // 컴포넌트 명
    component: GridSystem,
    // 스토리북 컴포넌트 뷰 레이아웃
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
    // props 속성 docs 정리
    argTypes: {
        // props 명
        gridType: {
            control: 'select',
            options: ['form', 'normal'],
            description: '그리드 형태입니다. (form, normal)',
            defaultValue: { summary: 'normal' },
            type: { summary: 'string', required: true },
        },
        gridRowGap: {
            control: 'text',
            description: '간격입니다.',
            defaultValue: { summary: '40' },
            type: { summary: 'text', required: false },
        },
    },
};

export default GridSystemStory;

// 죄측 메뉴 컴포넌트 명
export const Default = () => {
    return (
        <>
            <GridSystem gridType="form">
                <WOComboBox
                    isAutoComplete={true}
                    label="기관구분"
                    onChange={() => {}}
                    defaultValue={{
                        id: 1,
                        label: '서울시청',
                    }}
                    optionList={[
                        {
                            id: 1,
                            label: '서울시청',
                        },
                        {
                            id: 2,
                            label: '시청01',
                        },
                        {
                            id: 3,
                            label: '시청02',
                        },
                    ]}
                />
                <WOComboBox
                    isAutoComplete={true}
                    label="기관명"
                    onChange={() => {}}
                    optionList={[
                        {
                            id: 1,
                            label: '서울시청',
                        },
                        {
                            id: 2,
                            label: '시청01',
                        },
                        {
                            id: 3,
                            label: '시청02',
                        },
                    ]}
                />

                <WOComboBox
                    isAutoComplete={true}
                    label="부서명"
                    onChange={() => {}}
                    disabled
                    defaultValue={{
                        id: 1,
                        label: '전체',
                    }}
                    optionList={[
                        {
                            id: 1,
                            label: '전체',
                        },
                        {
                            id: 2,
                            label: '부서1',
                        },
                        {
                            id: 3,
                            label: '부서2',
                        },
                    ]}
                />
            </GridSystem>
        </>
    );
};
export const RowGap = () => {
    return (
        <>
            <GridSystem gridType="form" gridRowGap="20">
                <WOComboBox
                    isAutoComplete={true}
                    label="기관구분"
                    onChange={() => {}}
                    defaultValue={{
                        id: 1,
                        label: '서울시청',
                    }}
                    optionList={[
                        {
                            id: 1,
                            label: '서울시청',
                        },
                        {
                            id: 2,
                            label: '시청01',
                        },
                        {
                            id: 3,
                            label: '시청02',
                        },
                    ]}
                />
                <WOComboBox
                    isAutoComplete={true}
                    label="기관명"
                    onChange={() => {}}
                    optionList={[
                        {
                            id: 1,
                            label: '서울시청',
                        },
                        {
                            id: 2,
                            label: '시청01',
                        },
                        {
                            id: 3,
                            label: '시청02',
                        },
                    ]}
                />

                <WOComboBox
                    isAutoComplete={true}
                    label="부서명"
                    onChange={() => {}}
                    disabled
                    defaultValue={{
                        id: 1,
                        label: '전체',
                    }}
                    optionList={[
                        {
                            id: 1,
                            label: '전체',
                        },
                        {
                            id: 2,
                            label: '부서1',
                        },
                        {
                            id: 3,
                            label: '부서2',
                        },
                    ]}
                />
            </GridSystem>
        </>
    );
};
