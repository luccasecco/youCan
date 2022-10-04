import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { useState } from "react";
import { Container, Phrase, Content } from "./styles";

interface NewPhraseProps {
  affirmation: string;
}

export function NewPhrase() {
  const [phrases, setPhrases] = useState<NewPhraseProps>()

  function handleGeneratePhrase(){
    fetch('https://www.affirmations.dev/')
      .then(response => response.json())
      .then(data => setPhrases(data))
  }

  return (
    <Container>
      <Header showBackButton={true} />
      <Content>
        <Phrase>
          {phrases?.affirmation}
        </Phrase>
      </Content>
      <Button 
        title="Gerar frase"
        style={{marginTop: 'auto'}}
        onPress={handleGeneratePhrase}
      />
    </Container>
  )
}