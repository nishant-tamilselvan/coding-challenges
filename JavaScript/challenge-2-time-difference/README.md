# Challenge 2: Smallest Time Difference

## Problem Statement
Given an unsorted list of times in the 12-hour format, write a function that returns the smallest difference in minutes between any two times in the list, considering the circular nature of the clock.

## Sample Code
```javascript

function smallestTimeDifference(times) {

// Paste your solution code here
return times;
}

const times1 = ["1:10pm", "4:30am", "5:00pm"];
const times2 = ["11:45pm", "12:01am"];
console.log(smallestTimeDifference(times1));  // Output: 230
console.log(smallestTimeDifference(times2));  // Output: 16