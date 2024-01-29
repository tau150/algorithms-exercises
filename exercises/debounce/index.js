// implement debounce

// debouncedFn = debounce(fn, time)

function debounce(fn, time = 1000){

  let timeoutId;

  return (...args) => {
   if(timeoutId){
    clearTimeout(timeoutId)
   }

   timeoutId = setTimeout(() => {
     fn(...args)
     timeoutId = null;
   }, time)
  }
}


