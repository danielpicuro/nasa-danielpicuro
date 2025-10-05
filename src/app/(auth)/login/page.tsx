import { LoginForm } from '@/components/ui/login-form';

export default function LoginPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-950 via-black to-black">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `radial-gradient(2px 2px at 20% 30%, white, transparent),
                           radial-gradient(2px 2px at 60% 70%, white, transparent),
                           radial-gradient(1px 1px at 50% 50%, white, transparent),
                           radial-gradient(1px 1px at 80% 10%, white, transparent),
                           radial-gradient(2px 2px at 90% 60%, white, transparent),
                           radial-gradient(1px 1px at 33% 80%, white, transparent),
                           radial-gradient(1px 1px at 15% 90%, white, transparent)`,
            backgroundSize: '200% 200%',
            backgroundPosition: '0% 0%',
          }}
        />
      </div>

      <div className="!relative !z-10 !flex !min-h-screen !items-center !justify-around !px-12 !py-12">
        <div className="!w-full !max-w-md">
          <LoginForm />
        </div>

        <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
          <img
            src="/images/planet.jpg"
            alt="Earth from space"
            className="w-full max-w-lg drop-shadow-2xl"
          />
        </div>
      </div>
    </main>
  );
}
