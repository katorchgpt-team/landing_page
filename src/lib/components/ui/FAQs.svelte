<script>
	let faqs = [
		{
			question: 'What is KaTorch GPT?',
			answer:
				"KaTorch GPT is an AI-powered information service which delivers answers to your questions via SMS or WhatsApp, even if you don't have internet access or a smartphone. Simply send your question to <b>+256783165577</b> and get an instant response."
		},
		{
			question: 'How does it work?',
			answer:
				"You send your question via SMS or WhatsApp to <b>+256783165577</b>. Our AI processes your query and sends the answer back to you, also via SMS or WhatsApp.  It's that simple!"
		},
		{
			question: 'Do I need internet to use KaTorch GPT?',
			answer:
				"No, you don't need internet access to use KaTorch GPT. It works entirely over SMS, making it accessible even in areas with limited connectivity."
		},
		{
			question: 'Do I need a smartphone?',
			answer:
				'No, KaTorch GPT works on any mobile phone that can send and receive SMS messages or use WhatsApp.  Basic feature phones are fully compatible.'
		},
		{
			question: 'What languages are supported?',
			answer:
				'Currently, KaTorch GPT primarily operates in English. However, we are actively working on expanding language support to include local languages in the near future.'
		},
		{
			question: 'Are there any charges to use KaTorch GPT?',
			answer:
				'KaTorch GPT is currently offered for free. Users are only responsible for any standard SMS or data charges from their mobile network provider.'
		},
		{
			question: 'How is my privacy protected?',
			answer:
				'We take your privacy seriously.  Your questions and interactions with KaTorch GPT are kept confidential. We do not share your data with any third parties without your explicit consent.'
		}
	];
	let openFaq = 0;
</script>

<div
	id="faqs"
	class="mt-0 w-full border-t border-base-300 py-10
     text-base-content lg:border-none lg:px-0 lg:py-20"
>
	<p class="px-4 py-5 text-3xl font-normal [text-shadow:_0_0.5px_1px_#ffed02] lg:px-10 lg:text-5xl">
		FAQs
	</p>

	<div class="ml-auto lg:w-11/12">
		{#each faqs as faq, index}
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="collapse collapse-plus rounded-none border-0 border-b bg-base-200 text-base-content
            {index == openFaq
					? '!bg-primary !text-primary-content '
					: 'bg-base-100 text-base-content hover:bg-base-100'}
            border-b border-base-300
            {index == 0 ? 'rounded-tl-[40px] pt-4' : ''}
            {index == faqs.length - 1 ? 'rounded-bl-[40px] !border-0 pb-4' : ''}

            "
				onclick={() => {
					openFaq = index;
				}}
			>
				<input type="radio" name="faq-{index}" checked={openFaq == index} />
				<div
					class="collapse-title font-medium
                {openFaq == index ? '' : '[text-shadow: 0_2px_4px rgba(255_237_2_/_0.3)] '}
                "
				>
					{faq.question}
				</div>
				<div class="collapse-content">
					<p>{@html faq.answer}</p>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	/* Optional: Add some custom styling if needed */
</style>
