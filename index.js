function analyzeSentence(sentence) {
  // Initialize counters
  let lengthCount = 0;
  let wordCount = 1; // Start with 1, assuming the sentence has at least one word
  let vowelCount = 0;

  // Define vowels
  const vowels = "aeiouAEIOU";

  // Iterate through each character in the sentence
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];

    // Stop processing if the character is a period
    if (char === ".") {
      break;
    }

    // Increment length counter
    lengthCount++;

    // Check for spaces to count words
    if (char === " ") {
      wordCount++;
    }

    // Check if the character is a vowel
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }

  // Output results
  console.log("Length of the sentence:", lengthCount);
  console.log("Number of words:", wordCount);
  console.log("Number of vowels:", vowelCount);
}

// Example usage
const sentence = "Hello world.";
analyzeSentence(sentence);
