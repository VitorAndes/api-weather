import { ReactElement } from "react";

interface CardStatisticsProps {
  icon?: ReactElement;
  typeStatistic?: string;
  statistic?: string;
}

export function CardDailyStatistics({
  icon,
  typeStatistic,
  statistic,
}: CardStatisticsProps) {
  return (
    <div className="flex flex-1 flex-col md:flex-row items-center justify-center gap-2 bg-slate-200 rounded-md p-2">
      <span className="text-slate-950">{icon}</span>
      <div className="flex flex-col">
        <span className="text-slate-950">{typeStatistic}</span>
        <span className="text-slate-500">{statistic}</span>
      </div>
    </div>
  );
}
