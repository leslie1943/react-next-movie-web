import Layout from '../../components/Layout'
import { Box, Heading, Divider, Text } from '@chakra-ui/react'
import { css } from '@emotion/react'

import { baseURL } from '../../axiosConfig'
import axios from 'axios'

const DetailContainer = css`
  padding: 10px 0;
  & > p {
    font-size: 14px;
    margin-bottom: 10px;
  }

  & > img {
    margin-bottom: 10px;
    display: block;
  }
`

export default function Detail({ detail }) {
  // console.info('detail', detail)
  return (
    <Layout>
      <Box maxW={1200} mx="auto" mt="70px">
        <Heading as="h2" size="xl">
          {detail.title}
        </Heading>
        <Heading
          mt="10px"
          as="h4"
          size="lg"
          color="gray.500"
          fontWeight="light"
        >
          {detail.sub}
        </Heading>
        <Divider mt="10px" />
        <Box overflow="hidden" mt="10px">
          <Text float="left">The Author: {detail.author}</Text>
          <Text float="right">Publish Time: {detail.publish}</Text>
        </Box>
        <Divider mt="10px" />
        <Box css={DetailContainer}>
          <Text dangerouslySetInnerHTML={{ __html: detail.content }}></Text>
        </Box>
      </Box>
    </Layout>
  )
}

// 获取到用户能够访问到的所有的路由参数
export async function getStaticPaths() {
  // 返回格式 ["1","2"]
  const { data } = await axios.get('/api/videos', {
    baseURL,
  })
  // 需要的格式: [{params: { id: "1"}}, {params: {id: "2"}} ]
  const paths = data.map((id) => ({ params: { id } }))
  return {
    paths,
    // 不在 paths 范围的数据,显示 404 与否
    fallback: false,
  }
}

// 根据参数获取其对应的数据
export async function getStaticProps({ params }) {
  // 上下文对象中context: {params}
  const id = params.id
  const { data: detail } = await axios.get(`api/detail?id=${id}`, {
    baseURL,
  })
  return {
    props: {
      detail,
    },
  }
}
