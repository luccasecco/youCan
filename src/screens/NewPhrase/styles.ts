import styled, { css } from 'styled-components/native'

export const Container = styled.View`
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

  ${({theme}) => css`
    color: ${theme.COLORS.YELLOW_400};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};

  line-height: 30px;
`