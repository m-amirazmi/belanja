import { SIDEBAR_WIDTH } from "utils/configs";
import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SidebarLinks from "./sidebar-links";
import { motion } from "framer-motion";
import { RiArrowLeftDoubleLine, RiArrowRightDoubleLine } from "react-icons/ri";

type Props = { sidebarWidth: number; handleSidebarWidth: () => void };

export default function Sidebar({ sidebarWidth, handleSidebarWidth }: Props) {
  const [isExpand, setIsExpand] = useState(true);

  useEffect(() => {
    if (sidebarWidth === SIDEBAR_WIDTH.EXPAND) setIsExpand(true);
    else setIsExpand(false);
  }, [sidebarWidth]);

  return (
    <Box
      as={motion.div}
      initial={{ width: SIDEBAR_WIDTH.EXPAND }}
      animate={{ width: `${sidebarWidth}px` }}
      pos="sticky"
      top="0px"
      h="100vh"
      w="inherit"
      borderRight="1px solid #ccc"
      py="24px"
      px="16px"
    >
      <Flex
        flexDir="column"
        h="100%"
        alignItems="flex-start"
        overflowX="hidden"
      >
        <Box pb="48px" pl="12px">
          <Text
            fontSize="x-large"
            fontWeight="800"
            style={{ textWrap: "nowrap" }}
            lineHeight="1rem"
          >
            B
            <Text as={motion.span} animate={{ opacity: !isExpand ? 0 : 1 }}>
              ELANJA
            </Text>
          </Text>
        </Box>

        <SidebarLinks isExpand={isExpand} />

        <Box w="100%" mt="auto">
          <Button
            border="1px solid #ccc"
            borderRadius="4px"
            p="8px"
            w="100%"
            onClick={handleSidebarWidth}
            _hover={{ bgColor: "rgba(0,0,0,0.05)" }}
          >
            <Icon
              as={isExpand ? RiArrowLeftDoubleLine : RiArrowRightDoubleLine}
              width="24px"
              height="24px"
            />
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}
