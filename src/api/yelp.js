import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        authorization: 
        'Bearer u1rQvOg2fJZUp04f5M0eUxCuJF2PnlmLyLJT3P9YtdiF5VZ6xozxR3HXaqslqje70aFp_EMTGkljli2KSH1Xgy4xwBgVyylhnjnwwZliDBe5dNCsUUTwZyS2qgiyXXYx'
    }
});

