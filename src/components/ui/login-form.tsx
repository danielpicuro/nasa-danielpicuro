'use client';

import type React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FormInput } from '@/components/ui/form-input';
import { FormButton } from '@/components/ui/form-button';
import { useAiCompanion } from '@/contexts/AiCompanionContext';
import { translations } from '@/lib/translations';

export function LoginForm() {
  const router = useRouter();
  const { language } = useAiCompanion();
  const t = translations[language].login.loginForm;

  const [formData, setFormData] = useState({
    email: '',
    role: '',
    budget: '',
    priority: '',
  });

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
      <h1 className="!mb-8 !text-3xl !font-bold !text-white">{t.title}</h1>

      <form onSubmit={handleSubmit} className="!space-y-6">
        <FormInput
          id="email"
          label={t.emailAddress}
          type="email"
          value={formData.email}
          onChange={value => handleInputChange('email', value)}
          required
        />

        <FormInput
          id="role"
          label={t.role}
          type="text"
          value={formData.role}
          onChange={value => handleInputChange('role', value)}
          required
        />

        <FormInput
          id="budget"
          label={t.availableBudget}
          type="number"
          value={formData.budget}
          onChange={value => handleInputChange('budget', value)}
          required
        />

        <FormInput
          id="priority"
          label={t.mainPriority}
          type="text"
          value={formData.priority}
          onChange={value => handleInputChange('priority', value)}
          required
        />

        <FormButton disabled={!isFormValid()} type="submit">
          {t.accessPlatform}
        </FormButton>
      </form>
    </div>
  );
}
