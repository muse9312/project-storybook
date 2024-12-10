/** @type { import('@storybook/react-vite').StorybookConfig } */

const config = {
    stories: ['../src/Docs.stories.mdx', '../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/preset-create-react-app',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
        '@storybook/addon-storysource',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    core: {
        builder: '@storybook/builder-vite',
    },
    staticDirs: ['..\\public'],
};
export default config;
