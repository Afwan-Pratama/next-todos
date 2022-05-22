import React from 'react'

import { Container } from '@nextui-org/react'

import Navbar from '../../components/Navbar'

export default function DefaultLayout({children}){
  
    return (

    <Container
    fluid
    display='flex'
    css={{
        flexDirection : 'column'
    }}
    > 

        <Navbar/>

        {children}
    
    </Container>

    )
}
