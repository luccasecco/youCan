import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { useNavigation } from '@react-navigation/native'

import { Container, Content } from './styles'

export function Home() {
  const navigation = useNavigation()

  function handleStart(){
    navigation.navigate('new')
  }

  return(
    <Container>
      <Header />

      <Content>
      <Button 
        onPress={handleStart}
        title="Começar"
        style={{ marginTop: 'auto'}}
      />
      </Content>

    </Container>
  )
}