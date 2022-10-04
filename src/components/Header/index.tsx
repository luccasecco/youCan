import { Container, Logo, BackButton, BackIcon } from './styles';
import LogoImg from '@assets/youCan_logo.png'
import { useNavigation } from '@react-navigation/native';

type Props = {
  showBackButton?: boolean
}


export function Header({showBackButton = false}: Props){
  const navigation = useNavigation()
  
  function handleGoBack(){
    navigation.navigate('home')
  }
  
  return(
    <Container>
        {
      showBackButton &&
      <BackButton onPress={handleGoBack}>
        <BackIcon />
      </BackButton>
      }
      <Logo source={LogoImg}/>
    </Container>
  )
}