<script>
	import { MessageCircle, Smartphone, Book, Clock, Languages } from 'lucide-svelte';

	let faqs = [
		{
			icon: MessageCircle,
			question: 'How much does KaTorch GPT cost to use?',
			answer:
				'KaTorch GPT is currently in its testing phase and is completely FREE until January 2025! You only pay for the standard SMS charges from your telecom provider. We recommend using an SMS bundle to reduce your costs. This is our way of ensuring all students can benefit from the service while we perfect it for the Ugandan education system.'
		},
		{
			icon: Smartphone,
			question: 'Do I need a smartphone or internet connection?',
			answer:
				"No! KaTorch GPT works with any basic phone that can send SMS messages. You don't need internet access or a smartphone to use our service. That's what makes it accessible to students everywhere in Uganda."
		},
		{
			icon: Book,
			question: 'Which subjects does KaTorch GPT cover?',
			answer:
				'KaTorch GPT covers all subjects in the Ugandan curriculum from Primary to A-Level, including: Mathematics, Sciences (Physics, Chemistry, Biology), English Language, Social Studies, and more!'
		},
		{
			icon: Clock,
			question: 'How quickly will I receive a response?',
			answer:
				'Our system typically responds within 1-2 minutes. For complex questions that require longer explanations, responses may be split into multiple SMS messages, but all will arrive promptly.'
		},
		{
			icon: Languages,
			question: 'What language should I use with KaTorch GPT?',
			answer:
				"Currently, KaTorch GPT is only available in English. We recommend sending your questions in clear, simple English to get the best responses. We're working on supporting local languages in future updates."
		}
	];

	import { reveal } from 'svelte-reveal';
</script>

<div class="mx-auto px-4 py-12 lg:px-20">
	<h1 class="mb-4 text-4xl font-bold">Frequently Asked Questions</h1>

	<div class="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-6">
		{#each faqs as faq}
			<div class="cursor-pointer rounded-lg bg-base-100 p-6" use:reveal>
				<div class="flex gap-4">
					<div class=" mt-1 text-primary">
						<svelte:component this={faq.icon} class="h-6 w-6 " />
					</div>
					<div>
						<h3 class="mb-2 text-lg font-semibold">{faq.question}</h3>
						<p class="leading-relaxed text-gray-600">{faq.answer}</p>
					</div>
				</div>
			</div>
		{/each}

		<!-- <div class="mx-auto h-min w-11/12 rounded-md bg-secondary p-4 text-secondary-content">
			<p>Feel free to contact us if you have any other questions.</p>
		</div> -->
	</div>
</div>
