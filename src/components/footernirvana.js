import { Link } from "gatsby"
import React from "react"
import { SocialIcon } from 'react-social-icons'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import { Info } from '../elements/titles'

const FooterNirvana = () => (
  <footer style={{}}>
    <div className="container mx-auto h-full flex justify-between items-center">
        <div className="w-1/3 justify-between mx-auto">
          <Info>Book a <OutboundLink href='http://www.nirvana.se'>restorative</OutboundLink> class with Juju at <OutboundLink href='http://www.nirvana.se'>Nirvana</OutboundLink></Info>
          <div><SocialIcon url='http://www.nirvana.se' network='smugmug' fgColor='transparent' bgColor='black' style={{ height: 35, width: 35 }} /></div>
        </div>
    </div>
  </footer>
)

export default FooterNirvana
