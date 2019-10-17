import React, { useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
	const [ term, setTerm ] = useState('');
	const [ searchApi, results, errorMessage, isLoading ] = useResults();

	const filterResultsByPrice = (price) => {
		return results.filter((result) => {
			return result.price === price;
		});
	};

	if (!isLoading) {
		return (
			<View style={{ backgroundColor: 'white', flex: 1 }}>
				<SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
				{errorMessage ? <Text> {errorMessage} </Text> : null}
				<ScrollView>
					<ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
					<ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
					<ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
				</ScrollView>
			</View>
		);
	} else {
		return (
			<ActivityIndicator
				size="large"
				color="#00ff00"
				style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}
			/>
		);
	}
};

SearchScreen.navigationOptions = {
	title: 'Resturant Search'
};

export default SearchScreen;
