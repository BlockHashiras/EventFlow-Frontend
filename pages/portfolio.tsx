import {
    Box,
    Flex,
    Heading,
    Image,
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
import axios from "axios";
import PortfolioHead from "../index-components/portfolio-component/PortfolioHead";
import {portfolioData} from "../index-components/portfolio-component/portfolioData.js";
//@ts-ignore
import CoinGecko from 'coingecko-api';
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { BsInfoCircle } from "react-icons/bs";
const coinGeckoClient = new CoinGecko();
import { Async } from "react-async";

const baseURL = "https://svc.blockdaemon.com/universal/v1/ethereum/goerli/account/";
// https://svc.blockdaemon.com/universal/v1/ethereum/goerli/account/0x7Bd5f674D8D82286d10B75d63CF18ea3c45d2AbD?assets=ethereum/contract/0xCF814a38aD6Fa868c9c7c03694A6C5f4D8d076b6/erc-20

const Portfolio = (props:any) => {
    const { address, isDisconnected } = useAccount();
    const [netWorth, setnetWorth] = useState("0.00");
    const [bal, setBal] = useState("0.00");
    const [contractAddr, setContractAddr] = useState("")

    const tokens = ["ETH", "USDT", "USDC", "MATIC", "SHIB", "UNI", "LINK", "CRO", "APE", "SAND", "MANA", "AAVE", "MKR"]

    const {data} = props.result;
    // console.log(contractAddr, "addresses");


    const tokenContracts = [
    "0xCF814a38aD6Fa868c9c7c03694A6C5f4D8d076b6",
    "0x83D6ce4805E26737F941C3690fac9590496EEef4",
    "0x1a68cF7e5e91F34e579eD3CCA0c67A3f815A3efd",
    "0xdaBcE6de4224D1E00A6F4127B133C09F509Ea0fd",
    "0xF3A5335fdECBa812be9fD077D0E95F466b09310B",
    "0x471a17564b5666D77d746f0CAb6376C3f1E51395",
    "0x29756C540C9d35860Ab8e4B56ff1eCF0c762edB7",
    "0x1365efced812f546C9Ce54EB3E9f7eb28251dB92",
    "0x2533D5c34faC1250EFa59A56b973D6dD9ca26F6d",
    "0x19E0986B428413176747231c695F1921bd337383",
    "0x7080C562a74A2657F2F75C926C972cf296E1E6FF",
    "0xC8a8A3d409A9264dbe0dc2d95a4a927A9eCFB2CE"];

    const getBalances:string[] = []

    console.log(getBalances, "bal");





    let reqInstance = axios.create({
        headers: {
            Authorization : `Bearer vJQcE8w64Azc1rpa4fIeVg4WcHAmaZejTuEQaTWILwzmZMHf`
        }
    })


    async function getTokenBalances(tokenAddress: string) {
        if (isDisconnected) {
            setBal("0.00")
        }
        else{
            await reqInstance.get(`${baseURL}${address}?assets=ethereum/contract/${tokenAddress}/erc-20`).then((response) => {
                getBalances.push(response.data[0].confirmed_balance);
                console.log(response.data[0].confirmed_balance)

                return response.data[0].confirmed_balance;
            })
        }
    }


    async function getBalance(){
        for(let i=0; i < tokenContracts.length; i++){
            getTokenBalances(tokenContracts[i])
        }
    }

    getBalance()




    const formatPercent = (number:any) => {
        return `${new Number(number).toFixed(2)}%`;
    }


    const formatDollar = (number:any, maximumSignificantDigits:any) => {
        return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumSignificantDigits
        }).format(number)
    }

    const filtered = data.filter((coin:any) => tokens.includes(`${coin.symbol.toUpperCase()}`))


    for(let i=0; i < filtered.length; i++){
        filtered[i].name = tokenContracts[i]
    }

    console.log(filtered, "check it")




    // useEffect(() => {
    //     getTokenBalances()

    // }, []);
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
                        Networth <br/>
                        <Text as="span" color="#7f739b" fontSize="0.9rem" fontWeight="light">
                            {isDisconnected ? <BsInfoCircle/> : ""}
                            {isDisconnected ? "connect wallet to see networth and balance" : ""}
                        </Text>
                    </Heading>
                    <Text fontSize="2xl" mt="1.5">${`${netWorth}`}</Text>
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
                                    <Th>Price</Th>
                                    <Th>Balance</Th>
                                </Tr>
                            </Thead>
                            <Tbody>

                                {//@ts-ignore
                                filtered.map((coin) => {
                                    return(
                                        <Tr key={coin.id}>
                                            <>
                                            <Td>
                                                <Flex alignItems="center">
                                                    <Image
                                                    src={coin.image} 
                                                    style={{width: 25, height: 25, marginRight: 10}}
                                                    alt="img"
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
                                            <Td>
                                                
                                            </Td>
                                            </>

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

export default Portfolio;

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