function createPlayer() {
  player = createSprite(width/2, height/2);

  player.addAnimation("down-walk", "imgs/1a.png", "imgs/1b.png", "imgs/1c.png", "imgs/1d.png").delayFrame = 6;
  player.addAnimation("right-walk", "imgs/2a.png", "imgs/2b.png", "imgs/2c.png", "imgs/2d.png").delayFrame = 6;
  player.addAnimation("up-walk", "imgs/3a.png", "imgs/3b.png", "imgs/3c.png", "imgs/3d.png").delayFrame = 6;
  player.addAnimation("left-walk", "imgs/4a.png", "imgs/4b.png", "imgs/4c.png", "imgs/4d.png").delayFrame = 6;

  player.addAnimation("down-stop", "imgs/1a.png");
  player.addAnimation("right-stop", "imgs/2a.png");
  player.addAnimation("up-stop", "imgs/3a.png");
  player.addAnimation("left-stop", "imgs/4a.png");
}

function moveUp(speed) {
  player.position.y -= speed;
  player.changeAnimation("up-walk");
  playerDirection = "up";
}

function  moveLeft(speed) {
  player.position.x -= speed;
  player.changeAnimation("left-walk");
  playerDirection = "left";
}

function moveDown(speed) {
  player.position.y += speed;
  player.changeAnimation("down-walk");
  playerDirection = "down";
}

function moveRight(speed) {
  player.position.x += speed;
  player.changeAnimation("right-walk");
  playerDirection = "right";
}

function walkPlayer() {
  if (keyDown("w")) {
    moveUp(3);
  }
  if (keyDown("a")) {
    moveLeft(3);
  }
  if (keyDown("s")) {
    moveDown(3);
  }
  if (keyDown("d")) {
    moveRight(3);
  }

  if(touchIsDown || mouseIsPressed) {
    if (mouseX < player.position.x) {
      moveLeft(2);
    }
    else if (mouseX > player.position.x) {
      moveRight(2);
    }
    if (mouseY < player.position.y) {
      moveUp(2);
    }
    else if (mouseY > player.position.y) {
      moveDown(2);
    }
  }

  if (keyDown("w") === false &&
      keyDown("a") === false &&
      keyDown("s") === false &&
      keyDown("d") === false &&
      touchIsDown === false &&
      mouseIsPressed === false
      ) {
    player.changeAnimation(playerDirection + "-stop");
  }

}
