import React from 'react'
// import { Link } from 'react-router-dom'
import Common from './Common'
import imgg from "./img2.gif"

const Home = () => {
  return (
    <>
      <Common 
      aname = "Grow Your Business with"
      imgsrc = {imgg}
      visit = "/service"
      abtname = "Get Started"
      />
    </>
  )
}

export default Home
