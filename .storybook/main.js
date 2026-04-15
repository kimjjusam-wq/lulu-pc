/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-docs"
  ],
  framework: "@storybook/html-vite",
  staticDirs: [{ from: '../images', to: '/images' }],
};
module.exports = config;
