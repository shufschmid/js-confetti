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
      "Wie frisch und süffig lesbar es formuliert ist durch die Verbindung von kurz, leichthändig formuliert, fundiert (Quellen- und weiterführende Links). aus Basel für Basel.",
      "Sachliche Texte, witzig, manchmal mit etwas Sarkasmus, versch. Briefing-Verfasser*innen",
      "Tagesaktuelle Berichterstattung",
      "Ganz langweilig: Alles",
      "Kurz und bündig",
      "Dass es am morgen in der Mailbox ist",
      "Kurz, informativ, frisch und jugendlich (habe Jahrgang 1956…). Highlights sind stets die Recherchen, die lese ich IMMER! Ihr verlinkt oft Beiträge, das ist sehr gut und hilfreich",
      "lockere Art",
      "Früh, frisch, lokal, aktuell, prononciert. Und die Bajour-Datenprojekte (wem gehört Basel, werden auswärtige Schwinger bei der Zuteilung benachteiligt, …)",
      "kurz und bündig",
      "Die Kürze",
      "Die Vielfalt",
    ];
    document.getElementById("Quote")!.innerHTML =
      items[Math.floor(Math.random() * items.length)];

    if (jsConfettiRef.current) {
      jsConfettiRef.current
        .addConfetti(generateRandomArrayElement(CONFETTI_ARGS))
        .then(() => console.log("Manual batch completed"));
    }
  }, [jsConfettiRef]);

  return (
    <>
        <p id="Quote">If this is coffee, please bring me some tea; </p><br/>

      <button className="button" onClick={onButtonClick} id="myButton2">
        mehr
      </button>
    </>
  );
}

const appContainer = document.getElementById("app");
ReactDOM.render(<App />, appContainer);
