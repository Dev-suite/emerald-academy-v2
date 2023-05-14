<script type="ts">
	import { page } from '$app/stores';
	import Seo from '$lib/components/seo/Seo.svelte';
	import type { ChapterMetadata } from '$lib/types/content/course.interface';
	import { transformUrlToHeading } from '$lib/utilities/dataTransformation/transformUrlToHeading';
	import { Breadcrumbs } from '@emerald-dao/component-library';
	import Icon from '@iconify/svelte';
	import { setContext } from 'svelte';

	export let data;

	let routes = [
		{
			path: `/${$page.params.lang}/catalog`,
			label: 'Catalog'
		},
		{
			path: `/catalog/lessons/${$page.params.name}`,
			label: transformUrlToHeading($page.params.name)
		}
	];

	let allContents: {
		slug: string;
		metadata: ChapterMetadata;
	}[] = [];

	$: setContext('metadata-context', data.metadata);
</script>

<div class="container-medium">
	<section>
		<Breadcrumbs {routes} />
		<article>
			<svelte:component this={data.content} />
		</article>
	</section>
</div>

<Seo
	title={`${transformUrlToHeading($page.params.name)} | Course | Emerald Academy`}
	description="sample"
	type="WebPage"
/>

<style type="scss">
	section {
		padding-block: 0;

		@include mq(medium) {
			padding-block: 4rem;
		}
	}
	article {
		margin-top: var(--space-6);
		word-break: break-word;
	}

	.adjacents-wrapper {
		display: flex;
		flex-direction: column;
		margin-top: var(--space-11);

		@include mq(medium) {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-areas: 'start end';
			gap: var(--space-4);
		}

		a {
			text-decoration: none;
		}

		.step-back {
			grid-area: start;
		}

		.step-next {
			grid-area: end;
			margin-top: var(--space-4);

			@include mq(medium) {
				margin-top: 0;
			}
		}

		.each-adjacent-wrapper {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			gap: var(--space-5);
			padding: var(--space-4) var(--space-5);
			border-radius: var(--radius-2);
			border: var(--border-width-primary) var(--clr-border-primary) solid;

			.left-wrapper {
				text-align: end;
			}
		}
	}
</style>
