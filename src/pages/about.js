import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Layout from '../layout/MainLayout'

const Div = styled.div`
  width: 100%;
  z-index: 0;
  margin-top: 100px;
`

const PrimaryBox = styled.div`
  width: 150px;
  height: 150px;
  right: 0;
  margin: 2rem 0.5rem;
  padding: 0.5rem 0.5rem;
  background: ${props => props.theme.bg.primary};
  color: ${props => props.theme.text.primary};
`

const SecondaryBox = styled.div`
  width: 150px;
  height: 150px;
  right: 0;
  margin: 2rem 0.5rem;
  padding: 0.5rem 0.5rem;
  background: ${props => props.theme.bg.secondary};
  color: ${props => props.theme.text.secondary};
`

const VariantBox = styled.div`
  width: 150px;
  height: 150px;
  right: 0;
  margin: 2rem 0.5rem;
  padding: 0.5rem 0.5rem;
  background: ${props => props.theme.bg.variant};
  color: ${props => props.theme.text.variant};
`

const BlackdropBox = styled.div`
  width: 150px;
  height: 150px;
  right: 0;
  margin: 2rem 0.5rem;
  padding: 0.5rem 0.5rem;
  background: ${props => props.theme.bg.blackdrop};
  color: ${props => props.theme.text.blackdrop};
`

class AboutPage extends Component {
  state = {}
  render() {
    return (
      <Layout location={this.props.location}>
        <Div>
          <PrimaryBox>I am primary box</PrimaryBox>
          <SecondaryBox>I am Secondary Box</SecondaryBox>
          <VariantBox>I am variant box</VariantBox>
          <BlackdropBox>I am blackdrop box</BlackdropBox>
        </Div>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}

export default AboutPage
