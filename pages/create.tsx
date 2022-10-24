import { Box, Button, color, Flex, Input, Text} from "@chakra-ui/react";

const create = () => {
    const validateEventName = (value: any) => {
        let error
        if(!value){
            error = "Event name is required"
        }
        return error
    }
    const onsubmit = async (e: any) => {
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
                <form onSubmit={onsubmit}>
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
                                p="10px 35px"
                                fontWeight="extrabold"
                                >
                                    Upload Event Ticket
                                </Text>
                                <Input type="file" opacity="0" h="0" border="0" />
                            </label>
                        </Box>
                    </Flex>
                    <Button fontSize="20px" _hover={{"backgroundColor": "#049f6b"}} _active={{"backgroundColor": "#05b47a"}} variant='solid' p="0 20px" letterSpacing="4px" bg='#02ba7d' w="100%" my={5}>Create Event</Button>
                </form>
            </Box>
        </Box>
    );
}

export default create;