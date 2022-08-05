<script context="module">
	import { browser, dev } from '$app/env';
	import copy from '$lib/util/copy';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<script>
	let uuidv4 = "";

	function generateUUIDv4 () {
		uuidv4 = crypto.randomUUID();
	}
</script>

<svelte:head>
	<title>Generate UUID</title>
	<meta name="description" content="Generate UUID" />
</svelte:head>

<div>
	<div>
		UUID Version 4 
		<button on:click={generateUUIDv4}>generate</button>
		<input bind:value={uuidv4}>
		<button on:click={copy(uuidv4)}>copy</button>
	</div>
</div>

<style>
</style>
