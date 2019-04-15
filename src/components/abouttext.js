import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import tw from 'tailwind.macro'

import { Info } from '../elements/titles'

const Vertical = styled.div`
  ${tw`h-full justify-start items-end`};
`

const Horizontal = styled.footer`
	${tw`w-2/3 absolute pin-b mb-3 mx-0`};
`

const AboutText = () => (
  <Vertical>
        <Horizontal>
        	<Info>I’m Juju! I’ve been teaching practical, intuitive yoga for nearly ten years. I most recently completed a 12-month mentoring programme with Vincent Bolletta in New Zealand, and I’ve been studying the art of restorative yoga since 2015 with Karla Brodie, a Senior Associate of Donna Farhi</Info>
        	<Info>I live in Stockholm, but I’ve shared my practice in New Zealand, South America and Indonesia, and I'm grateful to have been influenced by traditional practice from all over the world. Right now, I'm building my own creative space in Lombok.</Info>
        </Horizontal>
    </Vertical>
)

export default AboutText
