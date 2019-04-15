/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import SEO from './seo'
import GlobalStyle from '../styles/global'

const Layout = () => (
      <>
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <GlobalStyle />
      </>
)

export default Layout
