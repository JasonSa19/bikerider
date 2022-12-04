import React from "react";

const About = () => {
  return (
    <section className="about">
      <div className="about-textcontent-wrap">
        <div className="about-textcontent-headline">
          <h2>
            <strong>über&nbsp;</strong>mich<strong>.</strong>
          </h2>
          <h3>Hey!</h3>
          <div className="about-text">
            <p>
              Mein Name ist Jason, ich bin 20 Jahre alt und komme aus dem
              wunderschönen Sauerland in NRW. Auf dieser Seite findest du
              Informationen und nützliche Fakten, die dir helfen, dich für mich
              als Ersteller deiner zukünftigen Internetpräsenz zu entscheiden
              und mich gleichzeitig ein wenig kennenzulernen.{" "}
              <strong>Let's go!</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="about-imagecontent-wrap"></div>
    </section>
  );
};

export default About;
