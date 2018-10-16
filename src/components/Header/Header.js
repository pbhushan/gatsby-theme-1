import React, { Component } from 'react'
import Seo from '../seo'
import PropTypes from 'prop-types'
import VisibilitySensor from 'react-visibility-sensor'
import styled from 'styled-components'
import { darken } from 'polished'
import { device } from '../../utils/presets'
import HeaderInner from './HeaderInner'

const optionalTheme = require('../../themeSetting/optionalTheme')

const HeaderWrapper = styled.header`
  height: ${optionalTheme.header_height + 'px'};
  background: ${props => props.theme.bg.neutral};
  color: ${props => props.theme.text.neutral};
  transition: ${optionalTheme.header_scrollY ? 'transform' : 'all'}
    ${optionalTheme.transitionTime.default} ease-in-out;
  will-change: transform;
  transform: translateY(0);

  &.scrolledUp {
    transform: translateY(-110%);
  }

  &.homepage {
    color: ${props => props.theme.text.default};
    background: ${props => props.theme.bg.default};
  }

  &.inVisible {
    color: ${props => props.theme.text.neutral};
    background: ${props =>
      darken(optionalTheme.shades, props.theme.bg.neutral)};
  }

  @media ${device.tablet} {
    height: ${optionalTheme.header_height * optionalTheme.scale + 'px'};
  }
`

const Sensor = styled.div`
  display: block;
  position: absolute;
  bottom: 0;
  z-index: 1;
  left: 0;
  right: 0;
  background: transparent;
  width: 100%;
  height: 1px;
  top: 0;
`

class Header extends Component {
  state = {
    isVisible: true,
    scrollY: 0,
    scrollUp: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const y = this.state.scrollY

    if (y > window.scrollY) {
      this.setState({ scrollUp: false })
    } else {
      this.setState({ scrollUp: true })
    }

    this.setState({ scrollY: window.scrollY })
  }

  onChange = val => {
    this.setState({ isVisible: val })
  }

  getHeaderClasses = () => {
    const isVisible = !this.state.isVisible ? 'inVisible' : ''
    const scrolledUp =
      this.state.scrollUp && optionalTheme.header_scrollY ? 'scrolledUp' : ''

    const isHome =
      this.props.location && this.props.location.pathname === '/'
        ? 'homepage'
        : ''

    return `${isVisible} ${isHome} ${scrolledUp}`
  }

  render() {
    return (
      <React.Fragment>
        <Seo />
        <VisibilitySensor onChange={this.onChange}>
          <Sensor />
        </VisibilitySensor>
        <HeaderWrapper
          className={this.getHeaderClasses()}
          visibility={this.state.isVisible ? 'visible' : 'invisible'}
        >
          <HeaderInner />
        </HeaderWrapper>
      </React.Fragment>
    )
  }
}

Header.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Header
