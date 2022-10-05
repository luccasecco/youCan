import { useState } from "react";
import * as Clipboard from 'expo-clipboard'
import { Alert, Text } from 'react-native'

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";

import { Container, Phrase, Content, PhraseContent } from "./styles";
interface NewPhraseProps {
    affirmation: string
}

export function NewPhrase() {
  const [isCopping, setIsCopping] = useState(false)
  const [phrase, setPhrase] = useState<NewPhraseProps>()

  async function handleCopyPhraseToClipboard() {
    setIsCopping(true)
    await Clipboard.setStringAsync(phrase!.affirmation)

    Alert.alert('Phrase coppied!', 'Phrase coppied to transfer clipboard')
    setIsCopping(false)
  }

  function handleGeneratePhrase(){
    fetch('https://www.affirmations.dev/')
      .then(response => response.json())
      .then(data => setPhrase(data))
  }

  return (
    <Container>
      <Header showBackButton={true} />
      <Content>
        {!phrase ? 
        
        <Highlight 
          title="Go ahead"
          subtitle="believe in yourself"
        />

        :
        <Phrase 
          onPress={handleCopyPhraseToClipboard}
          disabled={isCopping}
        >
          <PhraseContent>
          {phrase?.affirmation}
          </PhraseContent>
        </Phrase>}
      </Content>
      <Button 
        title="New phrase"
        style={{marginTop: 'auto'}}
        onPress={handleGeneratePhrase}
      />
    </Container>
  )
}