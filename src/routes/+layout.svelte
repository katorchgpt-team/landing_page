<script lang="ts">
	//@ts-nocheck
	import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling';
	import { slide, fly, fade } from 'svelte/transition';
	import '../app.css';
	let drawerOpen = $state(false);
	let lastScrollTop = $state(0); //last scroll position
	let showNav = $state(true); //boolean to show or hide nav bar
	let { children } = $props();
	let routes = [
		{ href: '/', route: 'Home', id: 'home' },
		// { href: '/', route: 'Features' },
		{ href: '/', route: 'About KaTorch GPT', id: 'about' },
		{ href: '/', route: 'FAQs', id: 'faqs' },
		{ href: '/', route: 'Contact Us', id: 'contact' }
	];
</script>

<svelte:window
	on:scroll={() => {
		var st = window.pageYOffset || document.documentElement.scrollTop; //Get current scroll position
		//If new scroll position is greater than old (previous/ last) - hide
		if (st > lastScrollTop) showNav = false;
		else showNav = true;
		lastScrollTop = st;
	}}
/>

<div class="drawer">
	<input id="my-drawer" type="checkbox" bind:checked={drawerOpen} class="drawer-toggle" />
	<div class="drawer-content">
		<!-- Navbar -->
		{#if showNav}
			<div
				class="navbar fixed left-0 top-0 z-10 w-screen px-2 lg:px-6
				{lastScrollTop <= 50 ? 'bg-primary text-primary-content' : 'glassmorph'}
				"
				in:fly={{ y: -100, duration: 500 }}
				out:fly={{ y: -100, duration: 500 }}
			>
				<div class="navbar-start">
					<label for="my-drawer" class="btn btn-ghost drawer-button lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="size-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</label>

					<!-- svelte-ignore a11y_consider_explicit_label -->
					<a href="/" class=" hidden items-center px-4 lg:block">
						<img src="/logo_small.png" class="h-16" alt="" />
					</a>
				</div>
				<div class="navbar-center hidden lg:flex">
					<ul class="menu menu-horizontal gap-5 px-1">
						{#each routes as { route, href, id }}
							<!-- svelte-ignore a11y_missing_attribute -->
							<li><a use:scrollTo={id}>{route}</a></li>
						{/each}
					</ul>
				</div>
				<div class="navbar-end">
					<a class="btn btn-secondary mr-3" href="/">Get Started</a>
				</div>
			</div>
		{/if}
		<!-- Navbar End -->
		{@render children()}
	</div>
	<div class="drawer-side">
		<label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu menu-lg z-[999] min-h-full w-72 bg-primary p-4 pt-20 text-primary-content">
			<li>
				<a href="/">
					<img src="/logo_full_white.png" class="h-12 object-contain" alt="" />
				</a>
			</li>

			<!-- Sidebar content here -->
			{#each routes as { route, href, id }}
				<!-- svelte-ignore a11y_missing_attribute -->
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<li>
					<a
						use:scrollTo={id}
						onclick={() => {
							drawerOpen = false;
						}}>{route}</a
					>
				</li>
			{/each}
		</ul>
	</div>
</div>
