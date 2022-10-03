import { Button } from '@components/Button'
import { Header } from '@components/Header'

import { Container } from './styles'

export function Home() {
  return(
    <Container>
      <Header />
      <Button 
        title="Começar"
      />
    </Container>
  )
}