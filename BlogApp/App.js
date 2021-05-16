import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from './src/context/GlobalState';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

const Stack = createStackNavigator();

function App() {
  const options = {
    headerStyle: {
      backgroundColor: 'crimson',
    },
    headerTintColor: '#fff',
  };

  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={IndexScreen} options={options} />
          <Stack.Screen name="Show" component={ShowScreen} options={options} />
          <Stack.Screen
            name="Create"
            component={CreateScreen}
            options={options}
          />
          <Stack.Screen name="Edit" component={EditScreen} options={options} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
