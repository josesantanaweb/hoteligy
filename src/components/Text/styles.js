import styled from 'styled-components/native'

export const Text = styled.Text`
  text-align: ${props => (props.align === 'center' ? 'center' : 'left')};
  font-family: ${props =>
    props.family === 'primary'
      ? 'DMSerifDisplay-Regular'
      : 'OpenSans-SemiBold'};'';
  color: ${props =>
    props.color === 'black'
      ? props.theme.colors.black
      : props.color === 'white'
      ? props.theme.colors.white
      : props.theme.colors.graydark};
  text-transform: ${props =>
    props.uppercase === 'uppercase' ? 'uppercase' : 'capitalize'};
  font-size: ${props =>
    props.size === 'small'
      ? '14px'
      : props.size === 'normal'
      ? '16px'
      : props.size === 'medium'
      ? '18px'
      : props.size === 'large'
      ? '24px'
      : props.size === 'xlarge'
      ? '36px'
      : '12px'};
`
