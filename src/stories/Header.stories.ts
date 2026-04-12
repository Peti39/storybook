import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Header } from './Header';

const meta = {
  title: 'Example/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Header when user is logged in */
export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};

/** Header when user is logged out */
export const LoggedOut: Story = {};

/** Header with long username */
export const LoggedInLongName: Story = {
  args: {
    user: {
      name: 'Alexander Christopher Montgomery III',
    },
  },
};

/** Header showing only login prompts */
export const NoUser: Story = {
  args: {
    user: undefined,
  },
};
