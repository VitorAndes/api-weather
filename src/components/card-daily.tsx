import { CloudDrizzle, Droplets, MapPin, Wind } from "lucide-react";
import { CardDailyStatistics } from "./card-daily-statistics";

interface CardDailyProps {
  location: string;
}

export function CardDaily({ location }: CardDailyProps) {
  return (
    <div className="w-full md:w-[480px] h-[480px] bg-gradient-to-b to-indigo-500 via-indigo-700 from-indigo-800 shadow-lg shadow-blue-600 rounded-md p-4">
      <div className="flex flex-col items-center justify-between h-full">
        <div className="flex items-center justify-end gap-2 w-full text-slate-300">
          <MapPin width={18} height={18} />
          <span>{location}</span>
        </div>
        <h1 className="text-7xl font-semibold text-white">24°C</h1>
        <div className="flex gap-2 w-full">
          <CardDailyStatistics
            icon={<Wind width={18} height={18} />}
            statistic="17km/h"
            typeStatistic="Vento"
          />
          <CardDailyStatistics
            icon={<Droplets width={18} height={18} />}
            statistic="31%"
            typeStatistic="Umidade"
          />
          <CardDailyStatistics
            icon={<CloudDrizzle width={18} height={18} />}
            statistic="10%"
            typeStatistic="Chuva"
          />
        </div>
      </div>
    </div>
  );
}
