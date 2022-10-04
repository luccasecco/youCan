import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
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
        <Highlight 
          title="Welcome"
          subtitle="you can do anything"
        />
      </Content>

      <Button 
        onPress={handleStart}
        title="Start"
        style={{ marginTop: 'auto'}}
      />

    </Container>
  )
}