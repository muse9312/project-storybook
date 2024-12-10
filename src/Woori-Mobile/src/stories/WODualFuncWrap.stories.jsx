import WODualFuncWrap from '../components/common/WODualFuncWrap';
import WOComboBox from '../components/common/WOComboBox';
import WOCheckBox from '../components/common/WOCheckBox';
import WODatePicker from '../components/common/WODatePicker';
import WODateRangePicker from '../components/common/WODateRangePicker';
import WOLabel from './../components/common/WOLabel';

import sourceCode from '../components/common/WODualFuncWrap.jsx?raw';
const WODualFuncWrapStory = {
    // 좌측 메뉴 depth
    title: 'WooriMobile/Form/WODualFuncWrap',
    // 컴포넌트 명
    component: WODualFuncWrap,
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

export default WODualFuncWrapStory;

// 죄측 메뉴 컴포넌트 명
export const Combo = () => {
    return (
        <>
            <WODualFuncWrap>
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
            </WODualFuncWrap>
        </>
    );
};

export const Date = () => {
    return (
        <>
            <WODualFuncWrap>
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
                <WODatePicker label="label" onChange={() => {}} />
            </WODualFuncWrap>
        </>
    );
};
// for circle checkbox
export const checkboxWithRangeDatePicker = () => {
    return (
        <>
            <WODualFuncWrap firstElementAuto>
                <WOCheckBox
                    round
                    blind
                    item={{
                        id: 'chk01',
                        name: 'chk01',
                    }}
                />
                <WODateRangePicker onChange={() => {}} />
            </WODualFuncWrap>
        </>
    );
};

// WOLabel를 포함할경우 includeLabel true
export const LabelWithCheckboxAndRangeDatePicker = () => {
    return (
        <>
            <WODualFuncWrap firstElementAuto includeLabel>
                <WOLabel label="label" />
                <WOCheckBox
                    round
                    blind
                    item={{
                        id: 'chk01',
                        name: 'chk01',
                    }}
                />
                <WODateRangePicker onChange={() => {}} />
            </WODualFuncWrap>
        </>
    );
};
