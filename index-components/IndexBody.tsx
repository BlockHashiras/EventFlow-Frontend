import {
    Box,
    Image,
    Grid,
    GridItem,
    Heading,
    Text,
    Flex,
    Button,
} from "@chakra-ui/react";
import { eventTicket } from "./data/Ticket";
import { IoLocationSharp } from "react-icons/io5"
import { ImPriceTag } from "react-icons/im"
import { BsFillCalendarDateFill } from "react-icons/bs"

export const IndexBody = () => {
    eventTicket.map(item => console.log(item))
    return (
        <Box w="70%" mx='15%' p='2rem 4rem' color='purple.900'>
            <Heading fontFamily="Lato" textAlign='center' mb='5%'>Trending Events</Heading>
            <Grid templateColumns='repeat(4, 1fr)' gap={4} p='1rem'>
                {
                    eventTicket.map((item, index) =>
                        index < 8 ?
                        <GridItem
                        w='18rem'
                        h="25rem"
                        bg="#c1ffdecf"
                        key={index}
                        p='0.8rem'
                        borderRadius="8px"
                        fontFamily='Lato'
                        boxShadow='lg'
                        >
                            <Image borderRadius="8px" src={item.image} alt="ticket" w="16.5rem" h="16rem" />
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
