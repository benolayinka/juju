import { Link } from "gatsby"
import React from "react"
import { SocialIcon } from 'react-social-icons'

import { Info } from '../elements/titles'

const Footer = () => (
  <footer style={{}}>
    <div className="container mx-auto h-full flex justify-between items-center">
        <div className="w-1/3 justify-between mx-auto">
          <Info>Join a class on meetup</Info>
          <div><SocialIcon url='https://www.meetup.com/Breathmovementyoga/' fgColor='transparent' bgColor='black' style={{ height: 25, width: 25 }} /></div>
        </div>
        <div className= "w-1/3 justify-between mx-auto">
          <Info>Check us out on instagram</Info>
          <div><SocialIcon url='https://www.instagram.com/yogawithjuju/' fgColor='transparent' bgColor='black' style={{ height: 25, width: 25 }} /></div>
        </div>
    </div>
  </footer>
)

export default Footer
