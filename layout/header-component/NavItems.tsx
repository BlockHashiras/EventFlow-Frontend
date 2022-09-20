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
            <MenuList mt="-2" onMouseEnter={onOpen} onMouseLeave={onClose}>
                <MenuItem>Top Event</MenuItem>
                <MenuItem>Latest Event</MenuItem>
                <MenuItem>All Events</MenuItem>
                <MenuItem>Event Near You</MenuItem>
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
            <MenuList mt="-2" onMouseEnter={onOpen} onMouseLeave={onClose}>
                <MenuItem>Learn</MenuItem>
                <MenuItem>Blog</MenuItem>
                <MenuItem>Docs</MenuItem>
                <MenuItem>Newsletter</MenuItem>
                <MenuItem>Help Center</MenuItem>
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
            <MenuList mt="-2" onMouseEnter={onOpen} onMouseLeave={onClose}>
                <MenuItem icon={<BsTwitter />}>Twitter</MenuItem>
                <MenuItem icon={<BsTelegram />}>Telegram</MenuItem>
                <MenuItem icon={<FaDiscord />}>Discord</MenuItem>
                <MenuItem icon={<AiFillInstagram />}>Instagram</MenuItem>
            </MenuList>
        </Menu>
    )
}


