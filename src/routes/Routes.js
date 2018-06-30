import { StackNavigator } from 'react-navigation';
import Login from '../screens/Login';
import Register from '../screens/Register';

export const Routes = StackNavigator(
    {
        Login: { screen: Login },
        pageRegister: { screen: Register }
    },
    {
        headerMode: 'screen'
    }
);