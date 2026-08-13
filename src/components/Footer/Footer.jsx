import React from "react";
import Marquee from "react-fast-marquee";
function Footer() {
  return (
    <div>
      <Marquee>
        <span>
          {" "}
          Made from <a href="https://www.omdbapi.com/">OMDB</a>
        </span>
      </Marquee>
      <Marquee>
        <span>
          {" "}
          <a href="https://github.com/mrajavelu/show-finder.git">
            Get Source Code
          </a>
        </span>
      </Marquee>
    </div>
  );
}

export default Footer;
