import { Flex, Icon, Link, Text } from "@chakra-ui/react";
import { Link as NavLink, useLocation } from "react-router-dom";

import { motion } from "framer-motion";
import { routes } from "utils/routes";

type Props = { isExpand: boolean };

export default function SidebarLinks({ isExpand }: Props) {
  const { pathname } = useLocation();
  return (
    <Flex flexDir="column" rowGap="12px" w="100%">
      {routes.map((route) => {
        const isSelected = route.path === pathname;
        const bgColor = isSelected ? "rgba(0,0,0,0.1)" : "#fff";
        return (
          <Link
            as={NavLink}
            to={route.path}
            display="flex"
            alignItems="center"
            columnGap="8px"
            py="12px"
            px="12px"
            w="100%"
            borderRadius="4px"
            _hover={{ bgColor: "rgba(0,0,0,0.05)" }}
            bgColor={bgColor}
          >
            <Icon
              width="20px"
              height="20px"
              as={isSelected ? route.iconSelected : route.icon}
            />
            <Text
              flex={1}
              fontSize="16px"
              as={motion.span}
              animate={{ opacity: !isExpand ? 0 : 1 }}
            >
              {route.pagename}
            </Text>
          </Link>
        );
      })}
    </Flex>
  );
}
