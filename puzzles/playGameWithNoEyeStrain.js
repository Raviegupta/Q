// Bob is nearing the end of a video game he is playing.
// He makes the decision to play through the remaining content in one sitting.

// There are X levels left in the game, and Bob needs YYY minutes to finish each one.
// Bob also decides to take a Z minute break from playing after finishing three levels in order to prevent eye strain.
// Note that if the game has been finished, there is no need for this pause.

// https://replit.com/@ac102-batch/Eye-Strain-Raviegupta#index.js

const game = (x, y, z) => {
    let playTime = breakTime = totalTime = 0;
    playTime = x*y;
    x>3 && x%3!=0 ? breakTime = (Math.floor(x/3))*z : "khelte raho"
    x%3==0 ? breakTime = (Math.floor(x/3)-1)*z : "enjoy"
    totalTime = playTime + breakTime; 
    return totalTime;
  }
  console.log(game(2, 12, 10))  //24
  console.log(game(3, 12, 10))  //36
  console.log(game(4, 12, 10))  //58
  console.log(game(5, 12, 10))  //70
  console.log(game(6, 12, 10))  //82
  console.log(game(7, 12, 10))  //104