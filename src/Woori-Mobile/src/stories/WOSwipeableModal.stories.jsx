import WOSwipeableModal from '../components/common/WOSwipeableModal';
import sourceCode from '../components/common/WOSwipeableModal.jsx?raw';
const WOSwipeableModalStory = {
    // 좌측 메뉴 depth
    title: 'WooriMobile/Modal/WOSwipeableModal',
    // 컴포넌트 명
    component: WOSwipeableModal,
    // 스토리북 컴포넌트 뷰 레이아웃
    decorators: [
        (Story) => (
            <div style={{ width: '360px', height: '700px', backgroundColor: '#fff' }}>
                <Story />
            </div>
        ),
    ],
    parameters: {
        layout: 'centered',
        storySource: {
            source: sourceCode, // ADD SOURCE CODE
        },
    },
    tags: ['autodocs'],
    // props 속성 docs 정리
    argTypes: {
        // props 명
        isOpen: {
            // 스토리북 control 방식
            control: 'boolean',
            // 설명
            description: 'modal 오픈상태 입니다.',
            // 초기값
            defaultValue: { summary: false },
            // 타입, 필수 인지 정의
            type: { summary: 'boolean', required: true },
        },

        title: {
            control: 'text',
            description: 'modal 타이틀명 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: true },
        },
        buttons: {
            description: 'modal footer 버튼 입니다. 컴포넌트를 전달하면 됩니다.',
        },
        children: {
            description: 'modal 콘텐츠 및 버튼영역 입니다.',
        },
        onClose: {
            control: 'text',
            description: 'modal 닫힐때 실행되는 메소드 입니다.',
            action: 'onClick',
            type: { summary: 'function', required: false },
        },
        size: {
            control: 'select',
            description: 'modal 사이즈 입니다.',
            options: ['fit', undefined],
            defaultValue: { summary: 'sm' },
            type: { summary: 'string', required: false },
        },
        buttonGrid: {
            control: 'text',
            description: 'modal buttonGrid 입니다.',
            action: 'onClick',
            type: { summary: 'string', required: false },
        },
    },
};

export default WOSwipeableModalStory;

// 죄측 메뉴 컴포넌트 명
export const Default = () => {
    return (
        <>
            <WOSwipeableModal></WOSwipeableModal>
        </>
    );
};
