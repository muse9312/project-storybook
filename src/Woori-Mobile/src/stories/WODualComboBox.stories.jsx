import WODualComboBox from '../components/common/WODualComboBox';
import WOComboBox from '../components/common/WOComboBox';

import sourceCode from '../components/common/WODualComboBox.jsx?raw';
const WODualComboBoxStory = {
    // 좌측 메뉴 depth
    title: 'WooriMobile/Form/WODualComboBox',
    // 컴포넌트 명
    component: WODualComboBox,
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
    },
};

export default WODualComboBoxStory;

// 죄측 메뉴 컴포넌트 명
export const Combo = () => {
    return (
        <>
            <WODualComboBox>
                <WOComboBox
                    label="label"
                    onChange={() => {}}
                    optionList={[
                        {
                            id: 1,
                            label: 'data1',
                        },
                        {
                            id: 2,
                            label: 'data2',
                        },
                        {
                            id: 3,
                            label: 'data3',
                        },
                    ]}
                />
                <WOComboBox
                    onChange={() => {}}
                    optionList={[
                        {
                            id: 1,
                            label: 'data1',
                        },
                        {
                            id: 2,
                            label: 'data2',
                        },
                        {
                            id: 3,
                            label: 'data3',
                        },
                    ]}
                />
            </WODualComboBox>
        </>
    );
};
