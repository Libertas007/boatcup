<script lang="ts">
	import { currentlyBrowsing, user } from '../../routes/stores';

	$currentlyBrowsing = 'none';
</script>

<h1>Puzzles</h1>
<p>Select the puzzle on the right side.</p>

{#if !$user}
	<strong
		>If you are not logged in, you can only view the puzzles, but you cannot submit your code.</strong
	>
	<a href="/login">Login to join the party!</a>
{/if}
