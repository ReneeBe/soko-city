//Creating animation sequence for player movement
function createAnims(worldScene) {
    worldScene.anims.create({
      key: 'left',
      frames: worldScene.anims.generateFrameNumbers('player', {
        frames: [4, 10, 4, 16]
      }),
      frameRate: 10,
      repeat: -1
    })

    worldScene.anims.create({
      key: 'right',
      frames: worldScene.anims.generateFrameNumbers('player', {
        frames: [4, 10, 4, 16]
      }),
      frameRate: 10,
      repeat: -1
    })

    worldScene.anims.create({
      key: 'up',
      frames: worldScene.anims.generateFrameNumbers('player', {
        frames: [5, 11, 5, 17]
      }),
      frameRate: 10,
      repeat: -1
    })

    worldScene.anims.create({
      key: 'down',
      frames: worldScene.anims.generateFrameNumbers('player', {
        frames: [3, 9, 3, 15]
      }),
      frameRate: 10,
      repeat: -1
    })

    worldScene.anims.create({
      key: 'idle',
      frames: [{ key: 'player', frame: 3 }],
      frameRate: 10
    })
  }

export {
    createAnims
}