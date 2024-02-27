// Write your code here

import Header from '../Header'
import './index.css'

const About = () => (
  <div className="about-container">
    <Header />
    <div className="about-img-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        className="mobile-about-image"
        alt="about"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        className="desktop-about-image"
        alt="about"
      />
    </div>
  </div>
)

export default About
