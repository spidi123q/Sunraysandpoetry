<script lang="ts">
    import { Motion } from "svelte-motion";
    import { cn } from "$lib/utils/cn";

    let { words, className = "" } = $props();

    const wordsArray = $derived(words.split(" "));

    const variants = {
        visible: (i: number) => ({
            opacity: 1,
            transition: {
                delay: i * 0.2,
                duration: 2,
            },
        }),
        hidden: { opacity: 0 },
    };
</script>

<div class={cn("font-bold", className)}>
    <div class="mt-4">
        <div class="leading-snug tracking-wide">
            <Motion
                let:motion
                custom={0}
                {variants}
                initial="hidden"
                animate={"visible"}
            >
                <div use:motion>
                    {#each wordsArray as word, idx (`${word}${idx}`)}
                        <Motion
                            let:motion
                            {variants}
                            custom={idx + 1}
                            initial="hidden"
                            animate={"visible"}
                        >
                            <span use:motion>
                                {word}{" "}
                            </span>
                        </Motion>
                    {/each}
                </div>
            </Motion>
        </div>
    </div>
</div>
