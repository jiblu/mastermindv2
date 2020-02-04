import { PegColors } from '../Constants/index'

const pegColor = (number) => {
  return number ? PegColors[number.toString()] : null
}

export default pegColor
