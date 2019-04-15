import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Divider} from '../elements/divider'
import {Content} from '../elements/content'
import { UpDown, UpDownWide } from '../styles/animations'
import tw from 'tailwind.macro'

const Wrapper = styled.div`
  ${tw`container flex mx-auto w-full justify-center items-center`};
`

const Center = styled.div`
	${tw`w-2/3`};
`

const Hello = ({children, offset}) => (
	<>
		<Wrapper>
			<Center>{children}</Center>
		</Wrapper>
	</>
)

export default Hello

Hello.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}