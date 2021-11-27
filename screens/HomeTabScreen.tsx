import React, { useState } from 'react';
import {
	FlatList,
	SafeAreaView,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text } from '../components/Themed';
import { RootTabScreenProps, HomeNavItem } from '../types';

const DATA: Array<HomeNavItem> = [
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
		title: 'First Item',
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
		title: 'Second Item',
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d72',
		title: 'Third Item',
	},
];

const Item = (item: any, navigation: any) => (
	<TouchableOpacity
		style={styles.item}
		onPress={() => item.navigation.navigate('FishTabScreen')}
	>
		<Text style={styles.title}>{item.title}</Text>
	</TouchableOpacity>
);

export default function HomeTabScreen({
	navigation,
}: RootTabScreenProps<'HomeTab'>) {
	const [selectedId, setSelectedId] = useState('');
	const renderItem = ({ item }: { item: HomeNavItem }) => {
		const searchBarProps = {
			item,
			navigation,
		};
		return (
			<Item
				{...searchBarProps}
				// onPress={() => setSelectedId(id)}
			/>
		);
	};
	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={DATA}
				style={{ width: '95%' }}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				extraData={selectedId}
			/>
			<EditScreenInfo path="/screens/HomeTabScreen.tsx" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
	item: {
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
		backgroundColor: '#d1d1d1a9',
		borderRadius: 10,
	},
});
