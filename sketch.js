var object1
var object2
var block1
var block2

function setup() {
  createCanvas(800, 400);
  block1 = createSprite(400, 200, 50, 50);
  block2 = createSprite(200, 200, 50, 50);
}

function draw() {
  background("gold");
  block2.x = mouseX;
  block2.y = mouseY;

  if (isTouching(block1, block2)) {
    block1.shapeColor = "blue"
    block2.shapeColor = "red"
  }
  else {
    block1.shapeColor = "green"
    block2.shapeColor = "green"
  }
  drawSprites();
}
function isTouching(object1, object2) {
  if (object1.x - object2.x < object2.width / 2 + object1.width / 2
    && object2.x - object1.x < object2.width / 2 + object1.width / 2
    && object1.y - object2.y < object2.height / 2 + object1.height / 2
    && object2.y - object1.y < object2.height / 2 + object1.height / 2) {
    return true;
  }
  else {
    return false;
  }
}