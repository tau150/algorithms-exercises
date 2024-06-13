

// Bumping protesters
// Another day, another group of protesters on 9 de Julio. This time,
// two different factions met to demonstrate but some got confused in the direction of the demonstration,
// some walking one way and others the other. Every time they cross each other, they collide, and when they collide, they change direction.

// Create a function that receives a string with a number N of protesters indicating their direction
// L or R (Left or Right) and returns the number of times they collided.

// protestersBumpers(“LR”); // “0 0” (they never cross each other)
// protestersBumpers(“RRR”); // “0 0 0” (never cross)
// protestersBumpers(“RL”); // “1 1” (they collide once)
// protestersBumpers(“RRL”); // “1 2 1” (the middle one bumps 2 times, the rest 1 time)


// https://github.com/goncy/interview-challenges/tree/main/ejercicios-algoritmos

function protestersBumpers(protesters) {
  const result = new Array(protesters.length).fill(0);
  protesters = protesters.split('');

  let shouldTest = true;

  while (shouldTest) {
    shouldTest = false;

    for (let i = 0; i < protesters.length - 1; i++) {
      const protester = protesters[i];
      const nextProtester = protesters[i + 1];

      if (protester === 'R' && nextProtester === 'L') {
        protesters[i] = 'L';
        protesters[i + 1] = 'R';

        result[i] += 1;
        result[i + 1] += 1;
        shouldTest = true;
      }
    }
  }

  return result.join(' ');
}
