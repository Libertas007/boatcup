<script lang="ts">
	import { page } from '$app/stores';
	import { nameOfPuzzle } from '$lib/util';
	import { currentlyBrowsing } from '../../../stores';

	$currentlyBrowsing = nameOfPuzzle($page.params.puzzle);
</script>

<h1>{$currentlyBrowsing}</h1>

<p>Puzzles are being prepared, there are none right now. This is just testing.</p>

<p>And also you cannot submit your code.</p>
