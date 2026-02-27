<script lang="ts">
    import { cn } from "$lib/utils/cn";

    let { className = "", children } = $props();
</script>

<div
    class={cn(
        " w-full h-full [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]",
        className,
    )}
>
    {@render children()}
</div>
