
import React from 'react'
import HeaderDescription from '../layout/header-component/HeaderDescription'
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
    </>
  )
}

export default index