import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
	const [ results, setResults ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(true);
	const [ errorMessage, setErrorMessage ] = useState('');

	const searchApi = async (searchTerm) => {
		try {
			const response = await yelp.get('/search', {
				params: {
					limit: 50,
					term: searchTerm,
					location: 'san jose'
				}
			});
			setResults(response.data.businesses);
			setIsLoading(false);
		} catch (error) {
			setErrorMessage('Something went wrong');
		}
	};

	useEffect(() => {
		searchApi('pasta');
	}, []);

	return [ searchApi, results, errorMessage, isLoading ];
};
