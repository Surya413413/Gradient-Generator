import {Component} from 'react'
import {
  CustomHeading,
  CustomContainer,
  CustomPara,
  CustomInput,
  CustomInputContainer,
  CustomGenrateButton,
  CustomParaColors,
  Para,
  ButtonContainer,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    activeDirection: gradientDirectionsList[0].value,
    linerColor: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onChangeFirstInput = event => {
    this.setState({firstColor: event.target.value})
  }

  onChangeSecondInput = event => {
    this.setState({secondColor: event.target.value})
  }

  onClickButton = () => {
    const {firstColor, secondColor, activeDirection} = this.state
    this.setState({
      linerColor: `to ${activeDirection}, ${firstColor}, ${secondColor}`,
    })
  }

  onChangeDirection = value => {
    this.setState({activeDirection: value})
  }

  render() {
    const {firstColor, secondColor, linerColor, activeDirection} = this.state
    return (
      <CustomContainer linerColor={linerColor} data-testid="gradientGenerator">
        <CustomHeading>Generate a CSS Color Gradient</CustomHeading>
        <CustomPara>Choose Direction</CustomPara>

        <ButtonContainer>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              items={each}
              key={each.directionId}
              onChnageDirection={this.onChangeDirection}
              active={each.value === activeDirection}
            />
          ))}
        </ButtonContainer>

        <CustomPara>Pick the Colors</CustomPara>
        <CustomParaColors>
          <Para>{firstColor}</Para>
          <Para>{secondColor}</Para>
        </CustomParaColors>

        <CustomInputContainer>
          <CustomInput
            type="color"
            onChange={this.onChangeFirstInput}
            value={firstColor}
          />
          <CustomInput
            type="color"
            onChange={this.onChangeSecondInput}
            value={secondColor}
          />
        </CustomInputContainer>
        <CustomGenrateButton type="button" onClick={this.onClickButton}>
          Generate
        </CustomGenrateButton>
      </CustomContainer>
    )
  }
}
export default GradientGenerator
