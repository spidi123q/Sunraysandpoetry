<script lang="ts">
    import { onMount } from "svelte";
    import BackgroundGradient from "$lib/components/ui/BackgroundGradient.svelte";

    let days = $state("00");
    let hours = $state("00");
    let minutes = $state("00");
    let seconds = $state("00");
    let isOver = $state(false);

    onMount(() => {
        const weddingDate = new Date("Mar 25, 2026 10:00:00").getTime();

        const updateTimer = () => {
            const now = new Date().getTime();
            const distance = weddingDate - now;

            if (distance < 0) {
                isOver = true;
                return;
            }

            days = Math.floor(distance / (1000 * 60 * 60 * 24))
                .toString()
                .padStart(2, "0");
            hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
            )
                .toString()
                .padStart(2, "0");
            minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
                .toString()
                .padStart(2, "0");
            seconds = Math.floor((distance % (1000 * 60)) / 1000)
                .toString()
                .padStart(2, "0");
        };

        updateTimer();
        const interval = setInterval(updateTimer, 1000);

        return () => clearInterval(interval);
    });
</script>

<section id="countdown" class="py-20 px-[5%] bg-white text-center">
    <div class="max-w-[800px] mx-auto reveal">
        <h2 class="font-heading text-[2.5rem] text-[#5d4037] mb-4">
            The Celebration Begins In
        </h2>
        <p class="text-[#8d6e63] mb-12 tracking-widest text-sm uppercase">
            March 25, 2026 · Guruvayur
        </p>

        {#if isOver}
            <h3 class="font-heading text-3xl text-[#8d6e63]">
                The Celebration Has Begun! 🎉
            </h3>
        {:else}
            <div class="flex justify-center flex-wrap gap-6 max-md:gap-4">
                <BackgroundGradient
                    containerClassName="rounded-2xl"
                    className="bg-white"
                >
                    <div
                        class="w-[110px] h-[110px] max-md:w-[80px] max-md:h-[80px] flex flex-col justify-center items-center rounded-2xl"
                    >
                        <span
                            class="text-[2.5rem] max-md:text-[1.8rem] font-semibold text-[#5d4037] font-heading"
                            >{days}</span
                        >
                        <p
                            class="text-sm max-md:text-xs uppercase tracking-[1px] text-[#8d6e63]"
                        >
                            Days
                        </p>
                    </div>
                </BackgroundGradient>
                <BackgroundGradient
                    containerClassName="rounded-2xl"
                    className="bg-white"
                >
                    <div
                        class="w-[110px] h-[110px] max-md:w-[80px] max-md:h-[80px] flex flex-col justify-center items-center rounded-2xl"
                    >
                        <span
                            class="text-[2.5rem] max-md:text-[1.8rem] font-semibold text-[#5d4037] font-heading"
                            >{hours}</span
                        >
                        <p
                            class="text-sm max-md:text-xs uppercase tracking-[1px] text-[#8d6e63]"
                        >
                            Hours
                        </p>
                    </div>
                </BackgroundGradient>
                <BackgroundGradient
                    containerClassName="rounded-2xl"
                    className="bg-white"
                >
                    <div
                        class="w-[110px] h-[110px] max-md:w-[80px] max-md:h-[80px] flex flex-col justify-center items-center rounded-2xl"
                    >
                        <span
                            class="text-[2.5rem] max-md:text-[1.8rem] font-semibold text-[#5d4037] font-heading"
                            >{minutes}</span
                        >
                        <p
                            class="text-sm max-md:text-xs uppercase tracking-[1px] text-[#8d6e63]"
                        >
                            Minutes
                        </p>
                    </div>
                </BackgroundGradient>
                <BackgroundGradient
                    containerClassName="rounded-2xl"
                    className="bg-white"
                >
                    <div
                        class="w-[110px] h-[110px] max-md:w-[80px] max-md:h-[80px] flex flex-col justify-center items-center rounded-2xl"
                    >
                        <span
                            class="text-[2.5rem] max-md:text-[1.8rem] font-semibold text-[#5d4037] font-heading"
                            >{seconds}</span
                        >
                        <p
                            class="text-sm max-md:text-xs uppercase tracking-[1px] text-[#8d6e63]"
                        >
                            Seconds
                        </p>
                    </div>
                </BackgroundGradient>
            </div>
        {/if}
    </div>
</section>
