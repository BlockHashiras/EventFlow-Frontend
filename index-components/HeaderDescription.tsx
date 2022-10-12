import {
    Box,
    Button,
    Flex,
    Heading,
    Text,
    Image
} from "@chakra-ui/react";


const HeaderDescription = () => {
    return (
        <>
        <Box w="50%" m="3% 25%">
            <Heading fontFamily='Lato' textAlign="center" fontSize="55px">Discover, buy and sell event ticket</Heading>
            <Text m="0.5% 20%" w="60%" textAlign="center">Discover latest and top events with no regional boundary, ticket that can be useful for future events</Text>
            <Flex justify='space-evenly' w="40%" mx='30%'>
                <Button bg='#02ba7d'  _hover={{"backgroundColor": "#049f6b"}} _active={{"backgroundColor": "#05b47a"}} px="2rem">Discover</Button>
                <Button _hover={{"background": "#e7e8e7"}} _active={{"backgroundColor": "#cecece"}} boxShadow="0 0 5px #006040" px="2rem" >Create</Button>
            </Flex>
        </Box>
        <Box w="50%" m="0 25%" boxSize='base:3xl md: xl'>
            <Image src='/images/nft.png' alt="eventflow-header-image" />
        </Box>
        <Flex justifyContent="space-evenly" w="50%" m="4% 25%">
            <Image src="/Metamask-logo.png" alt="metamask-logo" width={200} height="40px" mt="10px" />
            <Image src="/Primary Lockup Daemon Dark.png" alt="blockdaemon-logo" width={250} height="60px" />
            <Image src="/logo-red-on-white.png" alt="web3Bridge-logo" width={200} height="60px" />
        </Flex>
        </>
    );
};

export default HeaderDescription;
