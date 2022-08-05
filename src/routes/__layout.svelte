<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main class="min-h-screen w-full p-2 -mt-20 mx-auto pt-28 max-w-5xl">
	<slot />
</main>

<footer class="text-center">
	<div class="inline-block">
		Made by
		<a href="https://ntsd.dev" rel="noopener noreferrer" target="_blank">ntsd</a>
	</div>
</footer>

<style>
</style>
