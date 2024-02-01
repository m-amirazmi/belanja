import { routes } from "@/lib/routes";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi2";

export default function Sidebar() {
  const [openSidebar, setOpenSidebar] = useState(true);

  const handleToggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };
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
      <div>
        {routes.map((i) => (
          <Link
            to={i.path}
            className="flex items-center gap-2 px-2 rounded-md hover:bg-accent"
          >
            <div className="py-2">
              <i.icon size={18} />
            </div>
            {openSidebar && <span>{i.page}</span>}
          </Link>
        ))}
      </div>
    </div>
  );
}
