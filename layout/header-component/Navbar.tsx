import { useState  } from "react";
import {ConnectButton} from '@rainbow-me/rainbowkit';
import {
    Flex,
    Button,
    Icon,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useDisclosure,
    useColorMode
} from "@chakra-ui/react"
import { CgProfile } from "react-icons/cg";
import { AiFillPieChart } from "react-icons/ai"
import { IoMdMoon } from "react-icons/io"
import { BsFillSunFill } from "react-icons/bs"
import { Community, Events, Resources } from "./NavItems";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {

    return (
        <>
            <Flex color="purple.900" fontFamily='Lato' fontWeight="bold">
                <Link href='/'>
                    <Button className="nav-button"  variant='unstyled' p={{lg: "1px 8px"}}>Home</Button>
                </Link>
                <Link href="/about">
                    <Button className="nav-button"  variant='unstyled' p={{lg: "1px 8px"}}>About</Button>
                </Link>
                <Events />
                <Link href='/create'>
                <Button className="nav-button"  variant='unstyled' p={{lg: "1px 8px"}}>Create</Button>
                </Link>
                <Resources />
                <Community />
            </Flex>
        </>
    );
};

export const NavAuth = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {colorMode, toggleColorMode } = useColorMode()

    return (
        <>
            <Flex justifyContent="space-between" pt="0.2rem" fontFamily='Lato' color="purple.900">
                <Button variant='unstyled' mr='1' fontSize={{lg: '2xl', xl: '3xl'}} onClick={toggleColorMode}>
                    {colorMode === 'light' ? <IoMdMoon /> : <BsFillSunFill />}
                </Button>
                <Menu isOpen={isOpen}>
                    <MenuButton color="purple.900" mr='5' fontSize={{lg: '2xl', xl: '3xl'}} onMouseEnter={onOpen} onMouseLeave={onClose}><CgProfile /></MenuButton>
                    <MenuList bg='purple.100' boxShadow="2xl" borderRadius="10px"  mt="-1.5" onMouseEnter={onOpen} onMouseLeave={onClose}>
                        <Link href="/profile">
                            <MenuItem bg="purple.100" _hover={{"backgroundColor": "#B794F4"}} _focus={{"backgroundColor": "#B794F4"}} icon={<CgProfile />}> Profile</MenuItem>
                        </Link>
                        <Link href="/creatorProfile">
                            <MenuItem bg="purple.100" _hover={{"backgroundColor": "#B794F4"}} _focus={{"backgroundColor": "#B794F4"}} icon={<CgProfile />}>Creator Profile</MenuItem>
                        </Link>
                        <Link href="/portfolio">
                            <MenuItem bg="purple.100" _hover={{"backgroundColor": "#B794F4"}} _focus={{"backgroundColor": "#B794F4"}} icon={<AiFillPieChart />}>Portfolio</MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
                <ConnectButton.Custom>
                    {({
                        account,
                        chain,
                        openAccountModal,
                        openChainModal,
                        openConnectModal,
                        mounted,
                    }) => {
                        const ready = mounted;
                        const connected =
                        ready &&
                        account &&
                        chain

                        return (
                        <div
                            {...(!ready && {
                            'aria-hidden': true,
                            'style': {
                                opacity: 0,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            },
                            })}
                        >
                            {(() => {
                            if (!connected) {
                                return (
                                <Button  bg='#02ba7d'  _hover={{"backgroundColor": "#049f6b"}} _active={{"backgroundColor": "#05b47a"}} p={{lg: "1px 10px", xl: "1px 2rem"}} letterSpacing="2px" onClick={openConnectModal} type="button">
                                    Connect
                                </Button>
                                );
                            }

                            if (chain.unsupported) {
                                return (
                                <Button  bg='#02ba7d'  _hover={{"backgroundColor": "#049f6b"}} _active={{"backgroundColor": "#05b47a"}} p={{lg: "1px 10px", xl: "1px 2rem"}} letterSpacing="2px" onClick={openChainModal} type="button">
                                    Wrong network
                                </Button>
                                );
                            }

                            return (
                                <div style={{ display: 'flex', gap: 12 }}>
                                <Button
                                    _hover={{"background": "#ddf0dd"}} _active={{"backgroundColor": "#cecece"}} boxShadow="0 0 5px #006040" p={{lg: "1px 10px", xl: "1px 2rem"}} letterSpacing="2px"
                                    onClick={openChainModal}
                                    style={{ display: 'flex', alignItems: 'center' }}
                                    type="button"
                                >
                                    {chain.hasIcon && (
                                    <div
                                        style={{
                                        background: chain.iconBackground,
                                        width: 12,
                                        height: 12,
                                        borderRadius: 999,
                                        overflow: 'hidden',
                                        marginRight: 4,
                                        }}
                                    >
                                        {chain.iconUrl && (
                                        <Image
                                            alt={chain.name ?? 'Chain icon'}
                                            src={chain.iconUrl}
                                            width={12}
                                            height={12}
                                        />
                                        )}
                                    </div>
                                    )}
                                    {/* {chain.name} */}
                                </Button>

                                <Button  bg='#02ba7d'  _hover={{"backgroundColor": "#049f6b"}} _active={{"backgroundColor": "#05b47a"}} p={{lg: "1px 10px", xl: "1px 2rem"}} letterSpacing="2px" onClick={openAccountModal} type="button">
                                    {account.displayName}
                                </Button>
                                </div>
                            );
                            })()}
                        </div>
                        );
                    }}
                </ConnectButton.Custom>

            </Flex>
        </>
    )
}