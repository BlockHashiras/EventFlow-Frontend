import { Box, Button, Flex, Input, Text, useToast} from "@chakra-ui/react";
import { useState } from "react";
import { ChangeEvent } from "react";

const Create = () => {
    const[imageUpload, setImageUpload] = useState<File | null>(null);
    const[previewUrl, setPreviewUrl] = useState<string | null>(null);

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

    const handlesubmit = async (e: any) => {
        console.log("submit")
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
                            placeholder='Location'
                            letterSpacing="tighter"
                            border="0"
                            p="1.5rem"
                            color="purple.100"
                            fontSize="2xl"
                            fontFamily="monospace"
                            focusBorderColor='transparent'
                            _placeholder={{fontFamily:"monospace", color: "#d6bcfaaa"}}
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
                            placeholder='Price'
                            letterSpacing="tighter"
                            border="0"
                            p="1.5rem"
                            color="purple.100"
                            fontSize="2xl"
                            fontFamily="monospace"
                            focusBorderColor='transparent'
                            _placeholder={{fontFamily:"monospace", color: "#d6bcfaaa"}}
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
                    <Button
                    fontSize="20px"
                    _hover={{"backgroundColor":"#049f6b"}}
                    _active={{"backgroundColor": "#05b47a"}}
                    variant='solid' p="0 20px"
                    letterSpacing="4px"
                    bg='#02ba7d'
                    w="100%"
                    my={5}
                    onClick={handlesubmit}
                    >
                        Create Event
                    </Button>
                </form>
            </Box>
        </Box>
    );
}

export default Create;