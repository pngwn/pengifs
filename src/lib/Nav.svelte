<script lang="ts">
	import Button from '$lib/Button.svelte';

	type Type = 'cute' | 'majestic' | 'walrus';

	export let sortby: Type[] = [];

	let items: Type[] = ['cute', 'majestic', 'walrus'];

	function handle_sort(t: Type) {
		if (sortby.includes(t)) {
			sortby = sortby.filter((v) => v !== t);
		} else {
			sortby = [...sortby, t];
		}
	}
</script>

<nav>
	<ul>
		{#each items as item}
			<li>
				<Button
					active={sortby.includes(item)}
					on:click={() => handle_sort(item)}
				>
					{item}
				</Button>
			</li>
		{/each}
	</ul>
</nav>

<style>
	ul {
		list-style: none;
		padding: 0;
		display: flex;
		justify-content: center;
	}
</style>
