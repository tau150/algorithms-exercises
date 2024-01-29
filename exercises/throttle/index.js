// implement throttle

// throttledFn = throttle(fn, time)

function throttle(fn, time = 1000){

  let timeoutId;

  return (...args) => {

   if(timeoutId){
    // in contrast with debounce, if there is a timer running, we just return, we don't want to execute our function
    return
   }

   timeoutId = setTimeout(() => {
     fn(...args)
     timeoutId = null;
   }, time)
  }
}


