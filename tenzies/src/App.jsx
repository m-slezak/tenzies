import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Die from "./components/Die";
import Confetti from "react-confetti";

function App() {
  const [dices, setDices] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const allIsHeld = dices.every((die) => die.isHeld);
    const firstDice = dices[0].value;
    const allSameDice = dices.every((die) => firstDice === die.value);

    if (allSameDice && allIsHeld) {
      console.log("You won");
      setTenzies(true);
    }
  }, [dices]);

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  function toggleRoll() {
    if (!tenzies) {
      setDices((oldDices) =>
        oldDices.map((dice) => {
          return dice.isHeld ? dice : generateNewDie();
        })
      );
    } else {
      setTenzies(false);
      setDices(allNewDice());
    }
  }

  function holdDice(id) {
    setDices((oldDices) =>
      oldDices.map((dice) => {
        return dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice;
      })
    );
  }

  const dice = dices.map((dice) => (
    <Die
      value={dice.value}
      isHeld={dice.isHeld}
      key={dice.id}
      holdDice={() => holdDice(dice.id)}
    />
  ));

  return (
    <main>
      {tenzies && <Confetti />}
      <h1>Tenzies</h1>
      <p>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <section className="dieContainer">{dice}</section>
      <button onClick={toggleRoll}>{tenzies ? "New Game" : "Roll"}</button>
    </main>
  );
}

export default App;
