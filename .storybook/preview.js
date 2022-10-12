import '../src/components/theme/custom.css';
import Theme from '../src/components/atoms/Theme/Theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  //https://storybook.js.org/docs/react/essentials/backgrounds
  backgrounds: {
    default: 'light',
    values: [
        {
          name: 'light',
          value: '#FFFFFF',
        },
        {
          name: 'dark',
          value: '#333333',
        },
        {
            name: 'primary',
            value: '#3200c1',
          },
      ],
  }
}

export const decorators = [
    (Story) => (
        <div style={{ padding:'1.5rem 1rem' }}>
            <Theme>
                <Story />
            </Theme>
        </div>
    ),
];