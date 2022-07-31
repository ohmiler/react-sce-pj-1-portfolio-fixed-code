import React from 'react'
import { User, Code, Portfolio, Education } from '@carbon/icons-react'

import { Container, Spacer, NavWrapper, MobileLink } from './styles'

const MobileNav = () => {
  return (
    <Container>
      <Spacer />
      <NavWrapper>
        <MobileLink to="/" exact>
          <User />
        </MobileLink>
        <MobileLink to="/projects">
          <Code />
        </MobileLink>
        <MobileLink to="/work">
          <Portfolio />
        </MobileLink>
        <MobileLink to="/education">
          <Education />
        </MobileLink>
      </NavWrapper>
    </Container>
  )
}

export default MobileNav