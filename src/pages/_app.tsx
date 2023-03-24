import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import { AnimatePresence, motion } from 'framer-motion'
import { MotionContainer } from './styles/_app'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const variables = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  }

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <MotionContainer 
          key={router.route}
          variants={variables}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5 }}
        >
          <Component {...pageProps} />
        </MotionContainer>
      </AnimatePresence>
    </Layout>
  )
}
