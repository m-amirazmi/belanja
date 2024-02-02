import { routes } from "@/lib/routes";
import usePageStore from "@/store/page-store";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
  HiArrowRightOnRectangle,
} from "react-icons/hi2";
import { Button } from "./ui/button";

export default function Sidebar() {
  const [openSidebar, setOpenSidebar] = useState(true);
  const { setPageName, name } = usePageStore();

  const handleToggleSidebar = () => setOpenSidebar(!openSidebar);

  return (
    <div
      className="border-r  p-4 ml-auto flex flex-col gap-4 sticky top-[70px] bg-background"
      style={{
        width: openSidebar ? "200px" : "auto",
        height: "calc(100vh - 70px)",
      }}
    >
      <div className="flex">
        <Button
          variant="outline"
          className="ml-auto px-2 flex items-center gap-2 justify-start"
          onClick={handleToggleSidebar}
        >
          {openSidebar ? (
            <HiChevronDoubleLeft size={18} />
          ) : (
            <HiChevronDoubleRight size={18} />
          )}
        </Button>
      </div>
      <div className="flex gap-y-2 flex-col">
        {routes.map((i) => {
          const isCurrentPage = i.page === name;
          if (i.isAuth) return;
          return (
            <Button
              key={i.path}
              asChild
              variant={isCurrentPage ? "default" : "ghost"}
              className={`px-2 flex items-center gap-2 justify-start ${isCurrentPage ? "bg-primary hover:bg-primary hover:text-accent" : "bg-background hover:bg-accent hover:text-accent-foreground hover:shadow-sm"}`}
            >
              <Link to={i.path} onClick={() => setPageName(i.page)}>
                <div className="py-2">{i.icon && <i.icon size={18} />}</div>
                {openSidebar && (
                  <span className="mt-0.5 text-base">{i.page}</span>
                )}
              </Link>
            </Button>
          );
        })}
      </div>
      <Button
        asChild
        variant="outline"
        className="mt-auto px-2 flex items-center gap-2 justify-start"
      >
        <Link to="/login" onClick={() => setPageName("Login")}>
          <div className="py-2">
            <HiArrowRightOnRectangle size={18} />
          </div>
          {openSidebar && <span className="mt-0.5 text-base">Log Out</span>}
        </Link>
      </Button>
    </div>
  );
}
