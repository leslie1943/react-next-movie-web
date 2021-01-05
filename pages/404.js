import { Button } from '@chakra-ui/react'
import Link from 'next/link'
import Head from 'next/head'
export default function Custom404() {
  return (
    <div>
      <Head>
        <title>React Next 404</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <p className="not-found-error">Page Not Found!</p>
      </main>
      <main className="main">
        <Button variant="link">
          <Link href="/">
            <a>Back to Home</a>
          </Link>
        </Button>
      </main>

      <style jsx>
        {`
          .main {
            height: 50vh;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .not-found-error {
            font-size: 40px;
            color: #f56c6c;
          }
          .not-found-warning {
            font-size: 40px;
            color: #e6a23c;
          }
          .not-found-info {
            font-size: 40px;
            color: #909399;
          }
          .not-found-success {
            font-size: 40px;
            color: #67c23a;
          }
        `}
      </style>
    </div>
  )
}
