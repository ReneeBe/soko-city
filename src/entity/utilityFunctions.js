
//Creates inventory bar in the window
function populateInventoryBar(scene, ...items) {
  scene.inventoryBar = scene.physics.add.staticGroup()
  let currentX = 16
  items.forEach(item=>{
    scene.inventoryBar.create(currentX,224,'graySquare').setScale(0.5)
    scene.inventoryBar.create(currentX,224,item).setScale(0.8).setTint(0x696969)
    currentX += 16
  })
}

function loadNextLevel(scene) {
  //Add any end-of-scene graphics HERE

  // start the next level after 1.5 seconds
  scene.time.addEvent({
    delay: 1500,
    callback: () => {
      scene.levelConfig = setLevelConfig(scene.levelConfig.level+1)
      scene.scene.restart()
    }
  })
}


//Sets levelConfig variables for a scene to load user's current level
function setLevelConfig(level) {
  switch(level) {
    case 1:
      return {
        level: 1,
        mapWidth: 15,
        mapHeight: 15
      }
    case 2:
      return {
        level: 2,
        mapWidth: 45,
        mapHeight: 45
      }
    case 3:
      return {
        level: 3,
        mapWidth: 75,
        mapHeight: 75
      }
    case 4:
      return {
        level: 4,
        mapWidth: 100,
        mapHeight: 100
      }
    case 5:
      return {
        level: 5,
        mapWidth: 120,
        mapHeight: 120
      }
    }
}


export {
  populateInventoryBar,
  loadNextLevel
}
