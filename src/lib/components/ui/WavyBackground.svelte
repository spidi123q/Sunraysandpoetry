<script lang="ts">
    import { cn } from "$lib/utils/cn";
    import { createNoise3D } from "simplex-noise";
    import { onMount } from "svelte";

    let {
        className = "",
        containerClassName = "",
        colors = ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"],
        waveWidth = 50,
        backgroundFill = "black",
        blur = 10,
        speed = "fast",
        waveOpacity = 0.5,
        children,
    } = $props();

    const noise = createNoise3D();
    let w: number, h: number, nt: number, i: number, x: number;
    let ctx: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    let canvasRef: HTMLCanvasElement;

    const getSpeed = () => {
        switch (speed) {
            case "slow":
                return 0.001;
            case "fast":
                return 0.002;
            default:
                return 0.001;
        }
    };

    const init = () => {
        canvas = canvasRef;
        const context = canvas.getContext("2d");
        if (!context) return;
        ctx = context;

        w = ctx.canvas.width = window.innerWidth;
        h = ctx.canvas.height = window.innerHeight;
        ctx.filter = `blur(${blur}px)`;
        nt = 0;
        window.onresize = function () {
            w = ctx.canvas.width = window.innerWidth;
            h = ctx.canvas.height = window.innerHeight;
            ctx.filter = `blur(${blur}px)`;
        };
        render();
    };

    const drawWave = (n: number) => {
        nt += getSpeed();
        for (i = 0; i < n; i++) {
            ctx.beginPath();
            ctx.lineWidth = waveWidth || 50;
            ctx.strokeStyle = colors[i % colors.length];
            for (x = 0; x < w; x += 5) {
                var y = noise(x / 800, 0.3 * i, nt) * 100;
                ctx.lineTo(x, y + h * 0.5); // adjust for height, currently at 50% of the container
            }
            ctx.stroke();
            ctx.closePath();
        }
    };

    let animationId: number;

    const render = () => {
        ctx.fillStyle = backgroundFill;
        ctx.globalAlpha = waveOpacity;
        ctx.fillRect(0, 0, w, h);
        drawWave(5);
        animationId = requestAnimationFrame(render);
    };

    onMount(() => {
        init();
        return () => {
            cancelAnimationFrame(animationId);
        };
    });
</script>

<div
    class={cn(
        "flex min-h-screen flex-col items-center justify-center overflow-hidden w-full",
        containerClassName,
    )}
>
    <canvas class="absolute inset-0 z-0" bind:this={canvasRef} id="canvas"
    ></canvas>
    <div class={cn("relative z-10 w-full max-w-full px-4", className)}>
        {@render children()}
    </div>
</div>
