<script lang="ts">
    import TracingBeam from "$lib/components/ui/TracingBeam.svelte";
</script>

<section
    id="timeline"
    class="py-16 px-4 sm:px-[5%] bg-white text-center overflow-hidden"
>
    <div class="max-w-[1000px] mx-auto reveal">
        <h2
            class="font-heading text-[3.5rem] text-[#5d4037] mb-16 font-bold max-md:text-[2.5rem]"
        >
            Wedding Itinerary
        </h2>

        <TracingBeam>
            <div class="relative wrap overflow-hidden px-2 sm:p-10 h-full">
                <div
                    class="border-2-2 absolute border-opacity-20 border-[#8d6e63] h-full border hidden md:block"
                    style="left: 50%"
                ></div>

                <!-- Item 1: 22nd March -->
                <div
                    class="mb-12 flex justify-between items-center w-full right-timeline flex-col md:flex-row"
                >
                    <div class="order-1 md:w-5/12 hidden md:block"></div>
                    <div
                        class="z-20 flex items-center order-1 bg-[#5d4037] shadow-xl w-6 h-6 rounded-full hidden md:block"
                    ></div>
                    <div
                        class="order-1 bg-[#efebe9] rounded-2xl shadow-xl md:w-5/12 px-8 py-6 text-left border border-[#d7ccc8]/50 w-full transition-transform duration-300 hover:-translate-y-2 relative"
                    >
                        <p
                            class="mb-2 text-base text-[#8d6e63] font-bold tracking-widest uppercase"
                        >
                            22nd March 2026
                        </p>
                        <h3
                            class="mb-4 font-bold text-2xl font-heading text-[#5d4037]"
                        >
                            Theme - Sangeet: Team Bride vs Team Groom
                        </h3>
                        <div
                            class="text-[#3e2723] space-y-2 text-sm leading-relaxed"
                        >
                            <p><strong>Time:</strong> 5-9pm</p>
                            <p>
                                <strong>Location:</strong> Bride’s Residence
                                <a
                                    href="https://maps.app.goo.gl/7cpYvfQqU7osTXsZ8?g_st=ic"
                                    target="_blank"
                                    class="text-[#8d6e63] underline ml-1"
                                    >View Map</a
                                >
                            </p>
                            <p>
                                <strong>Dress Code:</strong> Dark colour and shimmery
                                material preferred (eg: dark green, navy blue, black,
                                etc)
                            </p>
                            <p>
                                <strong>What to expect:</strong> Pudava kodukkal,
                                dance, music, speeches, antakshari, dumb charades,
                                DJ night
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Item 2: 24th March -->
                <div
                    class="mb-12 flex justify-between flex-row-reverse items-center w-full left-timeline flex-col md:flex-row"
                >
                    <div class="order-1 md:w-5/12 hidden md:block"></div>
                    <div
                        class="z-20 flex items-center order-1 bg-[#8d6e63] shadow-xl w-6 h-6 rounded-full hidden md:block"
                    ></div>
                    <div
                        class="order-1 bg-[#efebe9] rounded-2xl shadow-xl md:w-5/12 px-8 py-6 text-left border border-[#d7ccc8]/50 w-full transition-transform duration-300 hover:-translate-y-2 relative"
                    >
                        <p
                            class="mb-2 text-base text-[#8d6e63] font-bold tracking-widest uppercase"
                        >
                            24th March 2026
                        </p>
                        <h3
                            class="mb-4 font-bold text-2xl font-heading text-[#5d4037]"
                        >
                            Theme - Vintage Haldi: Phoolon Ki Holi
                        </h3>
                        <div
                            class="text-[#3e2723] space-y-2 text-sm leading-relaxed"
                        >
                            <p><strong>Time:</strong> 4pm onwards</p>
                            <p>
                                <strong>Location:</strong> KR Thekkedathu Mana
                                <a
                                    href="https://maps.app.goo.gl/cxGdcZmmo3VhUMgi8?g_st=ic"
                                    target="_blank"
                                    class="text-[#8d6e63] underline ml-1"
                                    >View Map</a
                                >
                            </p>
                            <p>
                                <strong>Dress Code:</strong> Light shades and breathable
                                materials preferred (beige, off white, light yellow,
                                pastel pink, powder blue, etc)
                            </p>
                            <p>
                                <strong>What to expect:</strong> Haldi, holi with
                                flower petals and water, fun interactive games, story
                                telling with photo/video slideshow with projector
                                setup
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Item 3: 25th March Morning -->
                <div
                    class="mb-12 flex justify-between items-center w-full right-timeline flex-col md:flex-row"
                >
                    <div class="order-1 md:w-5/12 hidden md:block"></div>
                    <div
                        class="z-20 flex items-center order-1 bg-[#5d4037] shadow-xl w-6 h-6 rounded-full hidden md:block"
                    ></div>
                    <div
                        class="order-1 bg-[#efebe9] rounded-2xl shadow-xl md:w-5/12 px-8 py-6 text-left border border-[#d7ccc8]/50 w-full transition-transform duration-300 hover:-translate-y-2 relative"
                    >
                        <p
                            class="mb-2 text-base text-[#8d6e63] font-bold tracking-widest uppercase"
                        >
                            25th March 2026 - Morning
                        </p>
                        <h3
                            class="mb-4 font-bold text-2xl font-heading text-[#5d4037]"
                        >
                            Temple Wedding
                        </h3>
                        <div
                            class="text-[#3e2723] space-y-2 text-sm leading-relaxed"
                        >
                            <p><strong>Time:</strong> 10:00 am</p>
                            <p><strong>Location:</strong> Guruvayur Temple</p>
                            <p>
                                <strong>Dress Code:</strong> Temple vibe (kasavu
                                preferred)
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Item 4: 25th March Afternoon -->
                <div
                    class="mb-12 flex justify-between flex-row-reverse items-center w-full left-timeline flex-col md:flex-row"
                >
                    <div class="order-1 md:w-5/12 hidden md:block"></div>
                    <div
                        class="z-20 flex items-center order-1 bg-[#8d6e63] shadow-xl w-6 h-6 rounded-full hidden md:block"
                    ></div>
                    <div
                        class="order-1 bg-[#efebe9] rounded-2xl shadow-xl md:w-5/12 px-8 py-6 text-left border border-[#d7ccc8]/50 w-full transition-transform duration-300 hover:-translate-y-2 relative"
                    >
                        <p
                            class="mb-2 text-base text-[#8d6e63] font-bold tracking-widest uppercase"
                        >
                            25th March 2026 - Afternoon
                        </p>
                        <h3
                            class="mb-4 font-bold text-2xl font-heading text-[#5d4037]"
                        >
                            Varamala Ceremony
                        </h3>
                        <div
                            class="text-[#3e2723] space-y-2 text-sm leading-relaxed"
                        >
                            <p><strong>Time:</strong> 4:00 pm</p>
                            <p>
                                <strong>Location:</strong> KR Thekkedathu Mana
                            </p>
                            <p>
                                <strong>Dress Code:</strong> Peach, pink, sandal
                                shades preferred
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Item 5: 25th March Night -->
                <div
                    class="mb-12 flex justify-between items-center w-full right-timeline flex-col md:flex-row"
                >
                    <div class="order-1 md:w-5/12 hidden md:block"></div>
                    <div
                        class="z-20 flex items-center order-1 bg-[#5d4037] shadow-xl w-6 h-6 rounded-full hidden md:block"
                    ></div>
                    <div
                        class="order-1 bg-[#efebe9] rounded-2xl shadow-xl md:w-5/12 px-8 py-6 text-left border border-[#d7ccc8]/50 w-full transition-transform duration-300 hover:-translate-y-2 relative"
                    >
                        <p
                            class="mb-2 text-base text-[#8d6e63] font-bold tracking-widest uppercase"
                        >
                            25th March 2026 - Night
                        </p>
                        <h3
                            class="mb-4 font-bold text-2xl font-heading text-[#5d4037]"
                        >
                            Reception
                        </h3>
                        <div
                            class="text-[#3e2723] space-y-2 text-sm leading-relaxed"
                        >
                            <p><strong>Time:</strong> 7:30 pm</p>
                            <p>
                                <strong>Location:</strong> KR Thekkedathu Mana
                            </p>
                            <p>
                                <strong>Dress Code:</strong> Same as varamala ceremony
                                or any function wears
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </TracingBeam>
    </div>
</section>
