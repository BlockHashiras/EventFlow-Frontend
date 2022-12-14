
import React from 'react'
import HeaderDescription from '../index-components/HeaderDescription'
import { Hiw, Latest, Team, Trending } from "../index-components/IndexBody"
import {
  Box,
  Text
} from '@chakra-ui/react'


const Index = () => {
  return (
    <Box fontFamily="Lato">
      <Box
      className='index-header'
      p='5rem 6rem 0rem 6rem'
      width="100%"
      height="100vh"
      color="purple.900"
      >
        <HeaderDescription />
      </Box>
      <Box
      className='index-trend'
      id="trending"
      w="100%"
      color="purple.900"
      >
        <Trending />
      </Box>
      <Box
      className='index-latest'
      id="latest"
      w="100%"
      color="purple.900"
      >
        <Latest />
      </Box>
      <Box
      className='index-hiw'
      w="100%"
      color="purple.900"
      >
        <Hiw />
      </Box>
      <Box w="100%" color="purple.900" className='index-team'>
        <Team />
      </Box>
    </Box>
  )
}

export default Index