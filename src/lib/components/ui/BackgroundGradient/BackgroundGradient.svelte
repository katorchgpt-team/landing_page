<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import { Motion } from 'svelte-motion';

	export let className: string | undefined = undefined;
	export let containerClassName: string | undefined = undefined;
	export let animate: boolean | undefined = true;

	const variants = {
		initial: {
			backgroundPosition: '0 50%'
		},
		animate: {
			backgroundPosition: ['0, 50%', '100% 50%', '0 50%']
		}
	};
</script>

<div class={cn('group relative p-[4px]', containerClassName)}>
	<Motion
		let:motion
		variants={animate ? variants : undefined}
		initial={animate ? 'initial' : undefined}
		animate={animate ? 'animate' : undefined}
		transition={animate
			? {
					duration: 5,
					repeat: Infinity,
					repeatType: 'reverse'
				}
			: undefined}
		style={{
			backgroundSize: animate ? '400% 400%' : undefined
		}}
	>
		<!-- svelte-ignore element_invalid_self_closing_tag -->
		<div
			use:motion
			class={cn(
				'absolute inset-0 z-[1] rounded-3xl opacity-60 blur-xl transition  duration-500 group-hover:opacity-100',
				' bg-[radial-gradient(circle_farthest-side_at_0_100%,#6b58eb,transparent),radial-gradient(circle_farthest-side_at_100%_0,#6b58eb,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#6b58eb,transparent),radial-gradient(circle_farthest-side_at_0_0,#6b58eb,#6b58eb)]'
			)}
		/>
	</Motion>

	<Motion
		let:motion
		variants={animate ? variants : undefined}
		initial={animate ? 'initial' : undefined}
		animate={animate ? 'animate' : undefined}
		transition={animate
			? {
					duration: 5,
					repeat: Infinity,
					repeatType: 'reverse'
				}
			: undefined}
		style={{
			backgroundSize: animate ? '400% 400%' : undefined
		}}
	>
		<!-- svelte-ignore element_invalid_self_closing_tag -->
		<div use:motion class={cn('absolute inset-0 z-[1] rounded-3xl')} />
	</Motion>

	<div class={cn('relative z-10', className)}><slot /></div>
</div>
