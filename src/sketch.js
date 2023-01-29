let myFont
let graphic
let tileCount = 40
let tileColumnSize
let tileRowSize

function preload() {
  myFont = loadFont('assets/spacegrotesk-medium.otf')
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(0)
  noStroke()
  strokeWeight(0)
  // noCursor()

  graphic = createGraphics(windowWidth, windowHeight)

  graphic.fill(255)
  graphic.textAlign(CENTER, CENTER)
  graphic.textSize(360)
  graphic.textFont(myFont)
  graphic.text("GRAPHIC", windowWidth/2, windowHeight/2 - 150)
  graphic.text("DESIGN", windowWidth/2, windowHeight/2 + 150)

  tileColumnSize = windowWidth / tileCount
  tileRowSize = windowHeight / tileCount

  for (let i=0; i<tileCount; i++) {
    for (let j=0; j<tileCount; j++) {

      // Source
      const sx = i*tileCount - tileColumnSize / 2
      const sy = j*tileCount - tileRowSize / 2
      const sw = tileColumnSize
      const sh = tileRowSize

      // Destination
      const dx = i*tileCount
      const dy = j*tileCount
      const dw = tileColumnSize
      const dh = tileRowSize


      image(graphic, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
}

function draw() {
  background(0)
  // noCursor()
  tileCountInit = Math.abs(cos(frameCount * 0.004) * 10)
  tileCount = map(tileCountInit, 0, 10, 60, 30)
  console.log(tileCount)

  tileColumnSize = windowWidth / tileCount
  tileRowSize = windowHeight / tileCount

  for (let i=0; i<tileCount; i++) {
    for (let j=0; j<tileCount; j++) {

      let color = graphic.get(i * tileColumnSize, j * tileRowSize)
      let colorVal = color[0]

      noStroke()
      strokeWeight(0)
      if (colorVal == 0) {
        fill(color)
      } else {
        fill(255)
      }

      rect(i*tileColumnSize - tileColumnSize / 2, j*tileRowSize - tileRowSize / 2, tileColumnSize, tileRowSize)
    }
  }

  // fill(255, 0, 0)
  // ellipse(mouseX, mouseY, 50)
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight)
// }