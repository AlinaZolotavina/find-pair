![alt-текст](./src/images/find-pair-banner.jpg)

# 🎮 Find Pair Game

A small browser-based memory game where you match card pairs as quickly as possible.

---

## 💻 Demo

[Click here to see demo.](https://alinazolotavina.github.io/find-pair)

## 🛠️ Technologies

- React (Hooks: useState, useEffect, useRef)
- React Router (createBrowserRouter, Outlet)
- CSS (BEM methodology)
- JavaScript (ES6+)

---

## 🚀 Installation & Run

```bash
git clone https://github.com/your-username/find-pair.git
cd find-pair
npm install
npm start
```

After running the app, it will be available at: 👉 http://localhost:3000

---

## 🎮 How to Play

- Enter your name
- Flip cards
- Find matching pairs
- Finish the game as fast as possible.

---

## 🧩 Core Logic

🔹 Cards:

- duplicated and shuffled
- have states: _normal_, _match_, and _no-match_

🔹 Gameplay:

- player selects 2 cards
- if they match → stay open
- if not → flip back

🔹 Timer:

- starts at the beginning
- stops at the end
- result is shown in a popup

🔹 Game End:

when all pairs are found:

- the timer stops
- a result popup appears
- the player can restart the game

---

## 🧠 Architecture

🔹 App (Layout)

Manages global state:

- player name
- result
- popup
- Passes data via Outlet context

🔹 Game: core game logic (timer, cards, game completion)

🔹 Cards / Card: handles card selection and match checking

## 🔹 Popup: shows result and allows the player to restart the game or navigate to the leaderboard

## 🧭 Routing

    / — menu
    /get-player-name — name input
    /new-game — game
    /leaderboard — leaderboard
    404 page

---

## 💡 Possible Improvements

- Leaderboard (localStorage / backend)
- Difficulty levels
- Animations and sound
- Responsiveness

---

## 📄 License

## MIT
