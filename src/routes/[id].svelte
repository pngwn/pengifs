<script lang="ts">
	export let name: string;
	export let description: string;
	export let gif: string;
</script>

<h2>{name}</h2>
<video autoplay muted loop src={gif} title={description} />

<style>
	h2 {
		font-family: monospace;
		font-size: 2rem;
		font-weight: normal;
		margin-top: 6rem;
	}
</style>
