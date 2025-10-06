'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { AiCompanion } from './ai-companion';
import { LanguageSwitcher } from './language-switcher';
import { useAiCompanion } from '@/contexts/AiCompanionContext';
import { aiPrompts, aiPromptsType } from '@/lib/ai-prompts';

interface PromptContent {
  initialPrompt: string;
  pageContext: string;
}

interface AiPrompts {
  [key: string]: {
    en: PromptContent;
    es: PromptContent;
  };
}

export function ConditionalAiLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { language, setInitialPrompt, setPageContext } = useAiCompanion();

  useEffect(() => {
    console.log(
      'ConditionalAiLayout useEffect running. Pathname:',
      pathname,
      'Language:',
      language
    );
    const prompts = (aiPrompts as aiPromptsType)[pathname];
    if (prompts && prompts[language]) {
      const initialPromptText = prompts[language].initialPrompt;
      console.log('Setting initial prompt to:', initialPromptText);
      setInitialPrompt(initialPromptText);
      setPageContext(prompts[language].pageContext);
    } else {
      // Set a default or clear the context if no specific prompt is found
      setInitialPrompt('Hello! How can I help you with your urban planning project today?');
      setPageContext(null);
    }
  }, [pathname, language, setInitialPrompt, setPageContext]);

  const showAiCompanion = !pathname.startsWith('/login');

  return (
    <>
      {children}
      {showAiCompanion && (
        <>
          <LanguageSwitcher />
          <AiCompanion />
        </>
      )}
    </>
  );
}
