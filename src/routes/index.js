import { createNativeStackNavigator } from '@react-navigation/native-stack'
import welcome from '../pages/welcome'
import SignIn from '../pages/SignIn'
const Stack = createNativeStackNavigator();
export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={welcome}
                options={{ HeadersShown: false }}
            />
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ HeadersShown: false }}
            />
        </Stack.Navigator>
    )
}