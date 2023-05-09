import { json, error } from '@sveltejs/kit';
import { blogs } from '$lib/content/blogs';
import { tweets } from '$lib/content/tweets';
import type { BlogOverview } from '$lib/types/content/blog.interface.js';
import type { TweetOverview } from '$lib/types/content/tweet.interface.js';

export const GET = async ({ params }) => {
	try {
		const allBlogs: BlogOverview[] = blogs;
		const allTweets: TweetOverview[] = tweets;

		const allContent = [...allBlogs, ...allTweets];

		return json(allContent);
	} catch (e) {
		return new Response(JSON.stringify(error), { status: 500 });
	}
};
