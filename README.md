### 1. 创建项目
` npm init next-app react-next-movie`
` npm install  @chakra-ui/core`
` npm install  @chakra-ui/react`
` npm install  @chakra-ui/theme`

### 2. 下载 chakra-ui 框架
` npm install  @chakra-ui/react`
安装 `@chakra-ui/react`的依赖包 `yarn add @emotion/react @emotion/styled`
### 3. 克隆主题
- 没有克隆主题: 异然使用依赖包的形式 `import theme from "@chakra-ui/theme";`
### 配置主题
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
### 下载字体图标
  npm install react-icons --save
### 下载 emotion
  npm install @emotion/core @emotion/styled
  npm install @emotion/babel-preset-css-prop --save-dev
### 添加 babel 配置
  在根目录下创建 .babelrc 文件并添加如下代码
    {"presets": ["next/babel","@emotion/babel-preset-css-prop"]}

  