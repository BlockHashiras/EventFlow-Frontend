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

export const Events = () => {
    const {isOpen, onClose, onOpen} = useDisclosure()
    return (
        <Menu isOpen={isOpen}>
            <MenuButton
                mx="2"
                _focusVisible={{"boxShadow": "0rem"}}
                className="nav-button" 
                variant='unstyled' 
                p='0 8px' 
                as={Button} 
                onMouseEnter={onOpen} 
                onMouseLeave={onClose} 
                >
                Event
            </MenuButton>
            <MenuList bg='purple.100' boxShadow="2xl" borderRadius="10px" mt="-1.5" onMouseEnter={onOpen} onMouseLeave={onClose}>
                <MenuItem color="purple.900" _hover={{"backgroundColor": "#B794F4"}} _focus={{"backgroundColor": "#B794F4"}}>Top Event</MenuItem>
                <MenuItem color="purple.900" _hover={{"backgroundColor": "#B794F4"}} _focus={{"backgroundColor": "#B794F4"}}>Latest Event</MenuItem>
                <MenuItem color="purple.900" _hover={{"backgroundColor": "#B794F4"}} _focus={{"backgroundColor": "#B794F4"}}>All Events</MenuItem>
                <MenuItem color="purple.900" _hover={{"backgroundColor": "#B794F4"}} _focus={{"backgroundColor": "#B794F4"}}>Event Near You</MenuItem>
            </MenuList>
        </Menu>
    );
};

export const Resources = () => {
    const {isOpen, onClose, onOpen} = useDisclosure()
    return (
        <Menu isOpen={isOpen}>
            <MenuButton
                mx="2"
                _focusVisible={{"boxShadow": "0rem"}}
                className="nav-button" 
                variant='unstyled' 
                p='0 8px' 
                as={Button} 
                onMouseEnter={onOpen} 
                onMouseLeave={onClose} 
                >
                Resources
            </MenuButton>
            <MenuList bg='purple.100' boxShadow="2xl" borderRadius="10px" mt="-1.5" onMouseEnter={onOpen} onMouseLeave={onClose}>
                <MenuItem color="purple.900" _hover={{"backgroundColor": "#B794F4"}} _focus={{"backgroundColor": "#B794F4"}}>Learn</MenuItem>
                <MenuItem color="purple.900" _hover={{"backgroundColor": "#B794F4"}} _focus={{"backgroundColor": "#B794F4"}}>Blog</MenuItem>
                <MenuItem color="purple.900" _hover={{"backgroundColor": "#B794F4"}} _focus={{"backgroundColor": "#B794F4"}}>Docs</MenuItem>
                <MenuItem color="purple.900" _hover={{"backgroundColor": "#B794F4"}} _focus={{"backgroundColor": "#B794F4"}}>Newsletter</MenuItem>
                <MenuItem color="purple.900" _hover={{"backgroundColor": "#B794F4"}} _focus={{"backgroundColor": "#B794F4"}}>Help Center</MenuItem>
            </MenuList>
        </Menu>
    )
};


export const Community = () => {
    const {isOpen, onClose, onOpen} = useDisclosure()
    return (
        <Menu isOpen={isOpen}>
            <MenuButton
                mx="2"
                _focusVisible={{"boxShadow": "0rem"}}
                className="nav-button" 
                variant='unstyled' 
                p='0 8px' 
                as={Button} 
                onMouseEnter={onOpen} 
                onMouseLeave={onClose} 
                >
                Community
            </MenuButton>
            <MenuList bg='purple.100' boxShadow="2xl" borderRadius="10px" mt="-1.5" onMouseEnter={onOpen} onMouseLeave={onClose}>
                <MenuItem color="purple.900" _hover={{"backgroundColor": "#B794F4"}} _focus={{"backgroundColor": "#B794F4"}} icon={<BsTwitter />}>Twitter</MenuItem>
                <MenuItem color="purple.900" _hover={{"backgroundColor": "#B794F4"}} _focus={{"backgroundColor": "#B794F4"}} icon={<BsTelegram />}>Telegram</MenuItem>
                <MenuItem color="purple.900" _hover={{"backgroundColor": "#B794F4"}} _focus={{"backgroundColor": "#B794F4"}} icon={<FaDiscord />}>Discord</MenuItem>
                <MenuItem color="purple.900" _hover={{"backgroundColor": "#B794F4"}} _focus={{"backgroundColor": "#B794F4"}} icon={<AiFillInstagram />}>Instagram</MenuItem>
                <MenuItem color="purple.900" _hover={{"backgroundColor": "#B794F4"}} _focus={{"backgroundColor": "#B794F4"}} icon={<RiLinkedinFill />}>LinkedIn</MenuItem>
            </MenuList>
        </Menu>
    )
}


