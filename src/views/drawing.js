import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Divider} from '../elements/divider'
import {Content} from '../elements/content'
import { UpDown, UpDownWide } from '../styles/animations'

const Drawing = ({children, offset}) => (
	<>
		{children}
	</>
)

export default Drawing

Drawing.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired,
}