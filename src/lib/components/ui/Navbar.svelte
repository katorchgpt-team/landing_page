<script>
	// @ts-nocheck

	import { Dot, ExternalLink, Menu, X } from 'lucide-svelte';
	import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling';
	import { fly } from 'svelte/transition';
	import { Drawer } from 'vaul-svelte';
	let routes = [
		{ route: 'Home', href: 'home' },
		{ route: 'About', href: 'about' },
		{ route: 'How it Works', href: 'howitworks' },
		{ route: 'Road Map', href: '/roadmap' },
		{ route: 'FAQs', href: 'faqs' }
	];
	let active = 'home';
	let navOpen = $state(false);
	let lastScrollTop = $state(0); //last scroll position
	let showNav = $state(true); //boolean to show or hide nav bar

	import { setGlobalOptions } from 'svelte-scrolling';

	setGlobalOptions({
		duration: 500,
		onDone: () => {
			navOpen = false;
		}
	});
</script>

<svelte:window
	onscroll={() => {
		// console.log('hello');
		var st = window.pageYOffset || document.documentElement.scrollTop; //Get current scroll position
		//If new scroll position is greater than old (previous/ last) - hide
		if (st > lastScrollTop) showNav = false;
		else showNav = true;
		lastScrollTop = st;
	}}
/>

{#if showNav}
	<div
		in:fly={{ y: -20 }}
		out:fly={{ y: -20 }}
		class="glassmorph {lastScrollTop >= 30
			? 'bg-base-200'
			: ''} navbar fixed top-0 z-50 w-full border-b-0 border-base-300 px-3 lg:px-5"
	>
		<div class="navbar-start">
			<a href="/" class="mr-5 hidden lg:block">
				<img src="/logo_primary_transparent.png" class="h-10 rounded-md" alt="" />
			</a>

			<button
				onclick={() => {
					navOpen = true;
				}}
				class="btn btn-ghost lg:hidden"
			>
				<Menu class="h-6 w-6" />
			</button>

			<ul class="menu menu-horizontal hidden items-center px-1 lg:flex">
				{#each routes as { route, href }, i}
					{#if route == 'Road Map'}
						<li>
							<!-- svelte-ignore a11y_missing_attribute -->
							<a {href} target="_blank"
								>{route}
								<ExternalLink class="size-4" />
							</a>
						</li>
					{:else}
						<li>
							<!-- svelte-ignore a11y_missing_attribute -->
							<a use:scrollTo={href}>{route} </a>
						</li>
					{/if}

					<Dot class="size-5 {i == 4 ? 'hidden' : ''} opacity-20" />
				{/each}
			</ul>
		</div>
		<div class="navbar-center hidden md:hidden lg:flex"></div>
		<div class="navbar-end">
			<!-- <a class="btn btn-primary btn-sm h-10 rounded-full px-6" href="/">Get In Touch</a> -->
			<!-- <p>{showNav} - {lastScrollTop}</p> -->
			<img src="/logo_primary_transparent.png" class="h-10 rounded-md lg:hidden" alt="" />
		</div>
	</div>
{/if}

{#if navOpen == true}
	<div
		in:fly={{ y: 20 }}
		out:fly={{ y: 200, delay: 100 }}
		class="fixed bottom-0 left-0 z-50 w-full flex-1 rounded-t-[10px]
		bg-base-300 p-4 text-base-content"
	>
		<!-- svelte-ignore element_invalid_self_closing_tag -->
		<!-- <div class="mx-auto mb-8 h-1.5 w-12 flex-shrink-0 rounded-full bg-base-200" /> -->

		<div class="flex flex-row justify-end">
			<button
				class="btn btn-circle btn-ghost"
				onclick={() => {
					navOpen = false;
				}}
			>
				<X class="size-6" />
			</button>
		</div>

		<div class=" mx-auto max-w-md">
			<ul class="menu menu-lg w-full">
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				{#each routes as { route, href }, i}
					<!-- svelte-ignore a11y_click_events_have_key_events -->
					{#if route == 'Road Map'}
						<!-- svelte-ignore a11y_click_events_have_key_events -->
						<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
						<li>
							<!-- svelte-ignore a11y_missing_attribute -->
							<a {href} target="_blank"
								>{route}
								<ExternalLink class="size-4" />
							</a>
						</li>
					{:else}
						<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
						<li>
							<!-- svelte-ignore a11y_missing_attribute -->
							<button use:scrollTo={href}>{route} </button>
						</li>
					{/if}
				{/each}
			</ul>
		</div>
	</div>
{/if}
