import { TouchableOpacityProps } from 'react-native'
import { ButtonStyleProps, Container, Title } from './styles'

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  type?: ButtonStyleProps
}

export function Button({title, type = 'PRIMARY', ...rest}: ButtonProps){
  return (
    <Container
      type={type}
      {...rest}
    >
      <Title>
        {title}
      </Title>
    </Container>
  )
}