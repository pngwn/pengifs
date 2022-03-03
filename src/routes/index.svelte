<script lang="ts">
	import Nav from '$lib/Nav.svelte';

	import { fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	import type { TransitionConfig } from 'svelte/transition';
	interface Gif {
		name: string;
		description: string;
		gif: string;
		id: number;
		thumb: string;
		type: Type;
	}

	type Type = 'cute' | 'majestic' | 'walrus';

	export let gifs: Gif[];

	let hover = null;

	function spinny(_: HTMLElement): TransitionConfig {
		return {
			duration: 250,
			delay: 0,
			css: (t) =>
				`transform: rotate(${
					180 + t * 180
				}deg) scale(${t});`
		};
	}

	let sortby: Type[] = [];

	$: _gifs = gifs.filter(({ type }) => {
		if (sortby.length === 0) return true;
		else return sortby.includes(type);
	});
</script>

<Nav bind:sortby />

<ul class="wrap">
	{#each _gifs as { thumb, id, name, description } (id)}
		<li
			in:fade|local={{
				delay: 100,
				duration: 300
			}}
			out:fade|local={{ delay: 0, duration: 300 }}
			animate:flip={{ duration: 400 }}
			on:mouseenter={() => (hover = id)}
			on:mouseleave={() => (hover = null)}
		>
			<a href="/{id}">
				<img src={thumb} alt={description} />
				{#if hover === id}
					<div
						class="info"
						transition:fade|local={{
							duration: 250
						}}
					>
						<p transition:spinny|local>
							<span>{name}</span>
						</p>
					</div>
				{/if}
			</a>
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		grid-gap: 1rem;
	}

	li {
		position: relative;
		overflow: hidden;
		width: 300px;
		height: 300px;
		cursor: pointer;
	}

	li a {
		width: 100%;
		height: 100%;
	}

	img {
		height: 100%;
		width: 100%;
	}
	.info {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.6);
		content: '';
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		color: black;
	}

	p {
		font-family: monospace;
		font-size: 2rem;
		line-height: 3.5rem;
		margin: 1rem;
	}

	span {
		background: orange;
		padding: 0.1rem 1rem;
		box-shadow: 1rem 0 0 orange, -1rem 0 0 orange;
		padding: 0.3rem 0;
	}
</style>
