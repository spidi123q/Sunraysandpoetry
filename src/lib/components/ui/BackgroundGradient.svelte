<script lang="ts">
    import { cn } from "$lib/utils/cn";
    import { Motion } from "svelte-motion";

    let {
        className = "",
        containerClassName = "",
        animate = true,
        children,
    } = $props();

    const variants = {
        initial: {
            backgroundPosition: "0 50%",
        },
        animate: {
            backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
        },
    };
</script>

<div class={cn("group relative p-[4px]", containerClassName)}>
    <Motion
        let:motion
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={animate
            ? { duration: 5, repeat: Infinity, repeatType: "reverse" }
            : undefined}
        style={{
            backgroundSize: animate ? "400% 400%" : undefined,
        }}
    >
        <div
            use:motion
            class={cn(
                "absolute inset-0 z-[1] rounded-3xl opacity-60 blur-xl transition duration-500 group-hover:opacity-100",
                " bg-[radial-gradient(circle_farthest-side_at_0_100%,#5d4037,transparent),radial-gradient(circle_farthest-side_at_100%_0,#8d6e63,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#d7ccc8,transparent),radial-gradient(circle_farthest-side_at_0_0,#efebe9,#5d4037)]",
            )}
        ></div>
    </Motion>

    <Motion
        let:motion
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={animate
            ? { duration: 5, repeat: Infinity, repeatType: "reverse" }
            : undefined}
        style={{
            backgroundSize: animate ? "400% 400%" : undefined,
        }}
    >
        <div
            use:motion
            class={cn(
                "absolute inset-0 z-[1] rounded-3xl",
                "bg-[radial-gradient(circle_farthest-side_at_0_100%,#5d4037,transparent),radial-gradient(circle_farthest-side_at_100%_0,#8d6e63,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#d7ccc8,transparent),radial-gradient(circle_farthest-side_at_0_0,#efebe9,#5d4037)]",
            )}
        ></div>
    </Motion>

    <div class={cn("relative z-10", className)}>
        {@render children()}
    </div>
</div>
