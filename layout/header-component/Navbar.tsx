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
    useDisclosure
} from "@chakra-ui/react"
import { CgProfile } from "react-icons/cg";
import { AiFillPieChart } from "react-icons/ai"
import { IoMdMoon } from "react-icons/io"
import { Community, Events, Resources } from "./NavItems";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {

    return (
        <>
            <Flex justifyContent="space-between" color="purple.900" fontFamily='Lato' fontWeight="bold">
                <Link href='/'>
                    <Button className="nav-button"  variant='unstyled' mx="2" p="0 8px" fontFamily='Lato'>Home</Button>
                </Link>
                <Link href="/about">
                    <Button className="nav-button"  variant='unstyled' mx="2" p="0 8px">About</Button>
                </Link>
                <Events />
                <Link href='/create'>
                <Button className="nav-button"  variant='unstyled' mx="2" p="0 8px">Create</Button>
                </Link>
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
            <Flex justifyContent="space-between" pt="0.2rem" fontFamily='Lato' color="purple.900">
            <Button variant='unstyled' mr='5' fontSize='3xl'><IoMdMoon /></Button>
                <Menu isOpen={isOpen}>
                    <MenuButton color="purple.900" mr='5' fontSize="3xl" onMouseEnter={onOpen} onMouseLeave={onClose}><CgProfile /></MenuButton>
                    <MenuList bg='purple.100' boxShadow="2xl" borderRadius="10px"  mt="-1.5" onMouseEnter={onOpen} onMouseLeave={onClose}>
                        <Link href="/profile">
                            <MenuItem _hover={{"backgroundColor": "#B794F4"}} _focus={{"backgroundColor": "#B794F4"}} icon={<CgProfile />}> Profile</MenuItem>
                        </Link>
                        <Link href="/creatorProfile">
                            <MenuItem _hover={{"backgroundColor": "#B794F4"}} _focus={{"backgroundColor": "#B794F4"}} icon={<CgProfile />}>Creator Profile</MenuItem>
                        </Link>
                        <Link href="/portfolio">
                            <MenuItem _hover={{"backgroundColor": "#B794F4"}} _focus={{"backgroundColor": "#B794F4"}} icon={<AiFillPieChart />}>Portfolio</MenuItem>
                        </Link>
                    </MenuList>
                </Menu>

                {/* <Button _hover={{"backgroundColor": "#049f6b"}} _active={{"backgroundColor": "#05b47a"}} variant='solid' p="0 20px" letterSpacing="4px" ml="5" bg='#02ba7d'>Connect</Button> */}
                {/* connect button */}
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
                                <Button  bg='#02ba7d'  _hover={{"backgroundColor": "#049f6b"}} _active={{"backgroundColor": "#05b47a"}} px="2rem" onClick={openConnectModal} type="button">
                                    Connect
                                </Button>
                                );
                            }

                            if (chain.unsupported) {
                                return (
                                <Button  bg='#02ba7d'  _hover={{"backgroundColor": "#049f6b"}} _active={{"backgroundColor": "#05b47a"}} px="2rem" onClick={openChainModal} type="button">
                                    Wrong network
                                </Button>
                                );
                            }

                            return (
                                <div style={{ display: 'flex', gap: 12 }}>
                                <Button
                                    _hover={{"background": "#ddf0dd"}} _active={{"backgroundColor": "#cecece"}} boxShadow="0 0 5px #006040" px="2rem"
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
                                    {chain.name}
                                </Button>

                                <Button  bg='#02ba7d'  _hover={{"backgroundColor": "#049f6b"}} _active={{"backgroundColor": "#05b47a"}} px="2rem" onClick={openAccountModal} type="button">
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