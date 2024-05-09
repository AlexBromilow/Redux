import * as React from 'react';
import type { Preview } from '@storybook/react';
import Layout from 'src/stories/Components/Layout/Layout';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Layout>
          <Story />
        </Layout>
      );
    },
  ],
};

export default preview;
