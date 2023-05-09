import { error } from '@sveltejs/kit';

export const load = async ({ fetch, params }) => {
	try {
		const response = await fetch(`/api/content/${params.lang}/community-content`);
		const content = await response.json();

		return {
			content
		};
	} catch (e) {
		throw error(404, 'The content you are looking for does not exist');
	}
};
