<script lang="ts">
	import '../app.css';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Info, Scale } from 'lucide-svelte';
	let { children } = $props();
</script>

<div class="container max-w-screen-lg px-3 pb-24 pt-2 lg:pt-4">
	<div class="font-some flex flex-wrap items-center justify-between">
		<div>
			<Button variant="link" href="/"><span>Mech Robot AI</span><span class="hidden sm:inline"> Image Maker</span></Button>
		</div>
		<div class="flex grow justify-end">
			<div class="hidden sm:inline-flex">
				<Button variant="link" href="/faq" class="text-muted-foreground">FAQ</Button>
				<Button variant="link" href="/terms-and-privacy" class="text-muted-foreground">Terms & Privacy</Button>
			</div>
			<div class="flex sm:hidden">
				<Button size="icon" variant="ghost" href="/faq" class="text-muted-foreground"><Info /></Button>
				<Button size="icon" variant="ghost" href="/terms-and-privacy" class="text-muted-foreground"><Scale /></Button>
			</div>
		</div>
	</div>

	{@render children()}
</div>

<style lang="postcss">
</style>
