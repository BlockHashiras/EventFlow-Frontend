import { Box, Button, Flex, Input, Text, useToast} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ChangeEvent } from "react";
import { NFT_STORAGE_KEY, CONTRACT_ADDRESS } from "../component/constants";
import { NFTStorage } from "nft.storage";
import { useAccount, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";
import Eventflow_abi from "../abi/eventflow_abi.json"
import { ethers } from "ethers";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/router";

const Create = () => {

    const route = useRouter()

    const[imageUpload, setImageUpload] = useState<File | null>(null);
    const[previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [cid, setCid] = useState("")
    const [uri, setUri] = useState("")
    const [eventTitle, setEventTitle] = useState("")
    const [eventLocation, setEventLocation] = useState("")
    const [eventPrice, setEventPrice] = useState("")
    const [eventDate, setEventDate] = useState("")

    const toast = useToast()

    const {address} = useAccount()


    const storage = new NFTStorage({token: NFT_STORAGE_KEY})

    console.log(cid, "sdll")






    async function check(_name: string) {
        let metadata;
        if(imageUpload){
            metadata = await storage.store({
                name: _name,
                description: "Eventflow ticket",
                image: imageUpload
            })

            setCid(metadata.url)
            eventCaller()
        }

    }



    async function eventCaller(){
        if(cid !== ''){
            createEventWrite?.()
        }

        console.log(cid, "cid")

    }





    const { config } = usePrepareContractWrite({
        address: CONTRACT_ADDRESS,
        abi: Eventflow_abi.abi,
        functionName: 'createEvent',
        args: [
            eventTitle,
            eventLocation,
            cid,
            Date.parse(eventDate),
            ethers.utils.parseEther(eventPrice? eventPrice.toString(): "0"),
            ethers.utils.parseEther("1000000")
        ]
    })

    const {
        data: createEventData,
        write: createEventWrite,
        isLoading: createEventLoader,
    } = useContractWrite(config)



    const { isLoading: createEventLoading, isSuccess: createEventSuccess, isError: createEventError } = useWaitForTransaction({
        hash: createEventData?.hash,
    })

    if(createEventSuccess){
        toast({
            title: 'Successful',
            description: "Event has been created successfully",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: 'top'
        })

        route.push("/")
    }
    if(createEventError){
        toast({
            title: 'Error',
            description: "Event cannot be created",
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top"
        })
    }



    const handleSubmit = (e:any) => {
        e.preventDefault();
        setCid("")
        check(eventTitle)
        toast({
            title:'Notice',
            description: "This may take a while, please be patient",
            status: 'loading',
            duration: 15000,
            isClosable: true,
            position: 'top'
        })
    }







    const onImageUploadChange = (e: ChangeEvent<HTMLInputElement>) => {
        const fileInput = e.target;

        if(!fileInput.files){
            toast({
                title:'Error',
                description: "No file was chosen",
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'top'
            })
            return;
        }

        if(!fileInput.files || fileInput.files.length == 0){
            toast({
                title:'Error',
                description: "File list is empty",
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'top'
            })
            return;
        }

        const file = fileInput.files[0];

        if(!file.type.startsWith("image")){
            toast({
                title:'Error',
                description: "Please select a valid image",
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'top'
            })

            return;
        }

        setImageUpload(file);
        setPreviewUrl(URL.createObjectURL(file))


        e.currentTarget.type = "text";
        e.currentTarget.type = "file";
    }


    return (
        <Box
        className="create-wrapper"
        px={{lg: "5rem", xl: "12rem"}}
        py="5rem"
        >
            <Box
            w="70%"
            m="6rem 15%"
            p="2rem"
            bg="#c1ffdecf"
            borderRadius="15px"
            boxShadow="xl"
            >
                <form>
                    <Box
                    w="100%"
                    bg="purple.700"
                    m="1rem 0 0 0"
                    p=""
                    borderRadius="10px"
                    >
                        <Input
                        isRequired={true}
                        type= "text"
                        placeholder='Event Title'
                        letterSpacing="tighter"
                        border="0"
                        p="1.5rem"
                        color="purple.100"
                        fontSize="2xl"
                        fontFamily="monospace"
                        focusBorderColor='transparent'
                        _placeholder={{fontFamily:"monospace", color: "#d6bcfaaa"}}
                        onChange={e => setEventTitle(e.target.value)}
                        value={eventTitle}
                        />
                    </Box>
                    <Flex
                    gap={5}
                    >
                        <Box
                        bg="purple.700"
                        m="1rem 0 0 0"
                        borderRadius="10px"
                        >
                            <Input
                            isRequired={true}
                            type= "text"
                            placeholder='Event Location'
                            letterSpacing="tighter"
                            border="0"
                            p="1.5rem"
                            color="purple.100"
                            fontSize="2xl"
                            fontFamily="monospace"
                            focusBorderColor='transparent'
                            _placeholder={{fontFamily:"monospace", color: "#d6bcfaaa"}}
                            onChange={e => setEventLocation(e.target.value)}
                            value={eventLocation}
                            />
                        </Box>
                        <Box
                        bg="purple.700"
                        m="1rem 0 0 0"
                        borderRadius="10px"
                        >
                            <Input
                            isRequired={true}
                            type= "number"
                            placeholder='Ticket Price'
                            letterSpacing="tighter"
                            border="0"
                            p="1.5rem"
                            color="purple.100"
                            fontSize="2xl"
                            fontFamily="monospace"
                            focusBorderColor='transparent'
                            _placeholder={{fontFamily:"monospace", color: "#d6bcfaaa"}}
                            onChange={e => setEventPrice(e.target.value)}
                            value={eventPrice}
                            />
                        </Box>
                    </Flex>
                    <Flex
                    gap={5}
                    >
                        <Box
                        bg="purple.700"
                        m="1rem 0 0 0"
                        borderRadius="10px"
                        w="61%"
                        >
                            <Input
                            isRequired={true}
                            placeholder="Select Date and Time"
                            size="md"
                            type="date"
                            border="0"
                            py="1.5rem"
                            px="3.45rem"
                            color="purple.100"
                            focusBorderColor="transparent"
                            _placeholder={{fontFamily:"monospace", color: "#d6bcfaaa"}}
                            onChange={e => setEventDate(e.target.value)}
                            />
                        </Box>
                        <Box
                        bg="purple.700"
                        m="1rem 0 0 0"
                        borderRadius="10px"
                        >
                            <label>
                                <Text
                                textAlign="center"
                                fontSize="lg"
                                color="purple.100"
                                position="absolute"
                                p="10px 40px"
                                fontWeight="extrabold"
                                >
                                    Upload Event Ticket
                                </Text>
                                <Input
                                type="file"
                                opacity="0"
                                h="0"
                                border="0"
                                accept="image/*"
                                onChange={onImageUploadChange}
                                />
                            </label>
                        </Box>
                    </Flex>
                    {
                        address?
                        <Button
                    fontSize="20px"
                    _hover={{"backgroundColor":"#049f6b"}}
                    _active={{"backgroundColor": "#05b47a"}}
                    variant='solid' p="0 20px"
                    letterSpacing="4px"
                    bg='#02ba7d'
                    w="100%"
                    my={5}
                    onClick={handleSubmit}
                    disabled={createEventLoading || createEventLoader}
                    >
                        {(createEventLoading || createEventLoader) ? "Loading..." : cid == ""? "Store Ticket to IPFS" : "Create Event"}
                    </Button>:
                    <ConnectButton.Custom>
                    {({
                        account,
                        chain,
                        openConnectModal,
                        mounted,
                    }) => {
                        const ready = mounted;
                        const connected =
                        ready &&
                        account &&
                        chain

                        return (
                        <div
                            {...(!ready && {
                            'aria-hidden': true,
                            'style': {
                                opacity: 0,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            },
                            })}
                        >
                            {(() => {
                            if (!connected) {
                                return (
                                <Button
                                fontSize="20px"
                                _hover={{"backgroundColor":"#049f6b"}}
                                _active={{"backgroundColor": "#05b47a"}}
                                variant='solid' p="0 20px"
                                letterSpacing="4px"
                                bg='#02ba7d'
                                w="100%"
                                my={5}
                                onClick={openConnectModal}
                                type="button">
                                    Connect
                                </Button>
                                );
                            }
                            })()}
                        </div>
                        );
                    }}
                    </ConnectButton.Custom>
                    }
                </form>
            </Box>
        </Box>
    );
}

export default Create;