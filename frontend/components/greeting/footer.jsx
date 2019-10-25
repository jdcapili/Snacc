import React from 'react';
import { withRouter } from 'react-router-dom';

const Footer = (props) => {
  
  return <footer> <a href="https://icons8.com/icon/118530/icons8">all icons are from: <img src={window.icons8} alt='icons8' /></a>

  <div className="ol-presence">
  <a href="https://github.com/jdcapili" target="_blank"><img src={window.github} alt='github/jdcapili' /></a>
  <a href="https://www.linkedin.com/in/jd-capili/" target="_blank"><img src={window.linkedin} alt='linkedin/jdcapili' /></a>
  <a href="https://angel.co/john-daniele-capili" target="_blank"><img src={window.angellist} alt='angellist/jdcapili' /></a>
  </div>
</footer>

}


export default withRouter(Footer)