import { useState } from 'react';
import WOModal from '../components/common/WOModal';
import WOButton from '../components/common/WOButton';

import sourceCode from '../components/common/WOModal.jsx?raw';
const WOModalStory = {
    // 좌측 메뉴 depth
    title: 'WooriMobile/Modal/WOModal',
    // 컴포넌트 명
    component: WOModal,
    // 스토리북 컴포넌트 뷰 레이아웃
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
        bgColor: {
            control: 'text',
            description: 'modal background color 입니다.',
            type: { summary: 'string', required: false },
        },
    },
};

export default WOModalStory;

// 죄측 메뉴 컴포넌트 명
export const Default = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <WOButton variant="secondary" size="lg" onClick={() => setIsOpen(true)}>
                Open
            </WOButton>
            <WOModal isOpen={isOpen} direction="center" title="Title" onClose={() => setIsOpen(false)}>
                <div>모달 콘텐츠</div>
                <div>모달 콘텐츠</div>
                <div>모달 콘텐츠</div>
                <div>모달 콘텐츠</div>
                <div>모달 콘텐츠</div>
            </WOModal>
        </>
    );
};
export const HasButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <WOButton variant="secondary" size="lg" onClick={() => setIsOpen(true)}>
                Open
            </WOButton>
            <WOModal
                isOpen={isOpen}
                direction="center"
                title="Title"
                buttons={
                    <>
                        <WOButton onClick={() => {}} size="lg" variant="primary">
                            버튼
                        </WOButton>
                    </>
                }
                onClose={() => setIsOpen(false)}
            >
                <div>모달 콘텐츠</div>
                <div>모달 콘텐츠</div>
                <div>모달 콘텐츠</div>
                <div>모달 콘텐츠</div>
                <div>모달 콘텐츠</div>
                <div>모달 콘텐츠</div>
            </WOModal>
        </>
    );
};
export const HasButtonGrid = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <WOButton variant="secondary" size="lg" onClick={() => setIsOpen(true)}>
                Open
            </WOButton>
            <WOModal
                isOpen={isOpen}
                direction="center"
                title="Title"
                buttonGrid={'type-01'}
                buttons={
                    <>
                        <WOButton onClick={() => {}} size="lg" variant="secondary">
                            버튼
                        </WOButton>
                        <WOButton onClick={() => {}} size="lg" variant="primary">
                            버튼
                        </WOButton>
                    </>
                }
                onClose={() => setIsOpen(false)}
            >
                <div>모달 콘텐츠</div>
                <div>모달 콘텐츠</div>
                <div>모달 콘텐츠</div>
                <div>모달 콘텐츠</div>
                <div>모달 콘텐츠</div>
                <div>모달 콘텐츠</div>
            </WOModal>
        </>
    );
};
export const Fit = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <WOButton variant="secondary" size="lg" onClick={() => setIsOpen(true)}>
                Open
            </WOButton>
            <WOModal
                isOpen={isOpen}
                direction="center"
                title="Title"
                size="fit"
                buttons={
                    <>
                        <WOButton onClick={() => {}} size="lg" variant="primary">
                            버튼
                        </WOButton>
                    </>
                }
                onClose={() => setIsOpen(false)}
            >
                <div>모달 콘텐츠</div>
                <div>모달 콘텐츠</div>
                <div>모달 콘텐츠</div>
                <div>모달 콘텐츠</div>
                <div>모달 콘텐츠</div>
                <div>모달 콘텐츠</div>
            </WOModal>
        </>
    );
};
export const BgColor = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <WOButton variant="secondary" size="lg" onClick={() => setIsOpen(true)}>
                Open
            </WOButton>
            <WOModal
                bgColor={'gray'}
                isOpen={isOpen}
                direction="center"
                title="Title"
                buttonGrid={'type-01'}
                buttons={
                    <>
                        <WOButton onClick={() => {}} size="lg" variant="secondary">
                            버튼
                        </WOButton>
                        <WOButton onClick={() => {}} size="lg" variant="primary">
                            버튼
                        </WOButton>
                    </>
                }
                onClose={() => setIsOpen(false)}
            >
                <div>모달 콘텐츠</div>
                <div>모달 콘텐츠</div>
                <div>모달 콘텐츠</div>
                <div>모달 콘텐츠</div>
                <div>모달 콘텐츠</div>
                <div>모달 콘텐츠</div>
            </WOModal>
        </>
    );
};
