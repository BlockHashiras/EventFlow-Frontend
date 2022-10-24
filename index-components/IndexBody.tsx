import {
    Box,
    Image,
    Grid,
    GridItem,
    Heading,
    Text,
    Flex,
    Button,
    Avatar,
    Stack,
} from "@chakra-ui/react";
import { eventTicket } from "./data/Ticket";
import { HIWData } from "./data/HIWData";
import { TeamData } from "./data/TeamData";
import { IoLocationSharp } from "react-icons/io5"
import { ImPriceTag } from "react-icons/im"
import { BsFillCalendarDateFill } from "react-icons/bs"
import Link from "next/link";

export const Trending = () => {
    return (
        <Box w="75%" mx='12.5%' p='2rem 4rem' color='purple.900'>
            <Heading fontFamily="Lato" textAlign='center' mb='5%'>Trending Events</Heading>
            <Grid templateColumns='repeat(4, 1fr)' gap={4} p='1rem'>
                {
                    eventTicket.map((item, index) =>
                        index < 8 ?
                        <GridItem
                        h="25rem"
                        bg="#c1ffdecf"
                        key={index}
                        p='0.8rem'
                        borderRadius="8px"
                        fontFamily='Lato'
                        boxShadow='lg'
                        >
                            <Image borderRadius="8px" src={item.image} alt="ticket" h="16rem" />
                            <Box>
                                <Text
                                fontWeight="extrabold"
                                letterSpacing= "0.8px"
                                my="0.4rem"
                                >
                                    {item.eventname}
                                </Text>
                                <Flex gap='2' p="0.6">
                                    <Text pt="4px"><IoLocationSharp /></Text>
                                    <Text>{item.location}</Text>
                                </Flex>
                                <Flex gap='2' p="0.6">
                                    <Text pt="4px"><ImPriceTag /></Text>
                                    <Text fontWeight='bold'>{item.ticketPrice}</Text>
                                </Flex>
                                <Flex gap='2' p="0.6">
                                    <Text pt="4px"><BsFillCalendarDateFill /></Text>
                                    <Text>{item.date}</Text>
                                </Flex>
                            </Box>
                        </GridItem> : ""
                    )
                }
            </Grid>
            <Flex justify='space-evenly' mt='2rem'><Button px="2rem" bg='#02ba7d'  _hover={{"backgroundColor": "#049f6b"}} _active={{"backgroundColor": "#05b47a"}}>Explore</Button></Flex>
        </Box>
    );
}

export const Latest = () => {
    return(
        <Box w="75%" mx='12.5%' p='2rem 4rem' color='purple.900'>
            <Heading fontFamily="Lato" textAlign='center' mb='5%'>Latest Events</Heading>
            <Grid templateColumns='repeat(4, 1fr)' gap={4} p='1rem'>
                {
                    eventTicket.map((item, index) =>
                        index < 4 ?
                        <GridItem
                        h="25rem"
                        bg="#c1ffdecf"
                        key={index}
                        p='0.8rem'
                        borderRadius="8px"
                        fontFamily='Lato'
                        boxShadow='lg'
                        >
                            <Image borderRadius="8px" src={item.image} alt="ticket" h="16rem" />
                            <Box>
                                <Text
                                fontWeight="extrabold"
                                letterSpacing= "0.8px"
                                my="0.4rem"
                                >
                                    {item.eventname}
                                </Text>
                                <Flex gap='2' p="0.6">
                                    <Text pt="4px"><IoLocationSharp /></Text>
                                    <Text>{item.location}</Text>
                                </Flex>
                                <Flex gap='2' p="0.6">
                                    <Text pt="4px"><ImPriceTag /></Text>
                                    <Text fontWeight='bold'>{item.ticketPrice}</Text>
                                </Flex>
                                <Flex gap='2' p="0.6">
                                    <Text pt="4px"><BsFillCalendarDateFill /></Text>
                                    <Text>{item.date}</Text>
                                </Flex>
                            </Box>
                        </GridItem> : ""
                    )
                }
            </Grid>
            <Flex justify='space-evenly' mt='2rem'><Button px="2rem" bg='#02ba7d'  _hover={{"backgroundColor": "#049f6b"}} _active={{"backgroundColor": "#05b47a"}}>Explore</Button></Flex>
        </Box>
    )
}
export const Hiw = () => {
    return(
        <Box w="75%" mx='12.5%' p='1rem 4rem' color='purple.900'>
            <Heading fontFamily="Lato" textAlign='center' my='2%'>How it works</Heading>
            <Grid templateColumns="repeat(3, 1fr)" gap={5} p="1rem">
                {
                    HIWData.map((item, index) =>
                        <GridItem
                        key={index}
                        fontFamily='Lato'
                        >
                            <Image src={item.imageHeader} alt="HIW- image" h="40px" w="40px" m="1.5rem 45%"/>
                            <Heading textAlign="center" as='h4' size="md">{item.title}</Heading>
                            <Text mt="1.5rem" textAlign="center" >{item.description}</Text>
                        </GridItem>
                    )
                }
            </Grid>
        </Box>
    )
}

export const Team = () => {
    return(
        <Box w="70%" mx="15%" p="2rem 4rem" color="purple.900">
            <Heading textAlign='center' my='5%'>Eventflow Team</Heading>
            <Grid templateColumns="repeat(3, 1fr)" gap={10} p="1rem">
                {
                    TeamData.map((item, index) =>
                    <GridItem
                    key={index}
                    fontFamily='Lato'
                    bg="green.50"
                    rounded="md"
                    boxShadow="2xl"
                    >
                        <Box
                        >
                            <Image src={item.bgImage} alt="bg-image" w="100%" h="160px"/>
                        </Box>
                        <Flex justify='center' mt={-12}>
                            <Avatar name={item.name} src={item.profilePics} size='xl' />
                        </Flex>
                        <Box p={6}>
                            <Stack spacing={0} align='center' mb={5}>
                                <Heading fontSize='2xl' fontFamily='Lato'>{item.name}</Heading>
                                <Text color='purple.500'>{item.stack}</Text>
                            </Stack>
                        </Box>
                        <Link href={item.twitter}>
                            <a target="_blank" rel="noopener noreferrer">
                                <Button w="90%" fontFamily="Lato" m="3rem 1rem 2rem 1rem" colorScheme="green" variant="solid">Follow</Button>
                            </a>
                        </Link>
                    </GridItem>)
                }
            </Grid>
        </Box>
    )
}
