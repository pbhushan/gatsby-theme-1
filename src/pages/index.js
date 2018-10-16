import React, { Component } from 'react'
import { Link } from 'gatsby'

import Layout from '../layout/MainLayout'

class IndexPage extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <h1>Hi people How are you ?</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/about/">Go to About Page</Link>
      </Layout>
    )
  }
}

export default IndexPage
