<script lang="ts">
	import { page } from '$app/stores';
	import logo from '$lib/images/logo.svg';
	import { goto } from '$app/navigation';
	import { app } from '../../firebase';
	import { getAuth } from 'firebase/auth';
	import { userStore } from 'sveltefire';

	const auth = getAuth(app);

	const user = userStore(auth);
</script>

<header>
	<div class="corner logo">
		<a href="/">
			<img srcset={logo} alt="BoatCup Logo" />
			<h1>BoatCup</h1>
		</a>
	</div>

	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner right">
		<div>
			{#if $user}
				<button on:click={() => goto('/dashboard')}>Dashboard</button>
				<button on:click={() => auth.signOut()}>Log out</button>
			{:else}
				<button class="cta" on:click={() => goto('/signup')}>Sign up</button>
				<button on:click={() => goto('/login')}>Log in</button>
			{/if}
		</div>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		height: 4rem;
	}

	.corner {
		width: 17rem;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.right {
		display: flex;
		align-items: center;
		justify-content: end;
	}

	.right div {
		display: flex;
	}

	.logo {
		font-family: monospace;
		font-weight: 700;
		padding: 0.25rem 0.5rem;
	}

	.logo h1 {
		font-size: 3rem;
		margin: 0;
		margin-left: 1rem;
	}

	a:hover {
		text-decoration: none;
	}

	.corner img {
		width: 4em;
		height: 4em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page'] {
		color: var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
