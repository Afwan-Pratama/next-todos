import { NextUIProvider ,createTheme} from '@nextui-org/react'
import '../styles/globals.css'

import { ApolloProvider} from '@apollo/client'

import { apolloClient } from '../apollo'

function MyApp({ Component, pageProps }) {

  const theme = createTheme({
    type: 'dark'
  })

  return ( 

    <ApolloProvider client={apolloClient}>

      <NextUIProvider theme={theme}>

        <Component {...pageProps} />

      </NextUIProvider>

    </ApolloProvider>
  
  )
}

export default MyApp
