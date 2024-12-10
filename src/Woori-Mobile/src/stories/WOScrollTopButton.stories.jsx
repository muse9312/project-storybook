import WOScrollTopButton from '../components/common/WOScrollTopButton';

import sourceCode from '../components/common/WOScrollTopButton.jsx?raw';
/**

``
 **/
const WOScrollTopButtonStory = {
    title: 'WooriMobile/button/WOScrollTopButton',
    component: WOScrollTopButton,
    parameters: {
        layout: 'centered',
        storySource: {
            source: sourceCode, // ADD SOURCE CODE
        },
    },
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'text',
            description: ' type이 fds일때 background와 border가 변경됩니다 ',
            defaultValue: { summary: 0 },
            type: { summary: 'text', required: true },
        },
        onClick: {
            control: 'text',
            description: '버튼 클릭 메소드 입니다.',
            action: 'onClick',
            type: { summary: 'function', required: false },
        },
    },
};

export default WOScrollTopButtonStory;

export const type = {
    args: {
        type: 'fds',
    },
};
