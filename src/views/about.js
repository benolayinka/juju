import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Divider} from '../elements/divider'
import {Content} from '../elements/content'
import { UpDown, UpDownWide } from '../styles/animations'
import tw from 'tailwind.macro'

const Wrapper = styled.div`
  ${tw`w-full xl:w-2/3`};
`

const About = ({children, offset}) => (
	<>
		<Wrapper>{children}</Wrapper>
	</>
)

export default About

About.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}