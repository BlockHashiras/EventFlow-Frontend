import {
    Menu,
    MenuItem,
    MenuList,
    Button,
    MenuButton,
    useDisclosure
} from "@chakra-ui/react";
import { BsTwitter, BsTelegram } from "react-icons/bs"
import { FaDiscord } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"
import { RiLinkedinFill } from "react-icons/ri"
import Link from "next/link";

export const Events = () => {
    const {isOpen, onClose, onOpen} = useDisclosure()
    return (
        <Menu isOpen={isOpen}>
            <MenuButton
                _focusVisible={{"boxShadow": "0rem"}}
                className="nav-button"
                variant='unstyled'
                p={{lg: "1px 8px"}}
                as={Button}
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                >
                Event
            </MenuButton>
            <MenuList bg='purple.100' boxShadow="2xl" borderRadius="10px" mt="-1.5" onMouseEnter={onOpen} onMouseLeave={onClose}>
                <Link href="/#trending">
                    <MenuItem bg='purple.100' color="purple.900" _hover={{"backgroundColor": "#B794F4"}} _focus={{"backgroundColor": "#B794F4"}}>Top Event</MenuItem>
                </Link>
                <Link href="/#latest">
                    <MenuItem bg='purple.100' color="purple.900" _hover={{"backgroundColor": "#B794F4"}} _focus={{"backgroundColor": "#B794F4"}}>Latest Event</MenuItem>
                </Link>
                <Link href="/event">
                    <MenuItem bg='purple.100' color="purple.900" _hover={{"backgroundColor": "#B794F4"}} _focus={{"backgroundColor": "#B794F4"}}>All Events</MenuItem>
                </Link>
                <MenuItem bg='purple.100' color="purple.900" _hover={{"backgroundColor": "#B794F4"}} _focus={{"backgroundColor": "#B794F4"}}>Event Near You</MenuItem>
            </MenuList>
        </Menu>
    );
};

export const Resources = () => {
    const {isOpen, onClose, onOpen} = useDisclosure()
    return (
        <Menu isOpen={isOpen}>
            <MenuButton
                _focusVisible={{"boxShadow": "0rem"}}
                className="nav-button"
                variant='unstyled'
                p={{lg: "1px 8px"}}
                as={Button}
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                >
                Resources
            </MenuButton>
            <MenuList bg='purple.100' boxShadow="2xl" borderRadius="10px" mt="-1.5" onMouseEnter={onOpen} onMouseLeave={onClose}>
                <MenuItem bg="purple.100" color="purple.900" _hover={{"backgroundColor": "#B794F4"}} _focus={{"backgroundColor": "#B794F4"}}>Learn</MenuItem>
                <MenuItem bg="purple.100" color="purple.900" _hover={{"backgroundColor": "#B794F4"}} _focus={{"backgroundColor": "#B794F4"}}>Blog</MenuItem>
                <MenuItem bg="purple.100" color="purple.900" _hover={{"backgroundColor": "#B794F4"}} _focus={{"backgroundColor": "#B794F4"}}>Docs</MenuItem>
                <MenuItem bg="purple.100" color="purple.900" _hover={{"backgroundColor": "#B794F4"}} _focus={{"backgroundColor": "#B794F4"}}>Newsletter</MenuItem>
                <MenuItem bg="purple.100" color="purple.900" _hover={{"backgroundColor": "#B794F4"}} _focus={{"backgroundColor": "#B794F4"}}>Help Center</MenuItem>
            </MenuList>
        </Menu>
    )
};


export const Community = () => {
    const {isOpen, onClose, onOpen} = useDisclosure()
    return (
        <Menu isOpen={isOpen}>
            <MenuButton
                _focusVisible={{"boxShadow": "0rem"}}
                className="nav-button"
                variant='unstyled'
                p={{lg: "1px 8px"}}
                as={Button}
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                >
                Community
            </MenuButton>
            <MenuList bg='purple.100' boxShadow="2xl" borderRadius="10px" mt="-1.5" onMouseEnter={onOpen} onMouseLeave={onClose}>
                <MenuItem bg='purple.100' color="purple.900" _hover={{"backgroundColor": "#B794F4"}} _focus={{"backgroundColor": "#B794F4"}} icon={<BsTwitter />}>Twitter</MenuItem>
                <MenuItem bg='purple.100' color="purple.900" _hover={{"backgroundColor": "#B794F4"}} _focus={{"backgroundColor": "#B794F4"}} icon={<BsTelegram />}>Telegram</MenuItem>
                <MenuItem bg='purple.100' color="purple.900" _hover={{"backgroundColor": "#B794F4"}} _focus={{"backgroundColor": "#B794F4"}} icon={<FaDiscord />}>Discord</MenuItem>
                <MenuItem bg='purple.100' color="purple.900" _hover={{"backgroundColor": "#B794F4"}} _focus={{"backgroundColor": "#B794F4"}} icon={<AiFillInstagram />}>Instagram</MenuItem>
                <MenuItem bg='purple.100' color="purple.900" _hover={{"backgroundColor": "#B794F4"}} _focus={{"backgroundColor": "#B794F4"}} icon={<RiLinkedinFill />}>LinkedIn</MenuItem>
            </MenuList>
        </Menu>
    )
}


