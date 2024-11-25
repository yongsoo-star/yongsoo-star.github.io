<script lang="ts">
	import { Button } from '$lib/components/ui/button';

	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import Autoplay from 'embla-carousel-autoplay';
	import img_01 from '$lib/example/main_01.png';
	import img_02 from '$lib/example/main_02.png';
	import img_03 from '$lib/example/main_03.png';
	import img_04 from '$lib/example/main_04.png';
	import img_05 from '$lib/example/main_05.png';
	import img_06 from '$lib/example/main_06.png';
	import img_07 from '$lib/example/main_07.png';

	const images = [
		{ src: img_01, prompt: 'sci-fi game art, nebula clouds' },
		{ src: img_02, prompt: 'detailed metallic textures' },
		{ src: img_03, prompt: 'high contrast, white robot' },
		{ src: img_04, prompt: 'blue tones, orange reactor glow' },
		{ src: img_05, prompt: 'robot design, cinematic lighting' },
		{ src: img_06, prompt: 'steampunk' },
		{ src: img_07, prompt: 'game art, red robot, wasteland' }
	];
</script>

<div class="flex flex-col gap-4 py-24 text-center">
	<h1 class="text-balance text-6xl font-bold">Create Mecha-inspired Robot Art with AI</h1>

	<div class="text-muted-foreground pt-4">
		<p>Create high-quality robot artwork for free - No subscriptions, no hidden fees</p>
	</div>
	<div class="flex items-center justify-center gap-2 *:font-semibold">
		<Button href="https://apps.apple.com/kr/app/mech-robot-ai-image-maker/id6738115512?l=en-GB" target="_blank">App Store</Button>
		<Button disabled>Play Store</Button>
	</div>
</div>

<Carousel.Root
	opts={{ align: 'start', loop: true }}
	plugins={[
		Autoplay({
			delay: 3000
		})
	]}
>
	<Carousel.Content>
		{#each images as item}
			<Carousel.Item class="basis-1/3">
				<div
					class="flex aspect-[3/4] w-full flex-col justify-end rounded-md bg-cover bg-top p-4"
					style="background-image: url({item.src})"
				>
					<div class="font-mono text-white">
						<p class="uppercase opacity-60">prompt</p>
						<p class="text-shadow">{item.prompt}</p>
					</div>
				</div>
			</Carousel.Item>
		{/each}
	</Carousel.Content>
	<Carousel.Previous />
	<Carousel.Next />
</Carousel.Root>

<style lang="postcss">
	.text-shadow {
		text-shadow: black 2px 2px 8px;
	}
</style>
