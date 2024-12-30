<script>
	import { reveal } from 'svelte-reveal';
</script>

<section id="about" class=" -mt-1 bg-primary text-primary-content md:pt-2 lg:pt-40">
	<div class="mx-auto flex flex-col gap-5 px-4 pb-20 pt-2 lg:flex-row lg:px-16">
		<div class="lg:basis-7/12" use:reveal={{ preset: 'slide' }}>
			<div class="container mx-auto px-4">
				<h2 class="mb-6 text-3xl font-bold">Meet KaTorch GPT</h2>

				<div class="about-content space-y-6">
					<div class="intro-text">
						<p class="mb-4 text-lg">
							We believe every student in Uganda deserves access to quality educational support,
							regardless of where they are or whether they have internet. That's why we created
							KaTorch GPT - a simple SMS service that helps students learn, understand, and excel in
							their studies.
						</p>

						<p class="mb-4 text-lg">
							Using the power of Google's advanced Gemini AI technology, KaTorch GPT turns your
							basic phone into a gateway to knowledge. No smartphones, no data bundles, no
							complications - just send an SMS with your question, and receive clear, helpful
							answers within moments.
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="lg:basis-5/12">
			<div
				use:reveal
				class="flex h-72 w-full flex-row items-center justify-center bg-base-100 lg:h-96 lg:w-[40vw]"
			>
				<p class="text-2xl font-extrabold">Promo Video Coming Soon</p>
			</div>
		</div>
	</div>
</section>
