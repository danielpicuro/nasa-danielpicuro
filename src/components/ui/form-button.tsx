'use client';

import type React from 'react';

interface FormButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export function FormButton({ children, disabled, type = 'button' }: FormButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className="!w-full !rounded-md !bg-blue-600 !px-6 !py-3 !mt-4 !text-lg !font-bold !text-white !transition-all !hover:bg-blue-700 !disabled:cursor-not-allowed !disabled:opacity-50 !disabled:hover:bg-blue-600 !cursor-pointer"
    >
      {children}
    </button>
  );
}
