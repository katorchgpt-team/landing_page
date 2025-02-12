<script>
	import { Clock, Loader } from 'lucide-svelte';

	let roadmap = [
		{
			year: 'January 2025',
			status: 'done',
			title: 'MVP Launch',
			description:
				'Launched the Minimum Viable Product (MVP) of KaTorch GPT, providing basic AI-powered information access via SMS and WhatsApp. Focused on core functionality and user feedback collection.'
		},
		{
			year: '2025 (Q1)',
			status: 'working',
			title: 'Enhanced AI & Language Support',
			description:
				"Improving the AI's accuracy and response quality.  Beginning integration of local languages to broaden accessibility."
		},
		{
			year: '2025 (Q2)',
			status: 'pending',
			title: 'Multi-Modal Accessibility',
			description:
				'Implementing audio responses via phone calls to cater to users with literacy challenges or those who prefer audio interaction. Exploring additional accessibility features.'
		},
		{
			year: '2025 (Q3)',
			status: 'pending',
			title: 'Customized LLMs',
			description:
				'Developing and integrating customized Large Language Models (LLMs) for more specialized and efficient handling of specific types of queries (e.g., health, education, agriculture).'
		},
		{
			year: '2025 (Q4)',
			status: 'pending',
			title: 'Community Partnerships & Expansion',
			description:
				'Forming partnerships with local communities, organizations and Telcos to promote KaTorch GPT and expand its reach. Exploring expansion into other regions and accessibility.'
		},
		{
			year: '2026',
			status: 'pending',
			title: 'Advanced Features & Personalization',
			description:
				'Introducing advanced features like personalized information recommendations, proactive alerts, and user profiles. Further refinements based on user feedback.'
		}
	];
</script>

<main class="mx-auto px-6 pb-10 pt-28 lg:w-7/12">
	<ul class="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact">
		{#each roadmap as step, index}
			<li>
				{#if index % 2 === 0}
					<div class="timeline-middle">
						{#if step.status == 'done'}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="h-5 w-5 fill-primary"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
									clip-rule="evenodd"
								/>
							</svg>
						{:else if step.status == 'working'}
							<Loader class="h-5 w-5" />
						{:else if step.status == 'pending'}
							<Clock class="h-5 w-5" />
						{/if}
					</div>
					<div class="timeline-start mb-10 md:text-end">
						<time class="font-mono italic">{step.year}</time>
						<div class="text-lg font-black [text-shadow:_0_0.5px_1px_#ffed02]">
							{step.title}
						</div>
						{step.description}
					</div>
					{#if index < roadmap.length - 1}
						<hr />
					{/if}
				{:else}
					<hr />
					<div class="timeline-middle">
						{#if step.status == 'done'}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="h-5 w-5 fill-primary"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
									clip-rule="evenodd"
								/>
							</svg>
						{:else if step.status == 'working'}
							<Loader class="h-5 w-5" />
						{:else if step.status == 'pending'}
							<Clock class="h-5 w-5" />
						{/if}
					</div>
					<div class="timeline-end md:mb-10">
						<time class="font-mono italic">{step.year}</time>
						<div class="text-lg font-black [text-shadow:_0_0.5px_1px_#ffed02]">
							{step.title}
						</div>
						{step.description}
					</div>
					{#if index < roadmap.length - 1}
						<hr />
					{/if}
				{/if}
			</li>
		{/each}
	</ul>
</main>
