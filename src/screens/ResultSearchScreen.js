import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import yelp from '../api/yelp';
import { Ionicons } from '@expo/vector-icons';

const ResultSearchScreen = ({ navigation }) => {
	const [ result, setResult ] = useState(null);
	const [ isLoading, setLoading ] = useState(true);
	const id = navigation.getParam('id');

	useEffect(() => {
		getResult(id);
	}, []);

	getResult = async (id) => {
		const response = await yelp.get(`/${id}`);
		setResult(response.data);
		setLoading(false);
	};

	if (!isLoading) {
		console.log(result);

		return (
			<View style={styles.container}>
				<Image style={styles.image} source={{ uri: result.image_url }} />
				<View style={{ margin: 10 }}>
					<View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
						<Text style={styles.title}>{result.name}</Text>
						<Text style={styles.title}>{result.rating}</Text>
					</View>
					<View
						style={{
							justifyContent: 'space-evenly',
							flexDirection: 'row',
							alignItems: 'center',
							margin: 10
						}}
					>
						<View>
							<Ionicons
								name="ios-star"
								style={{
									fontSize: 25,
									alignSelf: 'center'
								}}
							/>
							<Text>Rating</Text>
							<Text style={{ textAlign: 'center' }}>{result.rating}</Text>
						</View>
						<View>
							<Ionicons
								name="ios-eye"
								style={{
									fontSize: 25,
									alignSelf: 'center'
								}}
							/>
							<Text>Review</Text>
							<Text style={{ textAlign: 'center' }}>{result.review_count}</Text>
						</View>
					</View>
					<View style={{ margin: 10 }}>
						<Text>abc</Text>
						<Text>abc</Text>
						<Text>abc</Text>
					</View>
				</View>
			</View>
		);
	} else {
		return null;
	}
};

ResultSearchScreen.navigationOptions = {
	title: 'Restaurant Detail'
};

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 15
	},
	image: {
		width: 'auto',
		height: 120,
		borderRadius: 4,
		marginVertical: 5
	},
	name: {
		fontWeight: 'bold',
		marginTop: 5
	},
	title: {
		fontWeight: 'bold',
		fontSize: 16,
		color: 'blue'
	}
});

export default ResultSearchScreen;
