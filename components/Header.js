import { Box, Container, Button, Image, HStack } from '@chakra-ui/react'
import { FaSignInAlt, FaSearch } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

/**
  & > button: nth-of-type(1):after{
      content: '';
      width: 1px;
      height: 22px;
      background: #fff;
      position: absolute;
      right: 0;
      top: 21px;
  }
 */
const SignAndJoin = styled.div`
  height: 52px;
  line-height: 24px;
  padding: 6px 6px;
  float: left;
  border-left: 1px solid #393939;
  border-right: 1px solid #393939;
  & > button {
    padding: 0 10px;
  }
`
const Search = styled.a`
  float: right;
  line-height: 52px;
  height: 52px;
  color: #fff;
  font-size: 20px;
  padding: 10px 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-left: 1px solid #393939;
  border-right: 1px solid #393939;
`
const logo = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 140px;
`
export default function Header() {
  return (
    <Box h={14} bgColor="#202020" borderBottom="1px solid #393939" color="#FFF">
      <Container h={14} maxW={1200} pos="relative">
        <SignAndJoin>
          <Button
            borderColor="202020"
            colorScheme="202020"
            variant="outline"
            width="100px"
            leftIcon={<FaSignInAlt />}
          >
            登录
          </Button>
          <Button
            borderColor="202020"
            width="100px"
            colorScheme="202020"
            style={{ marginLeft: 6 }}
            variant="outline"
            leftIcon={<BsFillPersonFill />}
          >
            注册
          </Button>
        </SignAndJoin>
        <Image src="/images/logo.png" css={logo}></Image>
        <Search>
          <FaSearch />
        </Search>
      </Container>
    </Box>
  )
}
