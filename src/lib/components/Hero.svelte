<script lang="ts">
    import WavyBackground from "$lib/components/ui/WavyBackground.svelte";
    import TextGenerateEffect from "$lib/components/ui/TextGenerateEffect.svelte";
</script>

<header
    id="hero"
    class="relative min-h-screen flex justify-center items-center text-center"
>
    <WavyBackground
        backgroundFill="#efebe9"
        colors={["#5d4037", "#8d6e63", "#d7ccc8"]}
        waveOpacity={0.4}
        blur={15}
    >
        <div class="relative z-20 p-8 text-[#3e2723] reveal active">
            <div class="flex justify-center mb-8 opacity-80">
                <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="60px"
                    height="60px"
                    viewBox="0 0 100 100"
                    enable-background="new 0 0 100 100"
                    xml:space="preserve"
                    fill="#5d4037"
                >
                    <g>
                        <path
                            d="M50,11.3c8.8,0,16.5,4.7,21.1,11.8c-1.8,0.7-3.7,1.8-6,3.4C60.9,23.6,56.7,21,50,21c-8.9,0-15.5,4.8-19.1,10.2
                    c-1.8-1.5-3.5-2.8-5-3.8C30.6,18.7,39.4,11.3,50,11.3z M62.2,33.5c4.1,2.5,7.5,6,9.6,10.2c2.2-0.8,4.5-1.5,6.8-2
                    C76.1,31,69.9,22.1,62.2,33.5z M23.3,42.8c-1.4,1.9-2.6,3.9-3.5,6.2c-2.3-0.5-4.5-1.3-6.5-2.4C15.1,35,21.5,25.2,23.3,42.8z
                    M79.5,46.7c1.7,2.8,2.8,5.9,3.1,9.2c2.4-0.1,4.7-0.5,6.8-1C88.4,41.9,84.7,30.3,79.5,46.7z M12.8,53.2c-1,1.8-1.7,3.6-2.1,5.6
                    c-2.4-0.1-4.7-0.5-6.8-1.1C3.9,46.5,8,34.8,12.8,53.2z M85.2,59.2c1.3,3.3,1.9,6.9,1.6,10.5c2.3,0.3,4.5,0.4,6.6,0.2
                    C94,56.5,90.4,44.9,85.2,59.2z M6.9,61.5c-0.2,2.7-0.1,5.5,0.4,8.1c-2.3,0.7-4.5,1.2-6.5,1.6C1,57.5,3.7,46.1,6.9,61.5z M50,86.5
                    c-15,0-27.1-12.2-27.1-27.1c0-15,12.2-27.1,27.1-27.1c15,0,27.1,12.2,27.1,27.1C77.1,74.4,65,86.5,50,86.5z"
                        />
                        <circle cx="50" cy="59.4" r="16.9" />
                    </g>
                </svg>
            </div>
            <TextGenerateEffect
                words="WE CORDIALLY INVITE YOU"
                className="text-base tracking-[3px] uppercase mb-6 text-[#3e2723] opacity-80 font-bold"
            />

            <h1
                class="text-[#5d4037] text-[3.5rem] sm:text-[4.5rem] leading-[1.2] mb-6 drop-shadow-md font-heading font-bold"
            >
                <TextGenerateEffect
                    words="Suraj Kiran"
                    className="inline-block text-[#5d4037]"
                /> <br />
                <span class="text-[3.5rem] italic text-[#8d6e63] font-heading"
                    >&</span
                ><br />
                <TextGenerateEffect
                    words="Kavitha"
                    className="inline-block text-[#5d4037]"
                />
            </h1>
            <p class="text-2xl tracking-[2px] mb-12 font-medium text-[#3e2723]">
                MARCH 25, 2026
            </p>

            <a
                href="#invitation"
                aria-label="Scroll to Invitation"
                class="inline-block w-[30px] h-[50px] border-2 border-[#5d4037] rounded-full relative animate-scroll-bounce"
            >
                <span
                    class="absolute left-1/2 -translate-x-1/2 w-[6px] h-[6px] bg-[#5d4037] rounded-full animate-scroll-drop"
                ></span>
            </a>
        </div>
    </WavyBackground>
</header>
