import { createStackNavigator } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import ResultSearchScreen from './src/screens/ResultSearchScreen';

const Navigator = createStackNavigator(
	{
		Search: {
			screen: SearchScreen
		},
		ResultShow: {
			screen: ResultSearchScreen
		}
	},
	{
		initialRouteName: 'Search'
	}
);

export default Navigator;
