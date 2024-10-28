import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: 'Home Page' }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailPage}
          options={{ title: 'Detail Page' }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
};


export default App;