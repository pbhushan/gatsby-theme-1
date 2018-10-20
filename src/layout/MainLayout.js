import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Header from '../components/header'
import { injectGlobal } from 'styled-components'
import ThemeSelect from '../components/ThemeSelect/ThemeSelect'
const selectedTheme = require('../themeSetting/globalThemes')
const MainContainer = styled.div`
  min-height: 1200px;
  display: block;
  min-width: 100%;
`

class Layout extends Component {
  state = {
    theme: selectedTheme,
  }

  onThemeChange = newTheme => {
    this.setState({ theme: newTheme })
  }

  render() {
    const { theme } = this.state
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <ThemeSelect onThemeChange={this.onThemeChange} />
          <Header location={this.props.location} />
          <MainContainer>{this.props.children}</MainContainer>
        </React.Fragment>
      </ThemeProvider>
    )
  }
}

injectGlobal`
  html, body{
    background:${selectedTheme.bg.surface}
    color:${selectedTheme.text.surface}
    margin:0;
    padding:0;
    overflow-x:hidden;
  }

  header {
    position:fixed;
    left: 0;
    right: 0;
    display: flex;
    top: 0;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  } 

  a{
    color: ${selectedTheme.bg.secondary};
    text-decoration: none;
    text-shadow: none;
    background-image: none;
    background-color: transparent;
  }
`

export default Layout
