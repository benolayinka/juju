import React from 'react';
import PropTypes from "prop-types";
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'

const Parent = styled.div`
	position: relative;
	background-color: ${({bc}) => bc};
	`

const BgSection = ({
	fluid,
	overlayColor,
	children,
	className
}) => (
	<Parent bc={overlayColor}>
		<BackgroundImage   Tag="section"
	                   className={className}
	                   fluid={fluid}
	                   backgroundColor={`#040e18`}
          >
          {children}
    	</BackgroundImage>
    </Parent>
);

BgSection.propTypes = {
  fluid: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  overlayColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};
BgSection.defaultProps = {
  overlayColor: "transparent",
  children: null,
  className: null
};

export default BgSection;