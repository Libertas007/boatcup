<script lang="ts">
	import { goto } from '$app/navigation';
	import { app } from '../../firebase';
	import { getAuth, reload, updateProfile } from 'firebase/auth';
	import { userStore } from 'sveltefire';

	const auth = getAuth(app);

	const user = userStore(auth);

	let name: string = $user?.displayName ?? '';

	function update() {
		if (name === auth.currentUser!.displayName || name === '') return;

		updateProfile($user!, {
			displayName: name
		});

		location.reload();
	}
</script>

<svelte:head>
	<title>Dashboard</title>
	<meta name="description" content="Dashboard" />
</svelte:head>

<section>
	<h1>Dashboard</h1>

	{#if $user}
		<p>Welcome, {$user.displayName}!</p>

		<h2>Profile info</h2>
		<form id="update">
			<label for="name">Display name: </label>
			<input type="text" name="name" id="name" bind:value={name} />

			<br />
			<br />

			<button on:click|preventDefault={update}>Update profile</button>
		</form>

		<button on:click={() => auth.signOut()}>Sign out</button>
	{:else}
		<p>To view the dashboard, you must be logged in.</p>
		<a href="/login">Log in</a>
	{/if}
</section>
