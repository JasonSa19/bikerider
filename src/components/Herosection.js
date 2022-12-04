import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import gitSvg from "../images/icon/github.svg";
import mailSvg from "../images/icon/email-button.svg";
import instaSvg from "../images/icon/instagram.svg";
import linkedinSvg from "../images/icon/linkedin-logo.svg";

const Herosection = () => {
  const iconSvg = [
    {
      item: 1,
      slug: "github",
      href: "https://github.com/jasonsa19",
      source: gitSvg,
    },
    {
      item: 2,
      slug: "linkedin",
      href: "https://linkedin.com/in/JasonSauerwald",
      source: linkedinSvg,
    },
    {
      item: 3,
      slug: "mail",
      href: "mailto:jason01sauerwald@gmail.com",
      source: mailSvg,
    },
    {
      item: 4,
      slug: "instagram",
      href: "https://instagram.com/jason_sa_",
      source: instaSvg,
    },
  ];
  const startImg = "../images/start.png";
  return (
    <section className="hero">
      <div className="main-headline-wrap">
        <h1>
          Webdesigner & <strong>Front-End</strong> Entwickler<strong>.</strong>
        </h1>
        <div className="icon-wrap">
          {iconSvg.map((ic) => (
            <a key={ic.slug} href={ic.href} target="_blank" rel="noreferrer">
              <img src={ic.source} alt={ic.slug}></img>
            </a>
          ))}
        </div>
      </div>
      <StaticImage className="start-image" src={startImg} alt="Start" />
      <div className="nextup-arrow--herosection">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="54.276"
          height="35"
          viewBox="0 0 54.276 35"
        >
          <g transform="translate(-150 -989)">
            <path
              id="arrowdown"
              d="M39.138,48.6,12,21.462,16.862,16.6,39.138,38.989,61.413,16.713l4.862,4.862Z"
              transform="translate(138 975.4)"
              fill="#0089aa"
            />
            <path
              id="arrowdown-2"
              data-name="arrowdown"
              d="M39.138,48.6,12,21.462,16.862,16.6,39.138,38.989,61.413,16.713l4.862,4.862Z"
              transform="translate(138 972.4)"
              fill="#292929"
            />
          </g>
        </svg>
      </div>
    </section>
  );
};

export default Herosection;
