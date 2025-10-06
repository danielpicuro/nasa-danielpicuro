import { AiCompanionProvider } from '@/contexts/AiCompanionContext';
import { AiChatModal } from '@/components/ai-chat-modal';
import { AiChatTrigger } from '@/components/ai-chat-trigger';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <AiCompanionProvider>
      <nav>
        <main>{children}</main>
        <AiChatTrigger />
        <AiChatModal />
      </nav>
    </AiCompanionProvider>
  );
}
