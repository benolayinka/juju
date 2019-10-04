import { Link } from "gatsby"
import React from "react"
import { SocialIcon } from 'react-social-icons'
import { OutboundLink } from 'gatsby-plugin-google-analytics'


import { Info } from '../elements/titles'

const FooterActive = () => (
  <footer style={{}}>
    <div className="container mx-auto h-full flex justify-between items-center">
        <div className="w-1/3 justify-between mx-auto">
          <Info>Join an <OutboundLink href='https://www.meetup.com/Breathmovementyoga/'>active</OutboundLink> class with Juju on <OutboundLink href='https://www.meetup.com/Breathmovementyoga/'>meetup</OutboundLink></Info>
          <div><SocialIcon url='https://www.meetup.com/Breathmovementyoga/' fgColor='transparent' bgColor='black' style={{ height: 35, width: 35 }} /></div>
        </div>
    </div>
  </footer>
)

export default FooterActive
