import React from 'react'
import Sidebar from '../Sidebar'
import UserHeader from '../UserHeader'
import MobileNav from '../MobileNav';

import { StyledContent, Container } from './styles'

const Layout = ({ user, children }) => {
    return (
        <>
            <MobileNav />
            <Container>
            <Sidebar />
            <StyledContent>
                <UserHeader user={user} />
                <div>{children}</div>
            </StyledContent>   
            </Container>
        </>
    )
}

export default Layout
