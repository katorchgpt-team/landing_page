<script>
	import Airtel from '$lib/svgs/airtel.svelte';
	import Mtn from '$lib/svgs/mtn.svelte';
	import { BrainCircuit, BookText, Send, Presentation } from 'lucide-svelte';
	import { reveal } from 'svelte-reveal';
	import { fade } from 'svelte/transition';

	//
	let features = [
		{
			feature: 'Advanced AI Integration',
			icon: BrainCircuit
		},
		{
			feature: 'Curriculum Knowledge Base',
			icon: BookText
		},
		{
			feature: 'Prompt Timely Responses',
			icon: Send
		},
		{
			feature: 'Adaptive Learning System',
			icon: Presentation
		}
	];
</script>

<div class="relative bg-primary pt-16 text-primary-content lg:h-screen lg:px-10 lg:py-16" id="home">
	<!-- For Large Screens -->
	<div class="hidden w-full flex-col items-center justify-center gap-5 md:flex lg:flex lg:flex-row">
		<div class="mt-20 basis-[55%]">
			<img
				use:reveal={{
					preset: 'slide',
					delay: 500
				}}
				src="/logo_full_white.png"
				class=" h-8"
				alt=""
			/>

			<h1
				class=" w-full text-5xl font-extrabold leading-tight"
				use:reveal={{ preset: 'fade', delay: 200 }}
			>
				<span class="flex items-center gap-3">
					<span class="text-secondary">Lighting</span> Up
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" class="size-12">
						<g>
							<path
								class="fill-secondary"
								fill="currentColor"
								d="M100 200c-2.895-94.738-5.262-97.09-100-100 94.738-2.895 97.09-5.262 100-100 2.895 94.738 5.262 97.09 100 100-94.738 2.91-97.09 5.233-100 100Z"
							/>
						</g>
					</svg>
				</span>
				Every Student's Future,
				<span class="flex items-center gap-3">
					One <span class="text-secondary">SMS</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="200"
						height="200"
						class="size-12"
						fill="none"
						viewBox="0 0 200 200"
						version="1.1"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						><g clip-path="url(#clip0_103_9)"
							><path
								class="fill-accent"
								d="M89.932 6.129c4.225-8.172 15.911-8.172 20.136 0l26.905 52.035a11.33 11.33 0 0 0 4.863 4.863l52.035 26.905c8.172 4.225 8.172 15.911 0 20.136l-52.035 26.905a11.327 11.327 0 0 0-4.863 4.863l-26.905 52.035c-4.225 8.172-15.911 8.172-20.136 0l-26.905-52.035a11.33 11.33 0 0 0-4.863-4.863L6.13 110.068c-8.172-4.225-8.172-15.911 0-20.136l52.035-26.905a11.335 11.335 0 0 0 4.863-4.863L89.932 6.13Z"
							></path></g
						></svg
					>
					at a Time
				</span>
			</h1>

			<!-- <div class="divider w-1/2 fill-primary-content"></div> -->
			<br />
			<!-- <br /> -->

			<div
				class="mb-6 rounded-xl bg-base-100 px-2 py-4 text-base-content shadow-2xl"
				use:reveal={{
					preset: 'slide',
					delay: 500
				}}
			>
				<p class="px-5 pb-3 pt-2 text-center text-lg">Simply SMS your question to:</p>
				<div class="flex flex-row items-center gap-6">
					<div class=" flex basis-1/2 flex-col items-center justify-start gap-1">
						<Mtn class="-mt-5 size-24 fill-primary-content" />
						<p class="-mt-5 text-center text-2xl font-black">0783-165-577</p>
					</div>

					<div class="divider divider-horizontal text-xs font-normal">OR</div>

					<div class=" flex basis-1/2 flex-col items-center justify-start gap-1">
						<Airtel class="-mt-5 size-24 fill-primary-content" />
						<p class="-mt-5 text-xl font-black uppercase text-gray-600">Coming Soon</p>
					</div>
				</div>
			</div>
		</div>

		<div class="basis-[45%]">
			<img
				src="/phone.png"
				class=" absolute bottom-12 right-0 w-auto object-cover md:hidden lg:block lg:h-[75vh]"
				alt=""
			/>
		</div>
	</div>

	<!-- For Small -->
	<div class="py-8 md:hidden lg:hidden">
		<img
			src="/logo_full_white.png"
			class="ml-8 h-6"
			alt=""
			use:reveal={{
				preset: 'slide',
				delay: 500
			}}
		/>
		<h1 class="w-11/12 px-8 pb-10 text-5xl font-extrabold leading-tight" use:reveal>
			<span class="text-secondary">Lighting</span> Up Every Student's Future,{' '}
			One <span class="text-secondary">SMS</span>
			at a Time
		</h1>

		<div
			class="rounded-none bg-base-100 px-2 py-4 text-base-content shadow-2xl"
			use:reveal={{
				preset: 'slide',
				delay: 500
			}}
		>
			<p class="px-5 pb-3 pt-2 text-center text-xs">
				Simply SMS your question to and get your answer:
			</p>
			<div class="start flex flex-col items-start gap-2">
				<div class=" flex basis-1/2 flex-row items-center justify-start gap-1 px-5">
					<span class="basis-1/12">
						<Mtn class="-mt-2 size-16 fill-primary-content" />
					</span>
					<p class="-mt-4 basis-11/12 text-center text-2xl font-black">0783-165-577</p>
				</div>

				<div class="divider my-0 -mt-3 text-xs font-normal">OR</div>

				<div class=" mt-2 flex basis-1/2 flex-row items-center justify-start gap-1 px-6">
					<span>
						<Airtel class="-mt-2 size-16 basis-1/12 fill-gray-400" />
					</span>
					<p class="-mt-4 basis-11/12 text-center text-base font-black uppercase text-gray-600">
						Coming Soon
					</p>
				</div>
			</div>
		</div>
	</div>

	<section id="features" class="hidden lg:block">
		<div
			class="-bottom-24 left-0 grid min-h-32 w-full grid-cols-2 gap-0 bg-secondary lg:absolute lg:grid-cols-4"
		>
			{#each features as f}
				<div
					use:reveal
					class="flex w-full flex-col items-center justify-center
                    bg-secondary
                    px-2 py-4 text-secondary-content shadow-inner lg:px-12 lg:py-8"
				>
					<svelte:component this={f.icon} class="mx-auto h-8 lg:h-12 " />
					<p class="mt-4 text-center text-base font-bold">{f.feature}</p>
				</div>
			{/each}
		</div>
	</section>
</div>
