interface TcoCardProps {
  amount: string;
  description: string;
}

export function TcoCard({ amount, description }: TcoCardProps) {
  return (
    <div className="!rounded-xl !bg-gradient-to-br !from-purple-600/40 !to-purple-900/60 !p-8 !text-center !backdrop-blur-sm">
      <div className="!text-5xl !font-bold !text-purple-200">{amount}</div>
      <p className="!mt-3 !text-sm !text-purple-300">{description}</p>
    </div>
  );
}
