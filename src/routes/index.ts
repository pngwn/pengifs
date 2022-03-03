import { gifs } from '../content';

export async function get() {
	return {
		body: { gifs }
	};
}
