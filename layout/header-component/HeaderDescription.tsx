import {
    Box,
    Button,
    Flex,
    Heading,
    Text,
    Image
} from "@chakra-ui/react"




const HeaderDescription = () => {
    return (
        <>
        <Box w="50%" m="3% 25%">
            <Heading fontFamily='Lato' textAlign="center" fontSize="55px">Discover, buy and sell event ticket</Heading>
            <Text m="0.5% 20%" w="60%" textAlign="center">Discover latest and top events with no regional boundary, ticket that can be useful for future events</Text>
            <Flex justifyContent="space-between" w="35%" mx="32.5%" px="3rem">
                <Button bg='#02ba7d'  _hover={{"backgroundColor": "#049f6b"}} _active={{"backgroundColor": "#05b47a"}}>Discover</Button>
                <Button _hover={{"background": "#e7e8e7"}} _active={{"backgroundColor": "#cecece"}} boxShadow="0 0 5px #006040" >Create</Button>
            </Flex>
        </Box>
        <Box w="50%" m="0 25%" boxSize='3xl'>
            <Image src='/images/headerImage.png' alt="eventflow-header-image" />
        </Box>
        </>
    );
};

export default HeaderDescription;
