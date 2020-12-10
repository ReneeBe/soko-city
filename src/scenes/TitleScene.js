import firebase from 'firebase'
import { db } from '../config/firebaseConfig'
import { setLevelConfig } from '../entity/utilityFunctions'
import { saveLevelProgression } from '../server/db'

let levelConfig = {}

class TitleScene extends Phaser.Scene {
  constructor() {
    super('TitleScene')
    this.handleClick = this.handleClick.bind(this)
  }

  preload() {
    this.load.image('background', 'assets/sprites/titleBg.png')
  }

  create() {
    const titleSceneBackground = this.add.sprite(0, 0, 'background')
    titleSceneBackground.setOrigin(0, 0)
    this.add.text(160, 100, 'SOKOCITY', { fontSize: '70px' })

    const text = this.add.text(235, 320, 'start game', { fontSize: '30px' })
    text.setInteractive({ useHandCursor: true })
    text.on('pointerdown', () => this.handleClick())
    firebase.auth().currentUser.email
      ? db
          .collection('games')
          .doc(firebase.auth().currentUser.email)
          .get()
          .then(doc => {
            if (!doc.exists) {
              saveLevelProgression(firebase.auth().currentUser.email, 1)
              levelConfig = setLevelConfig(1)
            } else {
              if (doc.data().completed) {
                saveLevelProgression(firebase.auth().currentUser.email, 1)
                levelConfig = setLevelConfig(1)
              } else {
                levelConfig = setLevelConfig(doc.data().level)
              }
            }
          })
          .catch(function(error) {
            console.error('Your save data could not be loaded')
          })
      : (levelConfig = setLevelConfig(1))
  }

  handleClick() {
    this.cameras.main.fadeOut(500)

    const startIntroSceneOrResumeLevel = () => {
      this.time.addEvent({
        delay: 500,
        callback: () => {
          if(levelConfig.level === 1){
            this.scene.start('IntroScene', levelConfig)
          } else {
            this.scene.start('WorldScene', levelConfig)
            this.scene.launch('UIScene')
            this.scene.bringToTop('UIScene')
          }
        }
      })
    }

    startIntroSceneOrResumeLevel()
  }
}

export default TitleScene
