//copied from ./entity/SokoBox.js

const negativeVelocity = -80;
const positiveVelocity = 80;

export default class SokoBox extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, spriteKey) {
    super(scene, x, y, spriteKey);
    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.world.enable(this);
    this.scene.events.on('update', this.update, this)
  }
  
  helperForUpdateMovement(movability, velocityX, velocityY){
    this.body.setImmovable(movability)
    this.body.setVelocityX(velocityX)
    this.body.setVelocityY(velocityY)
    this.body.setBounce(0)
  }

  update() {
    this.updateMovement()
  }


  updateMovement() {
    if (this.body.touching.up && this.body.touching.down) {
      this.helperForUpdateMovement(true, 0, 0)
    } else if (this.body.touching.left && this.body.touching.right) {
      this.helperForUpdateMovement(true, 0, 0)
    } else if (this.body.touching.left && this.body.touching.right && this.body.touching.up && this.body.touching.down) {
      this.helperForUpdateMovement(true, 0, 0)
    } else if (this.body.touching.right) {
      this.helperForUpdateMovement(false, negativeVelocity, 0)
    } else if (this.body.touching.left) {
      this.helperForUpdateMovement(false, positiveVelocity, 0)
    } else if (this.body.touching.down) {
      this.helperForUpdateMovement(false, 0, negativeVelocity)
    } else if (this.body.touching.up) {
      this.helperForUpdateMovement(false, 0, positiveVelocity)
    } else {
      this.helperForUpdateMovement(true, 0, 0)
    }
  }
}

