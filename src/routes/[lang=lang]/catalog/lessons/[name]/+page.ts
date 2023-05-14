import type { CourseContents, CourseOverview } from '$lib/types/content/course.interface';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	try {
		const lesson = await import(
			`../../../../../lib/content/lessons/${params.name}/${params.lang}/lesson.md`
		);

		const content = lesson.default as ConstructorOfATypedSvelteComponent;

		return {
			content,
			metadata: lesson.metadata
		};
	} catch (e) {
		throw error(404, 'The lesson you are looking for does not exist');
	}
};
