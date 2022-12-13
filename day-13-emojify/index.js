const emojis = {
  "smile": "😊",
  "angry": "😠",
  "party": "🎉",
  "heart": "💜",
  "cat":   "🐱",
  "dog":   "🐕"
}

function emojifyWord(word){
  if (word.startsWith(":") && word.endsWith(":")){
      let newWord = word.slice(1,-1)
      return emojis[newWord] || newWord
  }
  return word
}

function emojifyPhrase(phrase){
  return phrase.split(' ').map(emojifyWord).join(' ');
}

/* 1. Write a function that checks if a lowercase word starts and
ends with a colon. If it does, remove the colons and
look up the word in the emoji object. If the word is in the
emojis object, return the corresponding emoji.
If it isn't, return the original word.

Example input: ":party:"
Example output: 🎉

Example input: ":flower:"
Example output: "flower"

Example input: "elephant"
Example output: "elephant"
*/
/* 2. Write a function to find any emoji shortcodes in a phrase.
Your function should map over each word in the phrase, emojify any word
that begins and ends with a colon, then return the emojified phrase.
Feel free to use your emojify function from the previous exercise!

Example input: "I :heart: my :cat:"
Example output: "I 💜 my 🐱"

Example input: "I :heart: my elephant"
Example output: "I 💜 my elephant"
*/



// console.log(emojifyWord(":heart:"));
// console.log(emojifyWord(":flower:"));
// console.log(emojifyWord("elephant"));

console.log(emojifyPhrase("I :heart: my :cat:"));
console.log(emojifyPhrase("I :heart: my :elephant:"));
