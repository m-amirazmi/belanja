import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const handleTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleTheme}>
      <HiOutlineSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <HiOutlineMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
