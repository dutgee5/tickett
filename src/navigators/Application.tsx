import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Example, Home, Search, Startup, Ticket, User } from '@/screens';
import { useTheme } from '@/theme';

import type { RootStackParamList } from '@/types/navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeActiveIcon from '@/theme/icons/HomeActive';
import HomePassive from '@/theme/icons/HomePassive';
import SearchActive from '@/theme/icons/SearchActive';
import SearchPassive from '@/theme/icons/SearchPassive';
import TicketActive from '@/theme/icons/TicketActive';
import TicketPassive from '@/theme/icons/TicketPassive';
import { Use } from 'react-native-svg';
import UserActive from '@/theme/icons/UserActive';
import UserPassive from '@/theme/icons/UserPassive';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function ApplicationNavigator() {
	const { variant, navigationTheme } = useTheme();

	return (
		<SafeAreaProvider>
			<NavigationContainer theme={navigationTheme}>
				<Tab.Navigator key={variant} screenOptions={{ headerShown: true }}>
					<Tab.Screen name="Home" component={Home}
					options={{
						headerTitleAlign: 'center',
						tabBarShowLabel: false,
						tabBarIcon:({focused})=>{
							return(
							  focused ? <HomeActiveIcon /> : <HomePassive />
							)
						  },
					}}/>
					<Tab.Screen name="Search" component={Search} 
					options={{
						headerShown: false,
						tabBarShowLabel: false,
						tabBarIcon:({focused})=>{
							return(
							  focused ? <SearchActive /> : <SearchPassive />
							)
						  },
					}}/>
					<Tab.Screen name="Ticket" component={Ticket} 
					options={{
						headerShown: false,
						tabBarShowLabel: false,
						tabBarIcon:({focused})=>{
							return(
							  focused ? <TicketActive /> : <TicketPassive />
							)
						  },
					}}/>
					<Tab.Screen name='User' component={User} 
					options={{
						headerShown: false,
						tabBarShowLabel: false,
						tabBarIcon:({focused})=>{
							return(
							  focused ? <UserActive /> : <UserPassive />
							)
						  },
					}}/>
				</Tab.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	);
}

export default ApplicationNavigator;
