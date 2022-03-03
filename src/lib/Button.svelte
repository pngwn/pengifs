<script lang="ts">
	export let active: boolean = false;
</script>

<button class:active on:click>
	<slot />
</button>

<style>
	button {
		border: none;
		background: none;
		font-size: 1.2rem;
		font-family: monospace;
		margin: 0 0.5rem;
	}

	button:hover {
		cursor: pointer;
		text-decoration: underline;
	}

	.active {
		background-color: orange;
	}
</style>
