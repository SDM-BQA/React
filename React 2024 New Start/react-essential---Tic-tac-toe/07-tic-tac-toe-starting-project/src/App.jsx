<<<<<<< HEAD
import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
=======
import Player from "./components/Player";
>>>>>>> f3bcfc1519aa0caf796c476f86a5af3e674a1797

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  const handleSelectSquare = (rowIndex, colIndex) => {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let currentPlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }

      const UpdatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...prevTurns,
      ];

      return UpdatedTurns;
    });
  };

  return (
    <main>
      <div id="game-container">
<<<<<<< HEAD
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
          turns={gameTurns}
        />
      </div>
      <Log turns={gameTurns}/>
=======
        <ol id="players">
          <Player initialName ="Player 1" symbol="X"/>
          <Player initialName ="Player 2" symbol="O"/>
        </ol>
      </div>
>>>>>>> f3bcfc1519aa0caf796c476f86a5af3e674a1797
    </main>
  );
}

export default App;
