;import { IoLocationSharp } from "react-icons/io5"
import { ImPriceTag } from "react-icons/im"
import { BsFillCalendarDateFill } from "react-icons/bs"
import { eventTicket } from "../../index-components/data/Ticket";
import { useRouter } from "next/router";
import {
    Box,
    Button,
    Flex,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalOverlay,
    Text,
    useDisclosure
} from "@chakra-ui/react"

const BuyTicket = () => {

    const { query } = useRouter()
    const PageID = Number(query.id)
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <Box
        className="buy-ticket-wrapper"
        py="10rem"
        px="12rem"
        h="100vh"
        >
            { eventTicket.map((item, index)=>
            index == PageID ?
            <>
            <Box
            width='50%'
            mx= "25%"
            p="2rem"
            bg="#c1ffdecf"
            borderRadius="15px"
            boxShadow="xl"
            >
                <Flex
                gap={8}
                >
                    <Box>
                        <Image borderRadius="8px" src={item.image} alt="event-ticket" h="16rem" />
                    </Box>
                    <Box>
                        <Flex gap='2' p="0.6" mb='5px'>
                            <Text pt="4px"><IoLocationSharp /></Text>
                            <Text>{item.location}</Text>
                        </Flex>
                        <Flex gap='2' p="0.6" mb="5px">
                            <Text pt="4px"><ImPriceTag /></Text>
                            <Text fontWeight='bold'>{item.ticketPrice}</Text>
                        </Flex>
                        <Flex gap='2' p="0.6" mb="5px">
                            <Text pt="4px"><BsFillCalendarDateFill /></Text>
                            <Text>{item.date}</Text>
                        </Flex>
                    </Box>
                </Flex>
                <Box>
                <Text
                fontWeight="extrabold"
                letterSpacing= "0.8px"
                my="0.4rem"
                >
                    Event Name: {item.eventname}
                </Text>
                </Box>
                <Flex
                gap={5}
                >
                    <Box>
                        <Button onClick={onOpen} fontSize="20px" _hover={{"backgroundColor": "#049f6b"}} _active={{"backgroundColor": "#05b47a"}} variant='solid' p="0 20px" letterSpacing="4px" bg='#02ba7d' w="100%" my={5}> Buy Ticket</Button>
                        {/* modal */}
                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent p="2rem" bg="#161f1a">
                                <ModalCloseButton />
                                <ModalBody>
                                    <Text>
                                        You are about to buy this ticket for the speculated amount, on clicking proceed, the actual amount will be deducted from your wallet.
                                    </Text>
                                </ModalBody>

                                <ModalFooter>
                                    <Button colorScheme='red' mr={3} onClick={onClose}>
                                    Close
                                    </Button>
                                    <Button variant='ghost' colorScheme="green">Proceed</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </Box>
                    <Box>
                        <Button fontSize="20px" _hover={{"backgroundColor": "#049f6b"}} _active={{"backgroundColor": "#05b47a"}} variant='solid' p="0 20px" letterSpacing="4px" bg='#02ba7d' w="100%" my={5}> Cancel</Button>
                    </Box>
                </Flex>
            </Box>
            </>: ""
            )}

        </Box>
    );
}

export default BuyTicket;