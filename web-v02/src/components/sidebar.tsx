import { routes } from "@/lib/routes";
import usePageStore from "@/store/page-store";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi2";
import { Button } from "./ui/button";

export default function Sidebar() {
  const [openSidebar, setOpenSidebar] = useState(true);
  const { setPageName, name } = usePageStore();

  const handleToggleSidebar = () => setOpenSidebar(!openSidebar);

  return (
    <div
      className="border-r  p-4 ml-auto flex flex-col gap-4"
      style={{ width: openSidebar ? "200px" : "auto" }}
    >
      <div className="flex">
        <button
          className="ml-auto p-2 border rounded-md"
          onClick={handleToggleSidebar}
        >
          {openSidebar ? (
            <HiChevronDoubleLeft size={18} />
          ) : (
            <HiChevronDoubleRight size={18} />
          )}
        </button>
      </div>
      <div className="flex gap-y-2 flex-col">
        {routes.map((i) => {
          const isCurrentPage = i.page === name;
          return (
            <Button
              key={i.path}
              asChild
              variant={isCurrentPage ? "default" : "ghost"}
              className={`px-2 flex items-center gap-2 justify-start ${isCurrentPage ? "bg-accent-foreground hover:bg-accent-foreground hover:text-accent" : "bg-background hover:bg-accent hover:text-accent-foreground hover:shadow-sm"}`}
            >
              <Link to={i.path} onClick={() => setPageName(i.page)}>
                <div className="py-2">
                  <i.icon size={18} />
                </div>
                {openSidebar && (
                  <span className="mt-0.5 text-base">{i.page}</span>
                )}
              </Link>
            </Button>
          );
        })}
      </div>
    </div>
  );
}
