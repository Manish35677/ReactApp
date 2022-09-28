import React from 'react'
import imgg from "./img4.gif"
// import { Link } from 'react-router-dom'
import Common from './Common'

const About = () => {
  return (
    <>
    <Common 
    aname = "Welcome to About Page"
    imgsrc = {imgg}
    visit = "/contact"
    abtname = "Contact Now"
    />
    </>
  )

}

export default About
