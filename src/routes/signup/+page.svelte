<script lang="ts">
	import { goto } from '$app/navigation';
	import { app } from '../../firebase';
	import {
		getAuth,
		GithubAuthProvider,
		signInWithPopup,
		createUserWithEmailAndPassword
	} from 'firebase/auth';
	import { userStore } from 'sveltefire';

	let email: string = '';
	let password: string = '';

	const auth = getAuth(app);

	const user = userStore(auth);

	async function onSignInWithEmail() {
		let loginform = document.getElementById('loginform')!;
		let invalid = loginform.querySelectorAll('input:invalid');

		if (invalid.length != 0) return;

		await createUserWithEmailAndPassword(auth, email, password);
	}

	async function onSignInWithGitHub() {
		const provider = new GithubAuthProvider();

		await signInWithPopup(auth, provider);
	}

	user.subscribe((user) => {
		if (user) {
			goto('/');
		}
	});
</script>

<section>
	<h1>Sign up for BoatCup</h1>

	<form action="" id="loginform">
		<label for="email">Email: </label>
		<input type="email" name="email" id="email" bind:value={email} required />

		<br />

		<label for="password">Password: </label>
		<input type="password" name="password" id="password" bind:value={password} required />

		<br />
		<br />

		<a href="/login">Already have an account? Log in!</a>

		<br />
		<br />

		<div class="options">
			<button on:click|preventDefault={onSignInWithEmail}>Sign up using email</button>
			<button on:click|preventDefault={onSignInWithGitHub}>Sign up using GitHub</button>
		</div>
	</form>
</section>
