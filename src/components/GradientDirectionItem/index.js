// Write your code here
import {CoustomContainer, CustomButton} from './styledComponents'
const GradientDirectionItem = props => {
  const {items, active, onChnageDirection} = props
  const {displayText, value} = items

  const onClickValue = () => {
    onChnageDirection(value)
  }

  return (
    <CoustomContainer>
      <CustomButton type="button" active={active} onClick={onClickValue}>
        {displayText}
      </CustomButton>
    </CoustomContainer>
  )
}
export default GradientDirectionItem
