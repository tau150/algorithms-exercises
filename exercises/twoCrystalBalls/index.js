

function searchBallsImpact(height){
  let firstBall = 0;
  let lastBall = height.length - 1;

  while(firstBall <= lastBall){
    const index = Math.floor((firstBall + lastBall) / 2)

    if(height[index] === true){
      if(index === 0 || height[index - 1] === false){
        return index
      } else {
        secondBall = index - 1
      }
    } else {
      firstBall = index + 1
    }
  }

  return -1
}