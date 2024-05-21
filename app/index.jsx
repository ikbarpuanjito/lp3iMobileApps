import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    LoginScreen,
    HomeScreen,
    DashboardScreen
} from "./screen"
import { useState } from 'react';

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const Stack = createNativeStackNavigator();

function App() {

    return(
      
      
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name='Home' component={HomeScreen} options={{
          title: 'Login',
          headerStyle: {
            backgroundColor: '#3C5B6F',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='Dashboard' component={DashboardScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;