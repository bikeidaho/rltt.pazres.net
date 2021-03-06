import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>RLTT</h1>
    <p>Welcome to Remote Learning Tech Tips.</p>
    
  </Layout>
)

export default IndexPage
