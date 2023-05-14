import type { BaseTranslation } from '../i18n-types';
import { ContentTypeEnum } from '../../lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '../../lib/types/content/metadata/subject.enum';
import { ExpertiseEnum } from '../../lib/types/content/metadata/expertise.enum';

const en: BaseTranslation = {
	// Home / HeroSection
	MAIN_HEADING_1: 'Learn everything about the',
	MAIN_HEADING_2: 'Flow Blockchain',
	WELCOME: 'Welcome',

	// Home / ExploreSection
	EXPLORE_TAGLINE: 'Explore our content',
	EXPLORE_H1: 'Flow free educational resources',

	// Home / LearningPathsSection
	PATHS_H1: 'Follow one of our learning paths',

	// Home / SocialMediaSection
	SOCIAL_H1: 'More than 1,000 students recommend us',

	// Catalog / Sidebar
	TYPE_OF_CONTENT: 'Type of content',
	SUBJECT: 'Subject',
	EXPERTISE: 'Expertise',

	// Cadence by example
	SEARCH: 'Search',
	NO_EXAMPLES_FOUND: 'No examples found for this language',

	// Your achievements
	ACHIEVEMENTS_H1: 'Your achievements',

	// ContentCard
	SKILLS_YOU_WILL_LEARN: "Skills you'll learn",

	START: 'Start',
	CATALOG: 'Catalog',
	LEARN: 'Learn',
	NEW_TO: 'New to',
	START_HERE: 'Start here',

	// Type of content
	[ContentTypeEnum.Course]: 'Course',
	[ContentTypeEnum.Bootcamp]: 'Bootcamp',
	[ContentTypeEnum.Lesson]: 'Lesson',
	[ContentTypeEnum.Roadmap]: 'Roadmap',
	[ContentTypeEnum.Quickstart]: 'Quickstarts',
	[ContentTypeEnum.Resources]: 'Resources',
	[ContentTypeEnum.Blog]: 'Blog',
	[ContentTypeEnum.Tweet]: 'Tweet',
	[ContentTypeEnum.Tutorial]: 'Tutorial',

	// Subjects
	[SubjectsEnum.Backend]: 'Backend',
	[SubjectsEnum.Web]: 'Web Dev',
	[SubjectsEnum.Cadence]: 'Cadence',
	[SubjectsEnum.DApp]: 'DApp',
	[SubjectsEnum.Javascript]: 'Javascript',
	[SubjectsEnum.IPFS]: 'IPFS',

	// Expertise
	[ExpertiseEnum.Advanced]: 'Advanced',
	[ExpertiseEnum.Intermediate]: 'Intermediate',
	[ExpertiseEnum.Beginner]: 'Beginner',

	// Quickstarts
	NO_QUICKSTARTS_FOUND: 'No quickstarts found for this lenguage'
};

export default en;
