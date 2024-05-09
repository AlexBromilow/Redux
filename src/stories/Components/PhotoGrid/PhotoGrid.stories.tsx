import type { Meta, StoryObj } from '@storybook/react';
import PhotoGrid from './PhotoGrid';

const meta = {
  title: 'Components/Photo Grid',
  component: PhotoGrid,
} satisfies Meta<typeof PhotoGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
