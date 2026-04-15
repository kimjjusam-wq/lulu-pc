import '../style.css';
import '../color.css';

/** @type { import('@storybook/html-vite').Preview } */
const preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Foundation', 'Components'],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#07070d' },
        { name: 'card', value: '#14141f' },
        { name: 'nav', value: '#0d0d18' },
      ],
    },
    layout: 'padded',
  },
};

export default preview;
