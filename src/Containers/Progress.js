import styled from 'styled-components'
import { Colors } from '../Themes/index'

const Progress = styled.div`
width: 300px;
height: 10px;
border-radius: 5px;
padding: 5px;
margin: 5px;
background-color: ${props => 
  props.guessesLeft > 8 || props.score > 80 ? Colors.green :
  props.guessesLeft > 6 || props.score > 60 ? Colors.yellow :
  props.guessesLeft > 3 || props.score > 30 ? Colors.orange :
  Colors.red
};
`

export default Progress