<script>
	import { goto } from '$app/navigation';

	import { app } from '../firebase';
	import { getAuth } from 'firebase/auth';
	import { userStore } from 'sveltefire';

	const auth = getAuth(app);

	const user = userStore(auth);
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="BoatCup" />
</svelte:head>

<section>
	<h1>The most epic programming competition in history.</h1>

	{#if $user}
		<p>Welcome, {$user.displayName}!</p>
		<p>Thanks for joining the crew!</p>

		<h2>Get ready for some orders!</h2>

		<button class="cta" on:click={() => goto('/dashboard')}>Go to dashboard</button>
	{:else}
		<p>
			Who didn't want to become a captain? We all did! Join us and become the captian of the whole
			ship! It's just up to you 🫵!
		</p>
		<h2>Come and join us!</h2>
		<button class="cta" on:click={() => goto('/signup')}>Join the crew and sail off!</button>
	{/if}
</section>
