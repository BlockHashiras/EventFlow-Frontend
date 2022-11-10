import {
    Box,
    Flex,
    Heading,
    Select,
    Skeleton,
    SkeletonText,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr
} from "@chakra-ui/react";
import PortfolioHead from "../index-components/portfolio-component/PortfolioHead";
const Portfolio = () => {
    const networks = ["ETH", "USDT", "USDC", "MATIC", "SHIB", "UNI", "LINK", "CRO", "APE", "SAND", "MANA", "AAVE", "MKR"]
    return (
        <Box
        className="portfolio-wrapper"
        px="12rem"
        // h="100vh"
        pt="10rem"
        >
            <Box
            w="80%"
            mx="10%"
            bg="#c1ffdecf"
            borderRadius="15px"
            boxShadow="xl"
            p="2rem"
            >
                <PortfolioHead />
                <Box my="1.2rem" w="100%" bg="#a4ddbfce" p="1rem" borderRadius="6px">
                    <Heading as="h4" color="#7f739b" size="md">
                        Networth
                    </Heading>
                    <Text fontSize="2xl" mt="1.5">$0.00</Text>
                </Box>
                <Box>
                    <Heading as="h4" size="md" color="purple.800">Assets</Heading>
                    <TableContainer>
                        <Table variant="simple" colorScheme="purple">
                            <TableCaption color="purple.800">Add token features coming soon</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>Token</Th>
                                    <Th>Price ($)</Th>
                                    <Th>Balance ($)</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    networks.map((item, index)=>
                                    <Tr key={index}>
                                        <Td>{item}</Td>
                                        <Td>0.00</Td>
                                        <Td>0.00</Td>
                                    </Tr>
                                )}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </Box>
    );
}

export default Portfolio;