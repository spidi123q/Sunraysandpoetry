<script lang="ts">
    import { onMount } from "svelte";

    let scrolled = $state(false);
    let menuOpen = $state(false);

    onMount(() => {
        const handleScroll = () => {
            scrolled = window.scrollY > 50;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    function toggleMenu() {
        menuOpen = !menuOpen;
    }

    function closeMenu() {
        menuOpen = false;
    }
</script>

<nav
    class="fixed top-0 w-full px-[5%] py-6 flex justify-between items-center bg-white/20 backdrop-blur-md z-[1000] transition-all duration-300 {scrolled
        ? 'bg-white/95 shadow-sm py-4'
        : ''}"
>
    <div class="font-heading text-2xl font-bold text-[#5d4037] tracking-[2px]">
        S & K
    </div>

    <ul
        class="nav-links flex gap-8 list-none max-md:fixed max-md:right-0 max-md:h-screen max-md:top-0 max-md:bg-white/98 max-md:flex-col max-md:items-center max-md:justify-center max-md:w-full max-md:transition-transform max-md:duration-500 {menuOpen
            ? 'max-md:translate-x-0'
            : 'max-md:translate-x-full'}"
    >
        <li>
            <a
                href="#hero"
                class="text-[#3e2723] font-medium text-sm uppercase tracking-[1px] transition-colors hover:text-[#8d6e63] {scrolled
                    ? 'text-[#5d4037]'
                    : ''} max-md:text-2xl"
                onclick={closeMenu}>Home</a
            >
        </li>
        <li>
            <a
                href="#timeline"
                class="text-[#3e2723] font-medium text-sm uppercase tracking-[1px] transition-colors hover:text-[#8d6e63] {scrolled
                    ? 'text-[#5d4037]'
                    : ''} max-md:text-2xl"
                onclick={closeMenu}>Itinerary</a
            >
        </li>
        <li>
            <a
                href="#invitation"
                class="text-[#3e2723] font-medium text-sm uppercase tracking-[1px] transition-colors hover:text-[#8d6e63] {scrolled
                    ? 'text-[#5d4037]'
                    : ''} max-md:text-2xl"
                onclick={closeMenu}>Invitation</a
            >
        </li>
        <li>
            <a
                href="#countdown"
                class="text-[#3e2723] font-medium text-sm uppercase tracking-[1px] transition-colors hover:text-[#8d6e63] {scrolled
                    ? 'text-[#5d4037]'
                    : ''} max-md:text-2xl"
                onclick={closeMenu}>Countdown</a
            >
        </li>
    </ul>

    <button
        class="hamburger hidden max-md:block cursor-pointer z-[1001] {menuOpen
            ? 'toggle'
            : ''}"
        onclick={toggleMenu}
        aria-label="Toggle menu"
    >
        <div
            class="w-[25px] h-[2px] bg-[#3e2723] my-[5px] transition-all duration-400 {menuOpen
                ? 'translate-y-[7px] rotate-45'
                : ''}"
        ></div>
        <div
            class="w-[25px] h-[2px] bg-[#3e2723] my-[5px] transition-all duration-400 {menuOpen
                ? 'opacity-0'
                : ''}"
        ></div>
        <div
            class="w-[25px] h-[2px] bg-[#3e2723] my-[5px] transition-all duration-400 {menuOpen
                ? '-translate-y-[7px] -rotate-45'
                : ''}"
        ></div>
    </button>
</nav>
