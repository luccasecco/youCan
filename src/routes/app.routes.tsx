import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { Home } from '@screens/Home'
import { NewPhrase } from '@screens/NewPhrase'
const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
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
  )
}