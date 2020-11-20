# Soko-City: A Puzzle Adventure Game

Soko-City is an RPG adventure game featuring Sokoban puzzles, level progression, and randomly-generated inventory and terrain. We built the game out programmatically so that the levels can continue indefinitely. The current game features five dynamic levels. Play at https://soko-city.firebaseapp.com/

**Motivation**

Our group wanted to build a visually-pleasing but robust puzzle adventure game, inspired loosely by games like Stardew Valley. We liked the idea of incorporating a Japanese Sokoban puzzle into a larger themed adventure. And so Soko-City was born.

**My Work**
A major challenge of our project was determing how to use a puzzle generating node library in Phaser.io and add in puzzle solving functionality. The team found a sokoban generator node library that made solvable puzzles, but we needed to make the output visible and functional as a puzzle in Phaser.io. I took on the challenge of translating the generator's output into actual game pieces, putting the puzzle sprites in the game's scene and adding game play physics to those pieces. For ease of viewing, I made copies of my contributions and put them into a file at ./src/ContributionsFromRenee - the first line of each copy file tell you where to find the actual file in the code base. First, I created an algorithm to convert the puzzle generator's output into game piece layers in converter.js,and then I created the moving puzzle sprite class (SokoBox.js), the non-moving barrier puzzle sprite class (SokoWall.js), and the game goal sprite class (SokoGoal.js), so that they would be ready to be rendered in each level. Finally, I added those puzzle sprites into WorldScene.js and added in physics features to allow the player to solve the puzzle generated for each level.

**Technologies**
* Javascript
* Phaser.io
* React.JS
* Node.JS
* Google Cloud Firestore
* Procedural Level Generator in Javascript: https://www.npmjs.com/package/sokoban-generator

**Installation**
1. Clone this project locally
2. Run `npm install`
3. Run `npm run start` to build the webpack module and host locally
4. Proceed to localhost:8080

**Artwork Credits**
* Lola the Chicken: Esther Kim
* Bad Guy: Jasmin Soltani
* Food Sprites: Henry Software, https://henrysoftware.itch.io/pixel-food
* Pixel Heart: Ben Bushnell, https://pixabay.com/users/benbushnell-5879465/

**Contributors**
* Renee Berger
* Esther Kim
* Marie Luongo
* Jasmin Soltani
