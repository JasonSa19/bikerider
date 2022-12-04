import * as React from "react";
import Button from "./Button";
import Hover from "./Hover";

const Header = () => {
  const NavItems = [
    { item: "Start", slug: "start" },
    { item: "Über mich", slug: "about" },
    { item: "Kenntnisse", slug: "knowledge" },
  ];
  return (
    <header>
      <div class="header-wrap">
        <nav>
          <ul>
            {NavItems.map((el) => (
              <li>
                <a key={el.slug} className="nav-link" href={`#${el.slug}`}>
                  {el.item}
                </a>
                <Hover />
              </li>
            ))}
          </ul>
          <Button buttonDestination="#contact" buttonText="Kontakt" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
