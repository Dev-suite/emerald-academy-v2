<script type="ts">
	import CatalogSection from '$lib/features/catalog-list/CatalogSection.svelte';

	export let data;
	console.log(data);
</script>

<section class="container">
	<h1>Community Content</h1>
</section>
<CatalogSection
	contentList={data.content}
	typeOfContentFilter={false}
	subjectFilter={false}
	expertiseFilter={false}
	typeOfCommunityContentFilter={true}
/>
