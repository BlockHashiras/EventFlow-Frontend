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
    useDisclosure,
    useToast
} from "@chakra-ui/react"
import Link from "next/link";
import { useContractWrite, useContractRead, useWaitForTransaction } from "wagmi";
import { CONTRACT_ADDRESS } from "../../component/constants";
import eventFlow_abi from "../../abi/eventflow_abi.json"
import { ethers } from "ethers";
import { useState, useEffect } from "react";

const BuyTicket = () => {

    const { query } = useRouter()
    const PageID = Number(query.id)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ticketPrice, setTicketPrice] = useState<number>()

    console.log(ticketPrice, "price")

    const {data: OneEvent} = useContractRead({
        addressOrName: CONTRACT_ADDRESS,
        contractInterface: eventFlow_abi.abi,
        functionName: 'getOneEvent',
        args: [
            PageID
        ]
    })



    const [uri, setUri] = useState("")
    const [image, setImage] = useState("")

    const toast = useToast()




    function makeURL(ipfsURI:string) {
        return ipfsURI.replace(/^ipfs:\/\//, "https://dweb.link/ipfs/");
    }


    const hexToDecimal = (hex:any) => parseInt(hex, 16);

    const epochToDate = (e:any) => {
        const date = new Date(e*1000)

        return date.toLocaleDateString("en-US")
    }



    useEffect(() => {
        async function fetchIPFSJson(ipfsURI:string) {
            const url = makeURL(ipfsURI);
            const respond = await fetch(url);
            const metadata = await respond.json()
            const imageUrl = makeURL(metadata.image)
            console.log(imageUrl, "see")

            setImage(imageUrl)

        }

        fetchIPFSJson(uri)

    }, [uri])

    const {
        data: buyEventData,
        write: buyEventWrite,
        isLoading: buyEventLoading
    } = useContractWrite({
        mode: 'recklesslyUnprepared',
        addressOrName: CONTRACT_ADDRESS,
        contractInterface: eventFlow_abi.abi,
        functionName: 'buyEventTicket',
        args: [
            PageID
        ],
        overrides: {value: ticketPrice}
    })

    const {isLoading: buyEventLoader} = useWaitForTransaction({
        hash: buyEventData?.hash,
        onSuccess(){
            toast({
                title:'Successful',
                description: "Purchase of ticket is successful",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: 'top'
            })
        },
        onError(data){
            toast({
                title:'Error',
                description: "Error in purchasing ticket",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: 'top'
            })
            console.log(data)
        }

    })

    const handleSubmit = (e:any) => {
        e.preventDefault();

        buyEventWrite()
    }


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
            color="purple.900"
            key={index}
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
                            <ModalContent p="2rem 2rem 2rem 1rem" bg="#161f1a">
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
                                    <Button variant='ghost' colorScheme="green" onClick={handleSubmit}>Proceed</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </Box>
                    <Box>
                        <Link href="/event">
                            <Button fontSize="20px" _hover={{"backgroundColor": "#049f6b"}} _active={{"backgroundColor": "#05b47a"}} variant='solid' p="0 20px" letterSpacing="4px" bg='#02ba7d' w="100%" my={5} > Cancel</Button>
                        </Link>
                    </Box>
                </Flex>
            </Box>
            </>
            : ""
            )}
            {
                OneEvent? (OneEvent[0] != 0)?
                <>
                {setUri(OneEvent[4])}
                {setTicketPrice(OneEvent[6]._hex)}
                    <Box
                    width='50%'
                    mx= "25%"
                    p="2rem"
                    bg="#c1ffdecf"
                    borderRadius="15px"
                    boxShadow="xl"
                    color="purple.900"
                    >
                        <Flex
                        gap={8}
                        >
                            <Box>
                                <Image borderRadius="8px" src={image} alt="event-ticket" h="16rem" />
                            </Box>
                            <Box>
                                <Flex gap='2' p="0.6" mb='5px'>
                                    <Text pt="4px"><IoLocationSharp /></Text>
                                    <Text>{OneEvent[3]}</Text>
                                </Flex>
                                <Flex gap='2' p="0.6" mb="5px">
                                    <Text pt="4px"><ImPriceTag /></Text>
                                    <Text fontWeight='bold'>{(hexToDecimal(OneEvent[6]._hex)/1e18).toLocaleString()}</Text>
                                </Flex>
                                <Flex gap='2' p="0.6" mb="5px">
                                    <Text pt="4px"><BsFillCalendarDateFill /></Text>
                                    <Text>{epochToDate(OneEvent[5])}</Text>
                                </Flex>
                            </Box>
                        </Flex>
                        <Box>
                        <Text
                        fontWeight="extrabold"
                        letterSpacing= "0.8px"
                        my="0.4rem"
                        >
                            Event Name: {OneEvent[1]}
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
                                    <ModalContent p="2rem 2rem 2rem 1rem" bg="#161f1a">
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
                                            <Button
                                            variant='ghost'
                                            colorScheme="green"
                                            onClick={handleSubmit}
                                            disabled={buyEventLoading || buyEventLoader}
                                            >
                                                {(buyEventLoading || buyEventLoader)? "Loading": "Proceed"}
                                            </Button>
                                        </ModalFooter>
                                    </ModalContent>
                                </Modal>
                            </Box>
                            <Box>
                                <Link href="/event">
                                    <Button fontSize="20px" _hover={{"backgroundColor": "#049f6b"}} _active={{"backgroundColor": "#05b47a"}} variant='solid' p="0 20px" letterSpacing="4px" bg='#02ba7d' w="100%" my={5} > Cancel</Button>
                                </Link>
                            </Box>
                        </Flex>
                    </Box>
                </>: "": ""
            }

        </Box>
    );
}

export default BuyTicket;