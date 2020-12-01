const negativeVelocity = -80;
const positiveVelocity = 80;

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, spriteKey) {
    super(scene, x, y, spriteKey)

    this.scene = scene
    this.scene.add.existing(this)
    this.scene.physics.world.enable(this)
  }

  update(cursors) {
    this.updateMovement(cursors)
  }

  updateMovement(cursors) {
    if (cursors.left.isDown) {
      this.body.setVelocityX(negativeVelocity)
      this.body.setVelocityY(0)
      this.anims.play('left', true)
      this.flipX = true
    } else if (cursors.right.isDown) {
      this.body.setVelocityX(positiveVelocity)
      this.body.setVelocityY(0)
      this.anims.play('right', true)
      this.flipX = false
    } else if (cursors.up.isDown) {
      this.body.setVelocityY(negativeVelocity)
      this.body.setVelocityX(0)
      this.anims.play('up', true)
    } else if (cursors.down.isDown) {
      this.body.setVelocityY(positiveVelocity)
      this.body.setVelocityX(0)
      this.anims.play('down', true)
    } else {
      this.body.setVelocity(0)
      this.anims.play('idle')
      this.anims.stop()
    }
  }
}
