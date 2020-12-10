//copied from ./scenes/worldSceneUtilityFunctions/createPuzzleSprites.js

//Utility fxns for creating puzzle sprites
import SokoBox from '../entity/SokoBox'
import SokoGoal from '../entity/SokoGoal'
import SokoWall from '../entity/SokoWall'

function createPuzzleSprites(boxGroup, goalGroup, wallGroup, worldScene) {
    function createSokoBoxSprite(group, scene) {
        for (let i = 0; i < scene.levelConfig.puzzleOptions.height; i++) {
            for (let j = 0; j < scene.levelConfig.puzzleOptions.width; j++) {
                if (scene.levelConfig.puzzleLayers.box.data[i][j] === 28) {
                    let x = j * 16 + scene.levelConfig.puzzleOptions.x //16 = tile size
                    let y = i * 16 + scene.levelConfig.puzzleOptions.y //16 = tile size
                    let sokoBoxSprite = new SokoBox(scene, x, y, 'sokoboxes')
                    sokoBoxSprite.setSize(50, 50)
                    sokoBoxSprite.setScale(0.25)
                    group.add(sokoBoxSprite)
                }
            }
        }
    }

    function createSokoGoalSprite(group, scene) {
        for (let i = 0; i < scene.levelConfig.puzzleOptions.height; i++) {
            for (let j = 0; j < scene.levelConfig.puzzleOptions.width; j++) {
                if (scene.levelConfig.puzzleLayers.goal.data[i][j] === 9) {
                    let x = j * 16 + scene.levelConfig.puzzleOptions.x
                    let y = i * 16 + scene.levelConfig.puzzleOptions.y
                    let sokoGoalSprite = new SokoGoal (scene, x, y, 'sokogoals')
                    sokoGoalSprite.setScale(0.25)
                    group.add(sokoGoalSprite)
                }
            }
        }
    }
        
    function createSokoWallSprite(group, scene) {
        for (let i = 0; i < scene.levelConfig.puzzleOptions.height; i++) {
            for (let j = 0; j < scene.levelConfig.puzzleOptions.width; j++) {
                if (scene.levelConfig.puzzleLayers.wall.data[i][j] === 12) {
                    let x = j * 16 + scene.levelConfig.puzzleOptions.x
                    let y = i * 16 + scene.levelConfig.puzzleOptions.y
                    let sokoWallSprite = new SokoWall(scene, x, y, 'sokowalls')
                    sokoWallSprite.setSize(50, 50)
                    sokoWallSprite.setScale(0.25)
                    group.add(sokoWallSprite)
                }
            }
        }
    }

    createSokoBoxSprite(boxGroup, worldScene)
    createSokoGoalSprite(goalGroup, worldScene)
    createSokoWallSprite(wallGroup, worldScene)
}

export {
    createPuzzleSprites
}