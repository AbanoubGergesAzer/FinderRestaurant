import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization:
			'Bearer 8aQ1nq5LtYa78Egr7lAQRSL72MSUF5rZdsqAQ8k9oE2YNz4z0zomSwYw1dfXuX6GAJyc-On1ivw5HLEvfI_phAG7WHaAiKUcaqOscyhx8C3MamSsnf1iTk5aOIZ_XXYx'
	}
});
