import type { LessonOverview } from "$lib/types/content/lesson.interface";
import { ContentTypeEnum } from "$lib/types/content/metadata/content-types.enum";
import { SubjectsEnum } from "$lib/types/content/metadata/subject.enum";

export const overview: LessonOverview = {
	title: 'Attachments in Cadence',
	contentType: ContentTypeEnum.Lesson,
	excerpt: 'Learn what attachments are and how to code them.',
	author: {
		name: 'Jacob Tucker',
		socialMediaUrl: 'https://twitter.com/jacobmtucker',
		avatarUrl: 'https://avatars.githubusercontent.com/u/15198786?v=4',
		isVerified: true,
		walletAddress: '0x99bd48c8036e2876'
	},
	metadata: {
		duration: '5 minutes',
		prerequisites: [],
		subjects: [SubjectsEnum.Cadence]
	}
};
