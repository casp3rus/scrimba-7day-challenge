/*
Proper nouns always begin with a capital letter, followed by small letters.
Correct a given proper noun so it fits this statement.

Example

• For noun = 'pARiS', the output should be properNounCorrection(noun) = 'Paris'
• For noun = 'John', the output should be properNounCapitalization(noun) = 'John'
*/

function properNounCapitalization(noun) {
  
  let lowerCaseNoun = noun.toLowerCase()
  let capitalizedFirstLetter = lowerCaseNoun[0].toUpperCase()

  return capitalizedFirstLetter.concat(lowerCaseNoun.slice(1))
  
}
