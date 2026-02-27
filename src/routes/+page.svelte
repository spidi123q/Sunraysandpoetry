<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";
    import Hero from "$lib/components/Hero.svelte";
    import Invitation from "$lib/components/Invitation.svelte";
    import Timeline from "$lib/components/Timeline.svelte";
    import Countdown from "$lib/components/Countdown.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import { onMount } from "svelte";

    onMount(() => {
        // Global reveal animation logic
        function reveal() {
            var reveals = document.querySelectorAll(".reveal");
            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 150;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                }
            }
        }
        window.addEventListener("scroll", reveal);
        reveal(); // Trigger on load

        return () => window.removeEventListener("scroll", reveal);
    });
</script>

<svelte:head>
    <title>Suraj Kiran & Kavitha - Wedding Invitation</title>
    <meta
        name="description"
        content="Join us in celebrating the marriage of Suraj Kiran and Kavitha on March 25, 2026."
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin="anonymous"
    />
    <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Outfit:wght@300;400;500;600&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<Navbar />

<main>
    <Hero />
    <Timeline />
    <Invitation />
    <Countdown />
</main>

<Footer />
