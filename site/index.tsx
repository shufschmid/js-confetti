import ReactDOM from "react-dom";
import React, { useCallback, useEffect, useRef } from "react";

import JSConfetti from "../src/index";
import { generateRandomArrayElement } from "../src/generateRandomArrayElement";
import { IAddConfettiConfig } from "../src/types";

const CONFETTI_ARGS: IAddConfettiConfig[] = [
  {},
  { confettiRadius: 12, confettiNumber: 100 },
  { emojis: ["🌈", "⚡️", "💥", "✨", "💫", "🌸"] },
  { emojis: ["⚡️", "💥", "✨", "💫"] },
  { emojis: ["🦄"], confettiRadius: 100, confettiNumber: 30 },
  {
    confettiColors: ["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"],
    confettiRadius: 10,
    confettiNumber: 150,
  },
  {
    confettiColors: ["#9b5de5", "#f15bb5", "#fee440", "#00bbf9", "#00f5d4"],
    confettiRadius: 6,
    confettiNumber: 300,
  },
];

function App(): JSX.Element {
  const jsConfettiRef = useRef<JSConfetti>();

  useEffect(() => {
    jsConfettiRef.current = new JSConfetti();

    const timeoutId = setTimeout(() => {
      if (jsConfettiRef.current) {
        jsConfettiRef.current
          .addConfetti(generateRandomArrayElement(CONFETTI_ARGS))
          .then(() => console.log("Initial batch completed"));
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  const onButtonClick = useCallback(() => {
    const items = [
      'kurz, leichthändig, fundiert',
'früh, frisch, lokal',
'das schelmische Element',
'frisch, jung, unverdorben',
'den persönlichen Touch von Daniel Faulhaber',
'man kann sich längere Artikel zusenden lassen',
'unabhängig',
'Humor / Tonalität',
'die aufsässig geführten Interviews von Andrea Fopp',
'Die wichtigsten infos kurz und bündig zusammengefasst.',
'euer Insider-Wissen, eure Positivität',
'der persönliche Umgang mit den Leser*innen',
'unterhaltsam und informativ',
'Wo ist INA?',
'gratis, übersichtlich und humorvoll',
'mega Dienstleistung, die mir im Alltag viel Zeit spart',
'kleine Denkanregungen in Zwischensätzen',
'schwer verständliche Themen werden gut erklärt',
'ein wenig anders als die normalen Zeitungsbeiträge',
'geschrieben von jungen Menschen, die ticken wie ich',
'rascher Überblick',
'Basel first ohne zugeknöpft zu sein',
'nicht mehr wegzudenken',
'up to date ohne selbst Zeitung lesen zu müssen',
'Nach dem Lesen weiss ich, was in Basel los ist.',
'Gärngscheh-Aktionen!',
'unabhängig recherchiert',
'Beiträge von Partner-Medien',
'Umfragen und alles, wo man mitmachen kann',
'Mischung aus ernsthafter Recherche und kleinen persönlichen Anmerkungen',
'Der spürbare Schwung der Bajour-Crew!',
'abwechslungsreich, weil jede Person einen eigenen Stil hat',
'Dass man euer Engagement jedem einzelnen Briefing anmerkt.',
'zum Kaffee das Wichtigste im Schnellüberblick',
'mir gefällt alles',
'gärn gscheh ist eine grossartige Sache',
'Ich fühle mich grundinformiert innerhalb sehr kurzer Zeit.',
'auf Augenhöhe und mit Witz',
'Im «Nützlichen» habe ich schon manchen erfreulichen Tipp gefunden.',
'Eigene Recherchen wie "Wem gehört Basel?"',
'Erweiterung vom Briefing auf FCB-Briefing',
'Der Lokalbezug wir früher die Baz',
'geschlechtersensibel und sozial',
'relevanteste News gut gebündelt',
'Ist ein Ritual geworden (obwohl ich zu Beginn nicht verstanden habe, weshalb ich das brauchen sollte).',
'eure Begeisterung und euer Engagement',
'freundlich und locker',
'Für mich ist das Briefing wie eine "«"Leseanleitung"»" für meinen restlichen News-Konsum.',
'Dass ich es am Morgen im Bett lesen kann',
'die Persönlichkeit der Schreibenden darf durchscheinen',
'dass ihr ehrlich und simpel erklärt und formuliert',
'den Mut mal einfach zu machen und Neues auszuprobieren',
'Intelligent, hip, witzig, positiv, kritisch, weitgefächert',
'dass links und rechts mitreden kann',
'feinsinnige Wortspiele und durchmischt mit Mundart',
'Chapeau, um die Uhrzeit könnte ich mal meinen Namen sagen.',
'Zusammenarbeit mit babanews',
'Dankeschön an Euch alle. Ihr seid wunderbar.',
'Presseschau querbeet',
'Ich weiss als NZZ Abonnentin was in Basel geht.',
'Verlinkung zu den detaillierteren Artikel',
'Frisch drauf los und unbelastet',
'Liste mit den Wohnungen',
'dass ich jeden Morgen von einem netten Menschen persönlich begrüsst werde',
'als wärs von einer Freundin',
'der Gutemorgenton',
'Ich bin informiert und erhalte eine Einbettung.',
'abwechslungsreich und manchmal eine Wundertüte',
'Es ist cool, dass ihr euch abwechselt und alle ihren persönlichen Stil haben.',
'Obwohl ich noch jemanden von euch getroffen habe, habe ich das Gefühl, dass ich euch ziemlich gut kenne. :-)',
'mein persönliches, mentales Aufwärmen',
'ihr liefert immer Gesprächsstoff',
'Newcomerin Michelle',
'dass ihr offen und unverkrampft mit Fehlern umgeht',
'Tierli für die Verlosung!',
'Die eingefärbten Wochenschau-Filmli fine ich ganz toll.',
'Baseldytsch mit Ina (warum habe ich das schon so lange nicht gesehen?)',
'Die Person hinter den News wird sichtbar.',
'Kompakt und oft ohne bla bla.',
'Die GIFs NERVEN!!! Dieses ewige Getanze auf dem Bildschirm lenkt ab.',
'Zu viele Fehler in Rechtschreibung und Grammatik',
'Die morgendlichen Befindlichkeits-Mitteilungen der Schreibenden: überflüssig'];
    document.getElementById("myButton2")!.innerHTML = "&laquo;"+
      items[Math.floor(Math.random() * items.length)]+"&raquo;";

    if (jsConfettiRef.current) {
      jsConfettiRef.current
        .addConfetti(generateRandomArrayElement(CONFETTI_ARGS))
        .then(() => console.log("Manual batch completed"));
    }
  }, [jsConfettiRef]);

  return (
    <>
        {/* <p id="Quote">If this is coffee, please bring me some tea; </p><br/> */}

      <button className="button" onClick={onButtonClick} id="myButton2">
      &laquo;freundlich, locker&raquo;
      </button>
    </>
  );
}

const appContainer = document.getElementById("app");
ReactDOM.render(<App />, appContainer);
