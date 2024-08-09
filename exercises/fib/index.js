// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

const memoize = (fn) => {

  const cache = {}

  return (...args) => {
    if(cache[args]){
      return cache[args]
    }

    const result = fn(...args)
      cache[args] = result
      return result

  }

}

function baseFib(n) {

  if(n < 2) {
    return n
  }


  return fib(n - 1) + fib(n - 2)
}



const fib = memoize(baseFib)

module.exports = fib;
