<script lang="ts">
	import { year, currentlyBrowsing, user } from '../../routes/stores';
</script>

<h2>{$currentlyBrowsing} {$year}</h2>

{#if $user}
	<p>You can submit your code here.</p>

	<input type="file" name="code" id="code" accept=".boat" disabled={!$user.emailVerified} />

	<button disabled={!$user.emailVerified}>Submit</button>
	{#if !$user.emailVerified}
		<p>Please verify your email address to submit your code.</p>
	{/if}
{:else}
	<p>Please, <a href="/login">log in</a> to submit your code.</p>
{/if}

<style>
	input {
		max-width: 18rem;
	}
</style>
