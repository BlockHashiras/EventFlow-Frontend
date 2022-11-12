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
//@ts-ignore
import CoinGecko from 'coingecko-api';
const coinGeckoClient = new CoinGecko();

const portfolio = (props:any) => {

    const tokens = ["ETH", "USDT", "USDC", "MATIC", "SHIB", "UNI", "LINK", "CRO", "APE", "SAND", "MANA", "AAVE", "MKR"]
        
    const {data} = props.result;

    //@ts-ignore
    const formatPercent = (number) => {
        return `${new Number(number).toFixed(2)}%`;
    }
    
    //@ts-ignore
    const formatDollar = (number, maximumSignificantDigits) => {
        return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumSignificantDigits
        }).format(number)
    }

    const filtered = data.filter((coin:any) => tokens.includes(`${coin.symbol.toUpperCase()}`))

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
                                    <Th>24H Change</Th>
                                    <Th>Price ($)</Th>
                                    <Th>Balance ($)</Th>
                                </Tr>
                            </Thead>
                            <Tbody>

                                {//@ts-ignore
                                filtered.map((coin) => {
                                    
                                    return(
                                        <Tr key={coin.id}>
                                            <Td>
                                                <Flex alignItems="center">
                                                    <img 
                                                    src={coin.image} 
                                                    style={{width: 25, height: 25, marginRight: 10}} 
                                                    />
                                                    <span>{coin.symbol.toUpperCase()}</span>
                                                </Flex>
                                            </Td>
                                            <Td> 
                                                <Text
                                                color={coin.price_change_percentage_24h > 0 ? (
                                                    'green.500' 
                                                ) : 'red.500'}
                                                >
                                                {coin.price_change_percentage_24h > 0 ? `+ ${formatPercent(coin.price_change_percentage_24h)}` 
                                                :formatPercent(coin.price_change_percentage_24h)}
                                                </Text>
                                            </Td>
                                            <Td>{formatDollar(coin.current_price, 20)}</Td>
                                            <Td>{formatDollar(coin.market_cap, 12)}</Td>
                                        </Tr>
                                    );
                                } )}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </Box>
    );
}

export default portfolio;

export async function getServerSideProps(context:any) {
    const params = {
        //@ts-ignore
        order: CoinGecko.ORDER.MARKET_CAP_DESC
    };
    //@ts-ignore
    const result = await coinGeckoClient.coins.markets({params});
    return {
        props: {
            result
        },
    }
}