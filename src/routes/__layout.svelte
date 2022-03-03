<script lang="ts">
	import { gifs } from '../content';

	import { spring } from 'svelte/motion';

	const p = spring({ x: 0, y: 0 });
	let y = 0;

	function handle_mousemove({ clientX, clientY }) {
		p.set({
			x: clientX - 20,
			y: y + clientY - 10
		});
	}
</script>

<svelte:window
	on:mousemove={handle_mousemove}
	bind:scrollY={y}
/>

<svelte:head><title>pengifs</title></svelte:head>

<h1><span>pengifs</span></h1>

<main>
	<slot />
</main>

<span
	class="cursor"
	style:transform="translate({$p.x}px, {$p.y}px)">🐧</span
>

<style>
	h1 {
		text-align: center;
		font-size: 3rem;
		font-family: 'Courier New', Courier, monospace;
		font-weight: 300;
	}

	main {
		text-align: center;
	}

	.cursor {
		position: absolute;
		display: block;
		top: -10px;
		left: -10px;
		width: 20px;
		height: 20px;
	}

	h1 span {
		display: inline-block;
		width: max-content;
		padding-left: 100%;
		animation: marquee 15s linear infinite;
		padding-top: 2rem;
	}

	h1 span:hover {
		animation-play-state: paused;
	}

	@keyframes marquee {
		0% {
			transform: translate(0, 0);
		}
		100% {
			transform: translate(-100%, 0);
		}
	}
</style>
