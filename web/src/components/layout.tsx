import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import { SIDEBAR_WIDTH } from "utils/configs";

export default function Layout() {
  const [sidebarWidth, setSidebarWidth] = useState(SIDEBAR_WIDTH.EXPAND);

  const handleSidebarWidth = () => {
    if (sidebarWidth === SIDEBAR_WIDTH.EXPAND)
      setSidebarWidth(SIDEBAR_WIDTH.SHRINK);
    else setSidebarWidth(SIDEBAR_WIDTH.EXPAND);
  };

  return (
    <Flex width="100vw" pos="relative">
      <Sidebar
        sidebarWidth={sidebarWidth}
        handleSidebarWidth={handleSidebarWidth}
      />
      <Box flex={1} px="24px">
        <Outlet />
      </Box>
    </Flex>
  );
}
