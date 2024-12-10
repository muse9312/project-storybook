import { useState } from 'react';
import WODialog from '../components/common/WODialog';
import WOButton from '../components/common/WOButton';
import WORadioGroup from '../components/common/WORadioGroup';

import sourceCode from '../components/common/WODialog.jsx?raw';
const WOModalStory = {
    // 좌측 메뉴 depth
    title: 'WooriMobile/Modal/WODialog',
    // 컴포넌트 명
    component: WODialog,
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
        buttonGrid: {
            control: 'text',
            description: 'modal buttonGrid 입니다.',
            action: 'onClick',
            type: { summary: 'string', required: false },
        },
        bgColor: {
            control: 'text',
            description: 'modal bgColor 입니다.',
            action: 'onClick',
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
            <WODialog title="Title" isOpen={isOpen} onClose={() => setIsOpen(false)}>
                asdasdasd
            </WODialog>
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
            <WODialog
                title="Title"
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                buttons={
                    <>
                        <WOButton onClick={() => {}} size="lg" variant="primary">
                            버튼
                        </WOButton>
                    </>
                }
            >
                asdasdasd
            </WODialog>
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
            <WODialog
                title="Title"
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                buttonGrid="type-01"
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
            >
                asdasdasd
            </WODialog>
        </>
    );
};
export const Gradient = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <WOButton variant="secondary" size="lg" onClick={() => setIsOpen(true)}>
                Open
            </WOButton>
            <WODialog
                title="선택된 업무"
                bgColor="gradient"
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                buttons={
                    <>
                        <WOButton onClick={() => {}} size="lg" variant="primary">
                            조회추가
                        </WOButton>
                    </>
                }
            >
                asdasdasd
            </WODialog>
        </>
    );
};
export const Center = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <WOButton variant="secondary" size="lg" onClick={() => setIsOpen(true)}>
                Open
            </WOButton>
            <WODialog
                title="보고서 결재"
                center={true}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                buttons={
                    <>
                        <WOButton onClick={() => {}} size="md" variant="primary-sub">
                            저장
                        </WOButton>
                    </>
                }
            >
                <WORadioGroup
                    radioType="button"
                    size="lg"
                    defaultCheckedValue={{
                        id: 'rdo1-1',
                        label: '반려',
                        name: 'rdo1',
                        value: '반려',
                    }}
                    radioItems={[
                        {
                            id: 'rdo1-1',
                            label: '반려',
                            name: 'rdo1',
                            value: '반려',
                        },
                        {
                            id: 'rdo1-2',
                            label: '승인',
                            name: 'rdo1',
                            value: '승인',
                        },
                    ]}
                />
            </WODialog>
        </>
    );
};
