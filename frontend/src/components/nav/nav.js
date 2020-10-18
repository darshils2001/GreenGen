import React from "react";
 
class NavBar extends React.Component{
  render() {
      return (
          <ul id="nav">
            <li><a href="/">Home</a></li>
            <li><a href="https://www.nature.org/en-us/get-involved/how-to-help/carbon-footprint-calculator/">Footprint</a></li>
            <li><a href="mailto:julialwa@uw.edu">Contact Us!</a></li>
          </ul>
      );
  }
}

export default NavBar;