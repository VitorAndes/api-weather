import { CardDaily } from "./components/card-daily";
import { CardWeek } from "./components/card-week";

export function App() {
  return (
    <div className="bg-[url('./assets/bg-weather.jpg')] bg-cover min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row justify-center gap-2 w-full h-[520] md:h-[480px] p-1 md:p-0">
        <CardDaily />
        <CardWeek />
      </div>
    </div>
  );
}
