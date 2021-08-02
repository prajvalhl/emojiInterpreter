import React, { useState } from "react";
import "./styles.css";

const emojiDatabase = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🍎": "Red Apple",
  "🍏": "Green Apple",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🍓": "Strawberry",
  "🥝": "Kiwi Fruit",
  "🍅": "Tomato",
  "🥥": "Coconut",
  "🥑": "Avocado",
  "🍆": "Eggplant",
  "🥔": "Potato",
  "🥕": "Carrot",
  "🌽": "Ear of Corn",
  "🌶️": "Hot Pepper",
  "🥒": "Cucumber",
  "🥦": "Broccoli",
  "🍄": "Mushroom",
  "🥜": "Peanuts",
  "🌰": "Chestnut",
  "🍞": "Bread",
  "🥐": "Croissant",
  "🥖": "Baguette Bread",
  "🥨": "Pretzel",
  "🧇": "Waffle",
  "🥞": "Pancakes",
  "🧀": "Cheese Wedge",
  "🍖": "Meat on Bone",
  "🍗": "Poultry Leg",
  "🥩": "Cut of Meat",
  "🥓": "Bacon",
  "🍔": "Hamburger",
  "🍟": "French Fries",
  "🍕": "Pizza",
  "🌭": "Hot Dog",
  "🥪": "Sandwich",
  "🌮": "Taco",
  "🌯": "Burrito",
  "🥙": "Stuffed Flatbread",
  "🥚": "Egg",
  "🍳": "Cooking",
  "🥘": "Shallow Pan of Food",
  "🍲": "Pot of Food",
  "🥣": "Bowl with Spoon",
  "🥗": "Green Salad",
  "🍿": "Popcorn",
  "🥫": "Canned Food",
  "🍱": "Bento Box",
  "🍘": "Rice Cracker",
  "🍙": "Rice Ball",
  "🍚": "Cooked Rice",
  "🍛": "Curry Rice",
  "🍜": "Steaming Bowl",
  "🍝": "Spaghetti",
  "🍠": "Roasted Sweet Potato",
  "🍢": "Oden",
  "🍣": "Sushi",
  "🍤": "Fried Shrimp",
  "🍥": "Fish Cake with Swirl",
  "🍡": "Dango",
  "🥟": "Dumpling",
  "🥠": "Fortune Cookie",
  "🥡": "Takeout Box",
  "🍦": "Soft Ice Cream",
  "🍧": "Shaved Ice",
  "🍨": "Ice Cream",
  "🍩": "Doughnut",
  "🍪": "Cookie",
  "🎂": "Birthday Cake ",
  "🍰": "Shortcake ",
  "🥧": "Pie ",
  "🍫": "Chocolate Bar ",
  "🍬": "Candy ",
  "🍭": "Lollipop ",
  "🍮": "Custard ",
  "🍯": "Honey Pot ",
  "🍼": "Baby Bottle ",
  "🥛": "Glass of Milk ",
  "☕": "Hot Beverage ",
  "🍵": "Teacup Without Handle ",
  "🍶": "Sake ",
  "🍾": "Bottle with Popping Cork ",
  "🍷": "Wine Glass ",
  "🍸": "Cocktail Glass ",
  "🍹": "Tropical Drink ",
  "🍺": "Beer Mug ",
  "🍻": "Clinking Beer Mugs ",
  "🥂": "Clinking Glasses ",
  "🥃": "Tumbler Glass ",
  "🥤": "Cup with Straw ",
  "🥢": "Chopsticks ",
  "🍽️": "Fork and Knife with ",
  "🍴": "Fork and Knife ",
  "🥄": "Spoon "
};

const emojiArr = Object.keys(emojiDatabase);

export default function App() {
  const [userInput, setUserInput] = useState("");

  function emojiInputHandler(event) {
    let emojiInput = event.target.value;
    if (emojiInput in emojiDatabase) {
      setUserInput(emojiDatabase[emojiInput]);
    } else {
      setUserInput("Sorry! We don't have that emoji in our database!");
    }
  }

  function emojiClickHandler(emoji) {
    setUserInput(emojiDatabase[emoji]);
  }

  return (
    <div className="App">
      <h1>What's this Food / Drink Emoji?</h1>
      <input
        onChange={emojiInputHandler}
        placeholder="Enter a food/drink emoji here OR Choose one from below"
      ></input>

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
