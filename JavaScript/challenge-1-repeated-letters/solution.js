function searchingChallenge(str) {
  // Helper function to find the highest number of repeated letters in a given word
  const getMaxRepeatedLetterCount = (word) => {
    const letterCount = [...word].reduce((count, letter) => {
      count[letter] = (count[letter] || 0) + 1;
      return count;
    }, {});

    return Math.max(...Object.values(letterCount));
  };

  const words = str.split(" ");
  const wordWithMaxRepeats = words
    .map((word) => ({
      word,
      maxRepeatedLetterCount: getMaxRepeatedLetterCount(word),
    }))
    .sort((a, b) => b.maxRepeatedLetterCount - a.maxRepeatedLetterCount)[0];

  return wordWithMaxRepeats.maxRepeatedLetterCount <= 1
    ? -1
    : wordWithMaxRepeats.word;
}

// Example usage
const exampleString1 = "hello world";
const exampleString2 = "test the app";
const exampleString3 = "dog cat bird fish";
console.log(searchingChallenge(exampleString1)); // Output: hello
console.log(searchingChallenge(exampleString2)); // Output: test
console.log(searchingChallenge(exampleString3)); // Output: -1
