// Q1 :
// fibonacci function :
var memoFib = function() {
  let memo = {} // the cache
// closure over the “memo” object which log the results of its function
  return function fib(n) {
// the "memo" contains a key for the value (n) for which calc fibonacci - return memo[n]
    if (n in memo) { return memo[n] }
    else {
// calc the fibonacci Number for n and save it in the "memo" object as a key-value pair
      if (n <= 1) { memo[n] = n }
      else { memo[n] = fib(n - 1) + fib(n - 2) }
      return memo[n] // the nth number f the fibonacci sequence
    }
  }
}();

 // factorial function
 var memoFac = (function() {
   let memo = {} // the cache
 // closure over the “memo” object which log the results of its function
   return function fac(n) {
     if (n in memo) { return memo[n] }
     else {
       if (n === 0) { memo[n] = 1 }
       else { memo[n] = n * fac(n - 1) }
       return memo[n]
     }
   }
 })();

 // Q1 TEST : test the memo funtion of the factorial
 console.log(memoFib(4))
 console.log(memoFib(4))
 console.log(memoFac(5))
 console.log(memoFac(5))


// Q2 :
const memoFuc = function(f) {
  let memo = {};
  function fuc(n) {
    if (n in memo) {
      return memo[n];
    } else {
      var result = f(n);
      memo[n] = result;
      return result;
    }
  }
  return fuc;
}

// Q3 :
function recursiveFac(n) {
  if (n == 0) {
    return 1;
  }
  else {
    return n * recursiveFac(n - 1);
  }
}

// Q3 TEST : test the memo funtion of the factorial
const memoFactorial = memoFuc(recursiveFac);
console.log(memoFactorial(5));

// Q4 :
const memoArgsFuc = function(f) {
  const memo = {};
  function fuc(... args) {
    const n = JSON.stringify(args);
    if (n in memo) {
      return memo[n];
    } else {
      let result = f(...args);
      memo[n] = result;
      return result;
    }
  }
  return fuc;
}

// Q4 TEST : test the memo funtion of the factorial
const memoArgsFact = memoArgsFuc(recursiveFac);
console.log(memoArgsFact(5));
