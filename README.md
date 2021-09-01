# Memoization

Memoization is an optimization technique used primarily to speed  up computer programs by storing the results of function calls and returning the cached result when the same inputs occur again. Memoization is a specific form of caching that involves caching the  return value of a function based on its parameters. 

### Task and Practice :
Q1 ) Implement Memoization in Javascript for the following: a) F(n) returns Fibonacci number n. 
```
Example 1: F(n)=F(n-1)+F(n-2), F(0)=0, F(1)=F(2)=1 
Example 2: F(n)=n! (F(n)=n*F(n-1), F(0)=1) 
```
Q2) Implement in JavaScript the high-order function memoize() that accepts a function f() as its argument and returns a memoized version of the function f(). 

Q3) Using my memoize() function of Q2, to give another solution to example 2 (n!). 

Q4) Generalize memoize() to accept functions f(…) with several arguments (I assumed that arguments to f all have distinct string representations). 

Extra:
Q5) Write an HTML and a JavaScript files to implement the following adder that takes two number inputs. It outputs their sum after clicking the Add button.

#### Pesudo Code consept:
```
memoize():
  create a new object to use as the cache
  Assign this object to a local variable, so that it is private to (in the closure of) the returned function. 
  The returned function converts its arguments array to a string.
  The returned function uses that string as a property name for the cache object.
  If a value exists in the cache: 
    it returns it directly. 
  Otherwise: 
    Call the specified function to compute the value for these arguments 
    Caches that value
    Returns the value. 
```
