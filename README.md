# Mastermind v.2

This is my version of the mastermind game where you, the "codebreaker", can have 10 attempts at breaking a 4 digit code. After each guess, the game provides some limited feedback that can be used to help you get closer to breaking the code.

Version 1 can be played [here](https://jiblu.github.io/masterm1nd-game/) - code available [here](https://github.com/jiblu/masterm1nd-game).
This first version was created using brute force where my goal was to be able to have a working MVP. Unfortunately, I ran into issues when I wanted to extend the game with additional features - the code was too messy and hard to work with.

When I made the decision to work on Version 2, I considered how I could re-organize my components and containers so that they could better facilitate additional features.

## Usage

#### On your browser
 - Just visit [here](https://jiblu.github.io/mastermindv2) and play.
#### On your local machine
- Open your local machine's terminal
- `git clone https://github.com/jiblu/mastermindv2.git`
- `npm install`
- `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## File Descriptions (Main container files)
#### Smaller files / sub component files are not listed
---
File|Task
---|---
app.js | The App that holds the game
GameContainer.js | Container that toggles between setting up the game vs starting the game
Settings.js | This is where you can customize the game before starting
Dashboard.js | Once you start the game, this is where everything happens
Guesses.js | This is the component that renders all guessed attempts and feedback
ResultPage.js | This component is displayed once the game is over

## MVP Features Implemented
- Ability to guess the combinations of 4 numbers
- Ability to view the history of guesses and their feedback
- The number of guesses remaining is displayed
- Use Random generator API to randomly select 4 numbers from 0-7

## Extension Features Implemented
- Added configurable difficulty level to adjust number of numbers used
- Added sound effects for wrong guesses, invalid input, winning the game, and losing the game.
- Kept track of scores
- Created a progress bar based on number of attempts left
- Integrated a small confetti celebration on winning the game
- Implemented hint feature where you can buy hints in exchange for guesses/points deduction

## Features I Would Like To Explore
- A leaderboard for top scores (would require a database for data persistence)
- User login (maybe firebase for 3rd party auth)

