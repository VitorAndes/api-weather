import { CloudRain } from "lucide-react";

export function CardWeek() {
  return (
    <div className="flex flex-row md:flex-col justify-between bg-opacity-20 bg-gradient-to-b to-indigo-500 via-indigo-700 from-indigo-800 shadow-lg shadow-blue-600  w-full md:max-w-28 md:h-full rounded-md p-4">
      <div className="flex flex-col gap-2 items-center">
        <span className="text-slate-100 text-sm">Amanhã</span>
        <CloudRain className="text-slate-400" width={20} height={20} />
        <span className="text-slate-100 text-sm">27°C</span>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <span className="text-slate-100 text-sm">Segunda</span>
        <CloudRain className="text-slate-400" width={20} height={20} />
        <span className="text-slate-100 text-sm">27°C</span>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <span className="text-slate-100 text-sm">Terça</span>
        <CloudRain className="text-slate-400" width={20} height={20} />
        <span className="text-slate-400 text-sm">27°C</span>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <span className="text-slate-100 text-sm">Quarta</span>
        <CloudRain className="text-slate-400" width={20} height={20} />
        <span className="text-slate-100 text-sm">27°C</span>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <span className="text-slate-100 text-sm">Quinta</span>
        <CloudRain className="text-slate-400" width={20} height={20} />
        <span className="text-slate-100 text-sm">27°C</span>
      </div>
    </div>
  );
}
