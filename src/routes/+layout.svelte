<script lang="ts">
	import Navbar from '$lib/components/ui/Navbar.svelte';
	import BackgroundBeams from '$lib/components/ui/BackgroundBeams/BackgroundBeams.svelte';
	import '../app.css';
	import 'svelte-reveal/styles.css';
	import Footer from '$lib/components/ui/Footer.svelte';
	let { children } = $props();
</script>

<div class="relative h-screen w-full overflow-x-hidden bg-base-100 antialiased">
	<!-- <div class="relative z-50"> -->
	<Navbar />
	<!-- </div> -->
	<div class="relative z-10">
		{@render children()}
	</div>
	<BackgroundBeams />
	<Footer />
</div>
