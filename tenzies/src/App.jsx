import { nanoid } from "nanoid";
import Die from "./components/Die";
import { useState, useEffect } from "react";

function App() {
  const [dices, setDices] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    console.log("dice state changed");
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
    setDices((oldDices) =>
      oldDices.map((dice) => {
        return dice.isHeld ? dice : generateNewDie();
      })
    );
  }
  function holdDice(id) {
    setDices((oldDices) =>
      oldDices.map((dice) => {
        return dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice;
      })
    );
  }

  function selectedDices() {}

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
      <section className="dieContainer">{dice}</section>
      <button onClick={toggleRoll}>Roll</button>
    </main>
  );
}

export default App;
