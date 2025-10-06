export function StepperHeader() {
  return (
    <div className="!relative">
      {/* Glowing circle */}
      <div className="!w-64 !h-64 !rounded-full !border-4 !border-white/60 !flex !items-center !justify-center !relative">
        {/* Glow effect */}
        <div className="!absolute !inset-0 !rounded-full !bg-white/10 !blur-xl"></div>
        <div className="!absolute !inset-4 !rounded-full !bg-white/5 !blur-lg"></div>

        {/* Text */}
        <h1 className="!text-4xl !font-bold !text-white !z-10 !tracking-wider">IA LAB</h1>
      </div>
    </div>
  );
}
