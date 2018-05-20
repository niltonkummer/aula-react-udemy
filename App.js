import { StackNavigator } from 'react-navigation';

import PeopleListPage from './src/screens/PeopleListPage';
import PeopleDetailPage from './src/screens/PeopleDetailPage';

import capitalizeFirstLetter from './src/util/Util';

export default StackNavigator({
	'Main': {		
		screen: PeopleListPage,
	},
	'PeopleDetail': {
		screen: PeopleDetailPage,
		navigationOptions: ({ navigation }) => {			
			const name = navigation.state.params.people.name.first;
			return ({
				title: capitalizeFirstLetter(name),
				headerTitleStyle: {
					color: 'white',
					fontSize: 25										
				}
			});
		}
	}	
}, {
	navigationOptions: {
		title: 'Pessoas',
		headerTintColor: 'white',
		headerStyle: {
			backgroundColor: '#e74c3c',			
		},
		headerTitleStyle: {
			color: 'white',
			fontSize: 25,
			alignSelf: 'center',
		}
	}
});

// export default PeopleListPage;