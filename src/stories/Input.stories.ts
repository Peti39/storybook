import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Input } from './Input';

const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number'],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

const InputWithState = (args: any) => {
  const [value, setValue] = useState(args.value || '');
  return <Input {...args} value={value} onChange={setValue} />;
};

/** Default text input with label and placeholder */
export const Default: Story = {
  render: (args) => <InputWithState {...args} />,
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    value: '',
  },
};

/** Input with validation error state */
export const WithError: Story = {
  render: (args) => <InputWithState {...args} />,
  args: {
    label: 'Email Address',
    placeholder: 'your@email.com',
    value: 'invalid-email',
    error: 'Please enter a valid email address',
    required: true,
  },
};

/** Disabled input field */
export const Disabled: Story = {
  render: (args) => <InputWithState {...args} />,
  args: {
    label: 'Phone Number',
    placeholder: '+1 (555) 000-0000',
    value: '+1 (555) 123-4567',
    disabled: true,
  },
};

/** Password input for secure data entry */
export const PasswordInput: Story = {
  render: (args) => <InputWithState {...args} />,
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    value: '',
    required: true,
  },
};

/** Email input with validation support */
export const EmailInput: Story = {
  render: (args) => <InputWithState {...args} />,
  args: {
    label: 'Email Address',
    placeholder: 'your@email.com',
    type: 'email',
    value: 'user@example.com',
    required: true,
  },
};

/** Number input for numeric values */
export const NumberInput: Story = {
  render: (args) => <InputWithState {...args} />,
  args: {
    label: 'Age',
    placeholder: 'Enter your age',
    type: 'number',
    value: '',
  },
};
