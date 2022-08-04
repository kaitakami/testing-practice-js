// word is a string, shift is a number between 1 and 25
const caesarCipher = (words, shift) => {
  const decryptArr = []
  charArr = words.toLowerCase().split('')
  charArr.forEach(character => {
   decryptArr.push(shiftLetter(character, shift))
  });
  const result = decryptArr.join('').toUpperCase()
  return result
}

const shiftLetter = (character, shift) => {
  if (character === ' ' || character === '\'') {
    return character
  }
  if (character.charCodeAt() + shift > 122) {
    return String.fromCharCode(character.charCodeAt() - 26 + shift)
  } else {
    return String.fromCharCode(character.charCodeAt() + shift)
  }
}

module.exports = { caesarCipher }