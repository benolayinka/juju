import React from "react"
import { graphql } from "gatsby"
import { Parallax } from 'react-spring/renderprops-addons.cjs'
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import tw from 'tailwind.macro'
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

//Components
import Layout from "../components/layout"
import FooterAbout from "../components/footerabout"
import FooterNirvana from "../components/footernirvana"
import FooterActive from "../components/footeractive"

//Views
import Hello from "../views/hello"
import Drawing from "../views/drawing"

//Styles
import { UpDown, UpDownWide } from '../styles/animations'

//Elements
import Inner from '../elements/inner'
import { Title, BigTitle, Subtitle, Info } from '../elements/titles'

//Images
import background from '../images/juju-background.png'
import dance from '../images/juju-dance.png'
import frog from '../images/juju-frog.png'
import guy from '../images/juju-guy.png'
import tribe from '../images/juju-tribe.png'

const JujuImg = styled.img`
  &::after {
    position:relative;
    display:block;
    background-image: linear-gradient(to top , transparent, white)!important;
    z-index:100000;
    content: '';
  }
  ${tw`w-screen`};
  opacity:1!important;
  -webkit-mask-image:-webkit-gradient(linear, left bottom, left top, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
  mask-image: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0));
  `

const DrawingImg = styled.img`
  ${tw`w-screen sm:w-1/2`};
`

const IndexPage = ({data}) => (
  <>
  <Layout/>
  <Hello offset={0}>
      <BigTitle>Yoga with Juju</BigTitle>
      <div>
      <Info>Breathe, release, flow and strengthen.</Info>
      </div>
      <div>
      </div>
    </Hello>
    <Drawing offset={1}>
        <DrawingImg src={tribe}/>
    </Drawing>
    <Hello offset={2}>
      <Info><b>A C T I V E</b> classes are inspired by Hatha yoga with the principles of biomechanics, functional yoga and developmental movement patterns.</Info>
      <Info>Experience a deeper understanding of breath, balanced posture and integrated movement.</Info>
    </Hello>
    <FooterActive/>
    <Hello offset={2}>
    </Hello>
    <Drawing offset={3}>
      <DrawingImg src={guy}/>
    </Drawing>
    <Hello offset={4}>
      <Info><b>R E S T</b> with the nourishing and balancing practice of restorative yoga.</Info>
      <Info>Give yourself time and space to deeply unwind in supported shapes.</Info>
      <Info>This practice may significantly reduce stress, improve breathing, sleep, circulation and digestion.</Info>
      <FooterNirvana/>
    </Hello>
    <Drawing offset={5}>
        <DrawingImg src={dance}/>
    </Drawing>
    <Hello offset={6}>
      <Info>
        Classes are for all levels, just bring your body and an open mind.
      </Info>
    </Hello>
    <Drawing offset={7}>
        <DrawingImg src={frog}/>
    </Drawing>
    <Hello offset={8}>
        <div>
        <BigTitle>
          hi, I'm&nbsp;
          <Link activeClass="active" to="about" smooth={true} offset={50} duration={500}>
          Juju!
          </Link>
        </BigTitle>
          <Info>I’ve been practicing and teaching practical, intuitive yoga for nearly ten years. I most recently completed a 12-month mentoring programme with Vincent Bolletta in New Zealand, and I’ve been studying the art of restorative yoga since 2015 with Karla Brodie, a Senior Associate of Donna Farhi</Info>
          <Info>I live in Stockholm, but I’ve shared my practice in New Zealand, Central America, the Philippines, and Indonesia. I’m grateful to have been influenced by the traditional practices of yoga and meditation. Right now, I'm building my own creative space in Lombok.</Info>
          <FooterAbout/>
        </div>
    </Hello>
    <Drawing offset = {9}>
      <Element name="about" className="element">
        <JujuImg src={background}/>
      </Element>
    </Drawing>
  </>
)

export default IndexPage
