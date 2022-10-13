import { Flex, Grid, GridItem, Heading, List, ListItem, Text, Box } from "@chakra-ui/react";
import { BsTwitter, BsTelegram } from "react-icons/bs"
import { FaDiscord } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"
import { RiLinkedinFill } from "react-icons/ri"



export const Footer = () => {
    const events = ["Top Event", "Latest Event", "All Events", "Event Near You", "Create Event"]
    const resources = ["Learn", "Blog", "Documentations","Newsletter", "Help Center"]
    const company = ["Home", "About", "Partner", "Contribute"]
    return (
    <Box
    w="100%"
    sx={{"backgroundImage": "radial-gradient(circle at 0% 10%, #e0c0f8, white 20%, 20%, transparent), radial-gradient(150% 200% at 50% 50%, #c1ffde, white 20%)"}}
    p="10% 0 2%"
    >
        <Grid
        w="70%"
        mx="15%"
        templateColumns='repeat(5, 1fr)'
        gap={5}
        fontFamily='Lato'
        >
        <GridItem colSpan={2} p="1.5rem 0 1.5rem 3rem">
            <Text letterSpacing="0.2rem" fontSize="2xl" fontFamily='Poppins' fontWeight="bold" py="0.2rem" backgroundClip="text" bgGradient='linear(to-br, purple.700, red.900 70%)'>
                EVENTFLOW
            </Text>
            <Text pb="1rem" pt="0.5rem" color='purple.900'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
            <Text color='purple.900' fontWeight='extrabold' fontFamily="Lato" fontSize="18px" mb="0.5rem" >Join our Community</Text>
            <Flex gap={5}>
                <BsTwitter />
                <AiFillInstagram />
                <BsTelegram />
                <FaDiscord />
                <RiLinkedinFill />
            </Flex>
        </GridItem>
        <GridItem sx={{justifySelf: "center"}}>
            <Heading as='h5' fontSize='xl' fontWeight='extrabold' color='purple.900' pb={3}>Event</Heading>
            <List spacing={1}>
                {events.map((item, index) =>
                    <ListItem
                    key={index}
                    color="purple.900"
                    >
                        {item}
                    </ListItem>
                )}
            </List>
        </GridItem>
        <GridItem sx={{justifySelf: "center"}}>
        <Heading as='h5' fontSize='xl' fontWeight='extrabold' color='purple.900' pb={3}>Resources</Heading>
            <List spacing={1}>
                {resources.map((item, index) =>
                    <ListItem
                    key={index}
                    color="purple.900"
                    >
                        {item}
                    </ListItem>
                )}
            </List>
        </GridItem>
        <GridItem sx={{justifySelf: "center"}}>
            <Heading as='h5' fontSize='xl' fontWeight='extrabold' color='purple.900' pb={3}>Company</Heading>
                <List spacing={1}>
                    {company.map((item, index) =>
                        <ListItem
                        key={index}
                        color="purple.900"
                        >
                            {item}
                        </ListItem>
                    )}
                </List>
        </GridItem>
    </Grid>
    </Box>
    );
};

export default Footer;
