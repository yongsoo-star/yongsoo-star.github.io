<script lang="ts">
	import '../app.css';
	import { Button } from '$lib/components/ui/button';
	
	let { children } = $props();
</script>

<div class="container max-w-screen-lg">
	<div class="flex items-baseline justify-between font-mono py-2">
		<div class="flex ">
			<Button variant="link" href="/" class="text-muted-foreground font-bold text-lg">Mech Robot AI Image Maker</Button>
		</div>
		<div class="flex ">
			<Button variant="link" href="/faq" class="text-muted-foreground">FAQ</Button>
			<Button variant="link" href="/terms-and-privacy" class="text-muted-foreground">Terms & Privacy</Button>
		</div>
	</div>
	{@render children()}
</div>
