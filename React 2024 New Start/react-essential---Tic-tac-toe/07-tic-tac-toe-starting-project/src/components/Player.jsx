import React, { useState } from "react";

<<<<<<< HEAD
function Player({ initialName, symbol, isActive }) {
=======
function Player({ initialName, symbol }) {
>>>>>>> f3bcfc1519aa0caf796c476f86a5af3e674a1797
  const [isEditing, setIsEditiing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleEditClick = () => {
    setIsEditiing((prev) => !prev);
  };

  const handleValueChange = (e) => {
    setPlayerName(e.target.value);
  };

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleValueChange}
      />
    );
  }
  return (
<<<<<<< HEAD
    <li className={isActive ? "active" : undefined}>
=======
    <li>
>>>>>>> f3bcfc1519aa0caf796c476f86a5af3e674a1797
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
