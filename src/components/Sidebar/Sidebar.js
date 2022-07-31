import React from 'react'
// import { useLocation } from 'react-router-dom';
import { StyledSideNav, StyledUl, StyledLi, StyledLink } from './styles'

const items = [
    { name: 'Me', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Work', path: '/work' },
    { name: 'Education', path: '/education' }
]

const Sidebar = () => {

    // const location = useLocation();

    return (
        <StyledSideNav aria-label="Side navigation">
            <StyledUl>
            {items.map(i => (
                <StyledLi key={i.name}>
                    <StyledLink
                        // isActive={
                        //     location.pathname === '/' && i.path === '/' ? true : location.pathname === i.path
                        // }
                        // element={Link}
                        to={i.path}
                        exact
                    >
                    {i.name}
                    </StyledLink>
                </StyledLi>
                ))}
            </StyledUl>
      </StyledSideNav>
    )
}

export default Sidebar
