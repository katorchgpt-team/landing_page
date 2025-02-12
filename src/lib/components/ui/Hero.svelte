<script>
	import { reveal } from 'svelte-reveal';
</script>

<section
	id="home"
	class=" flex h-screen w-full items-center justify-center overflow-hidden lg:h-screen"
>
	<div class="container mx-auto px-2 lg:px-4">
		<div class=" mx-auto text-center md:max-w-4xl">
			<span
				use:reveal={{ preset: 'blur', delay: 500, easing: 'easeInCirc' }}
				class="text-md mb-2.5 inline-block font-medium tracking-tighter text-primary"
				>KaTorch GPT</span
			>
			<h1
				use:reveal={{ preset: 'fly', y: 80, easing: 'easeInCirc' }}
				class="xl:text-10xl mb-10 text-6xl
				font-normal tracking-tighter [text-shadow:_0_1px_1px_#ffed02]
				lg:text-8xl"
			>
				Bringing the Power of
				<span
					class="inline-block bg-gradient-to-r from-yellow-100 via-primary to-yellow-300 bg-clip-text font-extrabold text-transparent"
					>AI</span
				>
				<br />to everyone,
				<br />
				<span class=" ">on any device</span>
			</h1>
			<a
				use:reveal={{ preset: 'fade', delay: 800, easing: 'easeInOutBack' }}
				class="[box-shadow:
				0_2px_4px
				rgba(255_237_2_/_0.3)] motion-preset-seesaw btn inline-block rounded-full
bg-gradient-to-br from-primary via-yellow-500 to-primary px-8
				py-2 text-lg font-semibold tracking-tighter text-primary-content hover:bg-gradient-to-br focus:ring-4 focus:ring-yellow-800
				"
				href="tel:+256783165577">Start now</a
			>
		</div>
	</div>
</section>
