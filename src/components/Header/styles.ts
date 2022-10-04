import styled from 'styled-components/native'
import { CaretLeft } from 'phosphor-react-native'

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 230px;
  height: 135px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-right: 55px;
`;

export const BackIcon = styled(CaretLeft).attrs(({theme}) => ({
  size: 32,
  color: theme.COLORS.WHITE
}))``

