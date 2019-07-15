`use strict`;

const moveBall = () => {
  const field = document.getElementById(`field`);
  const ball = document.getElementById(`ball`);
  const fieldCoordinates = field.getBoundingClientRect();
  const fieldInnerCoordinates = {
    top: fieldCoordinates.top + field.clientTop,
    left: fieldCoordinates.left + field.clientLeft
  };

  const ballSize = {
    heigth: ball.clientHeight,
    width: ball.clientWidth
  };

  const fieldSize = {
    heigth: field.clientHeight,
    width: field.clientWidth
  };

  let ballCoordinates = {
    top: event.clientY - fieldInnerCoordinates.top - ballSize.heigth / 2,
    left: event.clientX - fieldInnerCoordinates.left - ballSize.width / 2
  };

  if (ballCoordinates.top < 0) {
    ballCoordinates.top = 0;
  }

  if (ballCoordinates.left < 0) {
    ballCoordinates.left = 0;
  }

  if (ballCoordinates.top + ballSize.heigth > fieldSize.heigth) {
    ballCoordinates.top = fieldSize.heigth - ballSize.heigth;
  }

  if (ballCoordinates.left + ballSize.width > fieldSize.width) {
    ballCoordinates.left = fieldSize.width - ballSize.width;
  }

  ball.style.top = ballCoordinates.top + `px`;
  ball.style.left = ballCoordinates.left + `px`;
};

const addEvents = () => {
  document.getElementById(`field`).addEventListener(`click`, moveBall);
};

addEvents();
