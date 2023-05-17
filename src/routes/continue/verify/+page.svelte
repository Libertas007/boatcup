<script lang="ts">
	import { goto } from '$app/navigation';
	import { applyActionCode, getAuth } from 'firebase/auth';
	import { app } from '../../../firebase';
	import { browser } from '$app/environment';

	let success = false;

	if (browser) {
		const urlParams = new URLSearchParams(window.location.search);
		const actionCode = urlParams.get('oobCode') || '';

		const auth = getAuth(app);

		applyActionCode(auth, actionCode).then(() => {
			success = true;
			setTimeout(() => {
				goto('/dashboard');
			}, 2000);
		});
	}
</script>

{#if success}
	<h1>Your email has been confirmed</h1>
	<p>Redírecting to Dashboard in 2 seconds...</p>
{:else}
	<p>Wait a minute...</p>
{/if}
