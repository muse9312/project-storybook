import SocialRegisterButton from './index';

import sourceCode from './index.jsx?raw';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'BeatFolio/Button/SocialRegisterButton',
    component: SocialRegisterButton,

    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'padded',
        storySource: {
            source: sourceCode, // ADD SOURCE CODE
        },
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        social: {
            control: 'select',
            options: ['kakao', 'naver', 'facebook', 'email'],
            description: 'Button Social Type 입니다.',
            defaultValue: { summary: undefined },
            type: { summary: 'string', required: true },
        },
    },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const KakaoRegister = {
    args: {
        social: 'kakao',
    },
};
export const NaverRegister = {
    args: {
        social: 'naver',
    },
};
export const FacebookRegister = {
    args: {
        social: 'facebook',
    },
};
export const EmailRegister = {
    args: {
        social: 'email',
    },
};
