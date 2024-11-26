<script lang="ts">
	import { Button } from '$lib/components/ui/button';

	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import Autoplay from 'embla-carousel-autoplay';
	import img_01 from '$lib/images/main_01.png';
	import img_02 from '$lib/images/main_02.png';
	import img_03 from '$lib/images/main_03.png';
	import img_04 from '$lib/images/main_04.png';
	import img_05 from '$lib/images/main_05.png';
	import img_06 from '$lib/images/main_06.png';
	import img_07 from '$lib/images/main_07.png';

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

<div class="flex flex-col gap-4 px-1 py-16 text-center sm:px-6 sm:py-24">
	<h1
		class="font-mont text-balance text-3xl font-bold leading-[1.2] sm:text-4xl md:text-5xl lg:text-6xl"
	>
		Create Mecha-inspired Robot Art with AI
	</h1>

	<div class="text-muted-foreground font-some pt-4 sm:pb-2 text-pretty text-sm sm:text-base ">
		<p>Create high-quality robot artwork for free - No subscriptions, no hidden fees</p>
	</div>
	<div class="flex items-center justify-center gap-2 *:font-semibold">
		<Button
			href="https://apps.apple.com/kr/app/mech-robot-ai-image-maker/id6738115512?l=en-GB"
			target="_blank"
			class="font-mont px-7 sm:px-9">App Store</Button
		>
		<Button disabled class="font-mont px-7 sm:px-9">Play Store</Button>
	</div>
</div>

<Carousel.Root
	opts={{ align: 'center', loop: true }}
	plugins={[
		Autoplay({
			delay: 3000
		})
	]}
	class="-mx-3 sm:mx-12 xl:-mx-20"
>
	<Carousel.Content>
		{#each images as item}
			<Carousel.Item class="basis-3/4 sm:basis-1/2 md:basis-1/3">
				<div
					class="flex aspect-[3/4] w-full flex-col justify-end rounded-md bg-cover bg-top"
					style="background-image: url({item.src})"
				>
					<div class="text-white p-4">
						<p class="font-mont font-medium uppercase opacity-65">prompt</p>
						<p class="font-some text-shadow font-medium">{item.prompt}</p>
					</div>
				</div>
			</Carousel.Item>
		{/each}
	</Carousel.Content>
	<Carousel.Previous class="hidden sm:inline-flex"/>
	<Carousel.Next class="hidden sm:inline-flex"/>
</Carousel.Root>

<style lang="postcss">
	.text-shadow {
		text-shadow: black 2px 2px 8px;
	}
</style>
