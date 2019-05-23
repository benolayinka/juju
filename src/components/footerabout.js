import { Link } from "gatsby"
import React from "react"
import { SocialIcon } from 'react-social-icons'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import { Info } from '../elements/titles'

const FooterAbout = () => (
  <footer style={{}}>
    <div className="container mx-auto h-full flex justify-between items-center">
        <div className= "w-1/3 justify-between mx-auto">
          <Info>Find my practice on <OutboundLink href='https://www.instagram.com/yogawithjuju/'>instagram</OutboundLink></Info>
          <div><SocialIcon url='https://www.instagram.com/yogawithjuju/' fgColor='transparent' bgColor='black' style={{ height: 35, width: 35 }} /></div>
        </div>
    </div>
  </footer>
)

export default FooterAbout
