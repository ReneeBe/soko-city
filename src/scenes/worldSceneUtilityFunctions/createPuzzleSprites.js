//Utility fxns for creating puzzle sprites
import SokoBox from '../../entity/SokoBox'
import SokoGoal from '../../entity/SokoGoal'
import SokoWall from '../../entity/SokoWall'

// function createPuzzleSprites(boxGroup, goalGroup, wallGroup,) {






// }

function createSokoBoxSprite(group, worldScene) {
for (let i = 0; i < worldScene.levelConfig.puzzleOptions.height; i++) {
    for (let j = 0; j < worldScene.levelConfig.puzzleOptions.width; j++) {
    if (worldScene.levelConfig.puzzleLayers.box.data[i][j] === 28) {
        let x = j * 16 + worldScene.levelConfig.puzzleOptions.x //16 = tile size
        let y = i * 16 + worldScene.levelConfig.puzzleOptions.y //16 = tile size
        let sokoBoxSprite = new SokoBox(worldScene, x, y, 'sokoboxes')
        sokoBoxSprite.setSize(50, 50)
        sokoBoxSprite.setScale(0.25)
        group.add(sokoBoxSprite)
    }
    }
}
}

function createSokoGoalSprite(group, worldScene) {
for (let i = 0; i < worldScene.levelConfig.puzzleOptions.height; i++) {
    for (let j = 0; j < worldScene.levelConfig.puzzleOptions.width; j++) {
    if (worldScene.levelConfig.puzzleLayers.goal.data[i][j] === 9) {
        let x = j * 16 + worldScene.levelConfig.puzzleOptions.x
        let y = i * 16 + worldScene.levelConfig.puzzleOptions.y
        let sokoGoalSprite = new SokoGoal (worldScene, x, y, 'sokogoals')
        sokoGoalSprite.setScale(0.25)
        group.add(sokoGoalSprite)
    }
    }
}
}

function createSokoWallSprite(group, worldScene) {
for (let i = 0; i < worldScene.levelConfig.puzzleOptions.height; i++) {
    for (let j = 0; j < worldScene.levelConfig.puzzleOptions.width; j++) {
    if (worldScene.levelConfig.puzzleLayers.wall.data[i][j] === 12) {
        let x = j * 16 + worldScene.levelConfig.puzzleOptions.x
        let y = i * 16 + worldScene.levelConfig.puzzleOptions.y
        let sokoWallSprite = new SokoWall(worldScene, x, y, 'sokowalls')
        sokoWallSprite.setSize(50, 50)
        sokoWallSprite.setScale(0.25)
        group.add(sokoWallSprite)
    }
    }
}
}

export {
    createSokoBoxSprite,
    createSokoGoalSprite,
    createSokoWallSprite
}
