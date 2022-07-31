import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledSideNav = styled.div`
    background: #333;

    @media (max-width: 640px) {
        display: none;
    }
`

export const StyledUl = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`

export const StyledLi = styled.li`
    overflow: hidden;
`

const activeClassName = 'nav-item-active'

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
    width: 100%;
    display: inline-block;
    padding: 1rem;
    color: #fff;
    text-decoration: none;
    transition: 0.3s;
    &:hover {
        padding-left: 1rem;
        background: #111;
    }
    &.${activeClassName} {
        background: #111;
    }
`
