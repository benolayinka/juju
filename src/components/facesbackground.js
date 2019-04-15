import React from "react"
import { StaticQuery, graphql } from "gatsby"

import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const FacesBackgroundSection = ({ className, children }) => (
    <StaticQuery query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "juju-faces.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 5472) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
     render={data => {
       // Set ImageData.
       const jimageData = data.placeholderImage.childImageSharp.fluid
       return (
          <BackgroundImage Tag="section"
                           className={className}
                           fluid={jimageData}
                           backgroundColor={`#040e18`}
          >
          {children}
          </BackgroundImage>
       )
     }
     }
    />
)

export default FacesBackgroundSection
