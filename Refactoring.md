# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

- I seperated the key genearation into a function as it was repeating the same process multiple times but with different possible values. 

- Used the JS || operator in order to clean up the code, we can reduce the number of if statements in this way and make the code much more reabale.

- Made two different files for constants and helpers. This helps in reusibility of the values and functions.

- In the generateKey function, the undefined check is also handles also the check that the value is of type string. This lets us replicate the functionality using the || operator. So first it will check for the key with in the event itself, if not then if will try to generate the key using the data, and in not then return the zero value. 

- I have written the tests to make sure all these conditions pass. 
