import { Button } from "./ui/button";
import {
  DialogHeader,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "./ui/dialog";

interface InputComponentProps {
  inputValue: string;
  setInputValue: (value: string) => void;
}

export function CardSearchCity({
  inputValue,
  setInputValue,
}: InputComponentProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Valor do input:", inputValue);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <a href="#">Search city</a>
      </DialogTrigger>
      <DialogContent className="max-w-[300px] bg-slate-200">
        <DialogHeader>
          <DialogTitle>Search your city</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <label htmlFor="name">City name</label>
          <input
            type="text"
            id="name"
            value={inputValue}
            onChange={handleChange}
            className="border border-black rounded-md w-full"
          />
          <DialogClose asChild>
            <Button type="submit">search</Button>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
}
