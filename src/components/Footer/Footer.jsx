import React from 'react'
import Marquee from "react-fast-marquee";
function Footer() {
  return (
    <div>
      <Marquee>
        <span> Made from <a href="https://www.omdbapi.com/">OMDB</a></span>
        <span> <a href="https://www.omdbapi.com/">My Source Code</a></span>
      </Marquee>
    </div>
  )
}

export default Footer;
