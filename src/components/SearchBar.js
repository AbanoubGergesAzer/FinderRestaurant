import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
	return (
		<View style={styles.background}>
			<Feather name="search" style={styles.iconStyle} />
			<TextInput
				placeholder="Search"
				style={styles.inputStyle}
				value={term}
				onChangeText={onTermChange}
				autoCapitalize="none"
				autoCorrect={false}
				onEndEditing={onTermSubmit}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	background: {
		marginTop: 10,
		backgroundColor: '#F0EEEE',
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: 'row',
		marginBottom: 10
	},
	inputStyle: {
		flex: 1,
		fontSize: 15
	},
	iconStyle: {
		fontSize: 25,
		alignSelf: 'center',
		marginHorizontal: 15
	}
});

export default SearchBar;
