<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import './styles.css';
	import logo from '$lib/images/logo.png';

	import { fly } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import PuzzlesSidebar from '$lib/components/PuzzlesSidebar.svelte';
	import PuzzleDetails from '$lib/components/PuzzleDetails.svelte';
	import { currentlyBrowsing } from './stores';

	const duration = 300;
	const delay = duration + 100;
	const y = 10;

	const transitionIn = { easing: cubicOut, y, duration, delay };
	const transitionOut = { easing: cubicIn, y: -y, duration };

	export let data: import('./$types').LayoutData;

	$: pathname = data.pathname;
</script>

<div class="app">
	<Header />

	{#key pathname}
		<div class="sidebyside">
			{#if pathname.startsWith('/puzzles')}
				<aside in:fly={transitionIn} out:fly={transitionOut}>
					<PuzzlesSidebar />
				</aside>
			{/if}

			<main in:fly={transitionIn} out:fly={transitionOut}>
				<slot />
			</main>

			{#if pathname.startsWith('/puzzles') && $currentlyBrowsing !== 'none'}
				<aside in:fly={transitionIn} out:fly={transitionOut}>
					<PuzzleDetails />
				</aside>
			{/if}
		</div>
	{/key}

	<footer>
		<p>BoatCup is made by Adam Svoboda. (C) 2023</p>
	</footer>
</div>

<svelte:head>
	<meta property="og:image" content="logo.png" />
	<meta property="og:title" content="BoatCup" />
	<meta
		property="og:description"
		content="BoatCup is a programming challenge in the Boat programming language."
	/>

	<meta property="twitter:image" content="logo.png" />
	<meta property="twitter:title" content="BoatCup" />
	<meta
		property="twitter:description"
		content="BoatCup is a programming challenge in the Boat programming language."
	/>
</svelte:head>

<style>
	.sidebyside {
		display: flex;
		flex-direction: row;
	}

	aside {
		width: 100%;
		max-width: 20rem;
		padding: 1rem;
	}
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
