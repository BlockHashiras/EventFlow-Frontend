import '@rainbow-me/rainbowkit/styles.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css"
import MainLayout from '../layout/MainLayout';


import {getDefaultWallets, RainbowKitProvider} from '@rainbow-me/rainbowkit';
import {
  WagmiConfig,
  createClient,
  configureChains,
  chain,
} from 'wagmi'

// import { alchemyProvider } from 'wagmi/providers/alchemy'
// import { infuraProvider } from 'wagmi/providers/infura'
import { publicProvider } from 'wagmi/providers/public'

const { chains, provider, webSocketProvider } = configureChains(
  // chains we support 
  [chain.mainnet, chain.goerli],
  [
  // alchemyProvider({apiKey: "fAO9lKh5UMDFsEW1eyT_AbY7kcppthXn"}), 
  // infuraProvider({apiKey: "e92c38757159497d97aad034c8e59232"}), 
  publicProvider()],
);

const {connectors} = getDefaultWallets({
  appName: "EventFlow",
  chains,
});

const client = createClient({
  autoConnect: true,
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
