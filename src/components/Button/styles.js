import styled from 'styled-components/native'

export const Wrapper = styled.TouchableOpacity`
  background: ${props =>
    props.variant === 'primary'
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  height: 50px;
  border-radius: 8px;
  opacity: ${props => (props.disabled ? 0.6 : 1)};
  align-items: center;
  flex-direction: row;
  justify-content: center;
`

export const Label = styled.Text`
  color: ${props =>
    props.color === 'white'
      ? props.theme.colors.primary
      : props.theme.colors.white};
  font-family: 'OpenSans-SemiBold';
  font-size: 16px;
  text-transform: uppercase;
`
