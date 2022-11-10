import '@rainbow-me/rainbowkit/styles.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css"
import MainLayout from '../layout/MainLayout';


import {getDefaultWallets, RainbowKitProvider, Theme} from '@rainbow-me/rainbowkit';
import {
  WagmiConfig,
  createClient,
  configureChains,
  chain,
} from 'wagmi'

import { publicProvider } from 'wagmi/providers/public'

const { chains, provider, webSocketProvider } = configureChains(
  // chains we support
  [chain.goerli, chain.mainnet],
  [publicProvider()]
);

const {connectors} = getDefaultWallets({
  appName: "EventFlow",
  chains,
});

const client = createClient({
  autoConnect: false,
  connectors,
  provider,
  webSocketProvider,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider chains={chains}>
        <ChakraProvider>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ChakraProvider>
      </RainbowKitProvider>

    </WagmiConfig>
  )
}

export default MyApp
