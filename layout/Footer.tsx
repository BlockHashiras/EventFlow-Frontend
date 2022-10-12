import { Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";



export const Footer = () => {
    return (
    <Grid
        w="70%"
        m="10% 15% 2% 15%"
        templateColumns='repeat(5, 1fr)'
        gap={5}
        bgGradient="radial(circle at closest-corner, #c1ffde, white 20%)"
        fontFamily='Lato'
        >
        <GridItem colSpan={2}>
            <Text letterSpacing="0.2rem" fontSize="2xl" fontFamily='Poppins' fontWeight="bold" py="0.2rem" backgroundClip="text" bgGradient='linear(to-br, purple.700, red.900 70%)'>
                EVENTFLOW
            </Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            <Text fontWeight='extrabold' fontFamily="Lato" fontSize="18px" >Join our Community</Text>
            <Flex>

            </Flex>
        </GridItem>
        <GridItem>Event</GridItem>
        <GridItem>Learn</GridItem>
        <GridItem>Company</GridItem>
    </Grid>
    );
};

export default Footer;
