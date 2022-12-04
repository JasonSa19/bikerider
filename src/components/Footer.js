import * as React from "react";

const Footer = () => {
  const footerMenu = [{ item: 1, navTitle: "Impressum", slag: "imprint" }];

  return (
    <footer>
      <div className="footer-wrap">
        <div className="footer-menu">
          <ul>
            <li>
              {footerMenu.map((item) => (
                <a key={item.slag} href={`${item.slag}`}>
                  {item.navTitle}
                </a>
              ))}
            </li>
          </ul>
        </div>
        <span>{new Date().getFullYear()} - Jason Sauerwald</span>
      </div>
    </footer>
  );
};

export default Footer;
