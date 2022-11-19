import {
    Flex,
    Box,
    Heading,
    Select,
    Text
} from "@chakra-ui/react"
import { MdArrowDropDown } from "react-icons/md";
import { useState, useEffect } from "react";
import axios from "axios";



const PortfolioHead = () => {


    const [protocol, setProtocol] = useState<string>("ethereum")


    // ethereum gas fee
    const [ethereumFast, setEthereumFast] = useState<number>(0)
    const [ethereumMedium, setEthereumMedium] = useState<number>(0)
    const [ethereumSlow, setEthereumSlow] = useState<number>(0)


    // other protocol gas fee
    const [protocolFeeFast, setProtocolFeeFast] = useState<number>(0)
    const [protocolFeeSlow, setProtocolFeeSlow] = useState<number>(0)
    const [protocolFeeMedium, setProtocolFeeMedium] = useState<number>(0)







    let reqInstance = axios.create({
        headers: {
            Authorization : `Bearer vJQcE8w64Azc1rpa4fIeVg4WcHAmaZejTuEQaTWILwzmZMHf`
        }
    })





    const handleChange = (e:any) => {
        setProtocol(e.target.value)
    }




    useEffect(() => {
        async function getGasFee(){
            if(protocol == "ethereum"){
                await reqInstance.get(`https://svc.blockdaemon.com/universal/v1/${protocol}/goerli/tx/estimate_fee`).then((response => {
                    setEthereumFast(response.data.estimated_fees.fast.max_total_fee)
                    setEthereumMedium(response.data.estimated_fees.medium.max_total_fee)
                    setEthereumSlow(response.data.estimated_fees.slow.max_total_fee)
            }))
            }
            else{
                await reqInstance.get(`https://svc.blockdaemon.com/universal/v1/${protocol}/testnet/tx/estimate_fee`).then((response => {
                    setProtocolFeeFast(response.data.estimated_fees.fast)
                    setProtocolFeeMedium(response.data.estimated_fees.medium)
                    setProtocolFeeSlow(response.data.estimated_fees.slow)
            }))

            }
        }

        getGasFee()
    }, [protocol])


    console.log(ethereumFast, ethereumMedium, ethereumSlow, "sdkhsd")
    console.log(protocolFeeFast, protocolFeeMedium, protocolFeeSlow, "sknjnds")

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
                onChange={handleChange}
                value={protocol}
                >
                    <option style={{"backgroundColor": "#c1ffdecf"}} value="ethereum">Ethereum</option>
                    <option style={{"backgroundColor": "#c1ffdecf"}} value="bitcoin">Bitcoin</option>
                    <option style={{"backgroundColor": "#c1ffdecf"}} value="bitcoincash">Bitcoin Cash</option>
                    <option style={{"backgroundColor": "#c1ffdecf"}} value="litecoin">Litecoin</option>
                </Select>
                <Box>
                    <Text fontWeight="bold">Fast</Text>
                    <Text textAlign="center">{protocol == "ethereum" ? ethereumFast/1e9 : protocolFeeFast}</Text>
                </Box>
                <Box>
                    <Text fontWeight="bold">Average</Text>
                    <Text textAlign="center">{protocol == "ethereum" ? ethereumMedium/1e9 : protocolFeeFast}</Text>
                </Box>
                <Box>
                    <Text fontWeight="bold">Slow</Text>
                    <Text textAlign="center">{protocol == "ethereum" ? ethereumSlow/1e9 : protocolFeeSlow}</Text>
                </Box>
            </Flex>
        </Flex>
    );
}

export default PortfolioHead;