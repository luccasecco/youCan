import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { View } from 'react-native';

import { Home } from '@screens/Home'
import { NewPhrase } from '@screens/NewPhrase'
import { useTheme } from 'styled-components';
const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  const { COLORS } = useTheme()

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.GRAY_600 }}>
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name="home"
        component={Home}
      />
      <Screen 
        name="new"
        component={NewPhrase}
      />
    </Navigator>
    </View>
  )
}