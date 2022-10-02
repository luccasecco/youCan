import { Container, Logo  } from './styles';
import LogoImg from '@assets/youCan_logo.png'



export function Header(){
  return(
    <Container>
      <Logo source={LogoImg}/>
    </Container>
  )
}