let myFont
let graphic

function preload() {
  myFont = loadFont('assets/spacegrotesk-medium.otf')
}

function setup() {
  createCanvas(900, 900)
  background(0)

  graphic = createGraphics(900, 900)

  graphic.fill(255)
  graphic.textAlign(CENTER, CENTER)
  graphic.textSize(1000)
  graphic.textFont(myFont)
  graphic.text("a", 450, 350)
}

function draw() {
  background(0)

  const tileSize = 100

  for (let i=0; i<12; i++) {
    for (let j=0; j<12; j++) {
      const distortion = sin(frameCount*0.05 + i*0.5 + j*0.3)*50

      // Source
      const sx = i*tileSize + distortion
      const sy = j*tileSize
      const sw = tileSize
      const sh = tileSize + distortion

      // Destination
      const dx = i*tileSize
      const dy = j*tileSize
      const dw = tileSize
      const dh = tileSize


      image(graphic, dx, dy, dw, dh, sx, sy, sw, sh)
    }
  }
}
