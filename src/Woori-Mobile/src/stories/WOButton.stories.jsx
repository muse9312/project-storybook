import WOButton from '../components/common/WOButton';
import WOIcon from '../components/common/WOIcon';

import sourceCode from '../components/common/WOButton.jsx?raw';
const WOButtonStory = {
    // 좌측 메뉴 depth
    title: 'WooriMobile/Button/WOButton',
    // 컴포넌트 명
    component: WOButton,
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
        variant: {
            // 스토리북 control 방식
            control: 'select',
            options: ['primary', 'primary-sub', 'secondary', 'outlined'],
            // 설명
            description: '버튼 스타일타입 입니다.',
            // 초기값
            defaultValue: { summary: 'primary' },
            // 타입, 필수 인지 정의
            type: { summary: 'string', required: false },
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: '사이즈 입니다.',
            defaultValue: { summary: 'lg' },
            type: { summary: 'string', required: false },
        },
        icon: {
            control: null,
            description: '버튼 자식요소 앞에 배치될 아이콘 입니다',
            defaultValue: { summary: undefined },
        },
        children: {
            description: '버튼 자식요소에 배치될 요소 입니다',
        },
        disabled: {
            control: 'boolean',
            description: '버튼 disabled 여부입니다.',
            defaultValue: { summary: false },
            type: { summary: 'boolean', required: false },
        },
        onClick: {
            control: 'text',
            description: '버튼 클릭 메소드 입니다.',
            action: 'onClick',
            type: { summary: 'function', required: false },
        },
    },
};

export default WOButtonStory;

// 죄측 메뉴 컴포넌트 명
export const PrimarySm = {
    // 컴포넌트에 넘겨줄 props 정리
    args: {
        // props명 : 넘겨줄 props 값-
        variant: 'primary',
        size: 'sm',
        children: '버튼',
    },
};
export const PrimaryMd = {
    // 컴포넌트에 넘겨줄 props 정리
    args: {
        // props명 : 넘겨줄 props 값-
        variant: 'primary',
        size: 'md',
        children: '버튼',
    },
};
export const PrimaryLg = {
    // 컴포넌트에 넘겨줄 props 정리
    args: {
        // props명 : 넘겨줄 props 값-
        variant: 'primary',
        size: 'lg',
        children: '버튼',
    },
};
export const PrimaryDisabled = {
    // 컴포넌트에 넘겨줄 props 정리
    args: {
        // props명 : 넘겨줄 props 값-
        variant: 'primary',
        size: 'lg',
        children: '버튼',
        disabled: true,
    },
};
export const PrimarySubSm = {
    // 컴포넌트에 넘겨줄 props 정리
    args: {
        // props명 : 넘겨줄 props 값-
        variant: 'primary-sub',
        size: 'sm',
        children: '버튼',
    },
};
export const PrimarySubMd = {
    // 컴포넌트에 넘겨줄 props 정리
    args: {
        // props명 : 넘겨줄 props 값-
        variant: 'primary-sub',
        size: 'md',
        children: '버튼',
    },
};
export const PrimarySubLg = {
    // 컴포넌트에 넘겨줄 props 정리
    args: {
        // props명 : 넘겨줄 props 값-
        variant: 'primary-sub',
        size: 'lg',
        children: '버튼',
    },
};
export const PrimarySubDisabled = {
    // 컴포넌트에 넘겨줄 props 정리
    args: {
        // props명 : 넘겨줄 props 값-
        variant: 'primary-sub',
        size: 'lg',
        children: '버튼',
        disabled: true,
    },
};

export const SecondarySm = {
    // 컴포넌트에 넘겨줄 props 정리
    args: {
        // props명 : 넘겨줄 props 값-
        variant: 'secondary',
        size: 'sm',
        children: '버튼',
    },
};
export const SecondaryMd = {
    // 컴포넌트에 넘겨줄 props 정리
    args: {
        // props명 : 넘겨줄 props 값-
        variant: 'secondary',
        size: 'md',
        children: '버튼',
    },
};
export const SecondaryLg = {
    // 컴포넌트에 넘겨줄 props 정리
    args: {
        // props명 : 넘겨줄 props 값-
        variant: 'secondary',
        size: 'lg',
        children: '버튼',
    },
};
export const SecondaryDisabled = {
    // 컴포넌트에 넘겨줄 props 정리
    args: {
        // props명 : 넘겨줄 props 값-
        variant: 'secondary',
        size: 'lg',
        children: '버튼',
        disabled: true,
    },
};

export const OutlineSm = {
    // 컴포넌트에 넘겨줄 props 정리
    args: {
        // props명 : 넘겨줄 props 값-
        variant: 'outline',
        size: 'sm',
        children: '버튼',
    },
};
export const OutlineMd = {
    // 컴포넌트에 넘겨줄 props 정리
    args: {
        // props명 : 넘겨줄 props 값-
        variant: 'outline',
        size: 'md',
        children: '버튼',
    },
};
export const OutlineLg = {
    // 컴포넌트에 넘겨줄 props 정리
    args: {
        // props명 : 넘겨줄 props 값-
        variant: 'outline',
        size: 'lg',
        children: '버튼',
    },
};
export const OutlineDisabled = {
    // 컴포넌트에 넘겨줄 props 정리
    args: {
        // props명 : 넘겨줄 props 값-
        variant: 'outline',
        size: 'lg',
        children: '버튼',
        disabled: true,
    },
};

export const OutlineSub01 = {
    // 컴포넌트에 넘겨줄 props 정리
    args: {
        // props명 : 넘겨줄 props 값-
        variant: 'outline-sub01',
        size: 'sm',
        children: '버튼',
    },
};

export const OutlineSub02 = {
    // 컴포넌트에 넘겨줄 props 정리
    args: {
        // props명 : 넘겨줄 props 값-
        variant: 'outline-sub02',
        children: '버튼',
    },
};
export const TextIcon = {
    // 컴포넌트에 넘겨줄 props 정리
    args: {
        // props명 : 넘겨줄 props 값-
        variant: 'text-icon',
        icon: <WOIcon icon="plus-blue-14"></WOIcon>,
        children: '버튼',
    },
};
