'use client';

interface FormInputProps {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export function FormInput({ label, type, value, onChange, required }: FormInputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-white">{label}</label>
      <input
        autoComplete={type}
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        required={required}
        className="!w-full !rounded-md !border !border-white/20 !bg-white/10 !px-4 !py-3 !text-white !placeholder-white/50 !backdrop-blur-sm !transition-all !focus:border-white/40 !focus:bg-white/20 !focus:outline-none !focus:ring-2 !focus:ring-white/20"
      />
    </div>
  );
}
