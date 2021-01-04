import { Box, Container, Button, Image, HStack } from '@chakra-ui/react'
import { FaSignInAlt, FaSearch } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const logo = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 140px;
`
const SignAndJoin = styled.div`
  height: 52px;
  line-height: 52px;
  border-left: 1px solid #393939;
  border-right: 1px solid #393939;
  padding: 0px 6px;
  float: left;
  & > button {
    padding: 0 10px;
  }
  & > button: nth-of-type(1):after{
      content: '';
      width: 1px;
      height: 22px;
      background: #fff;
      position: absolute;
      right: 0;
      top: 21px;
  }
`
const Search = styled.a`
  float: right;
  height: 52px;
  border-left: 1px solid #393939;
  border-right: 1px solid #393939;
  color: #fff;
  font-size: 20px;
  padding: 0 10px;
  display: flex;
  align-items: center;
`

export default function Header() {
  return (
    <Box h={52} bgColor="#202020" borderBottom="1px solid #393939" color="#FFF">
      Hello World!
      {/* <Container h={52} maxW={1200} pos="relative">
        <HStack>
          <Button variant="outline" leftIcon={<FaSignInAlt />}>
            登录
          </Button>
          <Button variant="outline" leftIcon={<BsFillPersonFill />}>
            注册
          </Button>
        </HStack>
        <Image src="/images/logo.png" css={logo}></Image>
        <Search>
          <FaSearch />
        </Search>
      </Container> */}
    </Box>
  )
}
