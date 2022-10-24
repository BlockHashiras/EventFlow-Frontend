import {
    Box,
    Grid,
    GridItem,
    Image,
    Text,
    Flex,
    Button,
    IconButton,
    InputGroup,
    InputLeftElement,
    Input,
    Select,
    Heading
} from "@chakra-ui/react";
import { MdOutlineWindow } from "react-icons/md"
import { AiOutlineTable } from "react-icons/ai"
import { FaSearch } from "react-icons/fa"
import { eventTicket } from "../index-components/data/Ticket";
import { IoLocationSharp } from "react-icons/io5"
import { ImPriceTag } from "react-icons/im"
import { BsFillCalendarDateFill } from "react-icons/bs"


const profile = () => {
    return (
        <Box
        className="profile-wrapper"
        py="5rem"
        px="12rem"
        >
            <Box
            bgImage="url('profile.png')"
            h="20rem"
            borderRadius="15px"
            bgPosition="center"
            bgSize="cover"
            >
                <Box
                bgColor="blackAlpha.600"
                w="100%"
                h="100%"
                borderRadius="15px"
                color="white"
                boxShadow="xl"
                >
                </Box>
                <Flex justify='center' mt="-7rem">
                    <Image alt="Kayzee" src="avatar.png" h="200px" w="200px" borderRadius="50%" />
                </Flex>
            </Box>
            <Box
            mt="10rem"
            >
                <Flex gap={4}>
                    <Flex gap={2}>
                        <IconButton
                        bg="green.100"
                        aria-label="by-four"
                        icon={<MdOutlineWindow />}
                        />
                        <IconButton
                        bg="green.100"
                        aria-label="by-four"
                        icon={<AiOutlineTable />}
                        />
                    </Flex>
                    <InputGroup bg="green.100" borderRadius="xl">
                        <InputLeftElement pointerEvents='none' color="green">
                            <FaSearch />
                        </InputLeftElement>
                        <Input type="text" placeholder="Search" focusBorderColor="transparent" />
                    </InputGroup>
                    <Select className="event-select" w="15rem" variant="filled" bg="green.100" placeholder="Sort by" focusBorderColor="transparent" _focus={{"backgroundColor": "#C6F6D5"}} _hover={{"backgroundColor": "#C6F6D5"}}>
                        <option style={{"backgroundColor": "#C6F6D5"}} value="Location">Location</option>
                        <option style={{"backgroundColor": "#C6F6D5"}} value="Price">Price</option>
                    </Select>
                </Flex>
            </Box>
            <Box
            pt="1rem"
            borderRadius="15px"
            >
                <Grid templateColumns="repeat(5, 1fr)" gap={4}>
                    { eventTicket.map((item, index)=>
                    index < 10 ?
                    <GridItem
                        key={index}
                        p='0.8rem'
                        bg="#c1ffdecf"
                        borderRadius="8px"
                        fontFamily='Lato'
                        boxShadow="lg"
                        >
                            <Image borderRadius="8px" src={item.image} alt="event-ticket" h="16rem" />
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
                    )}
                </Grid>
            </Box>
        </Box>
    );
}

export default profile;