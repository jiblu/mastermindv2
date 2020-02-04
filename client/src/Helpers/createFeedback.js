const createFeedback = (guess, secretCode) => {
  let correctNums = 0
  let correctNumsAndPlaces = 0
  const guessObject = {}
  const secretCodeObject = {}
  const feedbackObject = {}

  for (let i = 0; i < guess.length; i++) {
    const digit = guess[i]
    const secretDigit = secretCode[i]
    if (!guessObject.hasOwnProperty(digit)) {
      guessObject[digit] = {
        indices: { [i]: i },
        count: 1
      }
    } else {
      guessObject[digit].indices[i] = i
      guessObject[digit].count++
    }

    if (!secretCodeObject.hasOwnProperty(secretDigit)) {
      secretCodeObject[secretDigit] = {
        indices: { [i]: i },
        count: 1
      }
    } else {
      secretCodeObject[secretDigit].indices[i] = i
      secretCodeObject[secretDigit].count++
    }
  }

  for (const digit in secretCodeObject) {
    if (guessObject.hasOwnProperty(digit)) {
      correctNums += Math.min(secretCodeObject[digit].count, guessObject[digit].count)
      for (const index in secretCodeObject[digit].indices) {
        if (guessObject[digit].indices.hasOwnProperty(index)) {
          correctNumsAndPlaces++
          correctNums--
        }
      }
    }
  }

  feedbackObject.nums = correctNums
  feedbackObject.numPlaces = correctNumsAndPlaces

  return feedbackObject
}

export default createFeedback
