import React from 'react'
import { Container } from 'react-bootstrap'
import Headline from '../components/Headline'
import AppTabs from '../components/AppTabs'

const Home = () => {
    return (
        <Container>
            <Headline text='Explore Movies You Like' />
            <AppTabs />
        </Container>
    )
}

export default Home