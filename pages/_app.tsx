import '@rainbow-me/rainbowkit/styles.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css"
import MainLayout from '../layout/MainLayout';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { Chain } from '@rainbow-me/rainbowkit';
import { jsonRpcProvider } from "wagmi/providers/jsonRpc"
import theme from '../theme';


import {getDefaultWallets, RainbowKitProvider} from '@rainbow-me/rainbowkit';
import {
  WagmiConfig,
  createClient,
  configureChains,
  chain,
} from 'wagmi'

const alchemyId = process.env.EVENTFLOW_ALCHEMY



const { chains, provider, webSocketProvider } = configureChains(
  [chain.goerli],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: `https://eth-goerli.g.alchemy.com/v2/RcI6kAisXpQhOycB2S4qsvMuxTXZfR3P`,
        webSocket: `wss://eth-goerli.g.alchemy.com/v2/RcI6kAisXpQhOycB2S4qsvMuxTXZfR3P`,
      }),
    }),
  ]);

const {connectors} = getDefaultWallets({
  appName: "EventFlow",
  chains,
});

const client = createClient({
  autoConnect: true,
  connectors,
  provider
})

function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider chains={chains}>
        <ChakraProvider theme={theme}>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ChakraProvider>
      </RainbowKitProvider>

    </WagmiConfig>
  )
}

export default App
