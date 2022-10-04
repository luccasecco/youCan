import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type ButtonStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  type: ButtonStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  border-radius: 6px;
  justify-content: center;
  align-items: center;

  background-color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.BLUE_400 : theme.COLORS.RED_DARK};
`

export const Title = styled.Text`
${({theme}) => css`
  font-size: ${theme.FONT_SIZE.LG}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${theme.COLORS.WHITE};
`};

`