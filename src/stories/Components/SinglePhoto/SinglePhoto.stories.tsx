import type { Meta, StoryObj } from '@storybook/react';
import SinglePhoto from './SinglePhoto';

const meta = {
  title: 'Components/Single Photo',
  component: SinglePhoto,
} satisfies Meta<typeof SinglePhoto>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
