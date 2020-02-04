const isValidGuess = (guess, rangeUpperLimit) => {
  // check that values are within range
  // check that values are numbers
  // check for correct number of digits
  if (!guess) return false
  if (guess.length !== 4 || isNaN(guess)) {
    return false
  }
  return guess.split('').reduce((total, next) => {
    return !(next > rangeUpperLimit || !total)
  }, true)
}

export default isValidGuess
