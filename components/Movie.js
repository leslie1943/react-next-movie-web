import { Box, Heading, HStack, Image, Text } from '@chakra-ui/react'
import { MdMovie } from 'react-icons/md'
import { baseURL } from '../axiosConfig'
import axios from 'axios'

export default function Movie({ data }) {
  return (
    <Box maxW={1200} mx="auto" mt="20px">
      <HStack fontSize="24px">
        <MdMovie />
        <Heading as="h3" fontSize="24px">
          电影
        </Heading>
      </HStack>

      <HStack mt="20px" spacing={3} fontSize="12px">
        {data.map((item) => (
          <Box w={290} key={item.id}>
            <Image src={item.url} />
            <Text mt="10px">{item.title}</Text>
          </Box>
        ))}
      </HStack>
    </Box>
  )
}

// 获取电影列表
export function loadMovie() {
  return axios.get('/api/movie', {
    baseURL,
  })
}
