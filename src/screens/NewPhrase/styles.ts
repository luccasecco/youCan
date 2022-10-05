import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
  background-color: ${({theme}) => theme.COLORS.GRAY_600};
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Phrase = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 10px;
  border-radius: 8px;
  line-height: 30px;

  ${({theme}) => css`
    background-color: ${theme.COLORS.GRAY_700};
  `};
`

export const PhraseContent = styled.Text`
   ${({theme}) => css`
    color: ${theme.COLORS.GRAY_300};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
   `};
`
