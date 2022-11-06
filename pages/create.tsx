import { Box, Button, color, Flex, Input, Textarea, Text} from "@chakra-ui/react";
import { useContractWrite } from "wagmi";
import useForm from './Hooks/useForm';
import eventFlow_abi from "./abi/EventFlow.json"
import { useState } from "react";

// interface IuseForm  {
//     values: any,
//     errors: any,
//     handleChange: any,
//     handleSubmit: any
// };

function create()  {

    const eventAddress = "0x7a7B6453DfacC5d101c4259f471927CEBfF9C87b"
    const [eventValues, setEventValues] = useState<any>({
        description:'',
        location:'',
        image:'',
        datetime:'',
        title:'',
        price:''
    })

    const [eventErrors, setEventErrors] = useState<any>({
        description:'',
        location:'',
        image:'',
        datetime:'',
        title:'',
        price:''
    })
    


    //Final submit function
    const onsubmit = () => {

        console.log("Callback function when form is submitted!");
        console.log("Form Values ", values);
        setEventValues(values)
        setEventErrors(errors)
        eventWrite?.(values);
    }

    //Custom hook call
    const {handleChange, values, errors, handleSubmit} = useForm(onsubmit);

    const {
        data: eventData,
        write: eventWrite,
        isLoading: eventLoading
    } = useContractWrite({
        mode: 'recklesslyUnprepared',
        addressOrName: eventAddress,
        contractInterface: eventFlow_abi,
        functionName: 'createEvent',
        args:[
            eventValues.description,
            eventValues.location,
            eventValues.image,
            eventValues.datetime,
            eventValues.title,
            eventValues.price
        ]
    })


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
                <form onSubmit={handleSubmit} >
                    <Box
                    w="100%"
                    bg="purple.700"
                    m="1rem 0 0 0"
                    p=""
                    borderRadius="10px"
                    >
                        <Input
                        // isRequired={true}
                        type= "text"
                        name="title"
                        onChange={handleChange}
                        placeholder='Event Title'
                        letterSpacing="tighter"
                        border="0"
                        p="1.5rem"
                        color="purple.100"
                        fontSize="2xl"
                        fontFamily="monospace"
                        focusBorderColor='transparent'
                        _placeholder={{fontFamily:"monospace", color: "#d6bcfaaa"}}
                        />
                        {
                            eventErrors.title && <h3>{eventErrors.title}</h3>
                        }
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
                            // isRequired={true}
                            type= "text"
                            name="location"
                            onChange={handleChange}
                            placeholder='Event Location'
                            letterSpacing="tighter"
                            border="0"
                            p="1.5rem"
                            color="purple.100"
                            fontSize="2xl"
                            fontFamily="monospace"
                            focusBorderColor='transparent'
                            _placeholder={{fontFamily:"monospace", color: "#d6bcfaaa"}}
                            />
                            {
                                eventErrors.location && <h3>{eventErrors.location}</h3>
                            }
                        </Box>
                        <Box
                        bg="purple.700"
                        m="1rem 0 0 0"
                        borderRadius="10px"
                        >
                            <Input
                            // isRequired={true}
                            type= "number"
                            name="price"
                            onChange={handleChange}
                            placeholder='Ticket Price (in $)'
                            letterSpacing="tighter"
                            border="0"
                            p="1.5rem"
                            color="purple.100"
                            fontSize="2xl"
                            fontFamily="monospace"
                            focusBorderColor='transparent'
                            _placeholder={{fontFamily:"monospace", color: "#d6bcfaaa"}}
                            />
                            {
                                eventErrors.price && <h3>{eventErrors.price}</h3>
                            }
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
                            // isRequired={true}
                            name="datetime"
                            onChange={handleChange}
                            placeholder="Date and Time"
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
                                <Input name="image" type="file" opacity="0" h="0" border="0" />
                                {
                                    eventErrors.title && <h3>{eventErrors.title}</h3>
                                }
                            </label>
                        </Box>
                    </Flex>
                    <Box
                    w="100%"
                    bg="purple.700"
                    m="1rem 0 0 0"
                    p=""
                    borderRadius="10px"
                    >   
                        <Textarea
                            // value={value}
                            name="description"
                            onChange={handleChange}
                            placeholder='Event Description'
                            size='sm'
                            letterSpacing="tighter"
                            border="0"
                            p="1.5rem"
                            color="purple.100"
                            fontSize="2xl"
                            fontFamily="monospace"
                            focusBorderColor='transparent'
                            _placeholder={{fontFamily:"monospace", color: "#d6bcfaaa"}}
                        />
                        {
                            eventErrors.title && <h3>{eventErrors.title}</h3>
                        }
                    </Box>
                    <Button type="submit" fontSize="20px" _hover={{"backgroundColor": "#049f6b"}} _active={{"backgroundColor": "#05b47a"}} variant='solid' p="0 20px" letterSpacing="4px" bg='#02ba7d' w="100%" my={5}>Create Event</Button>
                </form>
            </Box>
        </Box>
    );
}

export default create;