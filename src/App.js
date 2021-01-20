import React, { useState } from "react";
import "./styles.css";

const emojiDict = {
  "🍕": "Pizza",
  "🍔": "Hamburger",
  "🍟": "French Fries",
  "🍿": "Popcorn",
  "🧇": "Waffle",
  "🥞": "Pancakes",
  "🥐": "Croissant",
  "🥗": "Green Salad",
  "🥪": "Sandwitch",
  "🌮": "Taco"
};

const emojiArr = Object.keys(emojiDict);

export default function App() {
  const [userInput, setUserInput] = useState("");

  function emojiInputHandler(event) {
    let emojiInput = event.target.value;
    if (emojiInput in emojiDict) {
      setUserInput(emojiDict[emojiInput]);
    } else {
      setUserInput("Sorry! We don't have that emoji in our database!");
    }
  }

  function emojiClickHandler(emoji) {
    setUserInput(emojiDict[emoji]);
  }

  return (
    <div className="App">
      <h1>What's this Food Emoji?</h1>
      <input onChange={emojiInputHandler}></input>

      <h2>{userInput}</h2>

      <div>
        {emojiArr.map((emoji) => {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{ padding: "1rem", fontSize: "2rem", cursor: "pointer" }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
