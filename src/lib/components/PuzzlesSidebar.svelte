<script lang="ts">
	import { year } from '../../routes/stores';
</script>

<h2>Puzzles in {$year}</h2>

<ul>
	<li><a href="/puzzles/{$year}/A">Raft</a></li>
	<li><a href="/puzzles/{$year}/B">Inflatable</a></li>
	<li><a href="/puzzles/{$year}/C">Kayak</a></li>
	<li><a href="/puzzles/{$year}/D">Gondola</a></li>
	<li><a href="/puzzles/{$year}/E">Faering</a></li>
	<li><a href="/puzzles/{$year}/F">Canoe</a></li>
	<li><a href="/puzzles/{$year}/G">Frigate</a></li>
	<li><a href="/puzzles/{$year}/H">Yacht</a></li>
	<li><a href="/puzzles/{$year}/I">Cruise</a></li>
	<li><a href="/puzzles/{$year}/J">Auxiliary</a></li>
</ul>

<style>
	ul {
		list-style: '⛵';
		padding: 0;
		margin: 0;
	}

	li {
		padding: 0.5em;
		margin-left: 1rem;
	}
</style>
