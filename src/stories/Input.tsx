import React from 'react';
import './input.css';

export interface InputProps {
  /** Label text for the input */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Input value */
  value: string;
  /** Input change handler */
  onChange: (value: string) => void;
  /** Input type */
  type?: 'text' | 'email' | 'password' | 'number';
  /** Is the input disabled? */
  disabled?: boolean;
  /** Error message */
  error?: string;
  /** Is the input required? */
  required?: boolean;
}

/** Controlled input component for user text input */
export const Input = ({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  disabled = false,
  error,
  required = false,
}: InputProps) => {
  return (
    <div className="storybook-input-wrapper">
      {label && (
        <label className="storybook-label">
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      <input
        type={type}
        className={`storybook-input ${error ? 'storybook-input--error' : ''} ${disabled ? 'storybook-input--disabled' : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      />
      {error && <div className="storybook-error">{error}</div>}
    </div>
  );
};
