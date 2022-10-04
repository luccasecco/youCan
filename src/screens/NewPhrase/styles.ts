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

export const Phrase = styled.Text`
  align-items: center;
  justify-content: center;
  margin: 2px auto;
  padding: 10px;
  border-radius: 8px;
  width: 80%;

  ${({theme}) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};

  line-height: 30px;
`