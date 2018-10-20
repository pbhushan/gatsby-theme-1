import React, { Component } from 'react'
import styled from 'styled-components'
//import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import logo from '../../images/brand-logo.png'
import { device } from '../../utils/presets'

//const optionalTheme = require('../../themeSetting/optionalTheme')

const Navbar = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  margin: 0 1rem;
  padding: 0 1rem;
  color: inherit;
`

const NavBrand = styled(Link)`
  display: flex;
  height: 100%;
  margin: 0.5rem 0.5rem;
  color: inherit;
  a {
    color: inherit;
  }

  @media ${device.tablet} {
    width: 100%;
    justify-content: center;
  }
`

const NavLogo = styled.div`
  display: flex;
  height: 100%;
  align-items: center;

  img {
    width: 44px;
    height: 44px;
    margin: 0 0.4rem;
  }
`

const NavTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: inherit;
  h6 {
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0 0.2rem;
    color: inherit;
  }
  p {
    margin: 0 0.2rem;
    color: inherit;
  }

  @media ${device.tablet} {
    h6 {
      font-size: 1rem;
    }
  }

  @media ${device.mobileL} {
    h6 {
      font-size: 0.8rem;
    }
  }
`

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  flex: 1;
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
  }

  li {
    margin: 0 0.2rem;
    padding: 0;
  }

  a {
    color: inherit;
    padding: 0.5rem 0.5rem;
  }

  a:hover {
    opacity: 0.7;
  }

  a.active {
    opacity: 0.8;
    border-bottom: 3px solid white;
  }

  @media ${device.tablet} {
    display: none;
  }
`

class HeaderInner extends Component {
  getActiveClass = to => {
    const path =
      (this.props && this.props.location && this.props.location.pathname) || ''

    return to === path || `${to}/` === path ? 'active' : ''
  }

  render() {
    return (
      <Navbar>
        <NavBrand to="/">
          <NavLogo>
            <img src={logo} alt="" />
          </NavLogo>
          <NavTitle>
            <h6>SUSCOM</h6>
            <p>{}</p>
          </NavTitle>
        </NavBrand>

        <NavLinks>
          <ul>
            <li>
              <Link className={this.getActiveClass('/')} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={this.getActiveClass('/about')} to="/about">
                About
              </Link>
            </li>
          </ul>
        </NavLinks>
      </Navbar>
    )
  }
}

export default HeaderInner
