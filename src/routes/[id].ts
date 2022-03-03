import { gifs } from '../content/';

export function get({ params }) {
	const { name, description, gif } = gifs.find(
		(g) => g.id === parseInt(params.id)
	);

	return {
		body: { name, description, gif }
	};
}
