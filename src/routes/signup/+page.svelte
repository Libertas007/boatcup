<script lang="ts">
	import { goto } from '$app/navigation';
	import {
		getAuth,
		GithubAuthProvider,
		signInWithPopup,
		createUserWithEmailAndPassword
	} from 'firebase/auth';
	import { userStore } from 'sveltefire';
	import { app } from '../../firebase';

	let email: string = '';
	let password: string = '';

	const auth = getAuth(app);

	const user = userStore(auth);

	async function onSignInWithEmail() {
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

	<label for="email">Email</label>
	<input type="email" name="email" id="email" bind:value={email} />

	<label for="password">Password</label>
	<input type="password" name="password" id="password" bind:value={password} />

	<div class="options">
		<button on:click={onSignInWithEmail}>Sign up using email</button>
		<button on:click={onSignInWithGitHub}>Sign up using GitHub</button>
	</div>
</section>
