import React from 'react';

function About() {
  return (
    <>
      <div className="about">
        <p>
          you can play the drums by either clicking with your mouse or use the
          keyboard. <br />
          <br /> To use the mouse simply click on the drum head or cymbal you
          want to play. <br /> <br /> To use the keybord just hit the
          corresponding key for each drum, the keys are "Q,W,E,A,S,D,Z,X,C".
          <br /> <br /> In the bottom of the page you have a controll panel. Try
          play with the controls and see what happend.
          <br /> <br /> <br /> <br />
          Build by{' '}
          <a href="https://dor-plaut-home-page.netlify.app/" target="blank">
            Dor Plaut
          </a>
        </p>
      </div>
      <div className="about-mobile">
        <p>
          Build by{' '}
          <a href="https://dor-plaut-home-page.netlify.app/" target="blank">
            Dor Plaut
          </a>
        </p>
      </div>
    </>
  );
}

export default About;
