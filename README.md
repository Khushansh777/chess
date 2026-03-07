# React Chess (Built From Scratch)

A chess game built with **React and TypeScript**, where the board and game logic are implemented from scratch instead of relying on prebuilt chess libraries.

The goal of this project is to understand how chess engines and board games are structured while practicing React architecture, state management, and algorithmic thinking.

## Features

* 8×8 chess board rendered with CSS Grid
* Initial chess piece setup
* Board generated from a 2D array
* Component-based architecture
* Written in React with TypeScript

## Tech Stack

* React
* TypeScript
* Tailwind CSS
* CSS Grid

## Project Structure

```
src
│
├─ components
│   ├─ Board.tsx
│   └─ Square.tsx
│
├─ engine
│   └─ initialBoard.ts
│
├─ App.tsx
└─ main.tsx
```

### Components

**Board**

Responsible for rendering the chess grid and mapping over the board state.

**Square**

Represents a single square on the board and displays a chess piece.

## Board Representation

The chess board is represented as a **2D array (8×8)**.

Example:

```
[
 ['br','bn','bb','bq','bk','bb','bn','br'],
 ['bp','bp','bp','bp','bp','bp','bp','bp'],
 ['','','','','','','',''],
 ['','','','','','','',''],
 ['','','','','','','',''],
 ['','','','','','','',''],
 ['wp','wp','wp','wp','wp','wp','wp','wp'],
 ['wr','wn','wb','wq','wk','wb','wn','wr']
]
```

Piece notation:

| Code | Piece  |
| ---- | ------ |
| p    | Pawn   |
| r    | Rook   |
| n    | Knight |
| b    | Bishop |
| q    | Queen  |
| k    | King   |

Example:

```
wp → white pawn  
bk → black king
```

## Rendering the Board

The board is rendered using **nested mapping**:

```
board.map((row, rindex) =>
  row.map((piece, cindex) =>
    <Square />
  )
)
```

This produces the full **64-square grid**.

## Square Coloring Logic

Chessboard colors are generated using:

```
(row + column) % 2
```

This alternates square colors to create the standard chessboard pattern.

## Future Improvements

Planned features include:

* Piece movement
* Move validation
* Turn system
* Captures
* Check and checkmate detection
* Castling and en passant
* Simple AI opponent

## Purpose of the Project

This project focuses on **learning and building the chess engine logic manually** rather than relying on libraries like `chess.js`.

It helps practice:

* React component architecture
* State management
* Grid layouts
* Game logic design
* Algorithmic thinking

## Running the Project

Install dependencies:

```
npm install
```

Start the development server:

```
npm run dev
```

---

This project is part of my journey of building increasingly complex React applications from scratch.

