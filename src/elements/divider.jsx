import styled from 'styled-components'
import {ParallaxLayer} from 'react-spring/renderprops-addons.cjs'

export const Divider = styled(ParallaxLayer)`
	background: ${props => props.bg};
	svg {
	fill: ${props => props.fill};
	}
	clip-path: ${props => props.clipPath};
`
