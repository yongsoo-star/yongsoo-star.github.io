<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion';
    import { Button } from "$lib/components/ui/button"
    import { Send } from "lucide-svelte"
    

	const faq_items = [
    { 
        id: 'q1',
        trigger: 'Q. Is it free?', 
        content: 'A. Yes! The app is free to use. Image generation starts after watching a complete ad.' 
    },
    { 
        id: 'q2',
        trigger: 'Q. Will my images be saved automatically?', 
        content: "A. No, the app doesn't store any images or prompts. Remember to use the 'Save to Gallery' button to keep images you like." 
    }
    ];

    const default_open = ['q1','q2']

</script>

<div class="font-some py-12 px-4 md:px-24">
	<div  class="*:leading-normal">
		<h1 class="text-4xl font-semibold">FAQ</h1>
		<p class="text-muted-foreground">Mechanical Robot AI Image Maker</p>
	</div>

	<div class="py-12">
		<Accordion.Root type="multiple" value={default_open}>
			{#each faq_items as item}
				<Accordion.Item value={item.id}>
					<Accordion.Trigger class="text-lg font-bold text-left">{item.trigger}</Accordion.Trigger>
					<Accordion.Content class="text-left">{item.content}</Accordion.Content>
				</Accordion.Item>
			{/each}
		</Accordion.Root>
	</div>

    <div>
        <p class="text-muted-foreground text-sm py-4">
            If you have any additional questions, please click the button below to leave a message. 
        </p>
        <Button class="font-semibold" href="https://river-sheet-291.notion.site/13bfcf02700f803bb429f4ee343e04a2" target="_blank"><Send /> Contact Us</Button>
    </div>
</div>

<style lang="postcss">
	
</style>