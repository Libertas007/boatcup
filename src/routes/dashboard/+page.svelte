<script lang="ts">
	import { goto } from '$app/navigation';
	import { app } from '../../firebase';
	import { getAuth } from 'firebase/auth';
	import { userStore } from 'sveltefire';

	const auth = getAuth(app);

	const user = userStore(auth);
</script>

<section>
	<h1>Dashboard</h1>

	{#if $user}
		<p>Welcome, {$user.displayName}!</p>

		<button on:click={() => auth.signOut()}>Sign out</button>
	{:else}
		<p>To view the dashboard, you must be logged in.</p>
		<a href="/login">Log in</a>
	{/if}
</section>
