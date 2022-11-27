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
import { useContractWrite, usePrepareContractWrite, useContractRead, useWaitForTransaction, useAccount } from "wagmi";
import { CONTRACT_ADDRESS } from "../../component/constants";
import eventFlow_abi from "../../abi/eventflow_abi.json"
import { ethers } from "ethers";
import { useState, useEffect } from "react";

const BuyTicket = () => {

    const { query } = useRouter()
    const PageID = Number(query.id)

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [eventsData, setEventsData] = useState<any[]>([])
    const toast = useToast()
    const { address } = useAccount()

    console.log(address, "lkji")





    const {data: OneEvent} = useContractRead({
        address: CONTRACT_ADDRESS,
        abi: eventFlow_abi.abi,
        functionName: 'getOneEvent',
        args: [
            PageID
        ]
    })

    console.log(OneEvent, "jddsh")




    useEffect(() => {
    if(OneEvent){
        // @ts-ignore
            fetchIPFSJson(OneEvent)
    }


    async function fetchIPFSJson(elementGotten:any[]) {
        const url = makeURL(elementGotten[3]);
        const respond = await fetch(url);
        const metadata = await respond.json()
        const imageUrl = makeURL(metadata.image)
        var eventsDisplay: [string, any, any, any, any] = [imageUrl, elementGotten[1], elementGotten[2], (hexToDecimal(elementGotten[5]._hex)/1e18), epochToDate(elementGotten[4].toString())]
        setEventsData(eventsDisplay)
    }

    function makeURL(ipfsURI:string) {
        return ipfsURI.replace(/^ipfs:\/\//, "https://dweb.link/ipfs/");
    }

    const hexToDecimal = (hex:any) => parseInt(hex, 16);

    const epochToDate = (e:any) => {
        const date = new Date(Number(e))

        return date.toDateString()
    }




    }, [OneEvent])

    const amountToPay: string = eventsData[3]?.toLocaleString()

    console.log(amountToPay, "payment fee");


    const { config } = usePrepareContractWrite({
        address: CONTRACT_ADDRESS,
        abi: eventFlow_abi.abi,
        functionName: "buyEventTicket",
        args: [
            PageID
        ],
        overrides: {
            from: address,
            value: ethers.utils.parseEther(amountToPay)
        }
    })

    const {
        data: buyEventData,
        write: buyEventWrite,
        isLoading: buyEventLoading
    } = useContractWrite(config)


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

        buyEventWrite?.()
    }


    return (
        <Box
        className="buy-ticket-wrapper"
        py="10rem"
        px={{lg: "5rem", xl: "12rem"}}
        h="100vh"
        >
            <Box
            width='70%'
            mx= "15%"
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
                        <Image borderRadius="8px" src={eventsData[0]} alt="event-ticket" h="16rem" w="20rem" />
                    </Box>
                    <Box>
                        <Flex gap='2' p="0.6" mb='5px'>
                            <Text pt="4px"><IoLocationSharp /></Text>
                            <Text>{eventsData[2]}</Text>
                        </Flex>
                        <Flex gap='2' p="0.6" mb="5px">
                            <Text pt="4px"><ImPriceTag /></Text>
                            <Text fontWeight='bold'>{eventsData[3]?.toLocaleString()} ETH</Text>
                        </Flex>
                        <Flex gap='2' p="0.6" mb="5px">
                            <Text pt="4px"><BsFillCalendarDateFill /></Text>
                            <Text>{eventsData[4]}</Text>
                        </Flex>
                    </Box>
                </Flex>
                <Box>
                <Text
                fontWeight="extrabold"
                letterSpacing= "0.8px"
                my="0.4rem"
                >
                    Event Name: {eventsData[1]}
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
                            <ModalContent p="2rem 2rem 2rem 1rem" bg="#161f1a" color="white">
                                <ModalCloseButton />
                                <ModalBody>
                                    <Text>
                                        You are about to buy this ticket for <b>{eventsData[3]?.toLocaleString()} ETH</b>, on clicking proceed, the actual amount will be deducted from your wallet.
                                    </Text>
                                    <Text>The total money that will be spent on purchasing this ticket with transaction fee is </Text>
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
                                        {(buyEventLoading || buyEventLoader) ? "Loading..." : "Proceed"}
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
        </Box>
    );
}

export default BuyTicket;