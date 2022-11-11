import { Box, Button, Flex, Input, Text, useToast} from "@chakra-ui/react";
import { useState } from "react";
import { ChangeEvent } from "react";
import { NFT_STORAGE_KEY, CONTRACT_ADDRESS } from "../component/constants";
import { NFTStorage } from "nft.storage";
import { useAccount, useContractWrite, useWaitForTransaction } from "wagmi";
import Eventflow_abi from "../abi/eventflow_abi.json"
import { ethers } from "ethers";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Create = () => {
    const[imageUpload, setImageUpload] = useState<File | null>(null);
    const[previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [cid, setCid] = useState("")
    const [eventTitle, setEventTitle] = useState("")
    const [eventLocation, setEventLocation] = useState("")
    const [eventPrice, setEventPrice] = useState("")
    const [eventDate, setEventDate] = useState("")

    const {address} = useAccount()


    const storage = new NFTStorage({token: NFT_STORAGE_KEY})


    console.log(cid, "cid")
    console.log(eventDate, "date")



    async function check(_name: string) {
        let metadata;
        if(imageUpload){
                metadata = await storage.store({
                name: _name,
                description: "Eventflow ticket",
                image: imageUpload
            })
        }
        if(metadata){
            setCid(metadata.url)
        }

        createEventWrite()

    }

    const {
        data: createEventData,
        write: createEventWrite,
        isLoading: createEventLoader
    } = useContractWrite({
        mode: 'recklesslyUnprepared',
        addressOrName: CONTRACT_ADDRESS,
        contractInterface: Eventflow_abi.abi,
        functionName: 'createEvent',
        args: [
            eventTitle,
            "Eventflow ticket",
            eventLocation,
            cid,
            Date.parse(eventDate),
            ethers.utils.parseEther(eventPrice? eventPrice.toString(): "0"),
            ethers.utils.parseEther("1000000")
        ]

    })

    const {isLoading: createEventLoading } = useWaitForTransaction({
        hash: createEventData?.hash,
        onSuccess(){
            toast({
                title:'Successful',
                description: "Event has been created successfully",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: 'top'
            })

            console.log("vhg,kuv");

        },
        onError(data){
            toast({
                title:'Error',
                description: "Event cannot be created",
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

        setCid("")
        check(eventTitle)
        toast({
            title:'Notice',
            description: "This may take a while, please be patient",
            status: 'loading',
            duration: 9000,
            isClosable: true,
            position: 'top'
        })
    }






    const toast = useToast()

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
        px="12rem"
        py="5rem"
        >
            <Box
            w="40%"
            m="6rem 30%"
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
                        placeholder='Create Event'
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
                        {(createEventLoading || createEventLoader) ? "Loading" : "Create Event"}
                    </Button>:
                    <ConnectButton.Custom>
                    {({
                        account,
                        chain,
                        openAccountModal,
                        openChainModal,
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