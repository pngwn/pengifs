const gif_modules = import.meta.globEager(
	'./*/index.js'
);

export const gifs = Object.entries(gif_modules)
	.map(([key, obj]) => {
		const id = parseInt(
			key
				.replace(/^[^]*p/, '')
				.replace('/index.js', '')
		);
		const {
			gif,
			thumb,
			name,
			description,
			type
		} = obj.default;
		return {
			id,
			thumb,
			name,
			description,
			gif,
			type
		};
	})
	.sort(() => (Math.random() > 0.5 ? -1 : 1));
