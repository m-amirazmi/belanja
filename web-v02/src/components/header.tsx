import usePageStore from "@/store/page-store";
import { ModeToggle } from "./mode-toggle";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { Button } from "./ui/button";

export default function Header() {
  const { name } = usePageStore();
  return (
    <div className="border-b p-4 flex items-center">
      <div className="w-[200px] flex items-center">
        <span className="text-lg font-bold tracking-widest">BELANJA.</span>
      </div>
      <p className="text-lg">{name}</p>
      <div className="ml-auto flex items-center">
        <Button variant="ghost" size="icon" onClick={() => {}}>
          <HiOutlineUserCircle size={22} />
          <span className="sr-only">Toggle theme</span>
        </Button>
        <ModeToggle />
      </div>
    </div>
  );
}
