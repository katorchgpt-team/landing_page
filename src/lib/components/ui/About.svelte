<script>
	import { Wifi, Smartphone, MessageSquare, Globe, ArrowRight, Database } from 'lucide-svelte';
	import { reveal } from 'svelte-reveal';
	const features = [
		{
			title: 'No Internet Required',
			description:
				'Access information anytime, anywhere, even in areas with limited or unreliable internet connectivity.',
			icon: Wifi
		},
		{
			title: 'Device Agnostic',
			description:
				'Works on any mobile phone with SMS or WhatsApp capabilities - no smartphone required!',
			icon: Smartphone
		},
		{
			title: 'Simple & Easy',
			description:
				'Uses familiar platforms like SMS and WhatsApp, making it incredibly easy to use.',
			icon: MessageSquare
		},
		{
			title: 'Accessible Information',
			description:
				"Provides a universal solution for accessing knowledge, regardless of the user's challenges.",
			icon: Globe
		},
		{
			title: 'Low Barrier to Entry',
			description:
				'No downloads, accounts, or new interfaces to learn. Start getting answers instantly.',
			icon: ArrowRight
		},
		{
			title: 'Scalable Solution',
			description:
				'Built on existing mobile infrastructure and cloud technology, KaTorch GPT can grow to serve millions.',
			icon: Database
		}
	];
</script>

<div
	id="about"
	class="my-10 w-full border-t border-base-300 bg-base-100 text-base-content lg:my-20 lg:border-0 lg:px-0"
>
	<div class=" grid grid-cols-1 gap-0 lg:grid-cols-5 lg:gap-5">
		<div class=" col-span-2 px-0 py-4 lg:px-8 lg:py-6">
			<p
				class="px-4
            py-7
            text-3xl font-normal [text-shadow:_0_0.5px_1px_#ffed02] lg:px-0 lg:text-5xl"
			>
				About
			</p>

			<div class="px-5 lg:px-0" use:reveal={{ preset: 'fade' }}>
				<p>
					KaTorch GPT is an AI service that delivers answers to any mobile phone via WhatsApp or
					SMS. Users simply text their questions and get instant, AI-powered responses, even without
					internet or a smartphone. This helps users access vital information quickly and easily,
					overcoming barriers like limited internet access or lack of smartphones.
					<br />
					We are breaking down barriers to information, one SMS; one WhatsApp message at a time.
				</p>
				<br />
				<a
					class="[box-shadow:
				0_2px_4px rgba(255_237_2_/_0.3)] btn inline-block
                rounded-full
bg-gradient-to-br from-primary via-yellow-500 to-primary px-8 py-2
				text-lg font-semibold tracking-tighter text-primary-content hover:bg-gradient-to-br focus:ring-4 focus:ring-yellow-800
				"
					href="mailto:katorchgpt@gmail.com">Reach out</a
				>
			</div>
		</div>

		<div
			class="[box-shadow: 0_2px_4px
        rgba(255_237_2_/_0.3)] col-span-3 w-full
        rounded-l-[40px]
bg-gradient-to-br from-primary
        via-yellow-500 to-primary px-6 py-8 text-primary-content lg:pr-5"
		>
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
				{#each features as feature}
					<div class="card relative overflow-hidden bg-base-100 text-base-content">
						<span class="absolute bottom-2 right-2 skew-x-1 opacity-5">
							<svelte:component
								this={feature.icon}
								class="[text-shadow:0_2px_4px rgba(255_237_2_/_0.3)] size-40 text-gray-700 "
							></svelte:component>
						</span>
						<div class="card-body z-10">
							<h2 class="card-title [text-shadow:_0_0.5px_1px_#ffed02]">
								{feature.title}
							</h2>
							<p>{feature.description}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
