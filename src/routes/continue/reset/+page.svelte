<script lang="ts">
	import { goto } from '$app/navigation';
	import {
		applyActionCode,
		checkActionCode,
		confirmPasswordReset,
		getAuth,
		sendPasswordResetEmail,
		verifyPasswordResetCode
	} from 'firebase/auth';
	import { app } from '../../../firebase';
	import { browser } from '$app/environment';

	let success = false;
	let display = false;
	let newPassword = '';
	let email = '';
	let message = '';
	let actionCode = '';

	const auth = getAuth(app);

	if (browser) {
		const urlParams = new URLSearchParams(window.location.search);
		actionCode = urlParams.get('oobCode') || '';

		verifyPasswordResetCode(auth, actionCode).then((e) => {
			display = true;
			email = e;
		});
	}

	async function resetPassword() {
		if (newPassword.length < 6) {
			message = 'Password must be at least 6 characters long.';
			return;
		}

		await confirmPasswordReset(auth, actionCode, newPassword);

		success = true;
		setTimeout(() => {
			goto('/dashboard');
		}, 2000);
	}
</script>

{#if display}
	{#if success}
		<h1>It's all done!</h1>
		<p>Redírecting to Dashboard in 2 seconds...</p>
	{:else}
		<h1>Reset your password</h1>
		<p>You asked to reset password for {email}.</p>

		{#if message}
			<p class="error">{message}</p>
		{/if}

		<label for="newPassword">New Password</label>
		<input type="password" id="newPassword" bind:value={newPassword} required />

		<button on:click={resetPassword}>Reset password</button>
	{/if}
{:else}
	<p>Wait a minute...</p>
{/if}

<style>
	.error {
		color: var(--color-theme-2);
		font-weight: bold;
	}
</style>
