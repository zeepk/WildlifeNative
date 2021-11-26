import React, { useState } from 'react';
import {
	FlatList,
	SafeAreaView,
	StatusBar,
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

const Item = (item: any) => (
	<TouchableOpacity style={styles.item}>
		<Text style={styles.title}>{item.title}</Text>
	</TouchableOpacity>
);

export default function HomeTabScreen({
	navigation,
}: RootTabScreenProps<'HomeTab'>) {
	const [selectedId, setSelectedId] = useState('');
	const renderItem = ({ item }: { item: HomeNavItem }) => {
		const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
		const color = item.id === selectedId ? 'white' : 'black';
		return (
			<Item
				item={item}
				onPress={() => setSelectedId(item.id)}
				backgroundColor={item.backgroundColor}
				textColor={item.textColor}
			/>
		);
	};
	return (
		<SafeAreaView style={styles.container}>
			<FlatList<HomeNavItem>
				data={DATA}
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
	},
});
