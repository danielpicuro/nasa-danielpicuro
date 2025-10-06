interface IntegrationBadgesProps {
  integrations: string[];
}

export function IntegrationBadges({ integrations }: IntegrationBadgesProps) {
  return (
    <div className="!flex !flex-wrap !gap-3">
      {integrations.map((integration, index) => (
        <span
          key={index}
          className="!rounded-full !bg-cyan-500/20 !px-4 !py-1.5 !text-sm !font-medium !text-cyan-300 !ring-1 !ring-cyan-500/30"
        >
          {integration}
        </span>
      ))}
    </div>
  );
}
