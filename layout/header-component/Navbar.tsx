import { useState  } from "react";
import {
    Flex,
    Button,
    Icon,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useDisclosure
} from "@chakra-ui/react"
import { CgProfile } from "react-icons/cg";
import { AiFillPieChart } from "react-icons/ai"
import { Community, Events, Resources } from "./NavItems";


export const Navbar = () => {
    return (
        <>
            <Flex justifyContent="space-between" color="whiteAlpha.900">
                <Button className="nav-button"  variant='unstyled' mx="2" p="0 8px">Home</Button>
                <Button className="nav-button"  variant='unstyled' mx="2" p="0 8px">About</Button>
                <Events />
                <Button className="nav-button"  variant='unstyled' mx="2" p="0 8px">Create</Button>
                <Resources />
                <Community />
            </Flex>
        </>
    );
};

export const NavAuth = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Flex justifyContent="space-between" pt="0.2rem">
                <Menu isOpen={isOpen}>
                    <MenuButton color="whiteAlpha.900" mr='5' fontSize="3xl" onMouseEnter={onOpen} onMouseLeave={onClose}><CgProfile /></MenuButton>
                    <MenuList bg='purple.100' boxShadow="2xl" borderRadius="10px"  mt="-1" onMouseEnter={onOpen} onMouseLeave={onClose}>
                        <MenuItem color="blackAlpha.700" _hover={{"backgroundColor": "#B794F4"}} icon={<CgProfile />}> Profile</MenuItem>
                        <MenuItem color="blackAlpha.700" _hover={{"backgroundColor": "#B794F4"}} icon={<AiFillPieChart />}>Portfolio</MenuItem>
                    </MenuList> 
                </Menu>
                <Button variant='solid' p="0 20px" letterSpacing="4px" ml="5" colorScheme='pink'>Connect</Button>
            </Flex>
        </>
    )
}