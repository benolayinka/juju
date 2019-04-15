import React from "react"
import { graphql } from "gatsby"
import { Parallax } from 'react-spring/renderprops-addons.cjs'
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import Img from "gatsby-image"
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

//Images
import background from "../images/juju-background.jpg"

//Components
import BackgroundSection from "../components/backgroundsection"
import BgSection from "../components/bgsection"
import Layout from "../components/layout"
import Footer from "../components/footer"
import AboutText from "../components/abouttext"

//Views
import Hello from "../views/hello"
import Drawing from "../views/drawing"

//Styles
import { UpDown, UpDownWide } from '../styles/animations'

// Elements
import Inner from '../elements/inner'
import { Title, BigTitle, Subtitle, Info } from '../elements/titles'

const JujuBackgroundSection = styled(BgSection)`
  height:100vh;
  width:100vw;
  background-image: linear-gradient(to top , transparent, white)!important;
  background-color: transparent!important;
  opacity:1!important;
`

const FacesBackgroundSection = styled(BgSection)`
  height:100vh;
  width:100vw;
  opacity:1!important;

  `

const GuyImg = styled(Img)`
  height:503px;
  width:540px;
  opacity:1!important;
  display:inline-block;

  `

const DanceImg = styled(Img)`
  height:503px;
  width:540px;
  opacity:1!important;
  display:inline-block;
  `

const FrogImg = styled(Img)`
  height:503px;
  width:540px;
  opacity:1!important;
  display:inline-block;
  `

const TribeImg = styled(Img)`
  margin:50px 50px 50px 50px;
`

const IndexPage = ({data}) => (
  <>
  <Hello offset={0}>
      <BigTitle>Yoga with Juju</BigTitle>
        <div>
        <Info>Breathe, release, flow and strengthen.</Info>
        <Info>Yoga-focused anatomy and physiology, with the principles of biomechanics, functional yoga and developmental movement patterns.</Info>
        <Info>Experience a deeper understanding of breath, balanced posture and integrated movement.</Info>
        <Footer/>
        </div>
        <div>
        </div>
    </Hello>
  <Layout/>
    <Drawing offset={1}>
        <TribeImg fluid={data.tribe.childImageSharp.fluid}/>
    </Drawing>
    <Hello offset={2}>
        <BigTitle>
          hi, I'm&nbsp;
          <Link activeClass="active" to="about" smooth={true} offset={50} duration={500}>
          Juju
          </Link>
        </BigTitle>
    </Hello>
    <Drawing offset={3}>
      <GuyImg fluid = {data.guy.childImageSharp.fluid}/>
    </Drawing>
    <Hello offset={4}>
      <BigTitle>
        I teach hatha inspired yoga to help you breathe, release, flow, and strengthen.
      </BigTitle>
    </Hello>
    <Drawing offset={5}>
        <DanceImg fluid={data.dance.childImageSharp.fluid}/>
    </Drawing>
    <Hello offset={6}>
      <BigTitle>
        Classes are for all levels, just bring your body and an open mind.
      </BigTitle>
    </Hello>
    <Drawing offset={7}>
        <FrogImg fluid={data.frog.childImageSharp.fluid}/>
    </Drawing>
    <Hello offset={8}>
      <BigTitle>Yoga with Juju</BigTitle>
        <div>
        <Info>Breathe, release, flow and strengthen.</Info>
        <Info>Yoga-focused anatomy and physiology, with the principles of biomechanics, functional yoga and developmental movement patterns.</Info>
        <Info>Experience a deeper understanding of breath, balanced posture and integrated movement.</Info>
        <Footer/>
        </div>
        <div>
        </div>
    </Hello>
    <Drawing offset = {9}>
      <Element name="about" className="element">
      <JujuBackgroundSection fluid = {data.background.childImageSharp.fluid}>
        <AboutText/>
      </JujuBackgroundSection>
      </Element>
    </Drawing>
  </>
)

export const pageQuery=graphql`
      query {
        ben: file(relativePath: { eq: "juju-ben.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1170) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        tribe: file(relativePath: { eq: "juju-tribe.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 503) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        guy: file(relativePath: { eq: "juju-guy.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 503) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        frog: file(relativePath: { eq: "juju-frog.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 5000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        dance: file(relativePath: { eq: "juju-dance.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        background: file(relativePath: { eq: "juju-background.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 5000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `;

export default IndexPage
