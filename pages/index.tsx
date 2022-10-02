
import React from 'react'
import HeaderDescription from '../index-components/HeaderDescription'
import { IndexBody } from "../index-components/IndexBody"
import {
  Box,
  Text
} from '@chakra-ui/react'

const index = () => {
  return (
    <>
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
      w="100%"
      color="purple.900"
      >
        <IndexBody />
      </Box>
    </>
  )
}

export default index