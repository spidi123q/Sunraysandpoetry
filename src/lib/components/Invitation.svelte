<script lang="ts">
    import CardContainer from "$lib/components/ui/ThreeDCardEffect/CardContainer.svelte";
    import CardBody from "$lib/components/ui/ThreeDCardEffect/CardBody.svelte";
    import CardItem from "$lib/components/ui/ThreeDCardEffect/CardItem.svelte";

    let isMouseEntered = $state(false);
</script>

<section
    id="invitation"
    class="py-16 px-4 sm:px-[5%] bg-[#efebe9] text-center border-y border-[#d7ccc8]/30"
>
    <div class="max-w-[800px] mx-auto reveal flex justify-center w-full">
        <CardContainer bind:isMouseEntered containerClassName="w-full">
            <CardBody
                className="bg-white rounded-3xl p-6 sm:p-12 shadow-[0_20px_50px_rgba(93,64,55,0.05)] border border-[#d7ccc8]/30 w-full"
            >
                <CardItem
                    translateZ={50}
                    className="flex justify-center mb-8 w-full"
                    {isMouseEntered}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="80"
                        height="80"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#5d4037"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-flower-2 mx-auto"
                        ><path d="M6.1 15.3a8.3 8.3 0 1 0 11.8 0" /><path
                            d="M8 8.8a8.3 8.3 0 1 0 8 0"
                        /><path d="M12 2a8.3 8.3 0 1 0 0 16.6" /><path
                            d="M12 10v6"
                        /></svg
                    >
                </CardItem>

                <div class="my-8 w-full">
                    <CardItem
                        translateZ={30}
                        {isMouseEntered}
                        className="w-full text-center"
                    >
                        <p
                            class="font-heading text-[2rem] text-[#5d4037] mb-2 font-semibold"
                        >
                            Mr Suresh & Mrs Chandini
                        </p>
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        {isMouseEntered}
                        className="w-full text-center"
                    >
                        <p class="text-base text-gray-600 italic">
                            Ayyathuvalappil House, Karukaputhoor, Palakkad
                        </p>
                    </CardItem>
                </div>

                <CardItem
                    translateZ={40}
                    {isMouseEntered}
                    className="w-full text-[1.2rem] my-8 leading-[1.8] text-[#3e2723] font-medium tracking-wide text-center"
                >
                    We cordially invite you to celebrate<br />the marriage of
                    our son
                </CardItem>

                <CardItem
                    translateZ={80}
                    {isMouseEntered}
                    className="w-full text-center"
                >
                    <h2
                        class="text-[4.5rem] text-[#5d4037] my-10 font-heading max-md:text-[3.5rem] leading-tight font-bold drop-shadow-sm"
                    >
                        Suraj Kiran <br />
                        <span
                            class="text-[3.5rem] text-[#8d6e63] italic font-heading my-4 block"
                            >&amp;</span
                        >
                        Kavitha
                    </h2>
                </CardItem>

                <CardItem
                    translateZ={40}
                    {isMouseEntered}
                    className="w-full text-[1.2rem] my-8 leading-[1.8] text-[#3e2723] font-medium tracking-wide text-center"
                >
                    Daughter of
                </CardItem>

                <div class="my-8 w-full">
                    <CardItem
                        translateZ={30}
                        {isMouseEntered}
                        className="w-full text-center"
                    >
                        <p
                            class="font-heading text-[2rem] text-[#5d4037] mb-2 font-semibold"
                        >
                            Dr Hariprakash & Dr Jayasree
                        </p>
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        {isMouseEntered}
                        className="w-full text-center"
                    >
                        <p class="text-base text-gray-600 italic">
                            Madathil, Kandalloor South, Kayamkulam
                        </p>
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    </div>
</section>
