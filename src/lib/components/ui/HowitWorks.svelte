<script lang="ts">
	//@ts-nocheck
	import { Motion } from 'svelte-motion';
	import LampEffect from '$lib/components/ui/LampEffect/LampEffect.svelte';
	import { reveal } from 'svelte-reveal';
</script>

<div
	id="howitworks"
	class="w-full border-t border-base-300 pb-20 text-primary-content shadow-2xl lg:border-0 lg:px-0"
>
	<p
		class="px-4 py-7 text-3xl font-normal text-base-content [text-shadow:_0_0.5px_1px_#ffed02] lg:text-5xl"
	>
		How it Works
	</p>

	<div class="  grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-10">
		<div
			class=" col-span-2 rounded-r-[40px]
		 bg-gradient-to-br from-primary
via-yellow-500 to-primary
		px-4 py-8 lg:px-16 lg:py-16"
		>
			<div class="grid grid-cols-1 gap-3 lg:grid-cols-2">
				<div class="card w-full bg-base-100 text-base-content">
					<div class="card-body">
						<div
							class="flex size-12 items-center justify-center rounded-full bg-primary
							 text-lg text-primary-content"
						>
							<span class="font-semibold">01</span>
						</div>
						<p class="text-xl">SMS or WhatsApp your question to KaTorch GPT on:</p>
						<a
							href="https://wa.me/256783165577"
							class="text-2xl font-semibold [text-shadow:_0_0.5px_1px_#ffed02]"
							>+256 (0) 783165577</a
						>
					</div>
				</div>
				<div class="card w-full bg-base-100 text-base-content">
					<div class="card-body">
						<div
							class="flex size-12 items-center justify-center rounded-full bg-primary
							text-lg text-primary-content"
						>
							<span class="font-semibold">02</span>
						</div>
						<p class="text-xl [text-shadow:_0_0.5px_1px_#ffed02]">Get your answers in moments.</p>
						<div>
							<p class="text-sm font-normal">*Data and SMS charges apply</p>
							<p class="text-sm font-normal">*Save KaTorch GPT's number</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="mx-auto text-base-content">
			<div class="motion-preset-slide-right chat chat-start">
				<div class="avatar chat-image">
					<div class="w-10 rounded-full">
						<img
							alt="Tailwind CSS chat bubble component"
							src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
						/>
					</div>
				</div>
				<div class="chat-header">
					You
					<time class="text-xs opacity-50">8:45</time>
				</div>
				<div
					class="chat-bubble bg-base-100 text-neutral-content [box-shadow:_0_4px_8px_#ffed02] [text-shadow:_0_0.5px_1px_#ffed02]"
				>
					Hello there.
					<br />
					Who are you?
				</div>
				<div class="chat-footer mt-3 opacity-50">Delivered</div>
			</div>
			<div class="motion-preset-slide-left chat chat-end">
				<div class="avatar chat-image">
					<div class="w-10 rounded-full">
						<img alt="KaTorch" src="/logo_primary_transparent.png" />
					</div>
				</div>
				<div class="chat-header">
					KaTorch GPT
					<time class="text-xs opacity-50">8:46</time>
				</div>
				<div
					class="chat-bubble bg-base-100 text-neutral-content [box-shadow:_0_4px_8px_#ffed02] [text-shadow:_0_0.5px_1px_#ffed02]"
				>
					Hello! I'm KaTorch GPT. An Artifical Intelligence here to help you in different ways. I am
					your gateway to information through the platforms you already know and have; SMS and
					WhatsApp.
				</div>
				<div class="chat-footer mt-3 opacity-50">Seen at 8:46</div>
			</div>
		</div>
	</div>
</div>
