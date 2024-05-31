import {
  Avatar,
  AvatarBadge,
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import logo from "../../assets/images/logo-icon.png";
import avatarImg from "../../assets/images/avatar.png";
import { SearchIcon } from "@chakra-ui/icons";

const DaashboardDrawer = () => {
  return (
    <>
      <Box w={"274px"} bg={"#FBFBFB"} h={"100vh"}>
        <Stack>
          {/* top */}
          <Flex
            p={"5px 20px"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Flex alignItems={"center"}>
              <img src={logo} alt="logo" />
              <Stack gap={0}>
                <h5 className="text-[#0E1012] leading-[20px] text-[13px]">
                  Computir
                </h5>
                <span className="text-[#7D7F83] text-[12px] leading-[16px]">
                  Team
                </span>
              </Stack>
            </Flex>
            <Avatar size={"sm"} src={avatarImg}>
              <AvatarBadge boxSize="1.25em" bg="green.500" />
            </Avatar>
          </Flex>

          {/* nav */}
          <Stack px={"20px"} pt={"10px"}>
            <Input placeholder="Search..." />
            <InputGroup>
              <InputLeftElement
                className="InputLeft"
                pointerEvents="none"
                children={
                  <SearchIcon className="SearchIcon" color="gray.300" />
                }
                size="xs"
              />
              <Input
                className="Input"
                variant="outline"
                size="xs"
                placeholder={``}
              />
            </InputGroup>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default DaashboardDrawer;
