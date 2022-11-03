import {
    Flex,
    Box,
    Heading,
    Select,
    Text
} from "@chakra-ui/react"
import { MdArrowDropDown } from "react-icons/md";

const PortfolioHead = () => {
    return (
        <Flex
        justifyContent="space-between"
        >
            <Box>
                <Heading>Portfolio</Heading>
            </Box>
            <Flex gap={4}>
                <Select
                variant="filled"
                bg="#02ba7d"
                icon={<MdArrowDropDown />}
                borderColor="#05b47a"
                _active={{
                    "backgroundColor": "#05b47a",
                    "borderColor": "#05b47a"
                }}
                _hover={{
                    "backgroundColor": "#05b47a",
                    "borderColor": "#05b47a"
                }}
                _focusVisible={{
                    "backgroundColor": "#05b47a",
                    "borderColor": "#05b47a"
                }}
                >
                    <option style={{"backgroundColor": "#c1ffdecf"}} value="ethereum">Ethereum</option>
                    <option style={{"backgroundColor": "#c1ffdecf"}} value="bitcoin">Bitcoin</option>
                    <option style={{"backgroundColor": "#c1ffdecf"}} value="polkadot">Polkadot</option>
                    <option style={{"backgroundColor": "#c1ffdecf"}} value="algorand">Algorand</option>
                    <option style={{"backgroundColor": "#c1ffdecf"}} value="near">Near</option>
                    <option style={{"backgroundColor": "#c1ffdecf"}} value="fantom">Fantom</option>
                    <option style={{"backgroundColor": "#c1ffdecf"}} value="harmony">Harmony</option>
                </Select>
                <Box>
                    <Text fontWeight="bold">Fast</Text>
                    <Text textAlign="center">0.00</Text>
                </Box>
                <Box>
                    <Text fontWeight="bold">Avgerage</Text>
                    <Text textAlign="center">0.00</Text>
                </Box>
                <Box>
                    <Text fontWeight="bold">Slow</Text>
                    <Text textAlign="center">0.00</Text>
                </Box>
            </Flex>
        </Flex>
    );
}

export default PortfolioHead;