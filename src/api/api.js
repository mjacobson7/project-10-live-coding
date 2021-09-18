class Api {
	constructor({ baseUrl, apiKey }) {
		this._baseUrl = baseUrl;
		this._apiKey = apiKey;
	}

	search(query) {
		return fetch(`${this._baseUrl}/search/photos?query=${query}`, {
			headers: {
				Authorization: `Client-ID ${this._apiKey}`,
			},
		}).then((res) => res.json());
	}
}

const api = new Api({
	baseUrl: 'https://api.unsplash.com',
	apiKey: '', // Go to https://unsplash.com/developers and create an account to get an api key.  Paste it here for the requests to work
});

export default api;
