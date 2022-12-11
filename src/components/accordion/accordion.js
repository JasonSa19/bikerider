import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import arrow from "../../images/icon/arrow.svg";

const SiteAccordion = () => {
  return (
    <Accordion allowZeroExpanded>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Alarmanlage
            <img src={arrow} alt="Pfeil" />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Motorräder dürfen mit einer Alarmanlage ausgerüstet werden, deren
            Funktionsweise in § 38 StVZO vorgeschrieben ist. Ihr Anbau muss
            nicht in die Fahrzeugpapiere eingetragen werden.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Auspuffanlage
            <img src={arrow} alt="Pfeil" />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Sofern nur das Auspuffrohr gewechselt wird, ist gegen ein
            Zubehörteil (solange es den Maßen und der Form des Originalteils
            entspricht) nichts einzuwenden. Vor- und Nachschalldämpfer haben in
            der Regel Einfluss auf Fahrgeräusch und Motorleistung und sind daher
            genehmigungspflichtig.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Blinkleuchten (Blinker)
            <img src={arrow} alt="Pfeil" />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Blinker gehören zu den genehmigungspflichtigen Bauteilen.
            Blinkergläser müssen entweder das nationale oder das europäische
            Prüfzeichen tragen. Anstelle eines Blinkerpaares vorn und hinten
            dürfen an Motorrädern auch sogenannte "Ochsenaugen" angebaut werden.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Bremsanlage
            <img src={arrow} alt="Pfeil" />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Änderungen an der Bremsanlage sind generell genehmigungspflichtig,
            sofern es sich nicht um Austausch von Verschleißteilen wie
            Bremsbeläge, Bremsscheiben oder Hydraulikleitungen handelt -
            vorausgesetzt, es werden Original-Ersatzteile des Herstellers
            verwendet.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Fußrasten
            <img src={arrow} alt="Pfeil" />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Art und Anordnung der Fußrasten für Fahrer und Beifahrer sind im
            Rahmen der Erteilung der Betriebserlaubnis festgehalten. Jede
            Änderung ist genehmigungspflichtig und muss beim TÜV vorgeführt und
            eingetragen werden.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default SiteAccordion;
