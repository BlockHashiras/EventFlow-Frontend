import {
    Box,
    Button,
    Flex,
    Heading,
    Text,
    Image
} from "@chakra-ui/react";
import Link from "next/link";


const HeaderDescription = () => {
    return (
        <>
        <Box w={{lg:"70%", xl: "50%"}} m={{lg: "3% 15%",xl: "3% 25%"}}>
            <Heading fontFamily='Lato' textAlign="center" fontSize={{lg: "35px ", xl:"50px"}}>Discover, buy and sell event ticket</Heading>
            <Text m={{lg: "0.5% 15%",xl:"0.5% 20%"}} w={{lg: "70%", xl:"60%"}} textAlign="center">Discover latest and top events with no regional boundary, ticket that can be useful for future events</Text>
            <Flex justify='space-between' w={{lg: "50%",xl:"40%"}} mx={{lg: "25%",xl:'30%'}} px={{lg: "14px"}}>
                <Link href="/event">
                    <Button bg='#02ba7d'  _hover={{"backgroundColor": "#049f6b"}} _active={{"backgroundColor": "#05b47a"}} px="2rem">Discover</Button>
                </Link>
                <Link href="/create">
                    <Button _hover={{"background": "#ddf0dd"}} _active={{"backgroundColor": "#cecece"}} boxShadow="0 0 5px #006040" px="2rem" >Create</Button>
                </Link>
            </Flex>
        </Box>
        <Box w={{lg: "50%",xl: "50%"}} m={{lg: "0 25%",xl:"0 25%"}} boxSize='base:3xl md: xl'>
            <Image src='/images/nft.png' alt="eventflow-header-image" />
        </Box>
        <Flex justifyContent="space-evenly" w={{lg: "90%",xl:"50%"}} m={{lg: "4% 5%",xl:"4% 25%"}}>
            <Image src="/Metamask-logo.png" alt="metamask-logo" width={{lg: 180,xl:200}} height={{lg: "40px",xl:"40px"}} mt="10px" />
            <Image src="/Primary Lockup Daemon Dark.png" alt="blockdaemon-logo" width={{lg: 240,xl:250}} height="60px" />
            <Image src="/logo-red-on-white.png" alt="web3Bridge-logo" width={200} height="60px" />
        </Flex>
        </>
    );
};

export default HeaderDescription;
