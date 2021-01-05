### 1. 创建项目
` npm init next-app react-next-movie`


### 2. 安装 chakra-ui 框架 及 主题
- `yarn add  @chakra-ui/core`
- `yarn add  @chakra-ui/react`
- `yarn add  @chakra-ui/theme`
- `yarn add  @chakra-ui/react`
- 手动安装 `@chakra-ui/react`的依赖包 `yarn add @emotion/react @emotion/styled`
- 手动安装  `@emotion/react` 的依赖 `yarn add framer-motion`

### 3. 克隆主题
- 没有克隆主题: 使用依赖包的形式 `import theme from "@chakra-ui/theme"`


### 4. 配置主题
- 在 `pages` 文件夹下建立` _app.js `加入如下代码
```js
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "@chakra-ui/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
```

### 5. 安装 字体图标
- `yarn add react-icons`


### 6. 安装 @babel/core
- `yarn add @babel/core`

### 7. 安装 emotion 预置
- `@emotion/babel-preset-css-prop`

### 8. 添加 babel 配置
- 在根目录下创建 .babelrc 文件并添加如下代码
```json
{
    "presets":  ["next/babel","@emotion/babel-preset-css-prop"]
}
```

### 导出静态网站
- 在`package.json`中添加命令:
```json
{
  "script":{
    "export": "next build && next export"
  }
}
```
### 导出静态网站注意事项
- 当生成`out`文件夹后, 将内部全部文件复制
- 找到启动`3005`服务的项目, 来到`public`文件夹, 直接粘贴然后覆盖
- 不要删除`api` 文件夹
- 不要删除`api` 文件夹
- 不要删除`api` 文件夹


### 轮播图组件
- `yarn add react-responsive-carousel`
- 将 `node_modules`下样式copy到 `public`文件夹下的`css`文件夹下

### 常用引入:
```js
import { Box, Heading, Text, Button } from '@chakra-ui/react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
```

### 实现页面的静态生成
1. 首先在组件内部导出获取数据的方法
```js
// 加载轮播图数据
export function loadSwiper() {
  return axios.get(`/api/swiper`, {
    baseURL,
  })
}
```
2. 然后在引用其组件的父组件中定义 `getStaticProps`方法, 执行子组件中导出的方法 `loadSwiper()`, 然后返回数据
```js
export async function getStaticProps() {
  // 获取轮播图数据
  let { data: swiper } = await loadSwiper()
  return {
    props: {
      swiper,
    },
  }
}
```
3. 在父组件中将获取的数据回传给子组件
```js
// 使用 react语法自定义即可
export default function Home({ swiper }) {
  return (
    <Layout>
      <Swiper data={swiper} />
      <Movie />
    </Layout>
  )
}
```

4. 子组件解构数据后,完成自己的逻辑
```js
export default function Swiper({ data }) {
  return (
    <>
      <Carousel>
        {data.map((item) => (
          <CarouselItem key={item.id}>
            <img src={item.url} />
            <Box>
              <Heading as="h2" size="lg">
                {item.title}
              </Heading>
              <Text>{item.description}</Text>
              <Button colorScheme="red">CHECK DETTAIL</Button>
            </Box>
          </CarouselItem>
        ))}
      </Carousel>
    </>
  )
}
```

