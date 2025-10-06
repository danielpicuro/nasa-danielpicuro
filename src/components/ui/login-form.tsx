'use client';

import type React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FormInput } from '@/components/ui/form-input';
import { FormButton } from '@/components/ui/form-button';

export function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    role: 'Engineer',
    budget: '$1000',
    priority: 'Main priority',
  });

  // 🪄 Autorrellenar el email automáticamente
  useEffect(() => {
    setFormData(prev => ({ ...prev, email: 'user@example.com' })); // puedes cambiarlo por un valor dinámico
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isFormValid = () => {
    return formData.email && formData.role && formData.budget && formData.priority;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid()) {
      router.push('/projects'); // 🚀 redirección directa
    }
  };

  return (
    <div className="!w-full !rounded-lg !border !border-white/20 !bg-black/40 !p-8 !flex !flex-col !justify-around !items-center">
      <h1 className="!mb-8 !text-3xl !font-bold !text-white">LOGIN</h1>

      <form onSubmit={handleSubmit} className="!space-y-6">
        <FormInput
          label="Email Address"
          type="email"
          value={formData.email}
          onChange={value => handleInputChange('email', value)}
          required
        />

        <FormInput
          label="Role"
          type="text"
          value={formData.role}
          onChange={value => handleInputChange('role', value)}
          required
        />

        <FormInput
          label="Available Budget"
          type="text"
          value={formData.budget}
          onChange={value => handleInputChange('budget', value)}
          required
        />

        <FormInput
          label="Main Priority"
          type="text"
          value={formData.priority}
          onChange={value => handleInputChange('priority', value)}
          required
        />

        <FormButton disabled={!isFormValid()} type="submit">
          Access Platform
        </FormButton>
      </form>
    </div>
  );
}
