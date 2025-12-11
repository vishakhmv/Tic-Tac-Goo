TIC TAC GOO – WEB-BASED TIC TAC TOE AND TRISTRIKE GAME

Tic Tac Goo is a fully interactive web-based mini game collection featuring two game modes:

Tic Tac Toe (3x3)

Quad Strike (5x5)

The project focuses on game logic, responsive UI design, and rule-based gameplay, built using HTML, CSS, and JavaScript.

GAME MODES

TIC TAC TOE (3x3)

This mode follows the traditional two-player Tic Tac Toe format where:

One player plays as X and the other as O

X always starts the game

The board is a 3x3 grid

A turn indicator shows whose turn it is

The win condition is achieved by placing three identical symbols in a straight line (horizontal, vertical, or diagonal)

Includes audio feedback with a winner sound effect

Dynamic Erase Mechanic:

Only the last 6 moves remain visible on the board

When a new move is played beyond this limit, the oldest move is automatically erased

The oldest active move turns red as a warning before removal

How to Play Page:
A dedicated page that explains:

Turn rules

Win conditions

The erase-and-warning mechanism

Reset and navigation controls

This makes the game easy for new users to understand while still being strategically engaging.

QUAD STRIKE MODE (5x5)

Quad Strike is a more competitive and strategic version of Tic Tac Toe played on a 5x5 grid:

One player plays as X and the other as O

X starts the game

Players win by forming four identical symbols in a straight line

Includes audio feedback with a victory sound when a player wins

Advanced Erase System:

Only the last 22 moves stay active on the board

When the move limit is close, the oldest active move turns red

On the next move, that red-highlighted block is automatically erased

This encourages players to predict, block, and plan ahead

Quad Strike How to Play Page explains:

Turn order and player roles

Win conditions on a 5x5 grid

The 22-move erase system

Reset and navigation options

This mode offers a high-strategy competitive experience while remaining easy to understand.

TECH STACK AND FEATURES

HTML, CSS, JavaScript

Responsive design using vmin units and media queries

Audio feedback using the JavaScript Audio API

Queue-based move management using arrays (push and shift)

Turn indicator system with color-coded styling

Reset and New Game controls

Simple navigation between game modes and How-to-Play pages

HOW TO RUN LOCALLY

Clone the repository
git clone https://github.com/vishakhmv/Tic-Tac-Goo.git

Open the project folder.

Open index.html in any modern web browser.

Start playing.

WHAT I LEARNED

Built complete game logic from scratch

Implemented turn handling, win detection, and game-state resets

Used queue-based logic with arrays to implement an order-based move-removal system

Improved skills in responsive UI design and micro-interactions

Designed clear How-to-Play pages for better user guidance

Strengthened overall understanding of front-end game development using HTML, CSS, and JavaScript

AUTHOR

Vishakh M V
GitHub Profile: https://github.com/vishakhmv

Project Repository: https://github.com/vishakhmv/Tic-Tac-Goo
