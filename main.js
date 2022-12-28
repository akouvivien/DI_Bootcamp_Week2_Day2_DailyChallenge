//***********Daily Challenge: Not Bad*********
//seconde Methode
// Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
 // For example, “The movie is not that bad, I like it”.
 // let sentence ="The movie is not that bad, I like it"
let sentence ="The movie is not that bad, I like it"
// Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not” (from the sentence variable).
let wordNot=sentence.search("not")
let wordBad =sentence.search("bad")
// If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
if (wordBad>wordNot) {
const str=sentence.replace(sentence.substring(wordNot,wordBad+3),"good")
console.log(str)
// If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.
} else { console.log("the original sentence")
 }

