import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { fetchOverviews } from '$lib/utilities/api/content/fetchOverviews';
import { json, error } from '@sveltejs/kit';
import type { Locales } from '$i18n/i18n-types';

export const GET = async ({ params }) => {
	try {
		const allCourses = await fetchOverviews(ContentTypeEnum.Course, params.lang as Locales);
		const allBootcamps = await fetchOverviews(ContentTypeEnum.Bootcamp, params.lang as Locales);
		const allRoadmaps = await fetchOverviews(ContentTypeEnum.Roadmap, params.lang as Locales);

		const allContent = allCourses.concat(allBootcamps, allRoadmaps);

		return json(allContent);
	} catch (e) {
		return new Response(JSON.stringify(error), { status: 500 });
	}
};
