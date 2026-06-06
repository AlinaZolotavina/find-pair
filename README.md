![alt-текст](./src/images/find-pair-banner.jpg)

# Find Pair Game

A browser-based memory game built with React and TypeScript, where you match card pairs as quickly as possible.

## Demo

[Click here to see demo.](https://alinazolotavina.github.io/find-pair)

## Features

- Player name registration
- Memory card matching gameplay
- Game timer with formatted results
- Victory popup with restart option
- Client-side routing
- Responsive layout for different screen sizes
- Type-safe codebase powered by TypeScript

## Technologies

- React (Hooks: useState, useEffect, useRef)
- React Router DOM (createBrowserRouter, Outlet)
- CSS & BEM methodology
- TypeScript

## Installation & Run

```bash
git clone https://github.com/AlinaZolotavina/find-pair.git
cd find-pair
npm install
npm start
```

After running the app, it will be available at http://localhost:3000

## How to Play

- Enter your name and start a new game
- Flip cards and find matching pairs
- Finish the game as quickly as possible

## Core Logic

🔹 Cards:

- duplicated and shuffled
- have states: _normal_, _match_, and _no-match_

🔹 Gameplay:

- player selects 2 cards
- matching cards remain open
- non-matching cards are temporarily highlighted and then flipped back

🔹 Timer:

- starts at the beginning
- stops when all pairs are matched
- result is shown in a popup

🔹 Game ends when all pairs are found:

- the timer stops
- the popup with final result appears
- the player can restart the game

## Architecture

🔹 App manages global state (player name, result, popup) and passes it via Outlet context

🔹 Game is responsible for the core game logic (timer, cards, game completion)

🔹 Cards and Card handle card selection and match checking

🔹 Popup shows result and allows the player to restart the game or navigate to the leaderboard

## Routing

    / - Game menu
    /get-player-name - Player name form
    /new-game - Game screen
    /leaderboard - Leaderboard
    404 page

## Future Improvements

- Leaderboard (localStorage / backend)
- Difficulty levels
- Animations and sound
- Unit tests
- Backend integration

## License

MIT
