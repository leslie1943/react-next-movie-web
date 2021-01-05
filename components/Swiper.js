import React from 'react'
import Head from 'next/head'
import { Carousel } from 'react-responsive-carousel'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Box, Heading, Text, Button } from '@chakra-ui/react'
import { baseURL } from '../axiosConfig'
import axios from 'axios'
import Link from 'next/link'

const CarouselItem = styled.div`
  position: relative;
  & > div {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    color: #fff;
    padding-top: 180px;
    text-align: left;
    width: 100%;
    max-width: 1200px;
    & > p {
      margin: 15px 0;
      font-size: 14px;
      width: 450px;
    }
  }
  & > img {
    filter: brightness(50%);
  }
`
const swiperContainer = css`
  position: relative;
  & > .carousel:last-child {
    position: absolute;
    left: 0;
    bottom: 0;
    & > .thumbs-wrapper > .thumbs {
      display: flex;
      justify-content: center;
    }
  }
`
export default function Swiper({ data }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="css/carousel.min.css"></link>
        <title>1943 电影</title>
      </Head>
      <Carousel
        css={swiperContainer}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
      >
        {data.map((item) => (
          <CarouselItem key={item.id}>
            <img src={item.url} />
            <Box>
              <Heading as="h2" size="lg">
                {item.title}
              </Heading>
              <Text>{item.description}</Text>
              <Button colorScheme="red">
                {/* detail: pages文件下的detail文件夹 */}
                {/* [id]: 指的就是这个detail文件夹下的 [id].js 文件 */}
                <Link href="/detail/[id]" as={`/detail/${item.id}`}>
                  <a>CHECK DETTAIL</a>
                </Link>
              </Button>
            </Box>
          </CarouselItem>
        ))}
      </Carousel>
    </>
  )
}

// 加载轮播图数据
export function loadSwiper() {
  return axios.get(`/api/swiper`, {
    baseURL,
  })
}
