import usePageStore from "@/store/page-store";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  const { name } = usePageStore();
  return (
    <div className="border-b p-4 flex items-center">
      <div className="w-[200px] flex items-center">
        <span className="text-lg font-bold tracking-widest">BELANJA.</span>
      </div>
      <p className="text-lg">{name}</p>
      <div className="ml-auto flex items-center gap-2">
        <div>Avatar</div>
        <ModeToggle />
      </div>
    </div>
  );
}
